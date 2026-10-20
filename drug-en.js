"use strict";

(function () {
  const EN = {
    "amoxicillin": [
      "Extensive experience with use in pregnancy; chosen when an infection requires treatment, after assessing the case.",
      "Usually passes into milk in small amounts; watch the infant for diarrhea, rash or signs of allergy."
    ],
    "amoxicillin-clavulanate": [
      "May be used when needed to treat a suitable infection; the antibiotic must be chosen according to the infection and clinical situation.",
      "The drug can reach milk; watch the infant for diarrhea, rash or thrush."
    ],
    "azithromycin": [
      "Need is assessed according to the infection and available alternatives; not to be used on one's own during pregnancy.",
      "Short-course use is acceptable in many cases; watch the infant for digestive upset or thrush."
    ],
    "clarithromycin": [
      "Not a routine choice in pregnancy when suitable alternatives exist; the physician weighs benefit against risk.",
      "Relatively limited information; the need for treatment and alternatives are reviewed, with infant monitoring."
    ],
    "cephalexin": [
      "Cephalosporins are among the options used to treat some infections in pregnancy when appropriate.",
      "Levels in milk are usually low; watch the infant for diarrhea or rash."
    ],
    "cefuroxime": [
      "May be used to treat a suitable infection in pregnancy after choosing the dose and duration according to the case.",
      "Transfer into milk is usually limited; watch the infant for diarrhea or signs of allergy."
    ],
    "cefixime": [
      "Need and type of infection are assessed; not to be used without a diagnosis and proper prescription.",
      "Breastfeeding information is less complete than for some other antibiotics; treatment and alternatives are reviewed."
    ],
    "doxycycline": [
      "Not routinely used in pregnancy; some special infections may require specialist assessment of risks and alternatives.",
      "A short course may be accepted in certain circumstances, but prolonged or repeated treatment needs assessment because of possible effects on teeth and bones."
    ],
    "metronidazole": [
      "Can be used for some infections when needed; the decision depends on the type of infection and the stage of pregnancy.",
      "Assessment varies with dose and regimen; high or single doses need review of specialist recommendations."
    ],
    "nitrofurantoin": [
      "May be used for urinary tract infection in suitable cases; the stage of pregnancy is reviewed and it is usually avoided near delivery, with attention to G6PD deficiency.",
      "Avoided or carefully reviewed if the infant is very young or has G6PD deficiency; the infant's age and condition must be assessed."
    ],
    "paracetamol": [
      "A common choice for pain and fever in pregnancy when needed, at the lowest effective dose for the shortest possible time.",
      "Reaches milk in small amounts and is usually compatible with breastfeeding at recommended doses."
    ],
    "ibuprofen": [
      "May affect fetal kidneys and amniotic fluid volume from week 20; avoided from week 30 onward because of additional risks.",
      "Very low transfer into milk and a short half-life; usually among the preferred options when needed."
    ],
    "diclofenac": [
      "NSAID warnings apply from week 20, and it is avoided from week 30 onward.",
      "Short-term use may be suitable in some cases; choose the lowest possible exposure, considering the infant's age and alternatives."
    ],
    "naproxen": [
      "May affect fetal kidneys and amniotic fluid from week 20, and is avoided from week 30 onward.",
      "Longer half-life than some alternatives; may accumulate in the infant, especially a newborn, so alternatives are reviewed."
    ],
    "aspirin": [
      "Analgesic doses differ from the low 81 mg dose that may be prescribed to some pregnant women; do not start or stop aspirin without the physician.",
      "Risk varies with dose and duration of use; alternatives are reviewed when pain relief is needed."
    ],
    "tramadol": [
      "Not to be used on one's own; prolonged use or use near delivery may cause problems for the newborn, and the physician assesses need and alternatives.",
      "May cause marked drowsiness or respiratory depression in the infant; not used during breastfeeding except under specialist medical direction."
    ],
    "omeprazole": [
      "The physician may choose it when needed for reflux or heartburn after assessing symptoms and alternatives.",
      "Low levels are expected in milk; usual use is not expected to cause significant effects in most infants."
    ],
    "pantoprazole": [
      "The need for treatment and alternatives are reviewed; used when the expected benefit is justified.",
      "Direct information is relatively limited; the choice of drug is reviewed according to the mother and infant."
    ],
    "famotidine": [
      "There is experience using it for heartburn when needed, after assessing the case and alternatives.",
      "The amount reaching milk is usually low."
    ],
    "ondansetron": [
      "May be used for some cases of vomiting when needed; alternatives and timing are reviewed, especially in the first trimester.",
      "Available data usually do not point to a major problem, but the infant's age, condition and the reason for treatment are considered."
    ],
    "metoclopramide": [
      "May be used for some cases of nausea when needed, with review of side effects and duration of treatment.",
      "May raise prolactin and has possible neurological effects; not used to stimulate milk supply without specialist supervision."
    ],
    "lactulose": [
      "Very limited absorption from the gut; can be used for constipation when needed, following the directions.",
      "Systemic absorption is limited, so no significant amount is expected to reach milk."
    ],
    "loperamide": [
      "Information in pregnancy is limited; not used automatically, especially with fever, blood in stool or suspected infection.",
      "Exposure through milk may be low, but the cause of diarrhea, duration of use and the infant's condition are considered."
    ],
    "loratadine": [
      "An antihistamine that can be considered when needed to treat allergy after assessment.",
      "Usual doses are generally low risk; watch the infant for drowsiness or changes in feeding."
    ],
    "cetirizine": [
      "Its use for allergy can be considered when needed, with assessment of symptoms and alternatives.",
      "Usual doses are generally acceptable; watch the infant for drowsiness, especially with repeated use."
    ],
    "chlorpheniramine": [
      "May be used in some cases, but drowsiness and anticholinergic effects must be considered.",
      "May cause drowsiness in the infant or reduce milk supply in some mothers, especially with repeated use."
    ],
    "salbutamol": [
      "Asthma control is important in pregnancy; a prescribed rescue inhaler is not stopped without consulting the physician.",
      "Inhalation usually gives low systemic exposure; no significant amount is expected to reach milk."
    ],
    "budesonide": [
      "Good asthma control is important; the type of preparation and dose are reviewed, and prescribed treatment is not stopped without guidance.",
      "Inhalation usually gives limited systemic exposure; details vary with the preparation and dose."
    ],
    "montelukast": [
      "The need to continue it versus alternatives is reviewed; asthma treatment is not stopped without a medical plan.",
      "Relatively limited information; use is assessed according to the mother's need and the infant's condition."
    ],
    "amlodipine": [
      "Treating blood pressure in pregnancy requires choosing a suitable drug; treatment is reviewed with the physician and not stopped suddenly.",
      "May reach milk in small amounts; the infant's condition and suitable alternatives are reviewed."
    ],
    "labetalol": [
      "Commonly used to treat high blood pressure in pregnancy when suitable, with monitoring of mother and fetus.",
      "Transfer into milk is usually low; monitor the infant, especially if premature."
    ],
    "methyldopa": [
      "Long experience in treating high blood pressure in pregnancy, but the choice depends on the patient and local guidelines.",
      "Suitability is reviewed after delivery; preferred alternatives may exist for some breastfeeding mothers."
    ],
    "enalapril": [
      "May cause serious harm to fetal kidneys and other complications, especially in the second and third trimesters; treatment must be changed under medical supervision.",
      "May reach milk at low levels; the infant's age, kidney function and condition are considered, especially in newborns."
    ],
    "losartan": [
      "May cause serious harm to the fetus; treatment must be reviewed as soon as pregnancy is discovered, without stopping or changing the drug on one's own.",
      "Breastfeeding information is limited; better-documented alternatives are reviewed, especially if the infant is a newborn or premature."
    ],
    "furosemide": [
      "Used when there is a clear indication, such as some cases of heart failure; it may affect fluid volume and needs monitoring.",
      "May reduce milk supply, especially at high doses; the decision depends on the mother's condition and need for treatment."
    ],
    "insulin": [
      "Used to treat diabetes in pregnancy when needed; the plan and doses vary with the type of insulin and glucose readings.",
      "Insulin is a protein digested in the infant's gut; the mother's doses must be adjusted and her glucose monitored."
    ],
    "metformin": [
      "May be used in certain cases, but placental crossing and varying guidelines require an individual treatment plan.",
      "The amount in milk is usually low; special assessment is considered for a premature infant or one with kidney problems."
    ],
    "gliclazide": [
      "Not a routine treatment for diabetes in pregnancy; a specialist is needed to choose the most suitable treatment and avoid glucose disturbance in mother and fetus.",
      "Direct information is limited; the risk of low blood sugar in the infant and treatment alternatives must be assessed."
    ],
    "levothyroxine": [
      "Treating hypothyroidism is important in pregnancy; the dose often needs monitoring and adjustment according to thyroid tests.",
      "It replaces a natural hormone; appropriate treatment helps maintain the health of mother and infant."
    ],
    "carbimazole": [
      "Use in early pregnancy is linked to known fetal risks; the specialist chooses the most suitable drug and dose, and thyroid treatment must not be stopped on one's own.",
      "May be used in some cases under medical supervision, adjusting the dose and monitoring the infant's thyroid function when needed."
    ],
    "sertraline": [
      "The physician balances the benefits of treating the mental health condition against the drug's risks; it is not stopped suddenly because of pregnancy.",
      "Levels in milk are usually low compared with many antidepressants; the infant's condition is monitored."
    ],
    "fluoxetine": [
      "The benefits of continuing depression treatment must be weighed against possible risks; do not stop or switch without the physician.",
      "Long half-life and may accumulate in the infant; symptoms and alternatives are reviewed, especially in newborns."
    ],
    "carbamazepine": [
      "Linked to an increased risk of some congenital malformations; pregnancy should be planned and the dose and folic acid reviewed with a specialist, without stopping it suddenly.",
      "May be used when needed, but watch for drowsiness, poor feeding or jaundice in the infant, with medical follow-up."
    ],
    "valproate": [
      "Linked to a higher risk of congenital malformations and effects on neurodevelopment; do not stop suddenly, but contact the specialist urgently to make a safe plan.",
      "May be compatible in some cases under medical supervision; watch for jaundice, bruising or poor feeding in the infant."
    ],
    "folic-acid": [
      "Helps reduce the risk of neural tube defects; the required dose varies with risk factors and the physician's directions.",
      "An essential vitamin; the dose is set according to the mother's needs and healthcare recommendations."
    ],
    "ferrous-sulfate": [
      "Used to treat iron deficiency when indicated; the dose is set according to tests and tolerance.",
      "Can be used to treat iron deficiency; the appropriate dose depends on the mother's needs."
    ],
    "warfarin": [
      "May cause malformations and fetal bleeding; there are limited specialist exceptions, so urgent management by a specialist team is needed and treatment must not be changed on one's own.",
      "No significant amount is expected to transfer into milk and it is usually compatible with breastfeeding; the mother's INR monitoring must continue."
    ],
    "heparin": [
      "Unfractionated heparin does not usually cross the placenta; choosing the type and dose needs medical supervision and monitoring.",
      "Oral absorption by the infant is not expected; treatment depends on the type of heparin and the reason for use."
    ],
    "prednisolone": [
      "May be necessary to treat inflammatory or immune diseases; the lowest effective dose is used with monitoring of mother and fetus.",
      "Low amounts reach milk; high doses may call for special timing of feeds according to the physician's advice."
    ],
    "fluconazole": [
      "Topical treatment is often preferred for vaginal fungal infection in pregnancy; high or prolonged doses are linked to fetal concerns.",
      "May be used during breastfeeding when needed; the amount the infant receives through milk is usually less than the therapeutic doses given to infants."
    ]
  };

  (window.DRUGS || []).forEach(drug => {
    const entry = EN[drug.id];
    if (!entry) return;

    if (drug.pregnancy) drug.pregnancy.summaryEn = entry[0];
    if (drug.lactation) drug.lactation.summaryEn = entry[1];
  });

  /* Author name: Arabic <-> English */
    /* Static texts that must follow the language */
  const TEXT = {
    ar: {
      name: "أمين تاج الدين عثمان",
      role: "صيدلاني",
      about: "مرجع صيدلاني يقدّم معلومات علمية مبسطة عن سلامة الأدوية أثناء الحمل والرضاعة، لدعم الاستخدام الآمن والواعي للأدوية. معلومة أبسط، حياة أفضل.",
      button: "EN"
    },
    en: {
      name: "Amin Taj Al-Din Othman",
      role: "Pharmacist",
      about: "A pharmacy reference offering simplified scientific information on medication safety during pregnancy and breastfeeding, to support safe and informed medication use. Simpler information, better life.",
      button: "AR"
    }
  };

  function applyLanguageTexts() {
    const lang = document.documentElement.lang === "en" ? "en" : "ar";
    const text = TEXT[lang];

    document
      .querySelectorAll(".footer-credit strong")
      .forEach(element => { element.textContent = text.name; });

    const author = document.querySelector(".about-author");
    if (author) {
      author.innerHTML = "<strong></strong><br><span></span>";
      author.querySelector("strong").textContent = text.name;
      author.querySelector("span").textContent = text.role;
    }

    const paragraph = document.querySelector(
      ".about-content p:not(.about-author)"
    );
    if (paragraph) paragraph.textContent = text.about;

    const image = document.querySelector(".about-profile img");
    if (image) image.alt = text.name;

    const button = document.getElementById("languageToggle");
    if (button) button.textContent = text.button;
  }

  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(applyLanguageTexts, 0);
  });
    document.addEventListener("aminoLanguageChanged", applyLanguageTexts);
})();
/* =========================================
   Full-screen panels (guide, favorites, history) with back button
========================================= */
(function () {
  const style = document.createElement("style");
  style.textContent = `
    body.panel-open {
      overflow: hidden;
    }

    .guide-section:not([hidden]),
    .library-section:not([hidden]) {
      position: fixed;
      inset: 0;
      z-index: 120;

      margin: 0 !important;
      padding: 0 16px 56px !important;

      background: var(--bg);
      border: 0 !important;
      border-radius: 0 !important;
      box-shadow: none !important;

      overflow-y: auto;
      overscroll-behavior: contain;
      animation: panelIn 0.25s ease both;
    }

    @keyframes panelIn {
      from { opacity: 0; transform: translateY(26px); }
      to   { opacity: 1; transform: none; }
    }

    .guide-section > *,
    .library-section > * {
      max-width: 780px;
      margin-inline: auto;
    }

    .guide-section .section-heading,
    .library-section .section-heading {
      position: sticky;
      top: 0;
      z-index: 5;

      justify-content: flex-start;
      gap: 12px;
      margin-bottom: 16px;
      padding: 14px 0 12px;

      background: var(--bg);
      border-bottom: 1px solid var(--border);
    }

    .guide-section .section-heading .close-button,
    .library-section .section-heading .close-button {
      display: none;
    }

    .back-panel-btn {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      min-height: 42px;
      padding: 6px 15px;

      color: var(--primary);
      background: var(--primary-soft);
      border: 1px solid var(--border);
      border-radius: 14px;

      font-size: 13px;
      font-weight: 800;
      cursor: pointer;
    }

    .back-panel-btn:hover {
      border-color: var(--primary);
    }

    .library-section .library-content .drug-card {
      margin-bottom: 12px;
    }
  `;
  document.head.appendChild(style);

  const PANELS = [
    { id: "guideSection", close: "closeGuide" },
    { id: "librarySection", close: "closeLibrary" }
  ];

  function isOpen(item) {
    const panel = document.getElementById(item.id);
    return !!panel && !panel.hidden;
  }

  function label() {
    return document.documentElement.lang === "en" ? "← Back" : "→ رجوع";
  }

  function syncBody() {
    document.body.classList.toggle("panel-open", PANELS.some(isOpen));
  }

  function scrollToLibraryCards() {
    const target = document.querySelector(".quick-access-section");
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  // يغلق اللوحات المفتوحة ويرجع true إذا أغلق شيئًا
  function closePanels() {
    let closed = false;

    PANELS.forEach(item => {
      const closeButton = document.getElementById(item.close);

      if (isOpen(item) && closeButton) {
        closeButton.click();
        closed = true;
      }
    });

    syncBody();
    return closed;
  }

  function goBack() {
    if (history.state && history.state.aminoPanel) {
      history.back();
    } else if (closePanels()) {
      scrollToLibraryCards();
    }
  }

  function init() {
    PANELS.forEach(item => {
      const panel = document.getElementById(item.id);
      if (!panel) return;

      const heading = panel.querySelector(".section-heading");
      if (!heading) return;

      const button = document.createElement("button");
      button.type = "button";
      button.className = "back-panel-btn";
      button.textContent = label();
      button.addEventListener("click", goBack);

      heading.insertBefore(button, heading.firstChild);

      new MutationObserver(() => {
        if (!panel.hidden) {
          panel.scrollTop = 0;

          if (!(history.state && history.state.aminoPanel === item.id)) {
            history.pushState({ aminoPanel: item.id }, "");
          }
        } else if (history.state && history.state.aminoPanel === item.id) {
          // أُغلقت اللوحة بطريقة أخرى: ننظف سجل المتصفح
          history.back();
        }

        syncBody();
      }).observe(panel, { attributes: true, attributeFilter: ["hidden"] });
    });

    // زر الرجوع في الهاتف أو المتصفح
    window.addEventListener("popstate", () => {
      if (closePanels()) scrollToLibraryCards();
    });

    // زر Esc
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && PANELS.some(isOpen)) goBack();
    });

    // بعد اختيار دواء من سجل البحث نصل إلى النتيجة
    const libraryContent = document.getElementById("libraryContent");

    if (libraryContent) {
      libraryContent.addEventListener("click", event => {
        if (!event.target.closest("[data-history-id]")) return;

        setTimeout(() => {
          const results = document.getElementById("searchResults");

          if (results) {
            results.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 80);
      });
    }

    // تحويل لغة الزر
    document.addEventListener("aminoLanguageChanged", () => {
      document.querySelectorAll(".back-panel-btn").forEach(button => {
        button.textContent = label();
      });
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
