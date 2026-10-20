"use strict";

const CACHE_NAME = "amino-cure-reference-v3";

const APP_FILES = [
"./",
"./index.html",
"./style.css",
"./drug.js",
  "./drug-en.js",
"./guide.js",
"./app.js",
"./manifest.json",
"./logo.png",
"./profile.png",
"./icon-192.png",
"./icon-512.png"
];


self.addEventListener("install", (event) => {
event.waitUntil(
caches.open(CACHE_NAME).then(async (cache) => {
const results = await Promise.allSettled(
APP_FILES.map((file) => cache.add(file))
);

  const failed = results
    .map((result, index) => ({ result, file: APP_FILES[index] }))
    .filter((item) => item.result.status === "rejected")
    .map((item) => item.file);

  if (failed.length) {
    console.warn("Some files were not cached:", failed);
  }

  return self.skipWaiting();
})

);
});

self.addEventListener("activate", (event) => {
event.waitUntil(
caches.keys()
.then((keys) =>
Promise.all(
keys
.filter((key) => key !== CACHE_NAME)
.map((key) => caches.delete(key))
)
)
.then(() => self.clients.claim())
);
});

self.addEventListener("fetch", (event) => {
const request = event.request;

if (request.method !== "GET") return;

const url = new URL(request.url);

// لا نتدخل في الطلبات الخارجية أو المواقع الأخرى.
if (url.origin !== self.location.origin) return;

// تحديث الصفحة الرئيسية وملفات التطبيق من الشبكة عند توفرها،
// مع الرجوع إلى النسخة المخزنة عند انقطاع الإنترنت.
event.respondWith(
fetch(request)
.then((response) => {
if (response && response.ok) {
const copy = response.clone();

      caches.open(CACHE_NAME).then((cache) => {
        cache.put(request, copy);
      });
    }

    return response;
  })
  .catch(async () => {
    const cached = await caches.match(request);

    if (cached) return cached;

    if (request.mode === "navigate") {
      const home = await caches.match("./index.html");
      if (home) return home;
    }

    return new Response(
      "هذا المحتوى غير متاح دون اتصال بالإنترنت.",
      {
        status: 503,
        headers: {
          "Content-Type": "text/plain; charset=utf-8"
        }
      }
    );
  })

);
});
