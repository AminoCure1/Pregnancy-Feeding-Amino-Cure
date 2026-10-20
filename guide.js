"use strict";

window.GUIDE = {
  ui: {
    ar: {
      cardTitle: "دليل الحمل والرضاعة",
      cardDesc: "تكوّن الجنين والرضاعة للصيادلة",
      eyebrow: "دليل علمي",
      title: "الحمل والرضاعة",
      pregnancy: "الحمل",
      lactation: "الرضاعة",
      pharma: "ملاحظة صيدلانية",
      related: "أدوية ذات صلة:",
      sources: "المراجع",
      note: "محتوى تعليمي للصيادلة والطلبة، ولا يغني عن المراجع المتخصصة أو التقييم السريري."
    },
    en: {
      cardTitle: "Pregnancy & Lactation Guide",
      cardDesc: "Fetal development and lactation for pharmacists",
      eyebrow: "SCIENTIFIC GUIDE",
      title: "Pregnancy & Lactation",
      pregnancy: "Pregnancy",
      lactation: "Lactation",
      pharma: "Pharmacist note",
      related: "Related drugs:",
      sources: "References",
      note: "Educational content (Arabic) for pharmacists and students. Not a substitute for specialist references or clinical assessment."
    }
  },

  pregnancy: {
    intro: "من الإخصاب إلى الولادة: كيف يتكوّن الجنين، وما الذي يهم الصيدلاني في كل مرحلة.",
    sections: [
      {
        b: "أساسيات",
        t: "كيف يُحسب عمر الحمل؟",
        s: "يُحسب عمر الحمل سريريًا (Gestational age) من أول يوم في آخر دورة شهرية، وليس من يوم الإخصاب.",
        p: [
          "يحدث الإخصاب عادةً بعد نحو أسبوعين من بداية الدورة، لذلك عمر الجنين الفعلي أقل بنحو أسبوعين من عمر الحمل السريري.",
          "مدة الحمل الطبيعي نحو 40 أسبوعًا من آخر دورة (نحو 38 أسبوعًا من الإخصاب).",
          "تقسيم ACOG: الثلث الأول حتى 13 أسبوعًا و6 أيام، والثاني من 14+0 إلى 27+6، والثالث من 28+0 حتى الولادة.",
          "عند الاختلاف الكبير بين موعد الدورة وقياسات الموجات فوق الصوتية المبكرة، تُعتمد قياسات الموجات وفق معايير ACOG."
        ],
        x: "كثير من المراجع تذكر نافذة التشوهات بالأسابيع بعد الإخصاب. أضف أسبوعين عند التحويل إلى عمر الحمل السريري: الأسابيع 3–8 بعد الإخصاب تقابل تقريبًا الأسابيع 5–10 من آخر دورة."
      },
      {
        b: "0–2 أسبوع بعد الإخصاب",
        t: "مرحلة ما قبل التكوّن: الكل أو لا شيء",
        s: "تشمل الإخصاب وانقسام اللاقحة وانغراس الكيسة الأريمية في بطانة الرحم.",
        p: [
          "بعد الانغراس يبدأ إفراز هرمون hCG، وتتكوّن طبقتا القرص الجنيني.",
          "التعرض لمادة سامة في هذه المرحلة يؤدي غالبًا إما إلى فقد الحمل أو إلى عدم وجود أثر، لأن الخلايا ما زالت متعددة القدرات ويمكن تعويض التالف منها."
        ],
        x: "نادرًا ما تسبب الأدوية تشوهات في هذه الفترة، لكن بعض الأدوية طويلة العمر النصفي قد يمتد أثرها إلى مرحلة تكوّن الأعضاء."
      },
      {
        b: "3–8 أسابيع بعد الإخصاب",
        t: "مرحلة تكوّن الأعضاء (Organogenesis)",
        s: "تتحول الطبقات الجرثومية الثلاث إلى أعضاء الجسم، وهي أعلى فترات الحساسية للتشوهات الكبرى.",
        p: [
          "لكل عضو فترة حرجة: القلب أبكر من الدماغ، والدماغ يستمر نموه حتى بعد الولادة.",
          "يُغلق الأنبوب العصبي خلال الأسابيع الأولى من الحمل، وغالبًا قبل أن تعرف المرأة بالحمل.",
          "شدة التأثير تعتمد على الجرعة ومدة التعرض والاستعداد الوراثي للأم والجنين."
        ],
        x: "من الأمثلة المعروفة: فالبروات (عيوب الأنبوب العصبي)، الوارفارين (نافذة 6–9 أسابيع بعد الإخصاب)، الليثيوم (شذوذ إبشتاين)، الفينيتوين (متلازمة الهيدانتوين الجنينية). حمض الفوليك يُستحسن قبل الحمل.",
        r: ["valproate", "warfarin", "carbamazepine", "folic-acid"]
      },
      {
        b: "من الأسبوع 9 بعد الإخصاب",
        t: "مرحلة الجنين: النمو والنضج",
        s: "تستمر الأعضاء في النمو والنضج الوظيفي حتى الولادة.",
        p: [
          "التعرض في هذه المرحلة يسبب غالبًا ضعف نمو أو خللًا وظيفيًا أو تشوهات بسيطة، أكثر من التشوهات الكبرى.",
          "الكلى والرئتان والدماغ تواصل التطور خلال الثلثين الثاني والثالث."
        ],
        x: "الأدوية ذات التأثيرات المتأخرة: مضادات الالتهاب غير الستيرويدية، مثبطات ACE وحاصرات الأنجيوتنسين، الأمينوغليكوزيدات، التتراسيكلينات.",
        r: ["ibuprofen", "enalapril", "losartan", "doxycycline"]
      },

      {
        b: "الشهر 1 · الأسابيع 1–4",
        t: "الشهر الأول",
        s: "الأسبوعان الأولان يُحسبان من الدورة قبل الإخصاب أصلًا؛ يحدث الإخصاب ثم الانغراس تقريبًا في النصف الثاني من الشهر.",
        p: [
          "قد لا تعرف المرأة أنها حامل خلال هذا الشهر.",
          "تختبر معظم النساء الحمل بعد تأخر الدورة."
        ],
        x: "راجع الأدوية المزمنة عند التخطيط للحمل، وأوصِ ببدء حمض الفوليك قبل الحمل.",
        r: ["folic-acid"]
      },
      {
        b: "الشهر 2 · الأسابيع 5–8",
        t: "الشهر الثاني",
        s: "تبدأ أخطر فترة لتكوّن الأعضاء.",
        p: [
          "يتكوّن القلب ويبدأ بالنبض تقريبًا في الأسبوع 6 من آخر دورة.",
          "يُغلق الأنبوب العصبي، وتتمايز الحويصلات الدماغية، وتظهر براعم الأطراف."
        ],
        x: "اسأل دائمًا عن احتمال الحمل قبل صرف دواء ممسخ لامرأة في سن الإنجاب؛ فكثير من الحالات تُكتشف خلال هذا الشهر.",
        r: ["valproate", "warfarin"]
      },
      {
        b: "الشهر 3 · الأسابيع 9–13",
        t: "الشهر الثالث",
        s: "يكتمل معظم تكوّن الأعضاء الأساسية وتبدأ مرحلة الجنين.",
        p: [
          "تتضح الأصابع وتتمايز الأعضاء التناسلية الخارجية.",
          "يُجرى عادةً فحص الشفافية القفوية (NT) بين الأسبوع 11 و13+6."
        ],
        x: "تتناقص مخاطر التشوهات الكبرى تدريجيًا، لكن بعض الأجهزة (مثل الدماغ) تظل حساسة. ما زال الغثيان شائعًا، ويُقيَّم علاجه بحسب الحالة.",
        r: ["ondansetron", "metoclopramide"]
      },
      {
        b: "الشهر 4 · الأسابيع 14–17",
        t: "الشهر الرابع",
        s: "بداية الثلث الثاني ونمو سريع.",
        p: [
          "تعمل الكلى ويسهم بول الجنين في تكوين السائل الأمنيوسي.",
          "تتحسن الحركة والتنسيق العصبي العضلي، وتخف أعراض الغثيان عند كثير من الحوامل."
        ],
        x: "مثبطات ACE وحاصرات الأنجيوتنسين تضر كلى الجنين في الثلثين الثاني والثالث. التتراسيكلينات قد تسبب تلونًا دائمًا للأسنان بعد الأسبوع 16 تقريبًا.",
        r: ["enalapril", "losartan", "doxycycline"]
      },
      {
        b: "الشهر 5 · الأسابيع 18–22",
        t: "الشهر الخامس",
        s: "يُجرى عادةً فحص التشريح بالموجات بين الأسبوع 18 و22.",
        p: [
          "قد تشعر الأم بحركة الجنين لأول مرة.",
          "يتطور السمع."
        ],
        x: "من الأسبوع 20: تحذّر FDA من مضادات الالتهاب غير الستيرويدية لأنها قد تسبب خللًا كلويًا للجنين وقلة السائل الأمنيوسي. الأمينوغليكوزيدات ترتبط بسمّية الأذن.",
        r: ["ibuprofen", "diclofenac", "naproxen"]
      },
      {
        b: "الشهر 6 · الأسابيع 23–27",
        t: "الشهر السادس",
        s: "تتطور الحويصلات الرئوية ويبدأ إنتاج السيرفاكتانت تدريجيًا.",
        p: [
          "يُجرى عادةً فحص سكري الحمل بين الأسبوع 24 و28.",
          "ترتفع الحاجة للإنسولين مع تقدم الحمل بسبب مقاومة الإنسولين."
        ],
        x: "قد يقرر الطبيب إعطاء الكورتيكوستيرويدات للأم عند خطر الولادة المبكرة لتسريع نضج رئة الجنين. هذا قرار طبي ولا يُحدد ذاتيًا.",
        r: ["insulin", "metformin"]
      },
      {
        b: "الشهر 7 · الأسابيع 28–31",
        t: "الشهر السابع",
        s: "بداية الثلث الثالث؛ ينمو الدماغ بسرعة وتتراكم الدهون تحت الجلد.",
        p: [
          "يستمر نضج الرئتين وزيادة وزن الجنين."
        ],
        x: "مضادات الالتهاب غير الستيرويدية تُتجنب من الأسبوع 30 فصاعدًا لخطر إغلاق القناة الشريانية مبكرًا. الأسبرين 81 ملغ يختلف عن جرعات المسكّن ويُوصف بقرار الطبيب.",
        r: ["ibuprofen", "aspirin"]
      },
      {
        b: "الشهر 8 · الأسابيع 32–35",
        t: "الشهر الثامن",
        s: "يزداد وزن الجنين وتستمر مرحلة النضج.",
        p: [
          "تقل مساحة الحركة داخل الرحم."
        ],
        x: "راجع الأدوية التي قد تؤثر على الوليد قرب الولادة، مثل نيتروفورانتوين الذي يُتجنب عادةً قرب الولادة. ارتفاع الضغط في هذه المرحلة يحتاج متابعة وعلاجًا مناسبًا.",
        r: ["nitrofurantoin", "labetalol"]
      },
      {
        b: "الشهر 9 · الأسابيع 36–40",
        t: "الشهر التاسع",
        s: "يُعد الحمل تامًا من الأسبوع 39+0 إلى 40+6 وفق ACOG، ويستعد الجنين للولادة.",
        p: [
          "الولادة قبل الأسبوع 37 تُسمى مبكرة، ومن 37 إلى 38+6 مبكرة التمام."
        ],
        x: "قد تؤثر بعض الأدوية قرب الولادة على الوليد، مثل تثبيط التنفس مع الأفيونات وأعراض التكيف مع مضادات الاكتئاب من نوع SSRI، لذا يُبلَّغ فريق الولادة بجميع أدوية الأم.",
        r: ["tramadol", "sertraline"]
      },

      {
        b: "علم الأدوية",
        t: "تغيرات جسم الأم وتأثيرها على الدواء",
        s: "تتغير الحرائك الدوائية (ADME) تدريجيًا مع تقدم الحمل.",
        p: [
          "يرتفع حجم البلازما بنحو 50% ويزداد الماء الكلي، فيزيد حجم التوزيع وتنخفض تراكيز الأدوية المحبة للماء.",
          "ينخفض الألبومين، فترتفع النسبة الحرة من الأدوية عالية الارتباط بالبروتين.",
          "يزداد تدفق الدم الكلوي ومعدل الترشيح الكبيبي (نحو 50%)، فتزداد إزالة الأدوية التي تُطرح كلويًا.",
          "ترتفع فعالية إنزيمات CYP3A4 وCYP2D6 وCYP2C9، وتنخفض CYP1A2 وCYP2C19."
        ],
        x: "قد تنخفض مستويات بعض الأدوية فتحتاج متابعة ومعايرة (مثل لاموتريجين وسيرترالين وليفوثيروكسين). لا تعدّل الجرعة دون الطبيب.",
        r: ["levothyroxine", "sertraline"]
      },
      {
        b: "علم الأدوية",
        t: "عبور المشيمة",
        s: "تعبر معظم الأدوية المشيمة بالانتشار البسيط، لكن بدرجات مختلفة.",
        p: [
          "يزداد العبور مع: وزن جزيئي صغير (أقل من نحو 500 دالتون)، ذوبان دهني عالٍ، قلة التأين، وقلة الارتباط ببروتينات البلازما.",
          "الجزيئات الكبيرة مثل الإنسولين والهيبارين غير المجزأ لا تعبر بكميات مهمة عادةً.",
          "الأجسام المضادة من نوع IgG (مثل الأدوية الحيوية) تعبر بنقل نشط عبر مستقبل FcRn، ويزداد ذلك في الثلثين الثاني والثالث."
        ],
        x: "عبور الدواء للمشيمة لا يعني بالضرورة حدوث ضرر؛ المهم الجرعة وتوقيت الحمل.",
        r: ["heparin", "insulin"]
      },
      {
        b: "تشوهات الأجنة",
        t: "أمثلة على أدوية وموادّ ممسخة",
        s: "قائمة تعليمية مختصرة بأشهر الأمثلة وتأثيراتها.",
        p: [
          "الوارفارين: نقص تنسج الأنف وعيوب عظمية وعصبية.",
          "الفالبروات: عيوب الأنبوب العصبي وتأثيرات على النمو العصبي.",
          "الفينيتوين: متلازمة الهيدانتوين الجنينية (شفة/حنك مشقوق، ضمور الأظافر).",
          "الكاربامازيبين: ارتفاع خطر بعض التشوهات الخلقية.",
          "الليثيوم: شذوذ إبشتاين في القلب.",
          "مثبطات ACE وحاصرات الأنجيوتنسين: سمّية كلوية جنينية وتشوهات عظام الجمجمة.",
          "التتراسيكلينات: تلون الأسنان الدائم.",
          "الأمينوغليكوزيدات: سمّية الأذن.",
          "الكحول: متلازمة الكحول الجنينية؛ الثاليدوميد: فقمية الأطراف؛ DES: سرطان خلايا مهبلي صافٍ لدى الإناث."
        ],
        x: "للتعليم فقط. القرار العلاجي يعتمد على الجرعة والتوقيت والبدائل، وتُراجع المراجع المتخصصة لكل دواء.",
        r: ["warfarin", "valproate", "carbamazepine", "losartan"]
      },
      {
        b: "تصنيفات",
        t: "تصنيف FDA القديم (A, B, C, D, X)",
        s: "استبدلت FDA التصنيف الحرفي القديم بنظام PLLR الذي بدأ العمل به ابتداءً من 2015.",
        p: [
          "النظام الجديد يعرض ملخص المخاطر والبيانات السريرية والاعتبارات الإكلينيكية بدل حرف واحد.",
          "التصنيف القديم تاريخي ولا يُستخدم وحده لاتخاذ قرار علاجي."
        ],
        x: "عند قراءة مراجع قديمة تُذكر فيها الأحرف، تحقق من النشرة الحديثة للدواء."
      }
    ],
    sources: [
      { name: "FDA — Pregnancy and Lactation Labeling Resources", url: "https://www.fda.gov/drugs/labeling-information-drug-products/pregnancy-and-lactation-labeling-resources" },
      { name: "FDA — NSAIDs after 20 weeks", url: "https://www.fda.gov/drugs/drug-safety-and-availability/fda-recommends-avoiding-use-nsaids-pregnancy-20-weeks-or-later-because-they-can-result-low-amniotic" },
      { name: "UNSW Embryology — Gestational Age", url: "https://embryology.med.unsw.edu.au/embryology/index.php/Gestational_Age" },
      { name: "Frontiers in Medicine 2023 — Drug disposition in pregnancy", url: "https://www.frontiersin.org/articles/10.3389/fmed.2023.1241456/full" },
      { name: "Tidsskriftet — Pharmacokinetics in pregnancy", url: "https://tidsskriftet.no/en/node/51309/pdf" }
    ]
  },

  lactation: {
    intro: "كيف يتكوّن الحليب، وكيف ينتقل الدواء إليه، وكيف نقيّم أمانه للرضيع.",
    sections: [
      {
        b: "فسيولوجيا",
        t: "الهرمونات المسؤولة عن الرضاعة",
        s: "يعمل هرمونان رئيسيان معًا: البرولاكتين للإنتاج والأوكسيتوسين للإدرار.",
        p: [
          "البرولاكتين (الغدة النخامية الأمامية): ينبّه الخلايا اللبنية في الحويصلات لتصنيع الحليب.",
          "الأوكسيتوسين (الغدة النخامية الخلفية): يقلّص الخلايا العضلية الطلائية فيندفع الحليب (منعكس الإدرار).",
          "المص يحفّز إفراز الهرمونين، وقد يثبّط التوتر الشديد منعكس الإدرار."
        ],
        x: "ناهضات الدوبامين (مثل بروموكريبتين وكابيرجولين) والإستروجين بجرعات عالية تقلل الحليب. الميتوكلوبراميد يرفع البرولاكتين.",
        r: ["metoclopramide"]
      },
      {
        b: "فسيولوجيا",
        t: "مراحل تكوّن الحليب (Lactogenesis)",
        s: "ثلاث مراحل متعاقبة من منتصف الحمل حتى استقرار الإنتاج.",
        p: [
          "المرحلة I (منتصف الحمل إلى الولادة): تمايز الخلايا وإنتاج اللبأ بكميات قليلة، ويكبح البروجسترون الإنتاج الغزير.",
          "المرحلة II (نحو 30–72 ساعة بعد الولادة): بعد خروج المشيمة ينخفض البروجسترون ويرتفع البرولاكتين فيبدأ «نزول الحليب» بكميات كبيرة. التأخر بعد اليوم الرابع تقريبًا يُعد تأخرًا.",
          "المرحلة III (من نحو اليوم 9): يعتمد الإنتاج على الطلب؛ كلما أُفرغ الثدي أكثر زاد الحليب."
        ],
        x: "من أسباب تأخر المرحلة II: بقايا مشيمة، وسكري غير منضبط. ضبط السكر مهم لنجاح الرضاعة."
      },
      {
        b: "فسيولوجيا",
        t: "أنواع الحليب",
        s: "يتغير تركيب الحليب مع الوقت ليناسب احتياج الرضيع.",
        p: [
          "اللبأ (Colostrum): قليل الكمية، غني بالأجسام المضادة خاصة IgA وعوامل النمو.",
          "الحليب الانتقالي: خليط بين اللبأ والحليب الناضج وتزداد كميته.",
          "الحليب الناضج: يستقر غالبًا في نحو نهاية الأسبوع الثاني بعد الولادة."
        ],
        x: "الرضيع حديث الولادة يرضع كميات صغيرة جدًا من اللبأ في الأيام الأولى، لذلك يكون التعرض الدوائي منخفضًا غالبًا في هذه الفترة، لكن عمره وقدرته على التخلص من الدواء يظلان عاملين مهمين."
      },
      {
        b: "حرائك الدواء",
        t: "ما الذي يحدد انتقال الدواء إلى الحليب؟",
        s: "ينتقل معظم الدواء بالانتشار السلبي من البلازما إلى الحليب.",
        p: [
          "يزداد الانتقال مع: وزن جزيئي صغير، ارتباط ضعيف بالبروتين، ذوبان دهني عالٍ، pKa مناسب، وعمر نصفي طويل.",
          "الحليب أكثر حمضية قليلًا من البلازما، لذلك قد تتراكم القواعد الضعيفة فيه (احتجاز أيوني).",
          "الجزيئات الكبيرة (الإنسولين والهيبارين والأجسام المضادة الأحادية) لا تُمتص غالبًا من فم الرضيع.",
          "لكي يتأثر الرضيع يجب أن يُمتص الدواء من جهازه الهضمي (التوافر الفموي)."
        ],
        x: "الأدوية التي لا تمتص فمويًا (مثل الإنسولين) آمنة نسبيًا للرضيع حتى لو وُجدت في الحليب.",
        r: ["insulin", "heparin"]
      },
      {
        b: "حرائك الدواء",
        t: "الجرعة النسبية للرضيع (RID)",
        s: "مقياس يقدّر ما يتلقاه الرضيع من الدواء عبر الحليب كنسبة من جرعة الأم، مصحَّحة بالوزن.",
        p: [
          "RID = (جرعة الرضيع عبر الحليب mg/kg/day ÷ جرعة الأم mg/kg/day) × 100.",
          "أقل من 10%: متوافق عادةً مع الرضاعة (القاعدة الأشهر المنسوبة إلى Hale).",
          "تقسيم أدق: أقل من 2% ضئيل، 2–5% صغير، 5–10% متوسط، أكثر من 10% مرتفع. وحد 5% يعطي هامش أمان أكبر.",
          "10–25% قد يُقبل بمراقبة، وأكثر من 25% يُتجنب عادةً بحسب Hale."
        ],
        x: "RID ليس ضمانًا: قد تحدث أعراض لدى الرضيع رغم RID أقل من 10% إذا كان تخلصه من الدواء بطيئًا (خديج أو حديث الولادة)، أو إذا كانت جرعة الأم عالية جدًا."
      },
      {
        b: "حرائك الدواء",
        t: "نسبة الحليب إلى البلازما (M/P)",
        s: "هي تركيز الدواء في الحليب مقسومًا على تركيزه في بلازما الأم.",
        p: [
          "M/P أقل من 1: انتقال قليل غالبًا.",
          "M/P أكبر من 1: قد يتركّز الدواء في الحليب (مثل اليود).",
          "النسبة وحدها لا تعطي الكمية الفعلية التي يتلقاها الرضيع، لذا تُستخدم مع RID."
        ],
        x: "استخدم M/P وRID معًا، ثم اربطهما بعمر الرضيع وحالته."
      },
      {
        b: "تقييم الأمان",
        t: "عوامل تخص الرضيع",
        s: "الحكم النهائي لا يعتمد على الدواء فقط، بل على الرضيع أيضًا.",
        p: [
          "العمر: حديثو الولادة (خصوصًا أول شهرين) والخدّج أقل قدرة على التخلص من الأدوية.",
          "حجم الرضاعة: الرضيع الذي يعتمد كليًا على الحليب يتعرض أكثر.",
          "الأدوية ذات العمر النصفي الطويل قد تتراكم لدى الرضيع.",
          "علامات تستدعي الانتباه: نعاس مفرط، ضعف الرضاعة، يرقان، إسهال، طفح."
        ],
        x: "أمثلة: فلوكسيتين ونابروكسين بعمر نصفي طويل، وترامادول قد يسبب نعاسًا وتثبيطًا للتنفس لدى الرضيع.",
        r: ["fluoxetine", "naproxen", "tramadol"]
      },
      {
        b: "تقييم الأمان",
        t: "نصائح عملية للصيدلاني",
        s: "خطوات بسيطة تقلل تعرض الرضيع.",
        p: [
          "اختر دواءً بيانات سلامته أوفر (مثل مدرج في LactMed)، وبعمر نصفي قصير.",
          "اجعل أخذ الجرعة بعد الرضعة مباشرة أو قبل أطول فترة نوم للرضيع، لتقليل الدواء في الحليب عند الرضعة التالية.",
          "فضّل الاستنشاق أو الموضعي عند توفر خيار مناسب لأن التعرض الجهازي أقل.",
          "قيّم أمان الدواء بمقياس Hale (L1 الأكثر أمانًا إلى L5 المضاد استطباب) ودعمه بمصدر مثل LactMed.",
          "لا توقف الرضاعة بسبب دواء قبل مراجعة المصادر؛ كثير من الأدوية متوافق."
        ],
        x: "نقطة قرار: هل العلاج ضروري؟ هل يوجد بديل أقل تعرضًا؟ هل حالة الرضيع تسمح؟",
        r: ["ibuprofen", "paracetamol", "salbutamol", "budesonide"]
      }
    ],
    sources: [
      { name: "NIH — LactMed (Drugs and Lactation Database)", url: "https://www.ncbi.nlm.nih.gov/books/NBK501922/" },
      { name: "Basic Clin Pharmacol Toxicol — Relative Infant Dose", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12450841" },
      { name: "Tidsskriftet — Legemiddelbruk ved amming", url: "https://tidsskriftet.no/2012/05/oversiktsartikkel/legemiddelbruk-ved-amming" }
    ]
  }
};
window.GUIDE.ui.en.note =
  "Educational content for pharmacists and students. Not a substitute for specialist references or clinical assessment.";

/* ---------- Calculator strings ---------- */
window.GUIDE.calc = {
  ar: {
    title: "حاسبة عمر الحمل",
    label: "أول يوم من آخر دورة شهرية",
    note: "تقدير تقريبي بافتراض دورة منتظمة (28 يومًا). تُعتمد الموجات فوق الصوتية المبكرة لتأكيد العمر.",
    future: "التاريخ في المستقبل، تحقق منه.",
    long: "المدة أطول من 42 أسبوعًا، تحقق من التاريخ.",
    age: "عمر الحمل",
    tri: "الثلث",
    triNames: ["الأول", "الثاني", "الثالث"],
    fert: "العمر منذ الإخصاب (تقريبًا)",
    beforeFert: "قبل الإخصاب المتوقع",
    edd: "الموعد المتوقع للولادة",
    window: "ضمن فترة تكوّن الأعضاء (نحو الأسبوع 5–10 من آخر دورة)، وهي أعلى فترة حساسية للأدوية الممسخة.",
    fmt: (w, d) => `${w} أسبوعًا و${d} أيام`,
    locale: "ar-EG-u-nu-latn"
  },
  en: {
    title: "Gestational Age Calculator",
    label: "First day of last menstrual period",
    note: "Approximate estimate assuming a regular 28-day cycle. Early ultrasound is used to confirm dating.",
    future: "The date is in the future. Please check it.",
    long: "Longer than 42 weeks. Please check the date.",
    age: "Gestational age",
    tri: "Trimester",
    triNames: ["First", "Second", "Third"],
    fert: "Age since fertilization (approx.)",
    beforeFert: "Before expected fertilization",
    edd: "Estimated due date",
    window: "Within the organogenesis window (about weeks 5–10 from LMP), the period of highest sensitivity to teratogenic drugs.",
    fmt: (w, d) => `${w} weeks ${d} days`,
    locale: "en-US"
  }
};

/* ---------- English content (same order as Arabic) ---------- */
window.GUIDE.en = {
  pregnancy: {
    intro: "From fertilization to delivery: how the fetus develops, and what matters to the pharmacist at each stage.",
    sections: [
      {
        b: "Basics",
        t: "How is gestational age calculated?",
        s: "Gestational age is counted clinically from the first day of the last menstrual period (LMP), not from fertilization.",
        p: [
          "Fertilization usually occurs about two weeks after the start of the cycle, so the true age of the embryo is about two weeks less than the clinical gestational age.",
          "A normal pregnancy lasts about 40 weeks from the LMP (about 38 weeks from fertilization).",
          "ACOG trimesters: first up to 13 weeks 6 days, second 14+0 to 27+6, third from 28+0 until delivery.",
          "When the LMP and early ultrasound dating differ significantly, ultrasound dating is used according to ACOG criteria."
        ],
        x: "Many references state the teratogenic window in weeks after fertilization. Add two weeks to convert to clinical gestational age: weeks 3–8 after fertilization roughly equal weeks 5–10 from the LMP."
      },
      {
        b: "0–2 weeks after fertilization",
        t: "Pre-embryonic period: all or none",
        s: "Includes fertilization, zygote division and implantation of the blastocyst in the uterine lining.",
        p: [
          "After implantation, hCG secretion begins and the two layers of the embryonic disc form.",
          "Exposure to a toxic agent at this stage usually leads either to pregnancy loss or to no effect, because the cells are still pluripotent and damaged cells can be replaced."
        ],
        x: "Drugs rarely cause malformations in this period, but some long half-life drugs may persist into the organogenesis period."
      },
      {
        b: "3–8 weeks after fertilization",
        t: "Organogenesis",
        s: "The three germ layers become the organs of the body. This is the period of highest sensitivity to major malformations.",
        p: [
          "Each organ has its own critical period: the heart is earlier than the brain, which continues developing after birth.",
          "The neural tube closes during the first weeks of pregnancy, often before the woman knows she is pregnant.",
          "Severity depends on dose, duration of exposure, and the genetic susceptibility of mother and fetus."
        ],
        x: "Well-known examples: valproate (neural tube defects), warfarin (window 6–9 weeks after fertilization), lithium (Ebstein anomaly), phenytoin (fetal hydantoin syndrome). Folic acid is advised before conception."
      },
      {
        b: "From week 9 after fertilization",
        t: "Fetal period: growth and maturation",
        s: "Organs continue to grow and mature functionally until delivery.",
        p: [
          "Exposure at this stage more often causes growth restriction, functional problems or minor anomalies than major malformations.",
          "The kidneys, lungs and brain keep developing through the second and third trimesters."
        ],
        x: "Drugs with late effects: NSAIDs, ACE inhibitors and ARBs, aminoglycosides, tetracyclines."
      },
      {
        b: "Month 1 · Weeks 1–4",
        t: "Month 1",
        s: "The first two weeks are counted from the cycle, before fertilization. Fertilization and implantation occur roughly in the second half of the month.",
        p: [
          "The woman may not know she is pregnant during this month.",
          "Most women test for pregnancy after a missed period."
        ],
        x: "Review chronic medications when pregnancy is planned, and advise starting folic acid before conception."
      },
      {
        b: "Month 2 · Weeks 5–8",
        t: "Month 2",
        s: "The most dangerous period of organ formation begins.",
        p: [
          "The heart forms and starts beating at about week 6 from the LMP.",
          "The neural tube closes, brain vesicles differentiate, and limb buds appear."
        ],
        x: "Always ask about possible pregnancy before dispensing a teratogenic drug to a woman of childbearing age; many pregnancies are discovered during this month."
      },
      {
        b: "Month 3 · Weeks 9–13",
        t: "Month 3",
        s: "Most basic organs are complete and the fetal period begins.",
        p: [
          "Fingers become distinct and the external genitalia differentiate.",
          "Nuchal translucency (NT) screening is usually done between weeks 11 and 13+6."
        ],
        x: "The risk of major malformations gradually declines, but some systems (such as the brain) remain sensitive. Nausea is still common and its treatment is assessed case by case."
      },
      {
        b: "Month 4 · Weeks 14–17",
        t: "Month 4",
        s: "Start of the second trimester and rapid growth.",
        p: [
          "The kidneys function and fetal urine contributes to amniotic fluid.",
          "Movement and neuromuscular coordination improve, and nausea eases in many women."
        ],
        x: "ACE inhibitors and ARBs harm fetal kidneys in the second and third trimesters. Tetracyclines may cause permanent tooth discoloration after about week 16."
      },
      {
        b: "Month 5 · Weeks 18–22",
        t: "Month 5",
        s: "The anatomy ultrasound scan is usually done between weeks 18 and 22.",
        p: [
          "The mother may feel fetal movement for the first time.",
          "Hearing develops."
        ],
        x: "From week 20, the FDA warns against NSAIDs because they may cause fetal kidney problems and low amniotic fluid. Aminoglycosides are associated with ototoxicity."
      },
      {
        b: "Month 6 · Weeks 23–27",
        t: "Month 6",
        s: "The alveoli develop and surfactant production gradually begins.",
        p: [
          "Gestational diabetes screening is usually done between weeks 24 and 28.",
          "Insulin requirements rise as pregnancy progresses because of insulin resistance."
        ],
        x: "The obstetrician may give corticosteroids when preterm delivery is a risk, to speed fetal lung maturation. This is a medical decision."
      },
      {
        b: "Month 7 · Weeks 28–31",
        t: "Month 7",
        s: "Start of the third trimester; the brain grows rapidly and subcutaneous fat accumulates.",
        p: [
          "Lung maturation continues and the fetus gains weight."
        ],
        x: "NSAIDs are avoided from week 30 onward because of the risk of premature closure of the ductus arteriosus. Aspirin 81 mg differs from analgesic doses and is prescribed by the physician."
      },
      {
        b: "Month 8 · Weeks 32–35",
        t: "Month 8",
        s: "The fetus gains weight and maturation continues.",
        p: [
          "Space for movement inside the uterus decreases."
        ],
        x: "Review drugs that may affect the newborn near delivery, such as nitrofurantoin, which is usually avoided close to term. Hypertension at this stage needs follow-up and appropriate treatment."
      },
      {
        b: "Month 9 · Weeks 36–40",
        t: "Month 9",
        s: "Per ACOG, full term is 39+0 to 40+6 weeks, and the fetus prepares for birth.",
        p: [
          "Delivery before week 37 is preterm, and 37 to 38+6 is early term."
        ],
        x: "Some drugs taken near delivery may affect the newborn, such as respiratory depression with opioids and adaptation symptoms with SSRI antidepressants, so the delivery team should be told about all maternal medications."
      },
      {
        b: "Pharmacology",
        t: "Maternal changes and their effect on drugs",
        s: "Pharmacokinetics (ADME) change gradually as pregnancy progresses.",
        p: [
          "Plasma volume rises by about 50% and total body water increases, so volume of distribution rises and concentrations of hydrophilic drugs fall.",
          "Albumin falls, so the free fraction of highly protein-bound drugs rises.",
          "Renal blood flow and glomerular filtration rate increase (about 50%), so renally eliminated drugs are cleared faster.",
          "CYP3A4, CYP2D6 and CYP2C9 activity increases, while CYP1A2 and CYP2C19 decrease."
        ],
        x: "Levels of some drugs may fall and need monitoring and dose titration (for example lamotrigine, sertraline, levothyroxine). Do not change the dose without the physician."
      },
      {
        b: "Pharmacology",
        t: "Placental transfer",
        s: "Most drugs cross the placenta by simple diffusion, to varying degrees.",
        p: [
          "Transfer increases with: small molecular weight (below about 500 Da), high lipid solubility, low ionization, and low plasma protein binding.",
          "Large molecules such as insulin and unfractionated heparin usually do not cross in significant amounts.",
          "IgG antibodies (such as biologic drugs) cross by active transport via the FcRn receptor, increasingly in the second and third trimesters."
        ],
        x: "Crossing the placenta does not necessarily mean harm; dose and timing of pregnancy matter."
      },
      {
        b: "Teratology",
        t: "Examples of teratogenic drugs and substances",
        s: "A short educational list of the best-known examples and their effects.",
        p: [
          "Warfarin: nasal hypoplasia and bone and neurological defects.",
          "Valproate: neural tube defects and effects on neurodevelopment.",
          "Phenytoin: fetal hydantoin syndrome (cleft lip/palate, nail hypoplasia).",
          "Carbamazepine: increased risk of some congenital malformations.",
          "Lithium: Ebstein anomaly of the heart.",
          "ACE inhibitors and ARBs: fetal renal toxicity and skull ossification defects.",
          "Tetracyclines: permanent tooth discoloration.",
          "Aminoglycosides: ototoxicity.",
          "Alcohol: fetal alcohol syndrome; thalidomide: phocomelia; DES: clear cell vaginal adenocarcinoma in female offspring."
        ],
        x: "For education only. Treatment decisions depend on dose, timing and alternatives, and specialist references should be checked for each drug."
      },
      {
        b: "Classification",
        t: "The old FDA letter categories (A, B, C, D, X)",
        s: "The FDA replaced the old letter system with the PLLR format, effective from 2015.",
        p: [
          "The new system presents a risk summary, clinical data and clinical considerations instead of a single letter.",
          "The old categories are historical and should not be used alone to make a treatment decision."
        ],
        x: "When reading older references that quote letters, check the current drug label."
      }
    ]
  },

  lactation: {
    intro: "How milk is made, how drugs reach it, and how to assess safety for the infant.",
    sections: [
      {
        b: "Physiology",
        t: "Hormones of lactation",
        s: "Two main hormones work together: prolactin for production and oxytocin for ejection.",
        p: [
          "Prolactin (anterior pituitary): stimulates lactocytes in the alveoli to synthesize milk.",
          "Oxytocin (posterior pituitary): contracts myoepithelial cells so milk is ejected (let-down reflex).",
          "Suckling stimulates release of both hormones, and severe stress may inhibit let-down."
        ],
        x: "Dopamine agonists (such as bromocriptine and cabergoline) and high-dose estrogens reduce milk supply. Metoclopramide raises prolactin."
      },
      {
        b: "Physiology",
        t: "Stages of lactogenesis",
        s: "Three successive stages from mid-pregnancy until production stabilizes.",
        p: [
          "Stage I (mid-pregnancy to birth): cell differentiation and small amounts of colostrum; progesterone suppresses copious production.",
          "Stage II (about 30–72 hours postpartum): after the placenta is delivered, progesterone falls and prolactin rises, so milk 'comes in' in large amounts. Onset after about day 4 is considered delayed.",
          "Stage III (from about day 9): supply depends on demand; the more the breast is emptied, the more milk is made."
        ],
        x: "Causes of delayed stage II include retained placental fragments and poorly controlled diabetes. Good glycemic control matters for breastfeeding success."
      },
      {
        b: "Physiology",
        t: "Types of milk",
        s: "Milk composition changes over time to suit the infant's needs.",
        p: [
          "Colostrum: small volume, rich in antibodies (especially IgA) and growth factors.",
          "Transitional milk: a mix of colostrum and mature milk, with increasing volume.",
          "Mature milk: usually established around the end of the second week postpartum."
        ],
        x: "A newborn takes very small amounts of colostrum in the first days, so drug exposure is often low then, but age and ability to clear the drug remain important."
      },
      {
        b: "Pharmacokinetics",
        t: "What determines drug transfer into milk?",
        s: "Most drug passes from plasma into milk by passive diffusion.",
        p: [
          "Transfer increases with: low molecular weight, low protein binding, high lipid solubility, suitable pKa, and long half-life.",
          "Milk is slightly more acidic than plasma, so weak bases may accumulate in it (ion trapping).",
          "Large molecules (insulin, heparin, monoclonal antibodies) are mostly not absorbed from the infant's gut.",
          "For the infant to be affected, the drug must be absorbed from the gut (oral bioavailability)."
        ],
        x: "Drugs that are not orally absorbed (such as insulin) are relatively safe for the infant even if present in milk."
      },
      {
        b: "Pharmacokinetics",
        t: "Relative Infant Dose (RID)",
        s: "A measure estimating what the infant receives through milk as a percentage of the weight-adjusted maternal dose.",
        p: [
          "RID = (infant dose via milk mg/kg/day ÷ maternal dose mg/kg/day) × 100.",
          "Below 10%: usually compatible with breastfeeding (the best-known rule, attributed to Hale).",
          "Finer grading: below 2% minimal, 2–5% small, 5–10% moderate, above 10% high. A 5% limit gives a larger safety margin.",
          "10–25% may be accepted with monitoring, and above 25% is usually avoided, according to Hale."
        ],
        x: "RID is not a guarantee: symptoms can occur in the infant despite an RID below 10% if the infant clears the drug slowly (preterm or newborn), or if the maternal dose is very high."
      },
      {
        b: "Pharmacokinetics",
        t: "Milk-to-plasma ratio (M/P)",
        s: "The drug concentration in milk divided by its concentration in maternal plasma.",
        p: [
          "M/P below 1: usually little transfer.",
          "M/P above 1: the drug may concentrate in milk (such as iodine).",
          "The ratio alone does not give the actual amount the infant receives, so it is used with RID."
        ],
        x: "Use M/P and RID together, then relate them to the infant's age and condition."
      },
      {
        b: "Safety assessment",
        t: "Infant factors",
        s: "The final judgment depends on the infant, not only on the drug.",
        p: [
          "Age: newborns (especially the first two months) and preterm infants clear drugs less well.",
          "Feeding volume: an exclusively breastfed infant is exposed more.",
          "Drugs with a long half-life may accumulate in the infant.",
          "Signs to watch: excessive drowsiness, poor feeding, jaundice, diarrhea, rash."
        ],
        x: "Examples: fluoxetine and naproxen have long half-lives, and tramadol may cause drowsiness and respiratory depression in the infant."
      },
      {
        b: "Safety assessment",
        t: "Practical tips for the pharmacist",
        s: "Simple steps that reduce infant exposure.",
        p: [
          "Choose a drug with more safety data (for example, one listed in LactMed) and a short half-life.",
          "Take the dose right after a feed or before the infant's longest sleep, to reduce the drug in milk at the next feed.",
          "Prefer inhaled or topical options when suitable, because systemic exposure is lower.",
          "Assess safety with Hale's scale (L1 safest to L5 contraindicated) and support it with a source such as LactMed.",
          "Do not stop breastfeeding because of a drug before checking sources; many drugs are compatible."
        ],
        x: "Decision points: is treatment necessary? Is there an alternative with less exposure? Does the infant's condition allow it?"
      }
    ]
  }
};
