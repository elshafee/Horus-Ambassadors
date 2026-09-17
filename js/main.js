/**
 * HORUS AMBASSADORS - MAIN JAVASCRIPT
 * Features: Bilingual i18n Engine (AR/EN), Lightbox Gallery, Animated Stats Counters,
 * Video Modal Player, Recruitment Form Simulation, Responsive Navigation.
 */

// ==========================================================================
// 1. I18N TRANSLATION DICTIONARY
// ==========================================================================
const translations = {
  ar: {
    // Navigation
    "nav.home": "الرئيسية",
    "nav.about": "عن الأسرة",
    "nav.pillars": "الأنشطة",
    "nav.timeline": "مسيرتنا",
    "nav.gallery": "الصور",
    "nav.leadership": "القيادة",
    "nav.apply": "انضم إلينا",
    "nav.events": "الفعاليات",

    // Upcoming & Countdown
    "upcoming.label": "الفعالية القادمة",
    "upcoming.title": "موسم التقديم الجديد لأسرة سفراء حورس 2026 / 2027",
    "upcoming.desc": "تستعد أسرة سفراء حورس لفتح باب الانضمام الرسمي للعام الأكاديمي الجديد. لا تفوّت هذه الفرصة الاستثنائية لتكون جزءاً من الأسرة رقم #1 بالجامعة!",
    "upcoming.cta": "سجّل اهتمامك الآن ←",
    "cd.days": "يوم",
    "cd.hours": "ساعة",
    "cd.mins": "دقيقة",
    "cd.secs": "ثانية",

    // Spotlight
    "spot.tag": "✨ نجم الشهر",
    "spot.title": "سفير يستحق التقدير",
    "spot.subtitle": "نضيء الضوء على أحد أعضائنا المتميزين ممن يجسّدون روح سفراء حورس",
    "spot.badge": "نجم الشهر ⭐",
    "spot.role": "Team Leader — أسرة سفراء حورس",
    "spot.quote": "\"القيادة الحقيقية ليست في اتخاذ القرارات، بل في تمكين فريقك من تحقيق المستحيل معاً.\"",

    // Certificates
    "certs.tag": "📜 شهاداتنا الرسمية",
    "certs.title": "شهادات تقدير واعتراف بالتميّز",
    "certs.subtitle": "الشهادات الرسمية الممنوحة لأسرة سفراء حورس تقديراً لإسهاماتها البارزة بجامعة حورس - مصر",
    "certs.c1_title": "شهادة تقدير وعرفان",
    "certs.c1_desc": "شهادة رسمية ممنوحة من جامعة حورس - مصر تقديراً للإسهامات الاستثنائية لأسرة سفراء حورس في خدمة المجتمع والأنشطة الطلابية.",
    "certs.issuer": "جامعة حورس - مصر",
    "certs.download": "⬇ تحميل الشهادة (PDF)",

    // News
    "news.tag": "📰 أحدث الأخبار",
    "news.title": "آخر أخبار وفعاليات الأسرة",
    "news.subtitle": "تابع كل ما يجري في عالم سفراء حورس من أنشطة وفعاليات وإنجازات",
    "news.cat_events": "حياة جامعية",
    "news.cat_charity": "العمل الخيري",
    "news.cat_conf": "مؤتمرات",
    "news.n1_title": "يوم الهندسة — استقبال طلاب كلية الهندسة 2022 / 2023",
    "news.n1_excerpt": "شاركت الأسرة في تنظيم يوم الهندسة الأول للتعريف بالأقسام العلمية والمعامل المتطورة واستقبال الطلاب الجدد وأولياء أمورهم.",
    "news.n2_title": "معرض رمضان الخيري الثاني — ملابس وأطعمة بسعر رمزي",
    "news.n2_excerpt": "جمعت الأسرة الملابس ونظّفتها وكوتها وباعتها بسعر رمزي دون إحراج للمحتاجين، مع بيع مأكولات متميزة بأسعار رمزية لصالح محدودي الدخل.",
    "news.n3_title": "زيارة دار المسنين — رسالة محبة من سفراء حورس",
    "news.n3_excerpt": "زار فريق سفراء حورس برفقة د. محمد كمال دار المسنين، وقدّموا هدايا تذكارية ودرع تكريم للسيدة مديرة الدار وتركوا أثراً طيباً في قلوب النزلاء.",
    "news.read_more": "اقرأ المزيد ←",

    // Footer map
    "footer.map_title": "موقعنا على الخريطة",

    // Announcement Bar
    "announce.text": "🎉 باب الانضمام لأسرة سفراء حورس مفتوح الآن! سارع بتقديم طلبك قبل انتهاء الفرصة.",
    "announce.cta": "سجّل الآن ←",

    // Achievements Trophy Wall
    "ach.tag": "🏆 درع التميّز",
    "ach.title": "إنجازات تُفخر بها قاعة الأسرة",
    "ach.subtitle": "شهادات التميّز والمراكز الأولى التي نالتها أسرة سفراء حورس على مدار مسيرتها",
    "ach.t1_title": "المركز الأول جامعياً",
    "ach.t1_sub": "درع التميّز — أفضل أسرة طلابية على مستوى جامعة حورس - مصر",
    "ach.t1_badge": "#1 جامعة حورس",
    "ach.t2_title": "5 حملات رمضانية متتالية",
    "ach.t2_sub": "توزيع كراتين رمضان دون انقطاع منذ تأسيس الأسرة حتى اليوم",
    "ach.t2_badge": "مستمر منذ 2021",
    "ach.t3_title": "المؤتمر العلمي الأول لكلية الهندسة",
    "ach.t3_sub": "تنظيم وإدارة المؤتمر العلمي الأول لكلية الهندسة — جامعة حورس - مصر",
    "ach.t3_badge": "حدث تاريخي",
    "ach.t4_title": "ملتقى التوظيف الأول",
    "ach.t4_sub": "تنظيم أول ملتقى توظيفي وطني بكلية الهندسة بمشاركة كبرى الشركات",
    "ach.t4_badge": "ريادة توظيفية",
    "ach.t5_title": "شراكة إغاثة غزة",
    "ach.t5_sub": "المشاركة الفاعلة مع جمعية رسالة في تعبئة وإرسال قوافل الإغاثة",
    "ach.t5_badge": "مسؤولية مجتمعية",
    "ach.t6_title": "قطار شباب وزارة الشباب",
    "ach.t6_sub": "تمثيل جامعة حورس في رحلة قطار الشباب الوطني للأقصر وأسوان",
    "ach.t6_badge": "تمثيل وطني",

    // Alumni
    "founders.tag": "المؤسسون",
    "founders.title": "الرعيل الأول وصنّاع البداية",
    "founders.subtitle": "قادة وأعضاء أسسوا أسرة سفراء حورس عام 2020 لتبقى منارة للتميز والعمل الطلابي.",
    "founders.role1": "مقرر الأسرة المؤسس",
    "founders.quote1": "\"وضعنا اللبنة الأولى لأسرة سفراء حورس لتكون أكثر من مجرد فريق طلابي، لتكون عائلة متكاتفة تسعى للتطوير والتميز في كلية الهندسة.\"",
    "founders.role2": "مقرر مساعد الأسرة المؤسس",
    "founders.quote2": "\"كنا نؤمن دائمًا أن العمل الجماعي المنظم هو السبيل الوحيد لترك أثر حقيقي في مجتمعنا الجامعي، وهذا ما سعينا لتحقيقه.\"",
    "founders.members_title": "الأعضاء المؤسسون",
    "alumni.tag": "نجاحات الخريجين",
    "alumni.title": "قادة الأمس، صنّاع المستقبل",
    "alumni.subtitle": "قصص نجاح وإلهام من سفراء حورس السابقين الذين يتركون بصمتهم في سوق العمل",
    "alumni.job1": "مهندس برمجيات — ڤودافون",
    "alumni.quote1": "تجربتي في سفراء حورس لم تصقل مهاراتي الهندسية فحسب، بل علمتني كيف أدير فريقاً كاملاً وأتحمل المسؤولية في أصعب الأوقات.",
    "alumni.job2": "مهندسة معمارية — أوراسكوم",
    "alumni.quote2": "تنظيم مؤتمرات الكلية منحني ثقة هائلة في التعامل مع كبار الشخصيات وعزز من قوة سيرتي الذاتية قبل التخرج.",
    "alumni.job3": "مدير مشروعات — السويدي إلكتريك",
    "alumni.quote3": "روح التكافل والعمل الخيري في الأسرة شكلت جزءاً كبيراً من شخصيتي. نحن هنا نتعلم كيف نكون بشراً قبل أن نكون مهندسين.",

    // Brand
    "brand.title": "سفراء حورس",
    "brand.sub": "كلية الهندسة • جامعة حورس - مصر",

    // Hero
    "hero.univ_badge": "جامعة حورس - مصر (HUE)",
    "hero.award": "الفائزة بالمركز الأول في الأنشطة الطلابية على مستوى الجامعة 2022 / 2023",
    "hero.title_pre": "روّاد الأثر و",
    "hero.title_highlight": "سفراء التميّز الطلابي",
    "hero.title_post": "بكلية الهندسة",
    "hero.desc": "أسرة سفراء حورس (Horus Ambassadors) هي الأسرة الطلابية الرائدة بجامعة حورس - مصر، تجمع بين القيادة الهندسية، العمل الخيري المجتمعي، وتنظيم كبرى المؤتمرات والملتقيات العلمية.",
    "hero.cta_explore": "استكشف مسيرتنا",
    "hero.cta_join": "انضم للسفراء",
    "hero.stat_years": "سنوات من العطاء",
    "hero.stat_rank": "المركز الأول جامعياً",
    "hero.stat_events": "مؤتمراً وفعالية كبرى",
    "hero.media_tag": "الفيديو التوثيقي الرسمي",
    "hero.media_caption": "شاهد رحلة وإنجازات سفراء حورس",

    // About
    "about.tag": "من نحن",
    "about.title": "نصنع قادة الغد ونترك أثراً يبقى",
    "about.p1": "تأسست أسرة سفراء حورس في أواخر عام 2020 بكلية الهندسة - جامعة حورس - مصر (HUE)، لتكون منصة انطلاق للشباب الطموح وصوتاً للمبادرة الطلابية الإيجابية.",
    "about.p2": "على مدار أكثر من 5 سنوات، نظمت الأسرة أضخم الفعاليات بالجامعة ونالت درع التميز والمركز الأول كأفضل فريق طلابي، مكرسةً جهودها لخدمة المجتمع ودعم مسيرة التعليم الهندسي.",
    "about.f1_title": "القيادة الهندسية",
    "about.f1_desc": "صقل مهارات التنظيم، التفكير النقدي، وإدارة المشروعات بين طلبة الهندسة بمختلف الأقسام.",
    "about.f2_title": "التكافل والعمل الخيري",
    "about.f2_desc": "إطلاق قوافل رمضان السنوية، المعارض الخيرية، ودعم المبادرات الإنسانية كإغاثة غزة مع جمعية رسالة.",
    "about.f3_title": "التمثيل المؤسسي",
    "about.f3_desc": "تنظيم المؤتمرات العلمية ويوم التوظيف السنوي بشراكة وثيقة مع قيادات الكلية والجامعة.",
    "about.f4_title": "الروح والترابط الطلابي",
    "about.f4_desc": "خلق مجتمع جامعي حيوي نابض بالمحبة، الفعاليات الترفيهية، والرحلات الاستكشافية في ربوع مصر.",

    // Vision & Mission
    "vm.vision_title": "رؤيتنا",
    "vm.vision_text": "أن نكون النموذج الرائد للنشاط الطلابي الجامعي في مصر، والمحفز الأول لصناعة مهندسين قادة يجمعون بين الكفاءة الأكاديمية والمسؤولية المجتمعية.",
    "vm.mission_title": "رسالتنا",
    "vm.mission_text": "تمكين طلاب كلية الهندسة من اكتشاف قدراتهم وتطويرها من خلال بيئة داعمة تجمع بين التدريب المهني، المبادرات الخيرية، والأنشطة الترفيهية، لبناء جيل واعٍ يساهم في نهضة وطنه.",

    // Stats
    "stats.years": "سنوات من التأثير",
    "stats.rank": "أفضل أسرة طلابية",
    "stats.students": "طالب تم إرشادهم",
    "stats.ramadan": "حملات رمضانية متتالية",
    "stats.conferences": "مؤتمراً وملتقى توظيفي",

    // Pillars
    "pillars.tag": "محاور الأنشطة",
    "pillars.title": "أربعة أركان تصنع الفارق",
    "pillars.subtitle": "تتنوع أنشطة سفراء حورس لتغطي كافة جوانب الحياة الطلابية والمسؤولية المجتمعية",

    "pillar1.badge": "العمل الخيري والمجتمعي",
    "pillar1.title": "سفراء الخير والتكافل الإنساني",
    "pillar1.desc": "مبادرات مستمرة لإدخال السرور على العاملين بالجامعة والأسر المتعففة بمحافظة دمياط ومحيطها، بالإضافة إلى دعم القوافل الإغاثية.",
    "pillar1.point1": "توزيع كراتين وشنط رمضان السنوية (2021 - 2025)",
    "pillar1.point2": "تنظيم المعارض الخيرية الأول والثاني للملابس",
    "pillar1.point3": "المشاركة مع جمعية رسالة في تعبئة إغاثات أهالينا في غزة",

    "pillar2.badge": "الملتقيات والمؤتمرات الأكاديمية",
    "pillar2.title": "ريادة التنظيم الأكاديمي والهندسي",
    "pillar2.desc": "الذراع التنظيمي الأبرز لكلية الهندسة في إدارة الملتقيات التوظيفية والمؤتمرات العلمية الدولية وحفلات التكريم.",
    "pillar2.point1": "تنظيم ورعاية المؤتمر التوظيفي والمؤتمر العلمي الأول لكلية الهندسة",
    "pillar2.point2": "تنظيم يوم الهندسة التعريفي بالأقسام والمعامل للطلاب الجدد",
    "pillar2.point3": "تنظيم ندوات التخصصات الهندسية (قسم اتصالات وحاسبات، عمارة، ميكاترونكس)",

    "pillar3.badge": "الأنشطة الترفيهية وبناء الفريق",
    "pillar3.title": "حياة جامعية استثنائية وبوم بوم داي",
    "pillar3.desc": "صناعة البهجة ونشر الطاقة الإيجابية داخل الحرم الجامعي عبر أضخم الفعاليات الترفيهية والتزيين الموسمي.",
    "pillar3.point1": "تنظيم مهرجان بوم بوم داي (Boom Boom Day) لعدة أيام متتالية",
    "pillar3.point2": "اليوم الترفيهي السنوي مع بوفيهات وحفلات تكريم كبرى",
    "pillar3.point3": "تزيين مبنى كلية الهندسة بأجواء رمضانية ومواقع تصوير احترافية",

    "pillar4.badge": "الرحلات والاستكشاف",
    "pillar4.title": "رحلات استكشافية ومغامرات في ربوع مصر",
    "pillar4.desc": "رحلات دورية تمزج بين الاستكشاف، التخييم، والتواصل الأخوي وتوسيع مدارك الطلاب خارج قاعات المحاضرات.",
    "pillar4.point1": "تخييم محمية وادي دجلة والمغامرات الجبلية",
    "pillar4.point2": "رحلات العين السخنة، الإسكندرية، والقاهرة والفيوم",
    "pillar4.point3": "المشاركة في قطار الشباب للأقصر وأسوان مع وزارة الشباب والرياضة",

    // Timeline
    "timeline.tag": "المسيرة والتاريخ",
    "timeline.title": "محطات فارقة في تاريخ سفراء حورس",
    "timeline.subtitle": "كيف تحولت الفكرة من مبادرة طلابية إلى الأسرة رقم #1 بجامعة حورس",

    "timeline.t2020_year": "ديسمبر 2020",
    "timeline.t2020_title": "التأسيس والانطلاقة الرسمية",
    "timeline.t2020_desc": "اعتماد تسجيل أسرة سفراء حورس رسمياً بكلية الهندسة بريادة د. محمد كمال عبد السلام وبدء بناء اللجان الطلابية.",

    "timeline.t2021_year": "رمضان 2021 - 2022",
    "timeline.t2021_title": "أول حدث خيري ويوم الهندسة",
    "timeline.t2021_desc": "إطلاق أول حملة كراتين رمضان بالجامعة والمشاركة الفاعلة في تنظيم يوم الهندسة واستقبال دفعة مهندسي المستقبل.",

    "timeline.t2022_year": "العام الأكاديمي 2022",
    "timeline.t2022_title": "التوسع والشراكات الدولية",
    "timeline.t2022_desc": "التعاون مع منظمة آيزيك دمياط (AIESEC Damietta) وتنظيم الفعاليات التعريفية لأقسام الكلية ومعارض الملابس الخيرية.",

    "timeline.t2023_year": "أكتوبر 2023",
    "timeline.t2023_title": "المركز الأول وتنظيم مؤتمر التوظيف",
    "timeline.t2023_desc": "التتويج بالمركز الأول على مستوى جامعة حورس، وتنظيم اليوم السنوي ومؤتمر التوظيف والمؤتمر العلمي الأول لكلية الهندسة.",

    "timeline.t2024_year": "2024 - 2025+",
    "timeline.t2024_title": "توسيع قوافل الإغاثة والاستدامة",
    "timeline.t2024_desc": "المشاركة في إغاثة غزة مع جمعية رسالة، واستمرار حملات رمضان للعام الخامس على التوالي واستقبال الدفعات الجديدة.",

    // Gallery
    "gallery.tag": "المعرض التوثيقي",
    "gallery.title": "لحظات وذكريات لا تُنسى",
    "gallery.subtitle": "لقطات حية من بطولات وفعاليات وتكريمات أسرة سفراء حورس",
    "gallery.filter_all": "الكل",
    "gallery.filter_charity": "العمل الخيري",
    "gallery.filter_conferences": "المؤتمرات والتنظيم",
    "gallery.filter_events": "الحياة الجامعية",
    "gallery.filter_team": "فريق السفراء",
    "gallery.cta": "لمشاهدة المزيد من الصور، تفضل بزيارة المعرض",

    // Leadership
    "leadership.tag": "الهيكل والإشراف",
    "leadership.title": "قيادة مخلصة وروح عمل جماعي",
    "leadership.subtitle": "نخبة من أعضاء هيئة التدريس والهيئة المعاونة والقيادات الطلابية",

    "leader1.name": "د. محمد كمال عبد السلام",
    "leader1.role": "رائد الأسرة والمشرف العام",
    "leader1.desc": "عضو هيئة التدريس بكلية الهندسة، الداعم والموجه الرئيسي لسفراء حورس منذ التأسيس وقائد مسيرة التميز.",

    "leader2.name": "الهيئة الإشرافية المعاونة",
    "leader2.role": "مشرفون مساعدون",
    "leader2.desc": "م. منى عزمي • م. نها عسكر • م. كريم المسلماني • م. هدير أحمد — متابعة تنظيمية مستمرة لمشاريع وأنشطة الأسرة.",

    "leader3.name": "ياسر فايد & أحمد البدراوي",
    "leader3.role": "مقرر الأسرة والمقرر المساعد",
    "leader3.desc": "قيادة الصف الطلابي، إدارة فرق العمل التنظيمية والإعلامية واللوجستية في مختلف الفعاليات والمؤتمرات.",

    // Apply / Join Us
    "apply.tag": "انضم للسفراء",
    "apply.title": "موسم التقديم الجديد لأسرة سفراء حورس 2026 / 2027",
    "apply.subtitle": "باب الانضمام مفتوح لطلبة كلية الهندسة - جامعة حورس للانضمام إلى لجان الأسرة",
    "apply.fullname": "الاسم بالكامل رباعي",
    "apply.studentid": "الرقم الجامعي (Student ID)",
    "apply.dept": "القسم الهندسي",
    "apply.dept_placeholder": "اختر القسم الهندسي...",
    "apply.dept_prep": "إعدادي هندسة",
    "apply.dept_civil": "الهندسة المدنية",
    "apply.dept_mecha": "هندسة الميكاترونكس",
    "apply.dept_arch": "الهندسة المعمارية",
    "apply.dept_comm": "هندسة الاتصالات والحاسبات",
    "apply.year": "الفرقة الدراسية",
    "apply.year_placeholder": "اختر الفرقة الدراسية...",
    "apply.year_prep": "الفرقة الإعدادية",
    "apply.year_1": "الفرقة الأولى",
    "apply.year_2": "الفرقة الثانية",
    "apply.year_3": "الفرقة الثالثة",
    "apply.year_4": "الفرقة الرابعة (تخرج)",
    "apply.committees": "اللجنة المفضلة (يمكنك اختيار أكثر من لجنة)",
    "apply.comm_org": "لجنة التنظيم والمراسم (OC)",
    "apply.comm_media": "لجنة الإعلام والتصوير (Media)",
    "apply.comm_charity": "لجنة العمل الخيري والمجتمعي",
    "apply.comm_pr": "لجنة العلاقات العامة والتنسيق (PR)",
    "apply.why": "لماذا ترغب في الانضمام لسفراء حورس؟",
    "apply.why_placeholder": "اكتب نبذة عن مهاراتك وشغفك لخدمة زملائك والكلية...",
    "apply.submit": "إرسال طلب الانضمام",

    // Success Modal
    "success.title": "تم استلام طلبك بنجاح!",
    "success.desc": "شكراً لاهتمامك بالانضمام لأسرة سفراء حورس. سيقوم فريق الموارد البشرية (HR) بالتواصل معك لتحديد موعد المقابلة الشخصية.",
    "success.code": "كود الطلب المرجعي:",
    "success.close": "حسناً، رائع!",

    // Leadership Tabs
    "ltab.head": "رئيس الأسرة",
    "ltab.supervisor": "المشرف الرئيسي",
    "ltab.asst": "المشرفون المساعدون",

    // Profile Card Field Labels
    "lpc.head_role": "رئيس الأسرة",
    "lpc.supervisor_role": "رائد الأسرة والمشرف الرئيسي",
    "lpc.asst_role": "مشرفة مساعدة",
    "lpc.asst_role_m": "مشرف مساعد",
    "lpc.email": "البريد الجامعي",
    "lpc.phone": "رقم الهاتف",
    "lpc.dept": "القسم",
    "lpc.level": "الفرقة الدراسية",
    "lpc.since": "رائد الأسرة منذ",
    "lpc.head_note": "📌 سيتم تحديث بيانات رئيس الأسرة قريباً بعد اعتماد الهيكل الجديد.",
    "lpc.asst_note": "📌 سيتم تحديث بيانات التواصل للمشرفين المساعدين قريباً.",

    // High Board (AR)
    "board.head": "رئيس الأسرة",
    "board.vice": "نائب رئيس الأسرة",
    "board.sector_heads": "رؤساء القطاعات",
    "board.sector": "رئيس قطاع ———",
    "board.vice_sectors": "نواب رؤساء القطاعات",
    "board.vice_sector": "نائب رئيس قطاع ———",
    "board.placeholder": "— سيتم الإضافة قريباً —",
    "board.note": "📌 سيتم تحديث بيانات الهيكل الإداري للعام الحالي قريباً.",

    // Supervisor & Head details
    "supervisor.dept": "عضو هيئة التدريس — كلية الهندسة، جامعة حورس - مصر",
    "supervisor.bio": "قائد مسيرة سفراء حورس منذ التأسيس وأحد أبرز الأعمدة الأكاديمية التي أرست قيم العطاء والتميز الطلابي بكلية الهندسة. أشرف على جميع الأنشطة الكبرى للأسرة وكان سنداً دائماً للطلاب في رحلتهم.",
    "supervisor.message": "\"نحن في سفراء حورس لا نصنع فقط مهندسين بارعين، بل نبني قادة المستقبل الذين يحملون لواء التطوير وخدمة المجتمع. فخور جداً بما حققناه وبما سنحققه معاً.\"",
    "head.name": "— سيتم الإضافة قريباً —",

    // Footer
    "footer.desc": "أسرة سفراء حورس — الكيان الطلابي الرائد بكلية الهندسة، جامعة حورس - مصر. نؤمن بأن الهندسة ليست مجرد معادلات، بل رسالة لخدمة المجتمع وبناء القادة.",
    "footer.quick_links": "روابط سريعة",
    "footer.contact_title": "التواصل والجامعة",
    "footer.univ": "جامعة حورس - مصر (HUE)",
    "footer.faculty": "كلية الهندسة - الطريق الساحلي الدولي، نيو دمياط",
    "footer.copy": "© جميع الحقوق محفوظة لأسرة سفراء حورس (Horus Ambassadors) • جامعة حورس - مصر.",

    // Hall of Fame (لوحة الشرف)
    "fame.tag": "لوحة الشرف",
    "fame.title": "قادة صنعوا التاريخ",
    "fame.subtitle": "السجلات التاريخية للهياكل الإدارية التي قادت أسرة سفراء حورس عبر السنوات الماضية."
  },

  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.pillars": "Activities",
    "nav.timeline": "Journey",
    "nav.gallery": "Gallery",
    "nav.leadership": "Leadership",
    "nav.apply": "Join Us",
    "nav.events": "Events",

    // Upcoming & Countdown
    "upcoming.label": "Upcoming Event",
    "upcoming.title": "New Application Season — Horus Ambassadors 2026 / 2027",
    "upcoming.desc": "Horus Ambassadors is preparing to open official membership applications for the new academic year. Don't miss your chance to be part of the #1 family at the university!",
    "upcoming.cta": "Register Your Interest Now →",
    "cd.days": "Days",
    "cd.hours": "Hours",
    "cd.mins": "Mins",
    "cd.secs": "Secs",

    // Spotlight
    "spot.tag": "✨ Member Spotlight",
    "spot.title": "An Ambassador Worth Celebrating",
    "spot.subtitle": "We shine the light on one of our outstanding members who embody the spirit of Horus Ambassadors",
    "spot.badge": "Member of the Month ⭐",
    "spot.role": "Team Leader — Horus Ambassadors Family",
    "spot.quote": "\"True leadership isn't about making decisions — it's about empowering your team to achieve the impossible together.\"",

    // Certificates
    "certs.tag": "📜 Official Certificates",
    "certs.title": "Certificates of Appreciation & Excellence",
    "certs.subtitle": "Official certificates awarded to Horus Ambassadors in recognition of their outstanding contributions to Horus University-Egypt",
    "certs.c1_title": "Certificate of Appreciation",
    "certs.c1_desc": "An official certificate granted by Horus University-Egypt in recognition of the exceptional contributions of Horus Ambassadors in community service and student activities.",
    "certs.issuer": "Horus University-Egypt",
    "certs.download": "⬇ Download Certificate (PDF)",

    // News
    "news.tag": "📰 Latest News",
    "news.title": "Latest News & Family Events",
    "news.subtitle": "Stay updated with everything happening in the world of Horus Ambassadors",
    "news.cat_events": "Campus Life",
    "news.cat_charity": "Charity",
    "news.cat_conf": "Conferences",
    "news.n1_title": "Engineering Welcome Day — Freshmen Orientation 2022/2023",
    "news.n1_excerpt": "Horus Ambassadors organized the first-ever Engineering Day, showcasing all departments, advanced labs, and student projects while welcoming new students and their families.",
    "news.n2_title": "2nd Annual Charity Exhibition — Clothes & Food at Symbolic Prices",
    "news.n2_excerpt": "The family collected, cleaned, ironed, and sorted donated clothes, selling them at near-zero cost without embarrassing recipients, alongside home-cooked meals at symbolic prices.",
    "news.n3_title": "Visiting the Elderly Home — A Message of Love from Horus Ambassadors",
    "news.n3_excerpt": "Led by Dr. Mohamed Kamal, the team visited the local elderly home, presented commemorative gifts, a shield to the director, and left a lasting warm impression on the residents.",
    "news.read_more": "Read More →",

    // Footer map
    "footer.map_title": "Our Location on the Map",

    // Navigation
    "announce.text": "🎉 Applications to join Horus Ambassadors are now OPEN! Submit yours before spots run out.",
    "announce.cta": "Apply Now →",

    // Achievements Trophy Wall
    "ach.tag": "🏆 Hall of Excellence",
    "ach.title": "Achievements We Carry With Pride",
    "ach.subtitle": "Awards, rankings, and milestones earned by Horus Ambassadors throughout our journey",
    "ach.t1_title": "#1 University Ranking",
    "ach.t1_sub": "Excellence Shield — Best Student Organization at Horus University-Egypt in Student Activities",
    "ach.t1_badge": "#1 Horus University",
    "ach.t2_title": "5 Consecutive Ramadan Drives",
    "ach.t2_sub": "Unbroken annual Ramadan charity boxes distribution every year since founding",
    "ach.t2_badge": "Running Since 2021",
    "ach.t3_title": "1st Engineering Scientific Conference",
    "ach.t3_sub": "Organized & managed the first ever scientific conference at the Faculty of Engineering — HUE",
    "ach.t3_badge": "Historic Milestone",
    "ach.t4_title": "1st Career Fair",
    "ach.t4_sub": "Organized the first national career fair at the Faculty of Engineering with top companies",
    "ach.t4_badge": "Career Leadership",
    "ach.t5_title": "Gaza Relief Partnership",
    "ach.t5_sub": "Active participation with Resala Foundation in packing and dispatching Gaza relief convoys",
    "ach.t5_badge": "Community Duty",
    "ach.t6_title": "Ministry of Youth Train",
    "ach.t6_sub": "Represented Horus University in the national Youth Train journey to Luxor & Aswan",
    "ach.t6_badge": "National Representation",

    // Alumni
    "founders.tag": "The Founders",
    "founders.title": "The First Generation & Pioneers",
    "founders.subtitle": "Leaders and members who founded the Horus Ambassadors in 2020 to remain a beacon of excellence and student work.",
    "founders.role1": "Founding President",
    "founders.quote1": "\"We laid the first brick for the Horus Ambassadors to be more than just a student team, to be a cohesive family striving for development and excellence in the Faculty of Engineering.\"",
    "founders.role2": "Founding Vice President",
    "founders.quote2": "\"We always believed that organized teamwork is the only way to leave a real impact on our university community, and that is what we strived to achieve.\"",
    "founders.members_title": "Founding Members",
    "alumni.tag": "Alumni Success",
    "alumni.title": "Leaders of Yesterday, Creators of Tomorrow",
    "alumni.subtitle": "Inspiring success stories from former Horus Ambassadors leaving their mark on the world",
    "alumni.job1": "Software Engineer — Vodafone",
    "alumni.quote1": "My experience at Horus Ambassadors didn't just sharpen my engineering skills; it taught me how to manage entire teams and take responsibility during tough times.",
    "alumni.job2": "Architect — Orascom",
    "alumni.quote2": "Organizing college conferences gave me massive confidence when dealing with VIPs, significantly boosting my resume before I even graduated.",
    "alumni.job3": "Project Manager — Elsewedy Electric",
    "alumni.quote3": "The spirit of charity and community work heavily shaped my personality. Here, we learn how to be human before we become engineers.",

    // Brand
    "brand.title": "Horus Ambassadors",
    "brand.sub": "Faculty of Engineering • Horus University-Egypt",


    // Hero
    "hero.univ_badge": "Horus University-Egypt (HUE)",
    "hero.award": "Awarded 1st Place in University Student Activities (2022 / 2023)",
    "hero.title_pre": "Pioneering Impact &",
    "hero.title_highlight": "Student Excellence",
    "hero.title_post": "At Engineering",
    "hero.desc": "Horus Ambassadors is the premier student organization at Horus University-Egypt, uniting engineering leadership, community charity, and premier academic conference organization.",
    "hero.cta_explore": "Explore Journey",
    "hero.cta_join": "Join the Family",
    "hero.stat_years": "Years of Impact",
    "hero.stat_rank": "#1 University Rank",
    "hero.stat_events": "Major Conferences & Events",
    "hero.media_tag": "Official Documentary",
    "hero.media_caption": "Watch the Journey & Achievements of Horus Ambassadors",

    // About
    "about.tag": "About Us",
    "about.title": "Shaping Tomorrow's Leaders, Leaving a Lasting Legacy",
    "about.p1": "Founded in late 2020 at the Faculty of Engineering, Horus University-Egypt (HUE), Horus Ambassadors was born as a springboard for ambitious youth and a voice for constructive student leadership.",
    "about.p2": "Over 5+ impactful years, the family organized the university's landmark events, earning the 1st Place Shield as the top student team dedicated to community empowerment and engineering excellence.",
    "about.f1_title": "Engineering Leadership",
    "about.f1_desc": "Honing project management, critical problem solving, and leadership among engineering students across all disciplines.",
    "about.f2_title": "Civic Duty & Charity",
    "about.f2_desc": "Annual Ramadan convoys, charity clothing exhibitions, and humanitarian relief such as packing aid with Resala for Gaza.",
    "about.f3_title": "Institutional Representation",
    "about.f3_desc": "Orchestrating major scientific conferences and employment fairs in close collaboration with university deanship.",
    "about.f4_title": "Community & Spirit",
    "about.f4_desc": "Fostering vibrant student life through campus festivals, seasonal celebration decors, and discovery expeditions across Egypt.",

    // Stats
    "stats.years": "Years of Continuous Impact",
    "stats.rank": "Best Student Team Award",
    "stats.students": "Students Mentored & Welcomed",
    "stats.ramadan": "Consecutive Ramadan Drives",
    "stats.conferences": "Conferences & Job Fairs",

    // Pillars
    "pillars.tag": "Activity Pillars",
    "pillars.title": "Four Pillars Making a Real Difference",
    "pillars.subtitle": "Our diverse programs cover community service, academic distinction, and vibrant campus life.",

    "pillar1.badge": "Charity & Social Impact",
    "pillar1.title": "Ambassadors of Hope & Giving",
    "pillar1.desc": "Continuous initiatives supporting campus workers, underprivileged families in Damietta, and humanitarian relief missions.",
    "pillar1.point1": "Annual Ramadan Food Drives & Boxes (2021 - 2025)",
    "pillar1.point2": "1st and 2nd Charity Clothing Exhibitions",
    "pillar1.point3": "Humanitarian relief packaging with Resala Foundation for Gaza",

    "pillar2.badge": "Academic & Scientific Leadership",
    "pillar2.title": "Premier Conference & Event Organization",
    "pillar2.desc": "The primary organizing arm for the Faculty of Engineering hosting recruitment fairs, scientific forums, and honoring ceremonies.",
    "pillar2.point1": "Organizing the 1st Engineering Employment Fair & Scientific Conference",
    "pillar2.point2": "Freshmen Engineering Orientation & Laboratory Tours",
    "pillar2.point3": "Specialized seminars (Communications, Architecture, Mechatronics)",

    "pillar3.badge": "Campus Entertainment & Team Spirit",
    "pillar3.title": "Vibrant Student Life & Boom Boom Day",
    "pillar3.desc": "Creating memorable university memories through massive multi-day festivals and authentic celebrations.",
    "pillar3.point1": "Hosting multi-day Boom Boom Day entertainment festivals",
    "pillar3.point2": "Annual Fun Days with gourmet catering & award ceremonies",
    "pillar3.point3": "Ramadan campus decor and authentic photography setups",

    "pillar4.badge": "Expeditions & Youth Adventures",
    "pillar4.title": "Exploration & Adventures Across Egypt",
    "pillar4.desc": "Curated journeys blending outdoor camping, bonding, and cultural enrichment beyond lecture halls.",
    "pillar4.point1": "Wadi Degla nature reserve camping & mountain hikes",
    "pillar4.point2": "Expeditions to Ain Sokhna, Alexandria, Cairo & Fayoum",
    "pillar4.point3": "Youth Train journeys to Luxor & Aswan with the Ministry of Youth",

    // Timeline
    "timeline.tag": "Our Journey",
    "timeline.title": "Milestones in Horus Ambassadors History",
    "timeline.subtitle": "From a student initiative to the #1 ranked organization at Horus University",

    "timeline.t2020_year": "December 2020",
    "timeline.t2020_title": "Official Inception & Registration",
    "timeline.t2020_desc": "Official accreditation of Horus Ambassadors at the Faculty of Engineering under Dr. Mohamed Kamal's supervision.",

    "timeline.t2021_year": "Ramadan 2021 - 2022",
    "timeline.t2021_title": "First Charity Drive & Engineering Day",
    "timeline.t2021_desc": "Launching the first Ramadan food package campaign and organizing the debut Engineering Day for freshmen.",

    "timeline.t2022_year": "Academic Year 2022",
    "timeline.t2022_title": "Expansion & Global Partnerships",
    "timeline.t2022_desc": "Partnership with AIESEC Damietta, hosting departmental symposiums and charity clothing fairs.",

    "timeline.t2023_year": "October 2023",
    "timeline.t2023_title": "Crowned #1 & Major Job Fair",
    "timeline.t2023_desc": "Winning 1st place in university student activities and organizing the 1st Engineering Employment Fair & Scientific Conference.",

    "timeline.t2024_year": "2024 - 2025+",
    "timeline.t2024_title": "Relief Drives & Ongoing Legacy",
    "timeline.t2024_desc": "Packing emergency humanitarian aid for Gaza with Resala, launching Ramadan Year 5, and welcoming new engineering cohorts.",

    // Gallery
    "gallery.tag": "Media Archive",
    "gallery.title": "Memories & Milestones",
    "gallery.subtitle": "Real photo moments from our campaigns, ceremonies, and events",
    "gallery.filter_all": "All",
    "gallery.filter_charity": "Charity",
    "gallery.filter_conferences": "Conferences",
    "gallery.filter_events": "Campus Life",
    "gallery.filter_team": "Team",
    "gallery.cta": "View More Images in the Full Gallery",

    // Leadership
    "leadership.tag": "Governance & Board",
    "leadership.title": "Dedicated Leadership & Collaborative Spirit",
    "leadership.subtitle": "Guided by esteemed faculty advisors and driven by dynamic student leaders",

    "leader1.name": "Dr. Mohamed Kamal Abdel Salam",
    "leader1.role": "Advisor & General Supervisor",
    "leader1.desc": "Faculty Member at the Faculty of Engineering, primary patron, mentor, and visionary leader behind Horus Ambassadors since inception.",

    "leader2.name": "Assistant Supervisory Board",
    "leader2.role": "Assistant Supervisors",
    "leader2.desc": "Eng. Mona Azmy • Eng. Noha Askar • Eng. Karim El-Moselmany • Eng. Hadeer Ahmed — providing day-to-day administrative and project guidance.",

    "leader3.name": "Yasser Fayed & Ahmed El-Badrawy",
    "leader3.role": "Student Coordinator & Assistant",
    "leader3.desc": "Leading student committees, operations, media teams, and on-ground logistics across all major university events.",

    // Apply / Join Us
    "apply.tag": "Recruitment",
    "apply.title": "New Application Season for Horus Ambassadors 2026 / 2027",
    "apply.subtitle": "Applications are open for Faculty of Engineering students at Horus University",
    "apply.fullname": "Full Name",
    "apply.studentid": "Student ID Number",
    "apply.dept": "Engineering Department",
    "apply.dept_placeholder": "Select department...",
    "apply.dept_prep": "Preparatory Year",
    "apply.dept_civil": "Civil Engineering",
    "apply.dept_mecha": "Mechatronics Engineering",
    "apply.dept_arch": "Architectural Engineering",
    "apply.dept_comm": "Communications & Computer Engineering",
    "apply.year": "Academic Level",
    "apply.year_placeholder": "Select academic level...",
    "apply.year_prep": "Preparatory Level",
    "apply.year_1": "Level 1 (Freshman)",
    "apply.year_2": "Level 2 (Sophomore)",
    "apply.year_3": "Level 3 (Junior)",
    "apply.year_4": "Level 4 (Senior / Graduation)",
    "apply.committees": "Preferred Committee (Select one or more)",
    "apply.comm_org": "Organization & Protocol Committee (OC)",
    "apply.comm_media": "Media & Photography (Media)",
    "apply.comm_charity": "Community Service & Charity",
    "apply.comm_pr": "Public Relations & Coordination (PR)",
    "apply.why": "Why do you want to join Horus Ambassadors?",
    "apply.why_placeholder": "Tell us about your passions, skills, and how you want to contribute...",
    "apply.submit": "Submit Application",

    // Success Modal
    "success.title": "Application Received Successfully!",
    "success.desc": "Thank you for applying to Horus Ambassadors. Our HR committee will review your submission and contact you for an interview.",
    "success.code": "Reference Code:",
    "success.close": "Awesome, got it!",

    // Footer
    "footer.desc": "Horus Ambassadors — The leading student organization at the Faculty of Engineering, Horus University-Egypt. Engineering leaders, community servants, and future shapers.",
    "footer.quick_links": "Quick Links",
    "footer.contact_title": "Affiliation & Campus",
    "footer.univ": "Horus University-Egypt (HUE)",
    "footer.faculty": "Faculty of Engineering • International Coastal Rd, New Damietta",
    "footer.copy": "© All rights reserved to Horus Ambassadors • Horus University-Egypt.",

    // Hall of Fame (لوحة الشرف)
    "fame.tag": "Hall of Fame",
    "fame.title": "Leaders Who Made History",
    "fame.subtitle": "The historical records of the administrative boards that led Horus Ambassadors over the past years.",

    // Leadership Tabs
    "ltab.head": "Family Head",
    "ltab.supervisor": "Main Supervisor",
    "ltab.asst": "Assistant Supervisors",

    // Profile Card Field Labels
    "lpc.head_role": "Family Head",
    "lpc.supervisor_role": "Family Pioneer & Main Supervisor",
    "lpc.asst_role": "Assistant Supervisor",
    "lpc.asst_role_m": "Assistant Supervisor",
    "lpc.email": "University Email",
    "lpc.phone": "Phone Number",
    "lpc.dept": "Department",
    "lpc.level": "Academic Level",
    "lpc.since": "Pioneer since",
    "lpc.head_note": "📌 Head's details will be updated soon after the new board is officially approved.",
    "lpc.asst_note": "📌 Assistant Supervisor contact details will be updated soon.",

    // High Board
    "board.head": "Team Head",
    "board.vice": "Vice Head",
    "board.sector_heads": "Sector Heads",
    "board.sector": "Sector Head ———",
    "board.vice_sectors": "Vice Sector Heads",
    "board.vice_sector": "Vice Sector Head ———",
    "board.placeholder": "— Coming Soon —",
    "board.note": "📌 The High Board details for the current year will be updated soon.",

    // Supervisor & Head details
    "supervisor.dept": "Faculty Member — Faculty of Engineering, Horus University-Egypt",
    "supervisor.bio": "The founding pioneer of Horus Ambassadors and one of the faculty's most prominent academic figures who established values of giving and student excellence. He supervised all major family events and was always a steadfast support for students throughout their journey.",
    "supervisor.message": "\"Here at Horus Ambassadors, we don't just shape brilliant engineers; we build the leaders of tomorrow who carry the torch of innovation and community service. I am immensely proud of what we've achieved and what we will achieve together.\"",
    "head.name": "— To be announced soon —"
  }
};


// ==========================================================================
// 2. REAL GALLERY ASSET REPOSITORY
// ==========================================================================
const galleryItems = [
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0192.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "conferences",
    src: "/events/Architectura department honorary event/IMG_9781.jpg",
    title_ar: "تكريم قسم الهندسة المعمارية بحضور القيادات",
    title_en: "Architecture Department Honorary Ceremony",
    tag_ar: "مؤتمرات وتكريم",
    tag_en: "Conferences"
  },
  {
    category: "charity",
    src: "/events/Ramadan 2023/WhatsApp Image 2023-03-26 at 20.34.40.jpg",
    title_ar: "تجهيز وتوزيع كراتين رمضان المبارك 2023",
    title_en: "Packaging Ramadan Charity Boxes 2023",
    tag_ar: "العمل الخيري",
    tag_en: "Charity"
  },
  {
    category: "conferences",
    src: "/events/Architectura department honorary event/IMG_9810.jpg",
    title_ar: "مراسم تكريم الأساتذة والطلاب المتميزين",
    title_en: "Honoring Faculty Professors and Top Students",
    tag_ar: "مؤتمرات وتكريم",
    tag_en: "Conferences"
  },
  {
    category: "events",
    src: "/events/Reception day  2026/IMG-20250921-WA0001.jpg",
    title_ar: "يوم استقبال وإرشاد مهندسي المستقبل الجدد",
    title_en: "Freshmen Reception & Guidance Day",
    tag_ar: "الحياة الجامعية",
    tag_en: "Campus Life"
  },
  {
    category: "charity",
    src: "/events/المعرض الخيري الثانى/WhatsApp Image 2023-11-04 at 11.56.29 PM.jpeg",
    title_ar: "فعاليات المعرض الخيري الثاني للملابس والتكافل",
    title_en: "Second Charity Clothing & Support Fair",
    tag_ar: "العمل الخيري",
    tag_en: "Charity"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0196.jpg",
    title_ar: "اجتماعات التخطيط والمحاكاة لأسرة السفراء",
    title_en: "Ambassadors Planning & Simulation Session",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "events",
    src: "/events/Ramadan Decoration 2022/WhatsApp Image 2023-11-04 at 2.22.40 AM (1).jpeg",
    title_ar: "تزيين بهو كلية الهندسة بالأجواء الرمضانية",
    title_en: "Ramadan Campus Ambient Decoration",
    tag_ar: "الحياة الجامعية",
    tag_en: "Campus Life"
  },
  {
    category: "charity",
    src: "/events/Ramadan 2025/WhatsApp Image 2025-03-11 at 19.11.44_0e69a1c2.jpg",
    title_ar: "قوافل رمضان 2025 للعام الخامس على التوالي",
    title_en: "Ramadan 2025 Convoys - 5th Year Running",
    tag_ar: "العمل الخيري",
    tag_en: "Charity"
  },
  {
    category: "conferences",
    src: "/events/الندوة التعريفية لقسم إتصالات/WhatsApp Image 2023-11-03 at 2.26.26 AM.jpeg",
    title_ar: "الندوة التعريفية الموسعة لقسم هندسة الاتصالات",
    title_en: "Communications Engineering Orientation Seminar",
    tag_ar: "مؤتمرات وتكريم",
    tag_en: "Conferences"
  },
  {
    category: "events",
    src: "/events/Reception day  2026/IMG-20250921-WA0015.jpg",
    title_ar: "جولات المعامل المتطورة مع طلاب الهندسة الجدد",
    title_en: "Engineering Labs Tours with Freshmen",
    tag_ar: "الحياة الجامعية",
    tag_en: "Campus Life"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/WhatsApp Image 2023-12-24 at 00.47.06_45888772.jpg",
    title_ar: "لقاءات بناء الفريق والأخوة بين أعضاء السفراء",
    title_en: "Team Bonding & Fellowship Session",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  }
,
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0192.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0193.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0194.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0195.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0196.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0197.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0198.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0199.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0200.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0201.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0202.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0203.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0204.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0205.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0206.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0207.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0208.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0209.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0210.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0211.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0212.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20230710-WA0213.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0015.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0016.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0017.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0018.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0019.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0020.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/IMG-20231224-WA0021.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/WhatsApp Image 2023-12-24 at 00.47.06_45888772.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/WhatsApp Image 2023-12-24 at 00.48.50_b024a295.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/WhatsApp Image 2023-12-24 at 13.10.23_9126b562.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
  {
    category: "team",
    src: "/Ambassadors Photos/WhatsApp Image 2023-12-24 at 13.10.47_07492b02.jpg",
    title_ar: "فريق سفراء حورس في الحرم الجامعي",
    title_en: "Horus Ambassadors Team on Campus",
    tag_ar: "فريق العمل",
    tag_en: "Team"
  },
,
  {
    category: "events",
    src: "/events/scraped/428046797_8140837339276126_1539665425403559252_n.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/70-2.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/71-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/72-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/73-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/74-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/75-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/76-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/77-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/78-1.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/79.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/80.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/81.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/82.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/83.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/84.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/85.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/86.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/87.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/88.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/89.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
  {
    category: "events",
    src: "/events/scraped/90.jpg",
    title_ar: "توثيق أنشطة سفراء حورس الرسمية",
    title_en: "Official Horus Ambassadors Activities",
    tag_ar: "أنشطة رسمية",
    tag_en: "Official Activities"
  },
];

// Current State
let currentLang = localStorage.getItem("horus_lang") || "ar";
let activeFilter = "all";
let currentLightboxIndex = 0;
let filteredGallery = [...galleryItems];

// ==========================================================================
// 3. I18N ENGINE
// ==========================================================================
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("horus_lang", lang);

  const html = document.documentElement;
  html.lang = lang;
  html.dir = lang === "ar" ? "rtl" : "ltr";

  // Update button state
  const toggleBtn = document.getElementById("langToggleBtn");
  if (toggleBtn) {
    toggleBtn.textContent = lang === "ar" ? "EN | English" : "عربي | AR";
  }

  // Translate all [data-i18n]
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Translate all [data-i18n-placeholder]
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });

  // Re-render gallery cards with localized titles
  renderGallery();
}

// ==========================================================================
// 4. GALLERY & LIGHTBOX
// ==========================================================================
function renderGallery() {
  const container = document.getElementById("galleryGrid");
  if (!container) return;
  if (!container) return;

  filteredGallery = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  container.innerHTML = "";

  filteredGallery.forEach((item, index) => {
    const title = currentLang === "ar" ? item.title_ar : item.title_en;
    const tag = currentLang === "ar" ? item.tag_ar : item.tag_en;

    const card = document.createElement("div");
    // Assign bento class based on index logic for a nice masonry look
    let bentoClass = "bento-square";
    if (index % 7 === 0) bentoClass = "bento-feature"; // 1st item big
    else if (index % 7 === 1 || index % 7 === 5) bentoClass = "bento-wide";
    else if (index % 7 === 3) bentoClass = "bento-tall";
    
    card.className = `gallery-item reveal reveal-up ${bentoClass}`; // keep reveal for consistency
    card.setAttribute("data-tilt", "true");
    card.innerHTML = `
      <img src="${encodeURI(item.src)}" alt="${title}" class="gallery-img" loading="lazy" />
      <div class="gallery-overlay">
        <span class="gallery-tag">${tag}</span>
        <h4 class="gallery-caption">${title}</h4>
      </div>
      <div class="gallery-glare"></div>
    `;

    card.addEventListener("click", () => openLightbox(index));
    // Add 3D Tilt listener
    card.addEventListener('mousemove', handleTilt);
    card.addEventListener('mouseleave', resetTilt);
    
    container.appendChild(card);
    
    // Add visible class with a slight stagger so the transition plays
    setTimeout(() => {
      card.classList.add("visible");
    }, 50 + (index * 50));
  });
  
  // Re-run tilt initialization for newly added DOM elements
  if (typeof init3DTilt === 'function') {
    init3DTilt();
  }

}

function initGalleryFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      activeFilter = btn.getAttribute("data-filter");
      renderGallery();
    });
  });
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

function updateLightboxContent() {
  const item = filteredGallery[currentLightboxIndex];
  if (!item) return;

  const img = document.getElementById("lightboxImg");
  const caption = document.getElementById("lightboxCaption");

  if (img) img.src = encodeURI(item.src);
  if (caption) {
    caption.textContent = currentLang === "ar" ? item.title_ar : item.title_en;
  }
}

function nextLightbox() {
  currentLightboxIndex = (currentLightboxIndex + 1) % filteredGallery.length;
  updateLightboxContent();
}

function prevLightbox() {
  currentLightboxIndex = (currentLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length;
  updateLightboxContent();
}

// ==========================================================================
// 5. VIDEO MODAL PLAYER
// ==========================================================================
function openVideoModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideoPlayer");
  if (modal) modal.classList.add("open");
  if (video) {
    video.play();
  }
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  const modal = document.getElementById("videoModal");
  const video = document.getElementById("mainVideoPlayer");
  if (video) {
    video.pause();
    video.currentTime = 0;
  }
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================================================
// 6. ANIMATED STATS COUNTER
// ==========================================================================
function initStatsCounter() {
  const statNumbers = document.querySelectorAll(".stat-number");
  let animated = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        statNumbers.forEach(stat => {
          const target = parseInt(stat.getAttribute("data-target"), 10);
          const suffix = stat.getAttribute("data-suffix") || "";
          const prefix = stat.getAttribute("data-prefix") || "";
          let count = 0;
          const duration = 2000;
          const increment = Math.max(1, Math.floor(target / (duration / 25)));

          const timer = setInterval(() => {
            count += increment;
            if (count >= target) {
              count = target;
              clearInterval(timer);
            }
            stat.textContent = `${prefix}${count}${suffix}`;
          }, 25);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.getElementById("statsSection");
  if (statsSection) observer.observe(statsSection);
}

// ==========================================================================
// 7. RECRUITMENT APPLICATION FORM
// ==========================================================================
function initRecruitmentForm() {
  const form = document.getElementById("recruitmentForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Form inputs
    const fullName = document.getElementById("applicantName")?.value.trim();
    const studentId = document.getElementById("applicantId")?.value.trim();
    const dept = document.getElementById("applicantDept")?.value;
    const year = document.getElementById("applicantYear")?.value;

    if (!fullName || !studentId || !dept || !year) {
      alert(currentLang === "ar" ? "برجاء ملء جميع الحقول الإلزامية." : "Please fill in all required fields.");
      return;
    }

    // Generate random application reference code
    const randomCode = "HA-" + Math.floor(100000 + Math.random() * 900000);
    const codeEl = document.getElementById("successAppCode");
    if (codeEl) codeEl.textContent = randomCode;

    // Open Success Modal
    const successModal = document.getElementById("successModal");
    if (successModal) successModal.classList.add("open");
    document.body.style.overflow = "hidden";

    form.reset();
  });
}

function closeSuccessModal() {
  const modal = document.getElementById("successModal");
  if (modal) modal.classList.remove("open");
  document.body.style.overflow = "";
}

// ==========================================================================
// 8. NAVBAR SCROLL & MOBILE MENU
// ==========================================================================
function initNavbar() {
  const navbar = document.querySelector(".navbar");
  
  // Scroll Spy for Active Navigation Link
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu .nav-link");

  const scrollSpy = () => {
    let current = "hero"; // Default
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= (sectionTop - 200)) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
    scrollSpy();
  });
  
  // Run once on init
  scrollSpy();

  const mobileBtn = document.getElementById("mobileMenuBtn");
  const navPill  = document.querySelector(".nav-pill-wrap");
  if (mobileBtn && navPill) {
    mobileBtn.addEventListener("click", () => {
      navPill.classList.toggle("open");
      mobileBtn.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.addEventListener("click", () => {
        navPill.classList.remove("open");
        mobileBtn.classList.remove("open");
      });
    });
  }
}

// ==========================================================================
// ANNOUNCEMENT BAR DISMISS
// ==========================================================================
function initAnnounceBar() {
  const bar   = document.getElementById("announceBar");
  const close = document.getElementById("announceClose");
  if (!bar) return;

  // If already dismissed this session, hide immediately
  if (sessionStorage.getItem("announceDismissed")) {
    bar.classList.add("hidden");
    document.documentElement.style.setProperty("--bar-h", "0px");
    return;
  }

  close?.addEventListener("click", () => {
    bar.classList.add("hidden");
    // Collapse the space so navbar slides up smoothly
    setTimeout(() => {
      document.documentElement.style.setProperty("--bar-h", "0px");
    }, 350);
    sessionStorage.setItem("announceDismissed", "1");
  });

  // Close bar when CTA is clicked too (user navigates away)
  bar.querySelector(".announce-cta")?.addEventListener("click", () => {
    bar.classList.add("hidden");
    setTimeout(() => {
      document.documentElement.style.setProperty("--bar-h", "0px");
    }, 350);
    sessionStorage.setItem("announceDismissed", "1");
  });
}

// ==========================================================================
// SCROLL REVEAL — INTERSECTION OBSERVER
// ==========================================================================
function initScrollReveal() {
  const revealEls = document.querySelectorAll(".reveal");
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Respect individual --delay CSS variable for staggering
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // animate once
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealEls.forEach(el => observer.observe(el));
}

// ==========================================================================
// 9. BACKGROUND CANVAS — ENGINEERING NODE NETWORK
// ==========================================================================
function initBgCanvas() {
  const canvas = document.getElementById("bgCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let W, H, shapes;
  const SHAPE_COUNT = 30; 
  const SPEED = 0.3;
  const CONNECTION_DIST = 150;

  // Gold and brand colors
  const COLORS = [
    "rgba(212, 175, 55, ", // Gold
    "rgba(241, 90, 36, ",  // Orange
    "rgba(255, 255, 255, " // White
  ];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }

  function createShapes() {
    shapes = [];
    const types = ["hexagon", "triangle", "square", "circuit", "gear", "dot"];
    for (let i = 0; i < SHAPE_COUNT; i++) {
      let type = types[Math.floor(Math.random() * types.length)];
      // Bias towards dots and simple shapes for cleaner look
      if (Math.random() > 0.6) type = "dot";
      
      shapes.push({
        type: type,
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * SPEED,
        vy: (Math.random() - 0.5) * SPEED,
        size: type === "dot" ? (2 + Math.random() * 3) : (10 + Math.random() * 25),
        angle: Math.random() * Math.PI * 2,
        vAngle: (Math.random() - 0.5) * 0.02,
        colorBase: COLORS[Math.floor(Math.random() * COLORS.length)],
        opacity: 0.1 + Math.random() * 0.2
      });
    }
  }

  function drawHexagon(ctx, x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 6; i++) {
      const angle = (Math.PI / 3) * i;
      const px = x + size * Math.cos(angle);
      const py = y + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }

  function drawTriangle(ctx, x, y, size) {
    ctx.beginPath();
    for (let i = 0; i < 3; i++) {
      const angle = (Math.PI * 2 / 3) * i - Math.PI / 2;
      const px = x + size * Math.cos(angle);
      const py = y + size * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
  }

  function drawSquare(ctx, x, y, size) {
    ctx.strokeRect(x - size/2, y - size/2, size, size);
  }

  function drawCircuit(ctx, x, y, size) {
    ctx.beginPath();
    ctx.moveTo(x - size, y);
    ctx.lineTo(x - size/2, y);
    ctx.lineTo(x, y - size/2);
    ctx.lineTo(x + size/2, y - size/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x + size/2, y - size/2, 3, 0, Math.PI*2);
    ctx.fill();
    
    ctx.beginPath();
    ctx.moveTo(x - size/2, y);
    ctx.lineTo(x, y + size/2);
    ctx.lineTo(x + size, y + size/2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x - size, y, 3, 0, Math.PI*2);
    ctx.fill();
  }

  function drawGear(ctx, x, y, size) {
    const teeth = 8;
    const innerRadius = size * 0.6;
    const outerRadius = size;
    ctx.beginPath();
    for (let i = 0; i < teeth * 2; i++) {
      const radius = i % 2 === 0 ? outerRadius : innerRadius;
      const angle = (Math.PI / teeth) * i;
      const px = x + radius * Math.cos(angle);
      const py = y + radius * Math.sin(angle);
      if (i === 0) ctx.moveTo(px, py);
      else ctx.lineTo(px, py);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(x, y, innerRadius * 0.5, 0, Math.PI*2);
    ctx.stroke();
  }

  function animate() {
    ctx.clearRect(0, 0, W, H);

    // Draw faint blueprint grid in background
    ctx.strokeStyle = "rgba(212, 175, 55, 0.03)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (let x = 0; x < W; x += 150) { ctx.moveTo(x, 0); ctx.lineTo(x, H); }
    for (let y = 0; y < H; y += 150) { ctx.moveTo(0, y); ctx.lineTo(W, y); }
    ctx.stroke();

    // Draw connections (circuit/network lines) between nearby shapes
    for (let i = 0; i < shapes.length; i++) {
      for (let j = i + 1; j < shapes.length; j++) {
        const dx = shapes[i].x - shapes[j].x;
        const dy = shapes[i].y - shapes[j].y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < CONNECTION_DIST) {
          const alpha = 1 - (dist / CONNECTION_DIST);
          ctx.beginPath();
          ctx.moveTo(shapes[i].x, shapes[i].y);
          // Engineering schematic style line: right angle instead of direct diagonal
          if (Math.random() > 0.5) {
             ctx.lineTo(shapes[j].x, shapes[i].y);
          } else {
             ctx.lineTo(shapes[i].x, shapes[j].y);
          }
          ctx.lineTo(shapes[j].x, shapes[j].y);
          ctx.strokeStyle = `rgba(212, 175, 55, ${alpha * 0.15})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }

    shapes.forEach(s => {
      s.x += s.vx;
      s.y += s.vy;
      s.angle += s.vAngle;

      if (s.x < -100) s.x = W + 100;
      if (s.x > W + 100) s.x = -100;
      if (s.y < -100) s.y = H + 100;
      if (s.y > H + 100) s.y = -100;

      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.angle);
      
      const fullColor = s.colorBase + s.opacity + ")";
      ctx.strokeStyle = fullColor;
      ctx.fillStyle = fullColor;
      ctx.lineWidth = 1.5;

      if (s.type === "hexagon") drawHexagon(ctx, 0, 0, s.size);
      else if (s.type === "triangle") drawTriangle(ctx, 0, 0, s.size);
      else if (s.type === "square") drawSquare(ctx, 0, 0, s.size);
      else if (s.type === "circuit") drawCircuit(ctx, 0, 0, s.size);
      else if (s.type === "gear") drawGear(ctx, 0, 0, s.size);
      else if (s.type === "dot") {
          ctx.beginPath();
          ctx.arc(0, 0, s.size, 0, Math.PI*2);
          ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(animate);
  }

  window.addEventListener("resize", () => {
    resize();
    createShapes();
  });
  
  resize();
  createShapes();
  animate();
}

// ==========================================================================
// 3D TILT EFFECT
// ==========================================================================
function init3DTilt() {
  const cards = document.querySelectorAll("[data-tilt]");
  if (!cards.length) return;
  
  // Only apply on non-touch devices
  if (window.matchMedia("(pointer: coarse)").matches) return;

  cards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxTilt = 8;
      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });
    
    card.addEventListener("mouseleave", () => {
      card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
      card.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
    });
    
    card.addEventListener("mouseenter", () => {
      card.style.transition = "transform 0.1s ease-out";
    });
  });
}



// ==========================================================================
// HALL OF FAME TABS
// ==========================================================================
function initFameTabs() {
  const tabBtns = document.querySelectorAll(".fame-tab-btn");
  const panels = document.querySelectorAll(".fame-panel");

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active from all
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });
      panels.forEach(p => p.classList.remove("active"));

      // Add active to clicked
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");
      
      const year = btn.getAttribute("data-year");
      const targetPanel = document.getElementById(`fame-${year}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}

// ==========================================================================
// 10. INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {

  // Set initial language
  setLanguage(currentLang);

  // Page Loader
  initPageLoader();

  // Dark / Light Mode
  initThemeToggle();

  // Countdown Timer
  initCountdown();

  // Language switcher toggle click
  const langBtn = document.getElementById("langToggleBtn");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      setLanguage(currentLang === "ar" ? "en" : "ar");
    });
  }

  // Gallery & filters
  initGalleryFilters();
  renderGallery();

  // Stats Counters
  initStatsCounter();

  // Recruitment Form
  initRecruitmentForm();

  // Navbar interactions
  initNavbar();

  // Background canvas animation
  initBgCanvas();

  // 3D Tilt Effect
  init3DTilt();

  // Floating Action Button


  // Hall of Fame Tabs
  initFameTabs();

  // Announcement bar dismiss
  initAnnounceBar();

  // Scroll-reveal animations
  initScrollReveal();

  // Video Trigger Button
  const videoTriggers = document.querySelectorAll(".open-video-trigger");
  videoTriggers.forEach(btn => {
    btn.addEventListener("click", openVideoModal);
  });

  // Modal Closers
  document.querySelectorAll(".close-lightbox-btn").forEach(btn => {
    btn.addEventListener("click", closeLightbox);
  });
  document.querySelectorAll(".close-video-btn").forEach(btn => {
    btn.addEventListener("click", closeVideoModal);
  });
  document.querySelectorAll(".close-success-btn").forEach(btn => {
    btn.addEventListener("click", closeSuccessModal);
  });

  // Modal Navigation
  document.getElementById("lightboxNext")?.addEventListener("click", nextLightbox);
  document.getElementById("lightboxPrev")?.addEventListener("click", prevLightbox);

  // Keyboard navigation for Lightbox
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeVideoModal();
      closeSuccessModal();
    } else if (e.key === "ArrowRight") {
      if (currentLang === "ar") prevLightbox(); else nextLightbox();
    } else if (e.key === "ArrowLeft") {
      if (currentLang === "ar") nextLightbox(); else prevLightbox();
    }
  });

  // ==========================================================================
  // LEADERSHIP TABS
  // ==========================================================================
  initLeadershipTabs();
});

/**
 * Leadership tab switching with smooth animation.
 */
function initLeadershipTabs() {
  const tabBtns = document.querySelectorAll(".leader-tab-btn");
  const tabPanels = document.querySelectorAll(".leader-tab-panel");

  if (!tabBtns.length) return;

  tabBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;

      // Deactivate all buttons
      tabBtns.forEach(b => {
        b.classList.remove("active");
        b.setAttribute("aria-selected", "false");
      });

      // Hide all panels (remove active, then re-trigger animation on show)
      tabPanels.forEach(panel => {
        panel.classList.remove("active");
      });

      // Activate clicked button
      btn.classList.add("active");
      btn.setAttribute("aria-selected", "true");

      // Show the target panel with animation
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        // Force reflow to restart animation
        targetPanel.classList.add("active");
      }
    });
  });
}


// ==========================================================================
// PAGE LOADER
// ==========================================================================
function initPageLoader() {
  const loader = document.getElementById('pageLoader');
  const blob = document.getElementById('loaderBlob');
  const videoCard = document.querySelector('.hero-media-card');
  if (!loader || !blob) return;

  const dismiss = () => {
    // Start transition
    loader.classList.add('transitioning');

    if (videoCard) {
      // Get target dimensions
      const rect = videoCard.getBoundingClientRect();
      const targetWidth = rect.width;
      const targetHeight = rect.height;
      const targetTop = rect.top + (targetHeight / 2);
      const targetLeft = rect.left + (targetWidth / 2);

      // Apply transition to blob
      blob.style.width = targetWidth + 'px';
      blob.style.height = targetHeight + 'px';
      blob.style.top = targetTop + 'px';
      blob.style.left = targetLeft + 'px';

      // After transition completes (1.5s), fade out loader and pulse video
      setTimeout(() => {
        loader.classList.add('loaded');
        videoCard.classList.add('focus-pulse');
        // Remove pulse class later
        setTimeout(() => videoCard.classList.remove('focus-pulse'), 2000);
      }, 1500);
    } else {
      // Fallback if no video card on page
      loader.classList.add('loaded');
    }
  };

  let dismissed = false;
  const safeDismiss = () => {
    if (dismissed) return;
    dismissed = true;
    setTimeout(dismiss, 500);
  };

  if (document.readyState === 'complete') {
    safeDismiss();
  } else {
    window.addEventListener('load', safeDismiss);
    // Force dismiss after 1.5 seconds even if heavy assets are still loading
    setTimeout(safeDismiss, 1500);
  }
}
// ==========================================================================
// DARK / LIGHT THEME TOGGLE
// ==========================================================================
function initThemeToggle() {
  const btn = document.getElementById('themeToggleBtn');
  if (!btn) return;
  const saved = localStorage.getItem('horus_theme') || 'dark';
  applyTheme(saved);

  btn.addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('horus_theme', next);
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  const btn = document.getElementById('themeToggleBtn');
  if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// ==========================================================================
// COUNTDOWN TIMER
// ==========================================================================
function initCountdown() {
  // Target: October 1st of next academic year
  const now = new Date();
  const targetYear = now.getMonth() >= 9 ? now.getFullYear() + 1 : now.getFullYear();
  const target = new Date(targetYear, 9, 1, 0, 0, 0); // Oct 1st

  const days  = document.getElementById('cd-days');
  const hours = document.getElementById('cd-hours');
  const mins  = document.getElementById('cd-mins');
  const secs  = document.getElementById('cd-secs');

  if (!days) return;

  function pad(n) { return String(n).padStart(2, '0'); }

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      days.textContent = hours.textContent = mins.textContent = secs.textContent = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    days.textContent  = pad(d);
    hours.textContent = pad(h);
    mins.textContent  = pad(m);
    secs.textContent  = pad(s);
  }

  tick();
  setInterval(tick, 1000);
}


// ==========================================================================
// ORG CHART INTERACTIVITY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const orgNodes = document.querySelectorAll('.org-node.has-children');
  
  orgNodes.forEach(node => {
    node.addEventListener('click', function(e) {
      // Toggle collapsed class on the parent LI
      const parentLi = this.parentElement;
      parentLi.classList.toggle('collapsed');
      this.classList.toggle('collapsed');
    });
  });
});

// ==========================================================================
// 3D PARALLAX BENTO GRID LOGIC
// ==========================================================================
function handleTilt(e) {
  const card = e.currentTarget;
  const rect = card.getBoundingClientRect();
  const x = e.clientX - rect.left; // x position within the element
  const y = e.clientY - rect.top;  // y position within the element
  
  const centerX = rect.width / 2;
  const centerY = rect.height / 2;
  
  // Calculate rotation (max 10 degrees)
  const rotateX = ((y - centerY) / centerY) * -10;
  const rotateY = ((x - centerX) / centerX) * 10;
  
  card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  
  // Move glare
  const glare = card.querySelector('.gallery-glare');
  if (glare) {
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    glare.style.background = `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.2) 0%, transparent 60%)`;
  }
}

function resetTilt(e) {
  const card = e.currentTarget;
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  const glare = card.querySelector('.gallery-glare');
  if (glare) glare.style.background = `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, transparent 60%)`;
}

// ==========================================================================
// TERMINAL MODAL LOGIC
// ==========================================================================
let typeInterval;

function openTerminal(element) {
  const name = element.getAttribute("data-name");
  const role = element.getAttribute("data-role");
  const dept = element.getAttribute("data-dept");
  const email = element.getAttribute("data-email");
  const imgUrl = element.getAttribute("data-img");

  const modal = document.getElementById("terminal-modal");
  const textBox = document.getElementById("terminal-text");
  const photoBox = document.getElementById("terminal-photo");
  
  modal.classList.add("active");
  photoBox.classList.remove("show");
  photoBox.innerHTML = '';
  textBox.innerHTML = '';

  const lines = [
    "> INITIALIZING SECURE LINK...",
    "> ACCESSING HORUS DATABANKS...",
    "> [OK] CONNECTION ESTABLISHED.",
    "",
    "> FETCHING PERSONNEL DOSSIER...",
    "---------------------------------",
    `NAME:      ${name}`,
    `POSITION:  ${role}`,
    `DEPT:      ${dept}`,
    `EMAIL:     ${email}`,
    "---------------------------------",
    "> DOWNLOADING BIOMETRIC SCAN..."
  ];

  let currentLine = 0;
  let currentChar = 0;
  
  function typeWriter() {
    if (currentLine < lines.length) {
      if (currentChar < lines[currentLine].length) {
        // Remove cursor
        textBox.innerHTML = textBox.innerHTML.replace('<span class="terminal-cursor"></span>', '');
        
        // Add char
        textBox.innerHTML += lines[currentLine].charAt(currentChar);
        
        // Re-add cursor
        textBox.innerHTML += '<span class="terminal-cursor"></span>';
        
        currentChar++;
        
        // Random typing speed for realism
        const speed = Math.random() * 20 + 10;
        typeInterval = setTimeout(typeWriter, speed);
      } else {
        // Line break
        textBox.innerHTML = textBox.innerHTML.replace('<span class="terminal-cursor"></span>', '');
        textBox.innerHTML += '<br><span class="terminal-cursor"></span>';
        currentLine++;
        currentChar = 0;
        // Pause between lines
        typeInterval = setTimeout(typeWriter, 150);
      }
    } else {
      // Done typing, show image
      if (imgUrl) {
        // Create a beautiful profile card layout instead of just an image
        photoBox.innerHTML = `
          <div class="terminal-profile-card">
            <div class="tpc-header">
              <img src="${imgUrl}" alt="${name}" class="tpc-img" onerror="if(!this.dataset.fallback){this.dataset.fallback='1';this.src='${imgUrl.replace(/^\//, '')}';}">
              <div class="tpc-hud-badge"><span class="tpc-hud-dot"></span> DOSSIER // VERIFIED</div>
            </div>
            <div class="tpc-body">
              <div class="tpc-role">${role}</div>
              <h3 class="tpc-name">${name}</h3>
              <div class="tpc-details">
                <div class="tpc-detail-row">
                  <span class="tpc-icon">🏛️</span>
                  <span>${dept || 'Faculty of Engineering — HUE'}</span>
                </div>
                ${email ? `
                <div class="tpc-detail-row">
                  <span class="tpc-icon">✉️</span>
                  <a href="mailto:${email}" class="tpc-email-link">${email}</a>
                </div>` : ''}
              </div>
            </div>
          </div>
        `;
        photoBox.classList.add("show");
        
        textBox.innerHTML = textBox.innerHTML.replace('<span class="terminal-cursor"></span>', '');
        textBox.innerHTML += '<br>> [OK] SCAN COMPLETE.<span class="terminal-cursor"></span>';
      }
    }
  }

  clearTimeout(typeInterval);
  typeWriter();
}

function closeTerminal() {
  const modal = document.getElementById("terminal-modal");
  if (modal) {
    modal.classList.remove("active");
  }
  clearTimeout(typeInterval);
}

// Modal Backdrop Click & Escape Key Listeners
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("terminal-modal");
    if (modal) {
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeTerminal();
        }
      });
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeTerminal();
    }
  });
}

// ==========================================================================
// HOME PAGE 3D GLOBE GALLERY
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  const globe = document.getElementById('home-globe');
  const container = document.getElementById('home-globe-container');
  
  if (!globe || !container) return; // Only run on home page
  
  const homeImages = [
    "/events/official_archive/ha-2022-2023-09_88.jpg",
    "/events/official_archive/ha-2021-2022-02_43.jpg",
    "/events/official_archive/ha-2022-2023-01_95-1.jpg",
    "/events/scraped/81.jpg",
    "/events/official_archive/ha-2021-2022-05_61.jpg",
    "/events/Reception day  2026/IMG-20250921-WA0046.jpg",
    "/events/Ramadan 2024/Dr Ahmed Rahid memorial.jpg",
    "/events/official_archive/ha-2022-2023-04_114.jpg",
    "/events/official_archive/ha-2022-2023-08_84.jpg",
    "/events/Reception day  2026/IMG-20250921-WA0033.jpg",
    "/events/official_archive/ha-2022-2023-05_118.jpg",
    "/events/Reception day  2026/IMG-20250921-WA0001.jpg",
    "/events/Reception day  2026/IMG-20250921-WA0015.jpg",
    "/events/official_archive/ha-2022-2023-08_84.jpg"
  ];
  
  const numImages = homeImages.length;
  
  // Responsive Radius
  const isMobile = window.innerWidth < 768;
  const radius = isMobile ? window.innerWidth * 0.45 : 350;
  const itemSize = isMobile ? 100 : 180;
  
  // State
  let rotationX = 0;
  let rotationY = 0;
  let targetRotationX = 0;
  let targetRotationY = 0;
  let isDragging = false;
  let isHovering = false;
  let startMouseX = 0;
  let startMouseY = 0;
  
  const globeItems = [];

  // Golden Spiral Spherical Distribution
  const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
  
  homeImages.forEach((src, i) => {
    const y = 1 - (i / (numImages - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    
    const theta = phi * i; // golden angle increment
    
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    
    // Create Element
    const el = document.createElement('div');
    el.className = 'globe-item';
    el.style.width = itemSize + 'px';
    el.style.height = itemSize + 'px';
    el.style.position = 'absolute';
    el.style.transition = 'filter 0.3s ease, transform 0.1s ease';
    el.style.cursor = 'pointer';
    el.style.borderRadius = '12px';
    el.style.overflow = 'hidden';
    el.style.border = '1px solid rgba(255,255,255,0.1)';
    el.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)';
    
    const img = document.createElement('img');
    img.src = src;
    img.loading = 'lazy';
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.objectFit = 'cover';
    el.appendChild(img);
    
    globe.appendChild(el);
    
    globeItems.push({
      el: el,
      x: x, y: y, z: z
    });
    
    // Hover Events
    el.addEventListener('mouseenter', () => { isHovering = true; el.classList.add('focused'); });
    el.addEventListener('mouseleave', () => { isHovering = false; el.classList.remove('focused'); });
    
    // Touch Events for iOS
    el.addEventListener('touchstart', () => {
       document.querySelectorAll('.globe-item.focused').forEach(e => e.classList.remove('focused'));
       isHovering = true; 
       el.classList.add('focused'); 
    });
    
    // Lightbox Click Logic
    el.addEventListener('click', () => {
      const lightbox = document.getElementById('lightbox');
      if(lightbox) {
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        lightboxImg.src = img.src;
        lightbox.classList.add('active');
      }
    });
  });
  
  // Animation Loop
  function render() {
    if (!isDragging && !isHovering) {
      targetRotationY -= 0.002; // Auto rotate slow
    }
    
    rotationX += (targetRotationX - rotationX) * 0.1;
    rotationY += (targetRotationY - rotationY) * 0.1;
    
    globe.style.transform = `rotateX(${rotationX}rad) rotateY(${rotationY}rad)`;
    
    // Update items to face the camera and handle depth opacity
    globeItems.forEach(item => {
      // Cancel out the globe's rotation so images always face the user
      item.el.style.transform = `
        translate3D(${item.x * radius}px, ${item.y * radius}px, ${item.z * radius}px)
        rotateY(${-rotationY}rad) rotateX(${-rotationX}rad)
      `;
      
      const sinX = Math.sin(rotationX), cosX = Math.cos(rotationX);
      const sinY = Math.sin(rotationY), cosY = Math.cos(rotationY);
      
      const rotatedX = item.x * cosY + item.z * sinY;
      const rotatedZ = -item.x * sinY + item.z * cosY;
      const finalZ = item.y * sinX + rotatedZ * cosX;
      
      const zPercent = (finalZ + 1) / 2;
      
      if (!item.el.classList.contains('focused')) {
        item.el.style.opacity = 0.1 + (zPercent * 0.9);
        item.el.style.filter = `blur(${(1 - zPercent) * 5}px) brightness(${0.5 + zPercent * 0.5})`;
        item.el.style.zIndex = Math.round(zPercent * 100);
      } else {
        item.el.style.opacity = 1;
        item.el.style.filter = 'none';
        item.el.style.zIndex = 1000;
        item.el.style.transform += ' scale(1.1)';
      }
    });
    
    requestAnimationFrame(render);
  }
  
  render();
  
  // Mouse/Touch Drag Handlers
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startMouseX = e.clientX;
    startMouseY = e.clientY;
    container.style.cursor = 'grabbing';
  });
  
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const deltaX = e.clientX - startMouseX;
    const deltaY = e.clientY - startMouseY;
    
    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;
    
    // Limit vertical rotation to prevent flipping upside down
    targetRotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotationX));
    
    startMouseX = e.clientX;
    startMouseY = e.clientY;
  });
  
  window.addEventListener('mouseup', () => {
    isDragging = false;
    container.style.cursor = 'grab';
  });
  
  // Touch support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    startMouseX = e.touches[0].clientX;
    startMouseY = e.touches[0].clientY;
  });
  
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - startMouseX;
    const deltaY = e.touches[0].clientY - startMouseY;
    
    targetRotationY += deltaX * 0.005;
    targetRotationX += deltaY * 0.005;
    targetRotationX = Math.max(-Math.PI/2, Math.min(Math.PI/2, targetRotationX));
    
    startMouseX = e.touches[0].clientX;
    startMouseY = e.touches[0].clientY;
  }, {passive: true});
  
  window.addEventListener('touchend', () => {
    isDragging = false;
  });
});

// Auto-Trigger Terminal Animation for Team Leader on Scroll
document.addEventListener('DOMContentLoaded', () => {
  const leadershipSection = document.getElementById('leadership');
  const centerNode = document.querySelector('.orbit-node.center-node .orbit-card');
  
  if (leadershipSection && centerNode) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Check if it already played this session
          if (!sessionStorage.getItem('terminalPlayed')) {
            sessionStorage.setItem('terminalPlayed', 'true');
            // Add a small delay for dramatic effect
            setTimeout(() => {
              openTerminal(centerNode);
            }, 1000);
          }
          observer.unobserve(leadershipSection);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(leadershipSection);
  }
});

// ==========================================================================
// ORBIT SVG LINES LOGIC
// ==========================================================================
function drawOrbitLines() {
  const svg = document.getElementById("orbit-svg");
  const orbitSys = document.querySelector(".orbit-system");
  if (!svg || !orbitSys) return;

  // Define the hierarchy connections (Head -> Vice Head)
  const connections = [
    // Team Leader to Vice Heads & Consultant
    { from: "node_Anas_Elzhairy", to: "node_Mohamed_Mansour" },
    { from: "node_Anas_Elzhairy", to: "node_Saad_Elbayyar" },
    { from: "node_Anas_Elzhairy", to: "node_Mokhtar_Mohamed_Hemida" },
    
    // Media Sector
    { from: "node_Ziad_Shiref", to: "node_Malak_Sheta" },
    { from: "node_Ziad_Shiref", to: "node_Hager_Ahmed" },
    
    // PR Sector
    { from: "node_Mohamed_Elawdy", to: "node_Jana_Abdelrahman_Hussein" },
    
    // Planning / Implementation Sector
    { from: "node_Dina_Shoukat", to: "node_Hams_Gehad" },
    { from: "node_Dina_Shoukat", to: "node_Mariam_Zakaria" },
  ];

  svg.innerHTML = ''; // Clear existing lines

  const sysRect = orbitSys.getBoundingClientRect();

  connections.forEach(conn => {
    const nodeFrom = document.getElementById(conn.from);
    const nodeTo = document.getElementById(conn.to);

    if (nodeFrom && nodeTo) {
      // Get centers relative to the orbit system
      const rectFrom = nodeFrom.getBoundingClientRect();
      const rectTo = nodeTo.getBoundingClientRect();

      const x1 = (rectFrom.left + rectFrom.width / 2) - sysRect.left;
      const y1 = (rectFrom.top + rectFrom.height / 2) - sysRect.top;
      const x2 = (rectTo.left + rectTo.width / 2) - sysRect.left;
      const y2 = (rectTo.top + rectTo.height / 2) - sysRect.top;

      const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
      line.setAttribute("x1", x1);
      line.setAttribute("y1", y1);
      line.setAttribute("x2", x2);
      line.setAttribute("y2", y2);
      
      // Styling the line
      line.setAttribute("stroke", "rgba(241, 90, 36, 0.5)"); // Horus Orange
      line.setAttribute("stroke-width", "2");
      line.setAttribute("stroke-dasharray", "4 4"); // Dotted/Dashed line
      
      svg.appendChild(line);
    }
  });
}

// Draw lines on load and resize
window.addEventListener("load", drawOrbitLines);
window.addEventListener("resize", drawOrbitLines);

// Also draw when clicking the tab, since display:none might mess up bounding client rect
document.querySelectorAll('.leader-tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setTimeout(drawOrbitLines, 50); // Small delay to let CSS display:block apply
  });
});

// Expose openTerminal globally for inline HTML onclick handlers
window.openTerminal = openTerminal;

// Expose closeTerminal globally
window.closeTerminal = closeTerminal;
