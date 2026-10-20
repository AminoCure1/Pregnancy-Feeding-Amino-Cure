
"use strict";

/* =========================================
   AMINO CURE
   Pregnancy & Lactation Reference
   Drug Database v2
   ملاحظات تعليمية أولية وليست وصفة علاجية
========================================= */

const FDA_LABELING_INFO =
  "https://www.fda.gov/drugs/labeling-information-drug-products/pregnancy-and-lactation-labeling-resources";

const DRUGS = [
  {
    id: "amoxicillin",
    name: "Amoxicillin",
    nameAr: "أموكسيسيلين",
    drugClass: "Penicillin antibiotic",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "تتوفر خبرة واسعة باستخدامه أثناء الحمل، ويُختار عند وجود عدوى تستدعي العلاج وبعد تقييم الحالة."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "يمر إلى الحليب بكميات صغيرة عادةً؛ راقبي الإسهال أو الطفح أو علامات الحساسية لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=amoxicillin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "amoxicillin-clavulanate",
    name: "Amoxicillin/Clavulanate",
    nameAr: "أموكسيسيلين/كلافولانات",
    drugClass: "Penicillin + beta-lactamase inhibitor",
    pregnancy: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "قد يُستخدم عند الحاجة لعلاج العدوى المناسبة؛ يجب اختيار المضاد حسب نوع العدوى والحالة السريرية."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "يمكن أن يصل الدواء إلى الحليب؛ راقبي الإسهال أو الطفح أو الفطريات لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amoxicillin+clavulanate" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=amoxicillin+clavulanate+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "azithromycin",
    name: "Azithromycin",
    nameAr: "أزيثروميسين",
    drugClass: "Macrolide antibiotic",
    pregnancy: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "تُقيّم الحاجة إليه وفق نوع العدوى والبدائل المتاحة؛ لا يُستخدم ذاتيًا أثناء الحمل."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "يُعد الاستخدام القصير مقبولًا في كثير من الحالات؛ راقبي اضطرابات الجهاز الهضمي أو الفطريات لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=azithromycin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=azithromycin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "clarithromycin",
    name: "Clarithromycin",
    nameAr: "كلاريثروميسين",
    drugClass: "Macrolide antibiotic",
    pregnancy: {
      status: "caution",
      label: "يحتاج تقييمًا",
      summary: "لا يُعد خيارًا روتينيًا للحمل عند توفر بدائل مناسبة؛ يوازن الطبيب الفائدة والمخاطر."
    },
    lactation: {
      status: "caution",
      label: "بحذر",
      summary: "تتوفر معلومات محدودة نسبيًا؛ تُراجع ضرورة العلاج والبدائل، مع مراقبة الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=clarithromycin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=clarithromycin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "cephalexin",
    name: "Cephalexin",
    nameAr: "سيفاليكسين",
    drugClass: "Cephalosporin antibiotic",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "تُعد السيفالوسبورينات من الخيارات المستخدمة لعلاج بعض العدوى أثناء الحمل عندما تكون مناسبة."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "المستويات في الحليب منخفضة عادةً؛ راقبي الإسهال أو الطفح لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=cephalexin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=cephalexin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "cefuroxime",
    name: "Cefuroxime",
    nameAr: "سيفوروكسيم",
    drugClass: "Cephalosporin antibiotic",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "قد يُستخدم لعلاج عدوى مناسبة أثناء الحمل بعد اختيار الجرعة والمدة وفق الحالة."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "انتقاله إلى الحليب محدود عادةً؛ راقبي الإسهال أو علامات الحساسية لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=cefuroxime" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=cefuroxime+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "cefixime",
    name: "Cefixime",
    nameAr: "سيفيكسيم",
    drugClass: "Cephalosporin antibiotic",
    pregnancy: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "تُقيّم الحاجة إليه ونوع العدوى؛ لا يُستخدم دون تشخيص ووصفة مناسبة."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "المعلومات الخاصة بالرضاعة أقل اكتمالًا من بعض المضادات الأخرى؛ يُراجع العلاج والبدائل."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=cefixime" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=cefixime+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "doxycycline",
    name: "Doxycycline",
    nameAr: "دوكسيسيكلين",
    drugClass: "Tetracycline antibiotic",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب عادةً",
      summary: "لا يُستخدم روتينيًا أثناء الحمل؛ قد تتطلب بعض العدوى الخاصة تقييمًا متخصصًا للمخاطر والبدائل."
    },
    lactation: {
      status: "caution",
      label: "بحذر",
      summary: "قد يُقبل العلاج القصير في ظروف معينة، لكن العلاج المطوّل أو المتكرر يحتاج تقييمًا بسبب التأثير المحتمل على الأسنان والعظام."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=doxycycline" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=doxycycline+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "metronidazole",
    name: "Metronidazole",
    nameAr: "ميترونيدازول",
    drugClass: "Nitroimidazole antimicrobial",
    pregnancy: {
      status: "caution",
      label: "بحسب التشخيص",
      summary: "يمكن استخدامه لبعض العدوى عند الحاجة؛ القرار يعتمد على نوع العدوى ومرحلة الحمل."
    },
    lactation: {
      status: "caution",
      label: "يعتمد على الجرعة",
      summary: "يختلف التقييم حسب الجرعة والنظام العلاجي؛ الجرعات العالية أو المفردة تحتاج مراجعة توصيات مختصة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metronidazole" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=metronidazole+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "nitrofurantoin",
    name: "Nitrofurantoin",
    nameAr: "نيتروفورانتوين",
    drugClass: "Urinary antibacterial",
    pregnancy: {
      status: "caution",
      label: "يعتمد على المرحلة",
      summary: "قد يُستخدم لعدوى المسالك البولية في حالات مناسبة؛ تُراجع مرحلة الحمل ويُتجنب عادةً قرب الولادة، مع مراعاة حالات نقص G6PD."
    },
    lactation: {
      status: "caution",
      label: "بحذر",
      summary: "يُتجنب أو يُراجع بعناية إذا كان الرضيع حديث الولادة جدًا أو لديه نقص G6PD؛ يلزم تقييم عمر الرضيع وحالته."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=nitrofurantoin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=nitrofurantoin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "paracetamol",
    name: "Paracetamol / Acetaminophen",
    nameAr: "باراسيتامول",
    drugClass: "Analgesic / antipyretic",
    pregnancy: {
      status: "generally_compatible",
      label: "الخيار المعتاد عند الحاجة",
      summary: "يُعد خيارًا شائعًا للألم والحمى أثناء الحمل عند الحاجة، بأقل جرعة فعالة ولأقصر مدة ممكنة."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "يصل إلى الحليب بكميات صغيرة ويُعد متوافقًا عادةً مع الرضاعة عند الجرعات الموصى بها."
    },
    sources: [
      { title: "ACOG", url: "https://www.acog.org/clinical/clinical-guidance/practice-advisory/articles/2025/09/acetaminophen-use-in-pregnancy-and-neurodevelopmental-outcomes" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=acetaminophen+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "ibuprofen",
    name: "Ibuprofen",
    nameAr: "إيبوبروفين",
    drugClass: "NSAID",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب من الأسبوع 20 دون توجيه طبي",
      summary: "قد يؤثر على كلى الجنين وكمية السائل الأمنيوسي من الأسبوع 20؛ ويُتجنب من الأسبوع 30 فصاعدًا بسبب مخاطر إضافية."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "انتقاله إلى الحليب منخفض جدًا وعمره النصفي قصير؛ يُعد من الخيارات المفضلة عادةً عند الحاجة."
    },
    sources: [
      { title: "FDA — NSAIDs in pregnancy", url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=ibuprofen+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "diclofenac",
    name: "Diclofenac",
    nameAr: "ديكلوفيناك",
    drugClass: "NSAID",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب من الأسبوع 20 دون توجيه طبي",
      summary: "تسري عليه تحذيرات مضادات الالتهاب غير الستيرويدية من الأسبوع 20، ويُتجنب من الأسبوع 30 فصاعدًا."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "قد يكون الاستخدام القصير مناسبًا في حالات معينة؛ يُختار أقل تعرض ممكن مع مراعاة عمر الرضيع والبدائل."
    },
    sources: [
      { title: "FDA — NSAIDs in pregnancy", url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=diclofenac+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "naproxen",
    name: "Naproxen",
    nameAr: "نابروكسين",
    drugClass: "NSAID",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب من الأسبوع 20 دون توجيه طبي",
      summary: "قد يؤثر على كلى الجنين والسائل الأمنيوسي من الأسبوع 20، ويُتجنب من الأسبوع 30 فصاعدًا."
    },
    lactation: {
      status: "caution",
      label: "ليس الخيار الأول غالبًا",
      summary: "عمره النصفي أطول من بعض البدائل؛ قد يتراكم عند الرضيع، خصوصًا حديث الولادة، لذلك تُراجع البدائل."
    },
    sources: [
      { title: "FDA — NSAIDs in pregnancy", url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=naproxen+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "aspirin",
    name: "Aspirin",
    nameAr: "أسبرين",
    drugClass: "Salicylate / antiplatelet",
    pregnancy: {
      status: "caution",
      label: "الجرعة والاستطباب مهمان",
      summary: "تختلف جرعة تسكين الألم عن جرعة 81 mg المنخفضة التي قد تُوصف لبعض الحوامل؛ لا تبدأي الأسبرين أو توقفيه دون الطبيب."
    },
    lactation: {
      status: "caution",
      label: "بحسب الجرعة",
      summary: "تختلف المخاطر حسب الجرعة ومدة الاستخدام؛ تُراجع البدائل عند الحاجة إلى تسكين الألم."
    },
    sources: [
      { title: "FDA — NSAIDs in pregnancy", url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=aspirin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "tramadol",
    name: "Tramadol",
    nameAr: "ترامادول",
    drugClass: "Opioid analgesic",
    pregnancy: {
      status: "caution",
      label: "تقييم طبي ضروري",
      summary: "لا يُستخدم ذاتيًا؛ الاستخدام المطوّل أو قرب الولادة قد يسبب مشكلات للوليد، ويُقيّم الطبيب الحاجة والبدائل."
    },
    lactation: {
      status: "avoid",
      label: "يُفضّل تجنبه",
      summary: "قد يسبب نعاسًا شديدًا أو تثبيط التنفس لدى الرضيع؛ لا يُستخدم أثناء الرضاعة إلا وفق توجيه طبي متخصص."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=tramadol" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=tramadol+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "omeprazole",
    name: "Omeprazole",
    nameAr: "أوميبرازول",
    drugClass: "Proton pump inhibitor",
    pregnancy: {
      status: "generally_compatible",
      label: "قد يُستخدم عند الحاجة",
      summary: "يمكن للطبيب اختياره عند الحاجة لعلاج الارتجاع أو الحموضة بعد تقييم الأعراض والبدائل."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تُتوقع مستويات منخفضة في الحليب؛ الاستخدام المعتاد لا يُتوقع أن يسبب آثارًا مهمة لدى معظم الرضع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=omeprazole" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=omeprazole+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "pantoprazole",
    name: "Pantoprazole",
    nameAr: "بانتوبرازول",
    drugClass: "Proton pump inhibitor",
    pregnancy: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "تُراجع ضرورة العلاج والبدائل؛ يُستخدم عندما تكون الفائدة المتوقعة مبررة."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "المعلومات المباشرة محدودة نسبيًا؛ يُراجع اختيار الدواء وفق حالة الأم والرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=pantoprazole" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=pantoprazole+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "famotidine",
    name: "Famotidine",
    nameAr: "فاموتيدين",
    drugClass: "H2 receptor antagonist",
    pregnancy: {
      status: "generally_compatible",
      label: "قد يُستخدم عند الحاجة",
      summary: "توجد خبرة باستخدامه لعلاج الحموضة عند الحاجة، بعد تقييم الحالة والبدائل."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تُعد كمية الدواء التي تصل إلى الحليب منخفضة عادةً."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=famotidine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=famotidine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "ondansetron",
    name: "Ondansetron",
    nameAr: "أوندانسيترون",
    drugClass: "5-HT3 antagonist antiemetic",
    pregnancy: {
      status: "caution",
      label: "تقييم الفائدة والمخاطر",
      summary: "قد يُستخدم لبعض حالات القيء عند الحاجة؛ تُراجع البدائل والتوقيت، خصوصًا في الثلث الأول."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "البيانات المتاحة لا تشير عادةً إلى مشكلة كبيرة، لكن يُراعى عمر الرضيع وحالته وسبب العلاج."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ondansetron" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=ondansetron+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "metoclopramide",
    name: "Metoclopramide",
    nameAr: "ميتوكلوبراميد",
    drugClass: "Dopamine antagonist / prokinetic",
    pregnancy: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "قد يُستخدم لبعض حالات الغثيان عند الحاجة، مع مراجعة الأعراض الجانبية ومدة العلاج."
    },
    lactation: {
      status: "caution",
      label: "يحتاج تقييمًا",
      summary: "قد يزيد البرولاكتين وله آثار عصبية محتملة؛ لا يُستخدم لتحفيز الحليب دون إشراف مختص."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metoclopramide" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=metoclopramide+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "lactulose",
    name: "Lactulose",
    nameAr: "لاكتولوز",
    drugClass: "Osmotic laxative",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "امتصاصه من الأمعاء محدود جدًا؛ يمكن استخدامه للإمساك عند الحاجة مع الالتزام بالتوجيهات."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "امتصاصه الجهازي محدود، لذلك لا يُتوقع وصول كمية مهمة إلى الحليب."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=lactulose" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=lactulose+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "loperamide",
    name: "Loperamide",
    nameAr: "لوبيراميد",
    drugClass: "Antidiarrheal",
    pregnancy: {
      status: "caution",
      label: "بحسب السبب",
      summary: "المعلومات أثناء الحمل محدودة؛ لا يُستخدم تلقائيًا، خاصةً عند وجود حمى أو دم بالبراز أو اشتباه عدوى."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "قد يكون التعرض عبر الحليب منخفضًا، لكن يُراعى سبب الإسهال ومدة الاستخدام وحالة الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loperamide" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=loperamide+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "loratadine",
    name: "Loratadine",
    nameAr: "لوراتادين",
    drugClass: "Second-generation antihistamine",
    pregnancy: {
      status: "generally_compatible",
      label: "قد يُستخدم عند الحاجة",
      summary: "يُعد من مضادات الهيستامين التي يمكن النظر فيها عند الحاجة لعلاج الحساسية بعد التقييم."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تُعد الجرعات المعتادة منخفضة الخطورة غالبًا؛ راقبي النعاس أو تغير الرضاعة لدى الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=loratadine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=loratadine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "cetirizine",
    name: "Cetirizine",
    nameAr: "سيتريزين",
    drugClass: "Second-generation antihistamine",
    pregnancy: {
      status: "generally_compatible",
      label: "قد يُستخدم عند الحاجة",
      summary: "يمكن النظر في استخدامه لعلاج الحساسية عند الحاجة، مع تقييم الأعراض والبدائل."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تُعد الجرعات المعتادة مقبولة غالبًا؛ راقبي النعاس لدى الرضيع، خاصةً مع الاستخدام المتكرر."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=cetirizine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=cetirizine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "chlorpheniramine",
    name: "Chlorpheniramine",
    nameAr: "كلورفينيرامين",
    drugClass: "First-generation antihistamine",
    pregnancy: {
      status: "caution",
      label: "بحسب الحاجة",
      summary: "قد يُستخدم في بعض الحالات، لكن النعاس والآثار المضادة للكولين عوامل يجب مراعاتها."
    },
    lactation: {
      status: "caution",
      label: "بحذر",
      summary: "قد يسبب النعاس للرضيع أو يقلل إدرار الحليب لدى بعض الأمهات، خصوصًا مع الاستخدام المتكرر."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=chlorpheniramine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=chlorpheniramine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "salbutamol",
    name: "Salbutamol / Albuterol",
    nameAr: "سالبوتامول",
    drugClass: "Short-acting beta-2 agonist",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "السيطرة على الربو مهمة أثناء الحمل؛ لا يُوقف بخاخ الإنقاذ الموصوف دون مراجعة الطبيب."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "الاستنشاق يؤدي عادةً إلى تعرض جهازي منخفض؛ لا يُتوقع وصول كمية مهمة إلى الحليب."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=albuterol" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=albuterol+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "budesonide",
    name: "Budesonide",
    nameAr: "بوديزونيد",
    drugClass: "Corticosteroid",
    pregnancy: {
      status: "generally_compatible",
      label: "قد يُستخدم عند الحاجة",
      summary: "السيطرة الجيدة على الربو مهمة؛ يُراجع نوع المستحضر والجرعة، ولا يُوقف العلاج الموصوف دون توجيه."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "الاستنشاق يؤدي إلى تعرض جهازي محدود عادةً؛ تختلف التفاصيل حسب شكل المستحضر والجرعة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=budesonide" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=budesonide+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "montelukast",
    name: "Montelukast",
    nameAr: "مونتيلوكاست",
    drugClass: "Leukotriene receptor antagonist",
    pregnancy: {
      status: "caution",
      label: "بحسب السيطرة على الربو",
      summary: "تُراجع ضرورة الاستمرار عليه مقابل البدائل؛ لا يُوقف علاج الربو دون خطة طبية."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "تتوفر معلومات محدودة نسبيًا؛ يُقيّم الاستخدام وفق حاجة الأم وحالة الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=montelukast" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=montelukast+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "amlodipine",
    name: "Amlodipine",
    nameAr: "أملوديبين",
    drugClass: "Calcium channel blocker",
    pregnancy: {
      status: "caution",
      label: "بحسب خطة علاج الضغط",
      summary: "تحتاج معالجة الضغط أثناء الحمل إلى اختيار دواء مناسب؛ يُراجع العلاج مع الطبيب ولا يُوقف فجأة."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "قد يصل إلى الحليب بكميات صغيرة؛ تُراجع حالة الرضيع والبدائل المناسبة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=amlodipine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=amlodipine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "labetalol",
    name: "Labetalol",
    nameAr: "لابيتالول",
    drugClass: "Alpha/beta blocker",
    pregnancy: {
      status: "generally_compatible",
      label: "خيار شائع تحت إشراف طبي",
      summary: "يُستخدم كثيرًا لعلاج ارتفاع الضغط أثناء الحمل عندما يكون مناسبًا، مع مراقبة الأم والجنين."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "انتقاله إلى الحليب منخفض عادةً؛ تُراعى مراقبة الرضيع، خاصةً إذا كان خديجًا."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=labetalol" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=labetalol+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "methyldopa",
    name: "Methyldopa",
    nameAr: "ميثيل دوبا",
    drugClass: "Central alpha-2 agonist",
    pregnancy: {
      status: "generally_compatible",
      label: "خيار معروف أثناء الحمل",
      summary: "له خبرة طويلة في علاج ارتفاع الضغط أثناء الحمل، لكن الاختيار يعتمد على حالة المريضة والإرشادات المحلية."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "تُراجع ملاءمته بعد الولادة؛ قد توجد بدائل مفضلة لبعض المرضعات."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=methyldopa" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=methyldopa+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "enalapril",
    name: "Enalapril",
    nameAr: "إنالابريل",
    drugClass: "ACE inhibitor",
    pregnancy: {
      status: "avoid",
      label: "يُمنع أثناء الحمل",
      summary: "قد يسبب أذى خطيرًا لكلى الجنين ومضاعفات أخرى، خصوصًا في الثلثين الثاني والثالث؛ يلزم تغيير العلاج تحت إشراف طبي."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا بعد الولادة",
      summary: "قد يصل إلى الحليب بمستويات منخفضة؛ يُراعى عمر الرضيع ووظائف الكلى وحالته، خاصةً لدى حديثي الولادة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=enalapril" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=enalapril+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "losartan",
    name: "Losartan",
    nameAr: "لوسارتان",
    drugClass: "Angiotensin II receptor blocker",
    pregnancy: {
      status: "avoid",
      label: "يُمنع أثناء الحمل",
      summary: "قد يسبب أذى خطيرًا للجنين؛ يجب مراجعة العلاج فور اكتشاف الحمل دون إيقاف أو تغيير الدواء ذاتيًا."
    },
    lactation: {
      status: "caution",
      label: "تُفضّل مراجعة البدائل",
      summary: "معلومات الرضاعة محدودة؛ تُراجع بدائل أكثر توثيقًا، خاصةً إذا كان الرضيع حديث الولادة أو خديجًا."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=losartan" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=losartan+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "furosemide",
    name: "Furosemide",
    nameAr: "فوروسيميد",
    drugClass: "Loop diuretic",
    pregnancy: {
      status: "caution",
      label: "لا يُستخدم روتينيًا",
      summary: "يُستخدم عند وجود استطباب واضح مثل بعض حالات قصور القلب؛ وقد يؤثر على حجم السوائل ويحتاج مراقبة."
    },
    lactation: {
      status: "caution",
      label: "بحسب الجرعة والحالة",
      summary: "قد يقلل إدرار الحليب، خاصةً مع الجرعات العالية؛ يعتمد القرار على حالة الأم والحاجة للعلاج."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=furosemide" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=furosemide+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "insulin",
    name: "Insulin (class)",
    nameAr: "الإنسولين",
    drugClass: "Antidiabetic hormone",
    pregnancy: {
      status: "generally_compatible",
      label: "علاج أساسي عند الحاجة",
      summary: "يُستخدم لعلاج السكري أثناء الحمل عندما يلزم؛ تختلف الخطة والجرعات حسب نوع الإنسولين وقراءات السكر."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "الإنسولين بروتين يُهضم في الجهاز الهضمي للرضيع؛ يلزم ضبط جرعات الأم ومراقبة سكرها."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=insulin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=insulin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "metformin",
    name: "Metformin",
    nameAr: "ميتفورمين",
    drugClass: "Biguanide antidiabetic",
    pregnancy: {
      status: "caution",
      label: "بحسب خطة السكري",
      summary: "قد يُستخدم في حالات معينة، لكن عبوره للمشيمة واختلاف الإرشادات يستلزمان خطة علاج فردية."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تكون كمية الدواء في الحليب منخفضة عادةً؛ يُراعى تقييم خاص للرضيع الخديج أو المصاب بمشكلات كلوية."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=metformin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=metformin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "gliclazide",
    name: "Gliclazide",
    nameAr: "جليكلازيد",
    drugClass: "Sulfonylurea antidiabetic",
    pregnancy: {
      status: "avoid",
      label: "ليس الخيار المعتاد",
      summary: "لا يُعد علاجًا روتينيًا للسكري أثناء الحمل؛ يلزم اختصاصي لتحديد العلاج الأنسب وتجنب اضطراب سكر الأم والجنين."
    },
    lactation: {
      status: "caution",
      label: "يحتاج تقييمًا",
      summary: "المعلومات المباشرة محدودة؛ يجب تقييم خطر انخفاض سكر الرضيع والبدائل العلاجية."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=gliclazide" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=gliclazide+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "levothyroxine",
    name: "Levothyroxine",
    nameAr: "ليفوثيروكسين",
    drugClass: "Thyroid hormone",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستمر عليه عند وصفه",
      summary: "علاج قصور الغدة الدرقية مهم أثناء الحمل؛ غالبًا تحتاج الجرعة إلى المتابعة والتعديل وفق تحاليل الغدة."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق",
      summary: "هو بديل لهرمون طبيعي؛ العلاج المناسب يساعد على الحفاظ على صحة الأم والرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=levothyroxine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=levothyroxine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "carbimazole",
    name: "Carbimazole",
    nameAr: "كاربميزول",
    drugClass: "Antithyroid drug",
    pregnancy: {
      status: "caution",
      label: "يحتاج اختصاصي غدد",
      summary: "يرتبط استعماله في بداية الحمل بمخاطر جنينية معروفة؛ يحدد الاختصاصي الدواء والجرعة الأنسب ولا يجوز إيقاف علاج الغدة ذاتيًا."
    },
    lactation: {
      status: "caution",
      label: "بحسب الجرعة والمتابعة",
      summary: "قد يُستخدم في بعض الحالات تحت إشراف طبي مع ضبط الجرعة ومتابعة وظيفة الغدة لدى الرضيع عند الحاجة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=carbimazole" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=carbimazole+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "sertraline",
    name: "Sertraline",
    nameAr: "سيرترالين",
    drugClass: "SSRI antidepressant",
    pregnancy: {
      status: "caution",
      label: "تقييم فردي",
      summary: "يوازن الطبيب بين فوائد علاج الحالة النفسية ومخاطر الدواء؛ لا يُوقف فجأة بسبب الحمل."
    },
    lactation: {
      status: "generally_compatible",
      label: "من الخيارات المفضلة غالبًا",
      summary: "مستوياته في الحليب منخفضة عادةً مقارنةً بكثير من مضادات الاكتئاب؛ تُراقب حالة الرضيع."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=sertraline" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=sertraline+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "fluoxetine",
    name: "Fluoxetine",
    nameAr: "فلوكسيتين",
    drugClass: "SSRI antidepressant",
    pregnancy: {
      status: "caution",
      label: "تقييم فردي",
      summary: "يجب موازنة فوائد استمرار علاج الاكتئاب مع المخاطر المحتملة؛ لا يُوقف أو يُبدل دون الطبيب."
    },
    lactation: {
      status: "caution",
      label: "بحسب الحالة",
      summary: "له عمر نصفي طويل وقد يتراكم لدى الرضيع؛ تُراجع الأعراض والبدائل، خصوصًا لدى حديثي الولادة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=fluoxetine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=fluoxetine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "carbamazepine",
    name: "Carbamazepine",
    nameAr: "كاربامازيبين",
    drugClass: "Antiseizure medication",
    pregnancy: {
      status: "caution",
      label: "تقييم اختصاصي ضروري",
      summary: "يرتبط بزيادة خطر بعض التشوهات الخلقية؛ يجب التخطيط للحمل ومراجعة الجرعة وحمض الفوليك مع اختصاصي، دون إيقافه فجأة."
    },
    lactation: {
      status: "caution",
      label: "مع مراقبة الرضيع",
      summary: "قد يُستخدم عند الحاجة، لكن تُراقب علامات النعاس أو ضعف الرضاعة أو اليرقان، مع متابعة طبية."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=carbamazepine" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=carbamazepine+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "valproate",
    name: "Valproate / Valproic acid",
    nameAr: "فالبروات / حمض الفالبرويك",
    drugClass: "Antiseizure medication / mood stabilizer",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب أثناء الحمل متى أمكن",
      summary: "يرتبط بارتفاع خطر التشوهات الخلقية وتأثيرات على النمو العصبي؛ لا يُوقف فجأة، بل يلزم تواصل عاجل مع الاختصاصي لوضع خطة آمنة."
    },
    lactation: {
      status: "caution",
      label: "تقييم ومراقبة",
      summary: "قد يكون متوافقًا في بعض الحالات تحت إشراف طبي؛ تُراقب علامات اليرقان أو الكدمات أو ضعف الرضاعة."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=valproic+acid" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=valproic+acid+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "folic-acid",
    name: "Folic acid",
    nameAr: "حمض الفوليك",
    drugClass: "Vitamin B9",
    pregnancy: {
      status: "generally_compatible",
      label: "موصى به قبل الحمل وبدايته",
      summary: "يساعد على تقليل خطر عيوب الأنبوب العصبي؛ تختلف الجرعة المطلوبة بحسب عوامل الخطورة وتوجيهات الطبيب."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق",
      summary: "فيتامين ضروري؛ تُحدد الجرعة حسب احتياج الأم وتوصيات الرعاية الصحية."
    },
    sources: [
      { title: "NIH Office of Dietary Supplements", url: "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=folic+acid+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "ferrous-sulfate",
    name: "Ferrous sulfate",
    nameAr: "كبريتات الحديدوز",
    drugClass: "Iron supplement",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند الحاجة",
      summary: "يُستخدم لعلاج نقص الحديد عند وجود استطباب؛ تُحدد الجرعة حسب التحاليل والتحمل."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق",
      summary: "يمكن استخدامه لعلاج نقص الحديد؛ الجرعة المناسبة تعتمد على حاجة الأم."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=ferrous+sulfate" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=iron+salts+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "warfarin",
    name: "Warfarin",
    nameAr: "وارفارين",
    drugClass: "Vitamin K antagonist anticoagulant",
    pregnancy: {
      status: "avoid",
      label: "يُتجنب في معظم حالات الحمل",
      summary: "قد يسبب تشوهات ونزفًا جنينيًا؛ توجد استثناءات تخصصية محدودة، لذلك يلزم تدبير عاجل من فريق مختص ولا يُغيّر العلاج ذاتيًا."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "لا يُتوقع انتقال كميات مهمة إلى الحليب، ويُعد متوافقًا عادةً مع الرضاعة؛ يجب استمرار مراقبة INR للأم."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=warfarin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=warfarin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "heparin",
    name: "Heparin (class)",
    nameAr: "الهيبارين",
    drugClass: "Anticoagulant",
    pregnancy: {
      status: "generally_compatible",
      label: "يُستخدم عند وجود استطباب",
      summary: "الهيبارين غير المجزأ لا يعبر المشيمة عادةً؛ اختيار النوع والجرعة يحتاج إشرافًا ومراقبة طبية."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "لا يُتوقع امتصاصه فمويًا لدى الرضيع؛ يعتمد العلاج على نوع الهيبارين وسبب استخدامه."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=heparin" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=heparin+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "prednisolone",
    name: "Prednisolone",
    nameAr: "بريدنيزولون",
    drugClass: "Corticosteroid",
    pregnancy: {
      status: "caution",
      label: "بحسب المرض والجرعة",
      summary: "قد يكون ضروريًا لعلاج أمراض التهابية أو مناعية؛ تُستخدم أقل جرعة فعالة مع مراقبة الأم والجنين."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "تصل كميات منخفضة إلى الحليب؛ الجرعات العالية قد تستدعي توقيتًا خاصًا للرضاعة وفق نصيحة الطبيب."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=prednisolone" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=prednisolone+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  },
  {
    id: "fluconazole",
    name: "Fluconazole",
    nameAr: "فلوكونازول",
    drugClass: "Triazole antifungal",
    pregnancy: {
      status: "caution",
      label: "يعتمد على الجرعة والمدة",
      summary: "يُفضّل غالبًا العلاج الموضعي للعدوى الفطرية المهبلية أثناء الحمل؛ ترتبط الجرعات العالية أو المطوّلة بمخاوف جنينية."
    },
    lactation: {
      status: "generally_compatible",
      label: "متوافق غالبًا",
      summary: "قد يُستخدم أثناء الرضاعة عند الحاجة؛ كمية الدواء التي يتلقاها الرضيع عبر الحليب أقل من الجرعات العلاجية المستخدمة له عادةً."
    },
    sources: [
      { title: "DailyMed", url: "https://dailymed.nlm.nih.gov/dailymed/search.cfm?query=fluconazole" },
      { title: "LactMed", url: "https://www.ncbi.nlm.nih.gov/books/?term=fluconazole+LactMed" }
    ],
    legacyFDA: { category: null, verified: false },
    review: true
  }
];

/* =========================================
   EXPORT DATABASE
========================================= */

window.DRUGS = DRUGS;
