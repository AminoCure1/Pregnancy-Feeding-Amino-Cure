"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => document.querySelectorAll(selector);

  const STORAGE = {
    theme: "amino-cure-theme",
    language: "amino-cure-language",
    favorites: "amino-cure-favorites",
    history: "amino-cure-history"
  };

  /* =========================================
     1. التخزين
  ========================================= */

  function read(key, fallback) {
    try {
      const value = localStorage.getItem(key);
      if (value === null) return fallback;

      // دعم القيم النصية المحفوظة بالطريقة القديمة
      try {
        const parsed = JSON.parse(value);
        if (typeof parsed === "string") return parsed;
      } catch {}

      return value;
    } catch {
      return fallback;
    }
  }

  function write(key, value) {
    try {
      const savedValue =
        typeof value === "string"
          ? value
          : JSON.stringify(value);

      localStorage.setItem(key, savedValue);
    } catch {}
  }

  function readArray(key) {
    try {
      const value = JSON.parse(
        localStorage.getItem(key) || "[]"
      );

      return Array.isArray(value) ? value : [];
    } catch {
      return [];
    }
  }

  const state = {
    language:
      read(STORAGE.language, "ar") === "en" ? "en" : "ar",

    theme:
      read(STORAGE.theme, "light") === "dark" ? "dark" : "light",

    libraryMode: ""
  };

  /* =========================================
     2. قاموس اللغتين
  ========================================= */

  const words = {
    ar: {
      subtitle: "مرجع الحمل والرضاعة",
      heroBadge: "مرجع دوائي سريع",
      heroTitle: 'المعلومة الدوائية، <span>بوضوح.</span>',
      heroDescription:
        "ابحث عن دوائك واعرف المعلومات المتاحة عن سلامته أثناء الحمل والرضاعة، مع إمكانية الرجوع إلى المصدر.",

      searchEyebrow: "ابدأ البحث",
      searchTitle: "ابحث عن دواء",
      searchLabel: "اسم الدواء",
      searchPlaceholder: "الاسم العلمي أو التجاري...",
      searchButton: "بحث",
      searchInstruction: "ابحث بالاسم العلمي أو التجاري للدواء.",
      searchHelp: "اكتب اسم الدواء أولاً.",
      searchSuggestions: "اقتراحات البحث",
      noResults: "لم نعثر على دواء مطابق.",
      emptyDatabase:
        "قاعدة بيانات الأدوية غير متاحة. تأكد من تحميل drug.js قبل app.js.",

      pregnancy: "الحمل",
      lactation: "الرضاعة",
      generic: "اسم الدواء",
      reason: "التوضيح",
      old: "تصنيف الحمل القديم",
      oldNotice:
        "تصنيف تاريخي وليس نظام التصنيف الحالي. لا يُستخدم وحده لاتخاذ قرار علاجي.",

      allowed: "متوافق غالباً",
      caution: "يحتاج إلى تقييم مختص",
      avoid: "يُتجنب في ظروف محددة",
      unknown: "قيد المراجعة",
      review: "قيد المراجعة",
      unavailable:
        "لم تُراجع المعلومات الطبية لهذا الدواء بعد.",

      sources: "المراجع العلمية",
      openSources: "عرض المراجع العلمية",
      hideSources: "إخفاء المراجع",
      favorite: "إضافة إلى المفضلة",
      unfavorite: "إزالة من المفضلة",

      quickEyebrow: "وصول سريع",
      quickTitle: "مكتبتك الدوائية",
      favoritesTitle: "المفضلة",
      favoritesDescription: "أدويتك المحفوظة",
      historyTitle: "آخر عمليات البحث",
      historyDescription: "ارجع لبحثك السابق",
      favorites: "المفضلة",
      history: "سجل البحث",
      libraryEyebrow: "محفوظاتك",
      emptyFavorites: "لا توجد أدوية محفوظة.",
      emptyHistory: "لا توجد عمليات بحث سابقة.",
      clearHistory: "مسح سجل البحث",

      aboutTitle: "معلومة موثوقة، بقرار أوضح",
      aboutDescription:
        "صُمم Amino Cure لمساعدة الصيادلة على الوصول السريع إلى المعلومات الدوائية ومصادرها.",
      aboutEyebrow: "عن المرجع",
      aboutText:
        "مرجع صيدلاني يقدّم معلومات علمية مبسطة عن سلامة الأدوية أثناء الحمل والرضاعة، لدعم الاستخدام الآمن والواعي للأدوية. معلومة أبسط، حياة أفضل.",
      aboutRole: "صيدلاني",

      disclaimerTitle: "تنبيه مهم",
      disclaimerText:
        "هذا التطبيق مرجع مساعد وليس بديلاً عن التقييم السريري أو مراجعة المصادر الأصلية. لا توقف دواءً أو تغيّره دون استشارة مختص.",

      footerText: "معلومة أبسط، حياة أفضل.",
      createdBy: "بواسطة",
      tagline: "معلومة أبسط، حياة أفضل.",
      disclaimer:
        "المعلومات للتثقيف والرجوع العلمي فقط. لا تبدأ أو توقف أو تغيّر دواءً دون استشارة مختص مؤهل.",

      reviewed: "آخر مراجعة",
      theme: "تغيير المظهر",
      language: "تغيير اللغة",
      lightTheme: "الوضع الفاتح",
      darkTheme: "الوضع الداكن",
      close: "إغلاق",
      backToTop: "العودة إلى أعلى الصفحة",
      top: "إلى الأعلى",

      online: "متصل بالإنترنت",
      offline: "غير متصل بالإنترنت",

      confirmClear: "هل تريد مسح سجل البحث؟",
      cleared: "تم مسح سجل البحث.",
      added: "تمت الإضافة إلى المفضلة.",
      removed: "تمت الإزالة من المفضلة.",

      suggestion: "اقتراح"
    },

    en: {
      subtitle: "Pregnancy & Breastfeeding Reference",
      heroBadge: "Quick Drug Reference",
      heroTitle: 'Drug information, <span>made clear.</span>',
      heroDescription:
        "Search for a medication to explore available pregnancy and breastfeeding safety information and consult the original sources.",

      searchEyebrow: "GET STARTED",
      searchTitle: "Search for a Drug",
      searchLabel: "Drug name",
      searchPlaceholder: "Generic or brand name...",
      searchButton: "Search",
      searchInstruction: "Search by generic or brand name.",
      searchHelp: "Enter a drug name first.",
      searchSuggestions: "Search suggestions",
      noResults: "No matching drug was found.",
      emptyDatabase:
        "The drug database is unavailable. Make sure drug.js loads before app.js.",

      pregnancy: "Pregnancy",
      lactation: "Breastfeeding",
      generic: "Drug name",
      reason: "Explanation",
      old: "Legacy pregnancy category",
      oldNotice:
        "This is a historical classification, not the current labeling system. Do not use it alone to make treatment decisions.",

      allowed: "Generally compatible",
      caution: "Requires professional assessment",
      avoid: "Avoid in specific circumstances",
      unknown: "Under review",
      review: "Under review",
      unavailable:
        "The clinical information for this drug has not yet been reviewed.",

      sources: "Scientific References",
      openSources: "View scientific references",
      hideSources: "Hide references",
      favorite: "Add to favorites",
      unfavorite: "Remove from favorites",

      quickEyebrow: "QUICK ACCESS",
      quickTitle: "Your Drug Library",
      favoritesTitle: "Favorites",
      favoritesDescription: "Your saved drugs",
      historyTitle: "Recent Searches",
      historyDescription: "Return to a previous search",
      favorites: "Favorites",
      history: "Search History",
      libraryEyebrow: "YOUR LIBRARY",
      emptyFavorites: "No saved drugs.",
      emptyHistory: "No previous searches.",
      clearHistory: "Clear search history",

      aboutTitle: "Reliable Information, Clearer Decisions",
      aboutDescription:
        "Amino Cure helps pharmacists quickly access drug information and its supporting sources.",
      aboutEyebrow: "ABOUT THE REFERENCE",
      aboutText:
        "A pharmacy reference offering simplified scientific information on medication safety during pregnancy and breastfeeding, to support safe and informed medication use. Simpler information, better life.",
      aboutRole: "Pharmacist",

      disclaimerTitle: "Important Notice",
      disclaimerText:
        "This application is a supporting reference, not a substitute for clinical assessment or reviewing original sources. Do not stop or change medication without consulting a qualified professional.",

      footerText: "Simpler information, better life.",
      createdBy: "Created by",
      tagline: "Simpler information, better life.",
      disclaimer:
        "For educational and scientific reference only. Do not start, stop, or change medication without consulting a qualified professional.",

      reviewed: "Last reviewed",
      theme: "Change appearance",
      language: "Change language",
      lightTheme: "Light mode",
      darkTheme: "Dark mode",
      close: "Close",
      backToTop: "Back to top",
      top: "Back to top",

      online: "Online",
      offline: "Offline",

      confirmClear: "Clear search history?",
      cleared: "Search history cleared.",
      added: "Added to favorites.",
      removed: "Removed from favorites.",

      suggestion: "Suggestion"
    }
  };

  function t(key) {
    return words[state.language][key] || words.en[key] || key;
  }

  /* =========================================
     3. أدوات مساعدة
  ========================================= */

  function esc(value) {
    return String(value ?? "").replace(/[&<>"']/g, character => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[character]);
  }

  function normalize(value) {
    return String(value ?? "")
      .toLowerCase()
      .normalize("NFKC")
      .replace(/[أإآ]/g, "ا")
      .replace(/ى/g, "ي")
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")
      .replace(/ة/g, "ه")
      .replace(/[\u064B-\u065F\u0670]/g, "")
      .replace(/[^a-z0-9\u0600-\u06FF\s-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function database() {
    return Array.isArray(window.DRUGS) ? window.DRUGS : [];
  }

  function drugId(drug) {
    return String(drug.id || drug.name || "");
  }

  function drugName(drug) {
    return state.language === "ar"
      ? (drug.nameAr || drug.name || drug.id)
      : (drug.name || drug.nameAr || drug.id);
  }

  function drugClassName(drug) {
    if (state.language === "ar") {
      return drug.drugClassAr || drug.drugClass || "";
    }

    return drug.drugClassEn || drug.drugClass || "";
  }

  function getFavorites() {
    return readArray(STORAGE.favorites);
  }

  function getHistory() {
    return readArray(STORAGE.history);
  }

  function showToast(message) {
    const toast = $("#toast");
    if (!toast) return;

    toast.textContent = message;
    toast.hidden = false;
    toast.classList.add("show");

    clearTimeout(showToast.timer);

    showToast.timer = setTimeout(() => {
      toast.classList.remove("show");
      toast.hidden = true;
    }, 2600);
  }

  /* =========================================
     4. حالة الدواء
  ========================================= */

  function isCompatible(status) {
    return status === "allowed" || status === "generally_compatible";
  }

  function statusLabel(record) {
    const status = record?.status || "review";

    if (isCompatible(status)) return t("allowed");
    if (status === "caution") return t("caution");
    if (status === "avoid") return t("avoid");

    return t("unknown");
  }

  function statusClass(record) {
    const status = record?.status || "review";

    if (isCompatible(status)) return "status-compatible";
    if (status === "caution") return "status-caution";
    if (status === "avoid") return "status-avoid";

    return "status-review";
  }

  function statusSummary(record) {
    const summary = state.language === "ar"
      ? record?.summaryAr
      : record?.summaryEn;

    return summary || record?.summary || t("unavailable");
  }

  /* =========================================
     5. المراجع العلمية
  ========================================= */

  function renderSources(sources) {
    if (!Array.isArray(sources) || !sources.length) {
      return `<p>${esc(t("unavailable"))}</p>`;
    }

    return `
      <ul class="source-list">
        ${sources.map(source => {
          const url = source.url || "";
          const name = source.name || source.title || t("sources");

          if (!/^https?:\/\//i.test(url)) {
            return `<li>${esc(name)}</li>`;
          }

          return `
            <li>
              <a href="${esc(url)}"
                 target="_blank"
                 rel="noopener noreferrer">
                ${esc(name)}
              </a>
            </li>
          `;
        }).join("")}
      </ul>
    `;
  }

  /* =========================================
     6. بطاقة الدواء
  ========================================= */

  function renderDrugCard(drug) {
    const id = drugId(drug);
    const favorites = getFavorites();
    const isFavorite = favorites.includes(id);

    const pregnancy = drug.pregnancy || {};
    const lactation = drug.lactation || {};

    const category = drugClassName(drug);

    const verifiedOldCategory =
      pregnancy.legacyFDA?.verified === true &&
      ["A", "B", "C", "D", "X"].includes(
        pregnancy.legacyFDA?.category
      );

    const sources = drug.sources || [];

    return `
      <article class="drug-card" data-drug-id="${esc(id)}">

        <header class="drug-card-header">
          <div>
            <span class="drug-label">${esc(t("generic"))}</span>
            <h3>${esc(drugName(drug))}</h3>
            ${category
              ? `<p class="drug-class">${esc(category)}</p>`
              : ""}
          </div>

          <button
            type="button"
            class="favorite-toggle"
            data-favorite-id="${esc(id)}"
            aria-pressed="${String(isFavorite)}"
            aria-label="${esc(isFavorite ? t("unfavorite") : t("favorite"))}"
            title="${esc(isFavorite ? t("unfavorite") : t("favorite"))}">
            ${isFavorite ? "★" : "☆"}
          </button>
        </header>

        <section class="drug-info">
          <div class="result-heading">
            <h4>${esc(t("pregnancy"))}</h4>
            <span class="status-badge ${statusClass(pregnancy)}">
              ${esc(statusLabel(pregnancy))}
            </span>
          </div>

          <p>${esc(statusSummary(pregnancy))}</p>
        </section>

        <section class="drug-info">
          <div class="result-heading">
            <h4>${esc(t("lactation"))}</h4>
            <span class="status-badge ${statusClass(lactation)}">
              ${esc(statusLabel(lactation))}
            </span>
          </div>

          <p>${esc(statusSummary(lactation))}</p>
        </section>

        ${verifiedOldCategory ? `
          <section class="drug-info old-category-info">
            <h4>${esc(t("old"))}</h4>
            <p class="old-category-value">
              ${esc(pregnancy.legacyFDA.category)}
            </p>
            <p class="medical-warning">${esc(t("oldNotice"))}</p>
          </section>
        ` : ""}

        ${drug.review?.lastReviewed ? `
          <p class="last-reviewed">
            <strong>${esc(t("reviewed"))}:</strong>
            ${esc(drug.review.lastReviewed)}
          </p>
        ` : ""}

        <details class="drug-sources">
          <summary>${esc(t("openSources"))}</summary>
          ${renderSources(sources)}
        </details>

      </article>
    `;
  }

  /* =========================================
     7. نتائج البحث
  ========================================= */

  function renderResults(results, query = "") {
    const container = $("#searchResults");
    if (!container) return;

    if (!database().length) {
      container.innerHTML = `
        <div class="empty-state" role="status">
          ${esc(t("emptyDatabase"))}
        </div>
      `;
      return;
    }

    if (!results.length && !query) {
      container.innerHTML = "";
      return;
    }

    if (!results.length) {
      container.innerHTML = `
        <div class="empty-state" role="status">
          ${esc(t("noResults"))}
        </div>
      `;
      return;
    }

    container.innerHTML = results.map(renderDrugCard).join("");
  }

  function searchDrugs(query) {
    const term = normalize(query);
    if (!term) return [];

    return database().filter(drug => {
      const names = [
        drug.id,
        drug.name,
        drug.nameAr,
        drug.drugClass,
        drug.drugClassAr,
        drug.drugClassEn,
        ...(Array.isArray(drug.synonyms) ? drug.synonyms : []),
        ...(Array.isArray(drug.aliases) ? drug.aliases : [])
      ];

      return names.some(name => {
        const normalized = normalize(name);

        return normalized && (
          normalized.includes(term) ||
          term.includes(normalized)
        );
      });
    });
  }

  function addHistory(drug, query) {
    const id = drugId(drug);

    const history = getHistory().filter(item => item.id !== id);

    history.unshift({
      id,
      name: drugName(drug),
      query,
      date: new Date().toISOString()
    });

    write(STORAGE.history, history.slice(0, 20));
  }

  function handleSearch(event) {
    event?.preventDefault();

    const input = $("#drugSearch");
    if (!input) return;

    const query = input.value.trim();

    if (!query) {
      showToast(t("searchHelp"));
      return;
    }

    const results = searchDrugs(query);
    renderResults(results, query);

    if (results.length) {
      addHistory(results[0], query);

      if (state.libraryMode === "history") {
        renderLibrary("history");
      }
    }
  }

  /* =========================================
     8. المفضلة
  ========================================= */

  function toggleFavorite(id) {
    const drug = database().find(item => drugId(item) === id);
    if (!drug) return;

    const favorites = getFavorites();
    const index = favorites.indexOf(id);

    if (index >= 0) {
      favorites.splice(index, 1);
      showToast(t("removed"));
    } else {
      favorites.unshift(id);
      showToast(t("added"));
    }

    write(STORAGE.favorites, favorites);

    const query = $("#drugSearch")?.value.trim();

    if (query) {
      renderResults(searchDrugs(query), query);
    }

    if (state.libraryMode) {
      renderLibrary(state.libraryMode);
    }
  }

  /* =========================================
     9. المكتبة وسجل البحث
  ========================================= */

  function renderLibrary(mode) {
    state.libraryMode = mode;

    const section = $("#librarySection");
    const title = $("#libraryTitle");
    const content = $("#libraryContent");
    const clearButton = $("#clearHistory");

    if (!section || !content) return;

    section.hidden = false;

    if (title) {
      title.textContent = mode === "favorites"
        ? t("favorites")
        : t("history");
    }

    if (clearButton) {
      clearButton.hidden = mode !== "history";
    }

    if (mode === "favorites") {
      const ids = getFavorites();

      const drugs = database().filter(
        drug => ids.includes(drugId(drug))
      );

      content.innerHTML = drugs.length
        ? drugs.map(renderDrugCard).join("")
        : `<div class="empty-state">${esc(t("emptyFavorites"))}</div>`;

    } else {
      const history = getHistory();

      content.innerHTML = history.length
        ? `<div class="history-list">
            ${history.map(item => {
              const drug = database().find(
                entry => drugId(entry) === item.id
              );

              const name = drug
                ? drugName(drug)
                : (item.name || item.query || "");

              return `
                <button
                  type="button"
                  class="history-item"
                  data-history-id="${esc(item.id)}">
                  ${esc(name)}
                </button>
              `;
            }).join("")}
          </div>`
        : `<div class="empty-state">${esc(t("emptyHistory"))}</div>`;
    }
  }

  function closeLibrary() {
    state.libraryMode = "";

    const section = $("#librarySection");
    if (section) section.hidden = true;
  }

  /* =========================================
     10. المظهر
  ========================================= */

  function applyTheme(theme) {
    state.theme = theme === "dark" ? "dark" : "light";

    document.documentElement.dataset.theme = state.theme;
    document.documentElement.style.colorScheme = state.theme;

    write(STORAGE.theme, state.theme);

    const icon = $("#themeIcon");
    if (icon) {
      icon.textContent = state.theme === "dark" ? "☀️" : "☾";
    }

    const button = $("#themeToggle");

    if (button) {
      button.setAttribute("aria-label", t("theme"));

      button.title = state.theme === "dark"
        ? t("lightTheme")
        : t("darkTheme");
    }
  }

  /* =========================================
     11. تطبيق اللغة على الصفحة
  ========================================= */

  function translateStaticContent() {
    $$("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      // النص التوضيحي تحت حقل البحث مختلف عن رسالة الخطأ
      if (key === "searchHelp") {
        element.textContent = t("searchInstruction");
        return;
      }

      const translation = words[state.language][key];

      if (typeof translation === "string") {
        // القاموس محلي وثابت، ويدعم span داخل عنوان المقدمة
        element.innerHTML = translation;
      }
    });

    $$("[data-i18n-placeholder]").forEach(element => {
      const key = element.dataset.i18nPlaceholder;
      const translation = words[state.language][key];

      if (typeof translation === "string") {
        element.placeholder = translation;
      }
    });

    const languageButton = $("#languageToggle");

    if (languageButton) {
      languageButton.textContent =
        state.language === "ar" ? "EN" : "عربي";

      languageButton.setAttribute("aria-label", t("language"));
    }

    const themeButton = $("#themeToggle");

    if (themeButton) {
      themeButton.setAttribute("aria-label", t("theme"));
    }

    const closeButton = $("#closeLibrary");

    if (closeButton) {
      closeButton.setAttribute("aria-label", t("close"));
      closeButton.title = t("close");
    }

    const closeGuideButton = $("#closeGuide");

    if (closeGuideButton) {
      closeGuideButton.setAttribute("aria-label", t("close"));
      closeGuideButton.title = t("close");
    }

    const backButton = $("#backToTop");

    if (backButton) {
      backButton.setAttribute("aria-label", t("backToTop"));
      backButton.title = t("top");
    }

    const suggestions = $("#searchSuggestions");

    if (suggestions) {
      suggestions.setAttribute("aria-label", t("searchSuggestions"));
    }

    // ترجمة النصوص البديلة للصور
    const profileImage = $(".hero-profile img");

    if (profileImage) {
      profileImage.alt = state.language === "ar"
        ? "أمين تاج الدين عثمان"
        : "Amin Taj Al-Din Othman";
    }

    // تغيير اتجاه الأسهم في الواجهة
    $$(".quick-card-arrow").forEach(arrow => {
      arrow.textContent = state.language === "ar" ? "←" : "→";
    });

    // تحديث عنوان المتصفح
    document.title = state.language === "ar"
      ? "Amino Cure | مرجع الحمل والرضاعة"
      : "Amino Cure | Pregnancy & Breastfeeding Reference";

    const description = $('meta[name="description"]');

    if (description) {
      description.content = state.language === "ar"
        ? "Amino Cure — مرجع دوائي مبسط لمعلومات سلامة الأدوية أثناء الحمل والرضاعة."
        : "Amino Cure — a simplified drug reference for medication safety during pregnancy and breastfeeding.";
    }

    const themeColor = $('meta[name="theme-color"]');

    if (themeColor) {
      themeColor.content = "#7654c8";
    }
  }

  function setLanguage(language) {
    state.language = language === "en" ? "en" : "ar";

    document.documentElement.lang = state.language;
    document.documentElement.dir =
      state.language === "ar" ? "rtl" : "ltr";

    write(STORAGE.language, state.language);

    translateStaticContent();
    applyTheme(state.theme);

    // إعادة رسم نتائج البحث باللغة الجديدة
    const query = $("#drugSearch")?.value.trim() || "";

    renderResults(
      query ? searchDrugs(query) : [],
      query
    );

    // تحديث المكتبة المفتوحة إذا كانت ظاهرة
    if (state.libraryMode) {
      renderLibrary(state.libraryMode);
    }

    updateConnectionStatus();

    // تحديث دليل الحمل والرضاعة
    document.dispatchEvent(new Event("aminoLanguageChanged"));
  }

  /* =========================================
     12. حالة الاتصال
  ========================================= */

  function updateConnectionStatus() {
    const text = $("#connectionText");
    const status = $("#connectionStatus");
    const online = navigator.onLine;

    if (text) {
      text.textContent = online ? t("online") : t("offline");
    }

    if (status) {
      status.classList.toggle("offline", !online);
      status.classList.toggle("online", online);
    }
  }

  /* =========================================
     13. اقتراحات البحث
  ========================================= */

  function setupSuggestions() {
    const input = $("#drugSearch");
    const box = $("#searchSuggestions");

    if (!input || !box) return;

    input.addEventListener("input", () => {
      const results = searchDrugs(input.value).slice(0, 5);

      if (!input.value.trim() || !results.length) {
        box.hidden = true;
        box.innerHTML = "";
        return;
      }

      box.innerHTML = results.map((drug, index) => `
        <button
          type="button"
          class="suggestion-item"
          data-suggestion-index="${index}">
          ${esc(drugName(drug))}
        </button>
      `).join("");

      box.hidden = false;
    });

    box.addEventListener("click", event => {
      const button = event.target.closest("[data-suggestion-index]");
      if (!button) return;

      const results = searchDrugs(input.value);
      const drug = results[Number(button.dataset.suggestionIndex)];

      if (!drug) return;

      input.value = drugName(drug);
      box.hidden = true;

      renderResults([drug], input.value);
      addHistory(drug, input.value);

      if (state.libraryMode === "history") {
        renderLibrary("history");
      }
    });

    input.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        box.hidden = true;
      }
    });

    document.addEventListener("click", event => {
      if (
        !event.target.closest("#searchForm") &&
        !event.target.closest("#searchSuggestions")
      ) {
        box.hidden = true;
      }
    });
  }

  /* =========================================
     14. الأحداث
  ========================================= */

  function setupEvents() {
    $("#searchForm")?.addEventListener("submit", handleSearch);

    $("#searchResults")?.addEventListener("click", event => {
      const button = event.target.closest("[data-favorite-id]");
      if (button) toggleFavorite(button.dataset.favoriteId);
    });

    $("#libraryContent")?.addEventListener("click", event => {
      const favorite = event.target.closest("[data-favorite-id]");

      if (favorite) {
        toggleFavorite(favorite.dataset.favoriteId);
        return;
      }

      const historyItem = event.target.closest("[data-history-id]");

      if (historyItem) {
        const drug = database().find(
          item => drugId(item) === historyItem.dataset.historyId
        );

        if (drug) {
          const input = $("#drugSearch");

          if (input) {
            input.value = drugName(drug);
          }

          closeLibrary();
          renderResults([drug], drugName(drug));
        }
      }
    });

    $("#languageToggle")?.addEventListener("click", () => {
      setLanguage(state.language === "ar" ? "en" : "ar");
    });

    $("#themeToggle")?.addEventListener("click", () => {
      applyTheme(state.theme === "dark" ? "light" : "dark");
    });

    $("#showFavorites")?.addEventListener("click", () => {
      renderLibrary("favorites");
    });

    $("#showHistory")?.addEventListener("click", () => {
      renderLibrary("history");
    });

    $("#closeLibrary")?.addEventListener("click", closeLibrary);

    $("#clearHistory")?.addEventListener("click", () => {
      if (window.confirm(t("confirmClear"))) {
        write(STORAGE.history, []);

        if (state.libraryMode === "history") {
          renderLibrary("history");
        }

        showToast(t("cleared"));
      }
    });

    window.addEventListener("online", updateConnectionStatus);
    window.addEventListener("offline", updateConnectionStatus);
  }

  /* =========================================
     15. الملف الشخصي
  ========================================= */

  function setupProfilePopup() {
    const trigger = $("#floatingProfile");
    const popup = $("#profilePopup");
    const close = $("#closeProfile");

    if (!trigger || !popup) return;

    trigger.addEventListener("click", () => {
      popup.hidden = !popup.hidden;
      trigger.setAttribute("aria-expanded", String(!popup.hidden));
    });

    close?.addEventListener("click", () => {
      popup.hidden = true;
      trigger.setAttribute("aria-expanded", "false");
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && !popup.hidden) {
        popup.hidden = true;
        trigger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* =========================================
     16. العودة إلى الأعلى
  ========================================= */

  function setupBackToTop() {
    const button = $("#backToTop");
    if (!button) return;

    const update = () => {
      button.hidden = window.scrollY < 300;
    };

    window.addEventListener("scroll", update, { passive: true });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    update();
  }

  /* =========================================
     17. دليل الحمل والرضاعة
  ========================================= */

  function setupGuide() {
    const data = window.GUIDE;
    const card = $("#showGuide");
    const section = $("#guideSection");
    const content = $("#guideContent");
    const tabs = $("#guideTabs");

    if (!data || !card || !section || !content || !tabs) return;

    let tab = "pregnancy";

    const ui = () => data.ui[state.language] || data.ui.ar;

    function calcStrings() {
      return (data.calc && data.calc[state.language]) ||
        (data.calc && data.calc.ar) ||
        {};
    }

    function relatedButtons(list) {
      const buttons = (list || []).map(query => {
        const drug = searchDrugs(query)[0];
        if (!drug) return "";

        return `
          <button type="button" class="guide-related"
                  data-guide-search="${esc(query)}">
            ${esc(drugName(drug))}
          </button>`;
      }).join("");

      return buttons
        ? `<div class="guide-related-box">
             <span>${esc(ui().related)}</span>${buttons}
           </div>`
        : "";
    }

    function renderItem(item) {
      const u = ui();

      return `
        <details class="guide-item">
          <summary>
            <span class="guide-badge">${esc(item.b)}</span>
            <span class="guide-item-title">${esc(item.t)}</span>
          </summary>

          <div class="guide-item-body">
            <p>${esc(item.s)}</p>

            ${item.p && item.p.length
              ? `<ul>${item.p.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`
              : ""}

            ${item.x
              ? `<div class="guide-pharma">
                   <strong>${esc(u.pharma)}</strong>
                   <p>${esc(item.x)}</p>
                 </div>`
              : ""}

            ${relatedButtons(item.r)}
          </div>
        </details>`;
    }

    function calculatorHTML() {
      const c = calcStrings();
      const now = new Date();
      const pad = number => String(number).padStart(2, "0");
      const today = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}`;

      return `
        <div class="guide-calc">
          <h3>${esc(c.title)}</h3>
          <label for="lmpDate">${esc(c.label)}</label>
          <input type="date" id="lmpDate" max="${today}">
          <div id="calcResult" class="calc-result" aria-live="polite"></div>
          <p class="guide-note">${esc(c.note)}</p>
        </div>`;
    }

    function calcGestation(value) {
      const out = $("#calcResult");
      if (!out) return;

      const c = calcStrings();

      if (!value) {
        out.innerHTML = "";
        return;
      }

      const [y, m, d] = value.split("-").map(Number);
      const lmp = Date.UTC(y, m - 1, d);

      const now = new Date();
      const today = Date.UTC(
        now.getFullYear(),
        now.getMonth(),
        now.getDate()
      );

      const days = Math.round((today - lmp) / 86400000);

      if (days < 0) {
        out.innerHTML = `<p class="calc-warn">${esc(c.future)}</p>`;
        return;
      }

      if (days > 300) {
        out.innerHTML = `<p class="calc-warn">${esc(c.long)}</p>`;
        return;
      }

      const weeks = Math.floor(days / 7);
      const rest = days % 7;

      const trimester =
        c.triNames[weeks < 14 ? 0 : weeks < 28 ? 1 : 2];

      let fertilization = c.beforeFert;

      if (days >= 14) {
        const fertDays = days - 14;
        fertilization = c.fmt(Math.floor(fertDays / 7), fertDays % 7);
      }

      const edd = new Date(lmp + 280 * 86400000).toLocaleDateString(
        c.locale,
        { timeZone: "UTC", year: "numeric", month: "long", day: "numeric" }
      );

      const inWindow = days >= 35 && days < 77;

      out.innerHTML = `
        <div class="calc-row"><span>${esc(c.age)}</span>
          <strong>${esc(c.fmt(weeks, rest))}</strong></div>
        <div class="calc-row"><span>${esc(c.tri)}</span>
          <strong>${esc(trimester)}</strong></div>
        <div class="calc-row"><span>${esc(c.fert)}</span>
          <strong>${esc(fertilization)}</strong></div>
        <div class="calc-row"><span>${esc(c.edd)}</span>
          <strong>${esc(edd)}</strong></div>
        ${inWindow
          ? `<p class="calc-flag">${esc(c.window)}</p>`
          : ""}`;
    }

    function paint() {
      const u = ui();
      const isEn = state.language === "en";
      const en = isEn ? data.en?.[tab] : null;
      const part = data[tab];

      const sections = part.sections.map((item, index) =>
        en?.sections?.[index]
          ? { ...item, ...en.sections[index] }
          : item
      );

      $("#guideCardTitle").textContent = u.cardTitle;
      $("#guideCardDesc").textContent = u.cardDesc;
      $("#guideEyebrow").textContent = u.eyebrow;
      $("#guideTitle").textContent = u.title;

      content.dir = isEn ? "ltr" : "rtl";
      content.lang = state.language;

      tabs.innerHTML = ["pregnancy", "lactation"].map(key => `
        <button type="button" role="tab"
                class="guide-tab${key === tab ? " is-active" : ""}"
                aria-selected="${key === tab}"
                data-guide-tab="${key}">
          ${esc(u[key])}
        </button>`).join("");

      content.innerHTML = `
        <p class="guide-intro">${esc(en?.intro || part.intro)}</p>
        ${tab === "pregnancy" ? calculatorHTML() : ""}
        ${sections.map(renderItem).join("")}

        <div class="guide-sources">
          <h3>${esc(u.sources)}</h3>
          <ul>
            ${part.sources.map(source => `
              <li>
                <a href="${esc(source.url)}" target="_blank"
                   rel="noopener noreferrer">${esc(source.name)}</a>
              </li>`).join("")}
          </ul>
        </div>

        <p class="guide-note">${esc(u.note)}</p>`;
    }

    card.addEventListener("click", () => {
      section.hidden = false;
      paint();
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    $("#closeGuide")?.addEventListener("click", () => {
      section.hidden = true;
    });

    section.addEventListener("click", event => {
      const tabButton = event.target.closest("[data-guide-tab]");

      if (tabButton) {
        tab = tabButton.dataset.guideTab;
        paint();
        return;
      }

      const related = event.target.closest("[data-guide-search]");

      if (related) {
        const input = $("#drugSearch");
        if (!input) return;

        input.value = related.dataset.guideSearch;
        handleSearch();
        section.hidden = true;
        input.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });

    section.addEventListener("input", event => {
      if (event.target.id === "lmpDate") {
        calcGestation(event.target.value);
      }
    });

    document.addEventListener("aminoLanguageChanged", paint);

    paint();
  }

  /* =========================================
     18. بدء التطبيق
  ========================================= */

  function initialize() {
    document.documentElement.lang = state.language;
    document.documentElement.dir =
      state.language === "ar" ? "rtl" : "ltr";

    const year = $("#currentYear");

    if (year) {
      year.textContent = new Date().getFullYear();
    }

    translateStaticContent();
    applyTheme(state.theme);

    setupEvents();
    setupSuggestions();
    setupProfilePopup();
    setupBackToTop();
    setupGuide();
    updateConnectionStatus();

    const library = $("#librarySection");

    if (library) {
      library.hidden = true;
    }

    renderResults([]);

    console.info(
      "Amino Cure initialized:",
      database().length,
      "drugs | Language:",
      state.language
    );
  }

  initialize();
});

/* =========================================
   تأثير ظهور العناصر عند التمرير
========================================= */

document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(
    ".search-section, .quick-access, .quick-access-section, " +
    ".library-section, .about-section, .medical-disclaimer, .drug-card"
  );

  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  elements.forEach(element => observer.observe(element));
});

/* =========================================
   صوت خفيف للأزرار
========================================= */

(() => {
  let audioContext = null;

  document.addEventListener("click", event => {
    const button = event.target.closest("button");

    if (!button || button.disabled) return;

    try {
      const AudioContextClass =
        window.AudioContext || window.webkitAudioContext;

      if (!AudioContextClass) return;

      audioContext ||= new AudioContextClass();

      if (audioContext.state === "suspended") {
        audioContext.resume();
      }

      const oscillator = audioContext.createOscillator();
      const gain = audioContext.createGain();
      const now = audioContext.currentTime;

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(650, now);
      oscillator.frequency.exponentialRampToValueAtTime(
        420,
        now + 0.045
      );

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(0.04, now + 0.008);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.06);

      oscillator.connect(gain);
      gain.connect(audioContext.destination);

      oscillator.start(now);
      oscillator.stop(now + 0.065);
    } catch {}
  }, true);
})();

/* =========================================
   Service Worker
========================================= */

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./service-worker.js")
      .catch(error => {
        console.error(
          "Service Worker registration failed:",
          error
        );
      });
  });
}
