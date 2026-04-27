const LANG = {
  ta: "Tunisian Arabic",
  ar: "العربية",
  en: "English",
  fr: "Français",
};

LANG.ta = "تونسي";
LANG.ar = "العربية";
LANG.fr = "Français";

const RTL_LANGS = new Set(["ta", "ar"]);

const STARTER_PROTOCOLS = [
  {
    id: "starter-solution-prep",
    title: "Solution Preparation",
    category: "General Lab",
    objective: "Prepare and label a lab solution safely and reproducibly.",
    materials: "Reagents, solvent, tubes or bottle, pipettes, balance, labels, PPE",
    steps: "1. Confirm target concentration and final volume.\n2. Calculate reagent amounts.\n3. Add solvent gradually.\n4. Mix until fully dissolved.\n5. Label with name, concentration, date, and initials.",
    duration: "20 to 30 min",
    safetyNotes: "Use PPE and verify compatibility of reagents before mixing.",
    source: "starter",
  },
  {
    id: "starter-sample-labeling",
    title: "Sample Collection and Labeling",
    category: "General Lab",
    objective: "Collect and label samples consistently to reduce mix-ups.",
    materials: "Collection tubes, markers, labels, rack, PPE, log sheet",
    steps: "1. Prepare labels before collection.\n2. Assign a unique sample ID.\n3. Record date, time, and source.\n4. Store immediately under the correct condition.\n5. Cross-check the log sheet before leaving the bench.",
    duration: "10 to 20 min",
    safetyNotes: "Follow biosafety rules for sample handling and transport.",
    source: "starter",
  },
  {
    id: "starter-microscopy",
    title: "Microscopy Imaging",
    category: "Microscopy",
    objective: "Capture consistent microscope images with traceable settings.",
    materials: "Slides or plates, microscope, imaging software, immersion oil if needed",
    steps: "1. Clean optics and prepare the sample.\n2. Select objective and exposure settings.\n3. Focus on the region of interest.\n4. Capture replicate images.\n5. Save files with sample ID, date, and condition.",
    duration: "20 to 45 min",
    safetyNotes: "Handle slides carefully and follow equipment cleaning rules.",
    source: "starter",
  },
  {
    id: "starter-cell-culture",
    title: "Cell Culture Passage",
    category: "Cell Culture",
    objective: "Passage cultured cells while preserving viability and record quality.",
    materials: "Cells, medium, PBS, dissociation reagent, centrifuge tubes, hemocytometer",
    steps: "1. Aspirate spent medium.\n2. Wash cells if needed.\n3. Add dissociation reagent.\n4. Neutralize and collect cells.\n5. Count cells and reseed at the target density.",
    duration: "30 to 40 min",
    safetyNotes: "Work aseptically and disinfect the hood before and after use.",
    source: "starter",
  },
];

const TRANSLATIONS = {
  app_eyebrow: { ta: "مساحة مخبر وبحث علمي", ar: "مساحة مخبر وبحث علمي", en: "Scientific Lab and Research Workspace", fr: "Espace scientifique de labo et de recherche" },
  app_subtitle: { ta: "Lab Asis | لاب أسيس | من إنجاز Tasnim Gassem", ar: "Lab Asis | لاب أسيس | من إنجاز Tasnim Gassem", en: "Lab Asis | لاب أسيس | Created by Tasnim Gassem", fr: "Lab Asis | لاب أسيس | Créé par Tasnim Gassem" },
  sidebar_brand_copy: { ta: "خدمة علمية في بلاصة وحدة", ar: "سير عمل علمي في مكان واحد", en: "Scientific workflow, one place", fr: "Flux scientifique, un seul endroit" },
  nav_dashboard_title: { ta: "لوحة العمل", ar: "لوحة العمل", en: "Dashboard", fr: "Tableau de bord" },
  nav_dashboard_copy: { ta: "ابدا من هنا", ar: "ابدأ من هنا", en: "Start here", fr: "Commencer ici" },
  nav_new_experiment_title: { ta: "تجربة جديدة", ar: "تجربة جديدة", en: "New Experiment", fr: "Nouvelle expérience" },
  nav_new_experiment_copy: { ta: "بروتوكول + مؤقت + ملاحظة", ar: "بروتوكول + مؤقت + ملاحظة", en: "Protocol + timer + note", fr: "Protocole + minuteur + note" },
  nav_lab_notes_copy: { ta: "ملاحظات ونتائج", ar: "ملاحظات ونتائج", en: "Observations and results", fr: "Observations et résultats" },
  results_title: { ta: "النتائج", ar: "النتائج", en: "Results", fr: "Résultats" },
  nav_results_copy: { ta: "ملفات وبيانات", ar: "ملفات وبيانات", en: "Files and datasets", fr: "Fichiers et jeux de données" },
  read_and_cite_title: { ta: "اقرا ووثّق", ar: "اقرأ ووثّق", en: "Read & Cite", fr: "Lire et citer" },
  nav_read_cite_copy: { ta: "مقالات وملخصات ومراجع", ar: "مقالات وملخصات ومراجع", en: "Articles, summaries, citations", fr: "Articles, résumés, citations" },
  tools_title: { ta: "الأدوات", ar: "الأدوات", en: "Tools", fr: "Outils" },
  nav_tools_copy: { ta: "مؤقت وOCR ومحول وتركيز", ar: "مؤقت وOCR ومحوّل وتركيز", en: "Timer, OCR, converter, focus", fr: "Minuteur, OCR, convertisseur, focus" },
  settings_title: { ta: "الإعدادات", ar: "الإعدادات", en: "Settings", fr: "Paramètres" },
  nav_settings_copy: { ta: "اللغة والنسخ الاحتياطي", ar: "اللغة والنسخ الاحتياطي", en: "Language and backup", fr: "Langue et sauvegarde" },
  hero_kicker: { ta: "مساحة علمية بسيطة", ar: "مساحة علمية بسيطة", en: "Simple scientific workspace", fr: "Espace scientifique simple" },
  hero_title: { ta: "كل ما تحتاجه لخدمتك في اللاب، بلا تعقيد.", ar: "كل ما تحتاجه للعمل المخبري، من دون تعقيد.", en: "Everything you need for lab work, without the confusion.", fr: "Tout ce qu’il faut pour le travail au labo, sans confusion." },
  hero_copy: { ta: "استعمل لوحة وحدة باش تبدأ تجربة، تسجل ملاحظة، تحفظ النتائج، وتدير الأوراق العلمية من غير ما تتلف.", ar: "استخدم لوحة واحدة لبدء تجربة، وتسجيل ملاحظة، وحفظ النتائج، وإدارة الأوراق العلمية من دون تشتت.", en: "Use one clean dashboard to start an experiment, save a note, store results, and manage papers without getting lost in too many screens.", fr: "Utilisez un tableau clair pour démarrer une expérience, enregistrer une note, stocker des résultats et gérer des articles sans vous perdre." },
  start_kicker: { ta: "ابدا", ar: "ابدأ", en: "Start", fr: "Démarrer" },
  start_experiment_title: { ta: "ابدا تجربة", ar: "ابدأ تجربة", en: "Start Experiment", fr: "Démarrer une expérience" },
  start_experiment_copy: { ta: "بروتوكول ومؤقت وملاحظات ونتائج في مسار واحد.", ar: "بروتوكول ومؤقت وملاحظات ونتائج في مسار واحد.", en: "Protocol, timer, notes, and results in one flow.", fr: "Protocole, minuteur, notes et résultats dans un seul flux." },
  write_note_title: { ta: "اكتب ملاحظة", ar: "اكتب ملاحظة", en: "Write Note", fr: "Écrire une note" },
  write_note_copy: { ta: "احفظ الملاحظات والنتائج بسرعة.", ar: "احفظ الملاحظات والنتائج بسرعة.", en: "Save observations and results quickly.", fr: "Enregistrez rapidement observations et résultats." },
  save_result_title: { ta: "احفظ نتيجة", ar: "احفظ نتيجة", en: "Save Result", fr: "Enregistrer un résultat" },
  save_result_copy: { ta: "خلي الملفات والجداول والصور والبيانات في بلاصة وحدة.", ar: "اجمع الملفات والجداول والصور والبيانات في مكان واحد.", en: "Keep files, sheets, images, and datasets together.", fr: "Gardez fichiers, tableaux, images et données ensemble." },
  read_and_cite_copy: { ta: "ابحث على الأوراق، لخّصها، واحفظ المراجع.", ar: "ابحث عن الأوراق، لخّصها، واحفظ المراجع.", en: "Search papers, summarize them, and save citations.", fr: "Cherchez des articles, résumez-les et enregistrez les citations." },
  organize_work_kicker: { ta: "نظم خدمتك", ar: "نظّم عملك", en: "Organize your work", fr: "Organisez votre travail" },
  essentials_title: { ta: "الأساسيات", ar: "الأساسيات", en: "The essentials", fr: "L’essentiel" },
  advanced_research_kicker: { ta: "نظرة بحثية متقدمة", ar: "عرض بحثي متقدم", en: "Advanced research view", fr: "Vue recherche avancée" },
  advanced_research_title: { ta: "نظرة عامة ودعم القرار", ar: "نظرة عامة ودعم القرار", en: "Overview and decision support", fr: "Vue d’ensemble et aide à la décision" },
  small_tools_kicker: { ta: "أدوات صغيرة ومفيدة", ar: "أدوات صغيرة ومفيدة", en: "Small helpful tools", fr: "Petits outils utiles" },
  fast_utilities_title: { ta: "أدوات سريعة", ar: "أدوات سريعة", en: "Fast utilities", fr: "Utilitaires rapides" },
  open_tool_box: { ta: "افتح صندوق الأدوات", ar: "افتح صندوق الأدوات", en: "Open Tool Box", fr: "Ouvrir la boîte à outils" },
  daily_learning_title: { ta: "عادة التعلّم اليومية", ar: "عادة التعلّم اليومية", en: "Daily learning habit", fr: "Habitude d’apprentissage quotidienne" },
  daily_learning_copy: { ta: "سجل كل يوم فائدة، غلطة، أو فكرة صغيرة.", ar: "سجّل كل يوم فائدة، أو خطأ، أو فكرة صغيرة.", en: "Log one takeaway, one mistake, or one small insight every day.", fr: "Notez chaque jour une idée utile, une erreur ou un petit apprentissage." },
  research_library_title: { ta: "مكتبة البحث", ar: "مكتبة البحث", en: "Research Library", fr: "Bibliothèque de recherche" },
  reading_workflow_kicker: { ta: "مسار القراءة", ar: "مسار القراءة", en: "Reading workflow", fr: "Flux de lecture" },
  reading_workflow_title: { ta: "ابحث، لخّص، ووثّق في بلاصة وحدة", ar: "ابحث، لخّص، ووثّق في مكان واحد", en: "Search, summarize, and cite in one place", fr: "Chercher, résumer et citer au même endroit" },
  reading_workflow_copy: { ta: "استعمل القسم هذا وقت تقرا أوراق علمية، تكتب مراجعة، ولا تحضر بيبليوغرافيا.", ar: "استخدم هذا القسم عند قراءة الأوراق العلمية، أو كتابة مراجعة، أو إعداد قائمة مراجع.", en: "Use this area when you are reading papers, writing a review, or building a bibliography.", fr: "Utilisez cette zone pour lire des articles, rédiger une revue ou construire une bibliographie." },
  article_search_title: { ta: "بحث المقالات", ar: "بحث المقالات", en: "Article Search", fr: "Recherche d’articles" },
  article_search_copy: { ta: "افتح مصادر علمية موثوقة بسرعة", ar: "افتح مصادر علمية موثوقة بسرعة", en: "Open trusted article sources fast", fr: "Ouvrez rapidement des sources scientifiques fiables" },
  paper_summaries_title: { ta: "ملخصات الأوراق", ar: "ملخصات الأوراق", en: "Paper Summaries", fr: "Résumés d’articles" },
  paper_summaries_copy: { ta: "احفظ الطرق والنتائج والقيود والاقتباسات", ar: "احفظ الطرق والنتائج والقيود والاقتباسات", en: "Save methods, findings, limitations, and quotes", fr: "Enregistrez méthodes, résultats, limites et citations" },
  citation_vault_title: { ta: "خزان المراجع", ar: "خزان المراجع", en: "Citation Vault", fr: "Coffre à citations" },
  citation_vault_copy: { ta: "احفظ المراجع، وين استعملتها، وBibTeX ونص البيبليوغرافيا", ar: "احفظ المراجع، وأين استُخدمت، وBibTeX ونص الببليوغرافيا", en: "Keep references, used sections, BibTeX, and bibliography text", fr: "Conservez références, sections utilisées, BibTeX et texte de bibliographie" },
  tool_box_title: { ta: "صندوق الأدوات", ar: "صندوق الأدوات", en: "Tool Box", fr: "Boîte à outils" },
  tool_box_kicker: { ta: "أدوات سريعة", ar: "أدوات سريعة", en: "Quick utilities", fr: "Utilitaires rapides" },
  tool_box_banner_title: { ta: "استعمل الأداة اللي تحتاجها فقط، بلا تشويش", ar: "استخدم فقط الأداة التي تحتاجها، من دون تشويش", en: "Use only the tool you need, without extra noise", fr: "Utilisez seulement l’outil nécessaire, sans bruit" },
  tool_box_banner_copy: { ta: "هاذم هم المساعدين الصغار للتايمر وOCR والتحويلات والملاحظات الصوتية والتركيز.", ar: "هذه هي المساعدات اليومية الصغيرة للتوقيت وOCR والتحويلات والملاحظات الصوتية والتركيز.", en: "These are the small everyday helpers for timing, OCR, conversions, voice notes, and focus.", fr: "Ce sont les petits outils quotidiens pour le timing, l’OCR, les conversions, les notes vocales et la concentration." },
  tool_cell_copy: { ta: "معادلة مالاسيز وسجل العد", ar: "معادلة مالاسيز وسجل العد", en: "Malassez formula and experiment log", fr: "Formule de Malassez et journal d’expérience" },
  tool_timer_copy: { ta: "عدة مؤقتات للحضانة والطرد المركزي", ar: "عدة مؤقتات للحضانة والطرد المركزي", en: "Multiple incubation and centrifuge countdowns", fr: "Plusieurs minuteurs d’incubation et de centrifugation" },
  tool_photo_copy: { ta: "OCR، جداول OD، وتصدير CSV", ar: "OCR، جداول OD، وتصدير CSV", en: "OCR, spectro OD tables, and CSV export", fr: "OCR, tableaux OD et export CSV" },
  audio_to_text_title: { ta: "صوت إلى نص", ar: "صوت إلى نص", en: "Audio to Text", fr: "Audio vers texte" },
  audio_to_text_copy: { ta: "ارفع MP3، اسمع التسجيل، اختار اللغة، واحفظ النص والملخص", ar: "ارفع MP3، واستمع للتسجيل، واختر اللغة، واحفظ النص والملخص", en: "Upload MP3, listen back, choose language, save transcript and summary", fr: "Importez un MP3, réécoutez, choisissez la langue, enregistrez le texte et le résumé" },
  tool_converter_copy: { ta: "تحويلات مخبرية شائعة", ar: "تحويلات مخبرية شائعة", en: "Common wet-lab conversions", fr: "Conversions courantes de laboratoire" },
  tool_pomodoro_copy: { ta: "جلسات تركيز واستراحة مخصصة", ar: "جلسات تركيز واستراحة مخصّصة", en: "Custom focus sessions and breaks", fr: "Sessions de concentration et pauses personnalisées" },
  tool_todo_copy: { ta: "مهام، تواريخ، وأولويات", ar: "مهام، تواريخ، وأولويات", en: "Tasks, due dates, and priorities", fr: "Tâches, dates et priorités" },
  tool_calendar_copy: { ta: "تواريخ التجارب والآجال", ar: "تواريخ التجارب والمواعيد النهائية", en: "Experiment dates and deadlines", fr: "Dates d’expériences et échéances" },
  tool_failures_copy: { ta: "أخطاء، أسباب، وحلول", ar: "أخطاء، أسباب، وحلول", en: "Mistakes, causes, and fixes", fr: "Erreurs, causes et corrections" },
  learning_menu_copy: { ta: "سجل كل يوم حاجة صغيرة تعلمتها", ar: "دوّن كل يوم شيئًا صغيرًا تعلّمته", en: "Keep one small learning note every day", fr: "Gardez une petite note d’apprentissage chaque jour" },
  settings_menu_copy: { ta: "لغة، مزامنة، نسخ احتياطي، وبروفايل", ar: "لغة، مزامنة، نسخ احتياطي، وملف شخصي", en: "Language, sync, backup, and profile", fr: "Langue, sync, sauvegarde et profil" },
  research_workspace_title: { ta: "مساحة البحث", ar: "مساحة البحث", en: "Research Workspace", fr: "Espace de recherche" },
  workspace_banner_kicker: { ta: "بلاصة وحدة للتجارب والقراءة", ar: "مكان واحد للتجارب والقراءة", en: "One place for experiments and literature", fr: "Un seul endroit pour expériences et littérature" },
  workspace_banner_title: { ta: "مصممة لسير علمي حقيقي", ar: "مصممة لسير علمي حقيقي", en: "Built for real scientific workflow", fr: "Conçu pour un vrai flux scientifique" },
  workspace_banner_copy: { ta: "استعمل اللوحة هاذي باش تشوف شنوة يلزمك الآن، وشنوة محفوظ عندك، ووين موجودة الملفات والملاحظات.", ar: "استخدم هذه اللوحة لترى ما الذي يحتاج انتباهك الآن، وما الذي حفظته بالفعل، وأين توجد ملفاتك وملاحظاتك.", en: "Use this dashboard to see what needs attention now, what knowledge you already saved, and where your files and notes are living.", fr: "Utilisez ce tableau pour voir ce qui demande votre attention, ce que vous avez déjà enregistré et où vivent vos fichiers et notes." },
  workspace_overview_title: { ta: "نظرة عامة على العمل", ar: "نظرة عامة على العمل", en: "Workspace Overview", fr: "Vue d’ensemble" },
  workspace_overview_copy: { ta: "أرقام مباشرة من سجلاتك", ar: "أرقام مباشرة من سجلاتك", en: "Live counts from your saved records", fr: "Comptes en direct depuis vos enregistrements" },
  next_up_title: { ta: "شنوة بعد", ar: "التالي", en: "Next Up", fr: "À faire ensuite" },
  next_up_copy: { ta: "شنوة يلزم يتعمل بعد", ar: "ما الذي يجب فعله بعد ذلك", en: "What to do next in the workspace", fr: "Ce qu’il faut faire ensuite" },
  quick_actions_title: { ta: "إجراءات سريعة", ar: "إجراءات سريعة", en: "Quick Actions", fr: "Actions rapides" },
  quick_actions_copy: { ta: "امشي مباشرة للجزء اللي تحتاجه", ar: "اذهب مباشرة إلى الجزء الذي تحتاجه", en: "Jump straight into the part of your workflow you need", fr: "Accédez directement à la partie utile de votre flux" },
  open_experiment_runs: { ta: "افتح مسارات التجارب", ar: "افتح مسارات التجارب", en: "Open Experiment Runs", fr: "Ouvrir les sessions d’expérience" },
  open_research_timeline: { ta: "افتح الخط الزمني للبحث", ar: "افتح الخط الزمني للبحث", en: "Open Research Timeline", fr: "Ouvrir la chronologie de recherche" },
  open_decision_assistant: { ta: "افتح مساعد القرار", ar: "افتح مساعد القرار", en: "Open Decision Assistant", fr: "Ouvrir l’assistant décisionnel" },
  open_lab_notes: { ta: "افتح ملاحظات المخبر", ar: "افتح ملاحظات المختبر", en: "Open Lab Notes", fr: "Ouvrir les notes de labo" },
  open_protocols: { ta: "افتح البروتوكولات", ar: "افتح البروتوكولات", en: "Open Protocols", fr: "Ouvrir les protocoles" },
  open_results_vault: { ta: "افتح خزان النتائج", ar: "افتح خزان النتائج", en: "Open Results Vault", fr: "Ouvrir le coffre des résultats" },
  open_paper_summaries: { ta: "افتح ملخصات الأوراق", ar: "افتح ملخصات الأوراق", en: "Open Paper Summaries", fr: "Ouvrir les résumés d’articles" },
  open_articles: { ta: "افتح المقالات", ar: "افتح المقالات", en: "Open Articles", fr: "Ouvrir les articles" },
  open_tasks: { ta: "افتح المهام", ar: "افتح المهام", en: "Open Tasks", fr: "Ouvrir les tâches" },
  open_calendar: { ta: "افتح التقويم", ar: "افتح التقويم", en: "Open Calendar", fr: "Ouvrir le calendrier" },
  getting_started_title: { ta: "البدء السريع", ar: "البدء السريع", en: "Getting Started", fr: "Prise en main" },
  getting_started_copy: { ta: "أسرع طريقة باش يخدمك Lab Asis كل نهار", ar: "أسرع طريقة ليصبح Lab Asis مفيدًا كل يوم", en: "The fastest way to make Lab Asis useful every day", fr: "Le moyen le plus rapide de rendre Lab Asis utile chaque jour" },
  voice_upload_panel_title: { ta: "ارفع MP3 وابني النص", ar: "ارفع MP3 وأنشئ النص", en: "Upload MP3 and Build Transcript", fr: "Importer un MP3 et créer la transcription" },
  voice_upload_helper: { ta: "بصراحة: ما فماش أداة مجانية أوفلاين في المتصفح تنجم تضمن تحويل صوت إلى نص بنسبة 100% للدّارجة والعربية والفرنسية والإنجليزية. المسار الأسلم هو: ارفع الصوت، اسمعه، اختار لغة النص، صحح النص، وراجعو قبل ما تحفظ الملخص.", ar: "ملاحظة صريحة: لا توجد أداة مجانية تعمل داخل المتصفح من دون خادم يمكنها ضمان تحويل صوت إلى نص بدقة 100% للعربية والدارجة والفرنسية والإنجليزية. المسار الأكثر أمانًا هو: ارفع الصوت، واستمع إليه، واختر لغة النص، وصحّحه، وراجعه قبل حفظ الملخص.", en: "Honest note: no free offline browser tool can promise 100% perfect audio-to-text in Darija, Arabic, French, and English. The safest research workflow is: upload audio, listen to it, choose the transcript language, paste or correct the transcript, verify it against the recording, then save a structured summary.", fr: "Note honnête : aucun outil gratuit hors ligne dans le navigateur ne peut promettre une transcription parfaite à 100 % en darija, arabe, français et anglais. Le flux le plus sûr est : importer l’audio, l’écouter, choisir la langue, corriger le texte, le vérifier puis enregistrer un résumé structuré." },
  voice_transcript_language: { ta: "لغة النص", ar: "لغة النص", en: "Transcript Language", fr: "Langue de transcription" },
  voice_lang_mixed: { ta: "مختلط / متعدد اللغات", ar: "مختلط / متعدد اللغات", en: "Mixed / Multilingual", fr: "Mixte / multilingue" },
  voice_lang_english: { ta: "الإنجليزية", ar: "الإنجليزية", en: "English", fr: "Anglais" },
  voice_lang_french: { ta: "الفرنسية", ar: "الفرنسية", en: "French", fr: "Français" },
  voice_lang_arabic: { ta: "العربية", ar: "العربية", en: "Arabic", fr: "Arabe" },
  voice_lang_tunisian: { ta: "تونسي", ar: "الدارجة التونسية", en: "Tunisian Darija", fr: "Darija tunisienne" },
  mobile_home: { ta: "الرئيسية", ar: "الرئيسية", en: "Home", fr: "Accueil" },
  mobile_run: { ta: "تجربة", ar: "تجربة", en: "Run", fr: "Session" },
  mobile_notes: { ta: "ملاحظات", ar: "ملاحظات", en: "Notes", fr: "Notes" },
  mobile_library: { ta: "مكتبة", ar: "مكتبة", en: "Library", fr: "Bibliothèque" },
  mobile_tools: { ta: "أدوات", ar: "أدوات", en: "Tools", fr: "Outils" },
  extract_cleaner_text: { ta: "استخرج نص أوضح", ar: "استخرج نصًا أوضح", en: "Extract Cleaner Text", fr: "Extraire un texte plus propre" },
  build_od_table: { ta: "ابني جدول OD", ar: "أنشئ جدول OD", en: "Build OD Table", fr: "Créer le tableau OD" },
  save_od_table: { ta: "احفظ جدول OD", ar: "احفظ جدول OD", en: "Save OD Table", fr: "Enregistrer le tableau OD" },
  export_od_csv: { ta: "صدّر CSV متاع OD", ar: "صدّر CSV لـ OD", en: "Export OD CSV", fr: "Exporter le CSV OD" },
  export_metadata_csv: { ta: "صدّر بيانات CSV", ar: "صدّر بيانات CSV", en: "Export Metadata CSV", fr: "Exporter les métadonnées CSV" },
  load_summary_template: { ta: "حمّل قالب الملخص", ar: "حمّل قالب الملخص", en: "Load Summary Template", fr: "Charger le modèle de résumé" },
  draft_summary: { ta: "كوّن ملخص أولي", ar: "أنشئ ملخصًا أوليًا", en: "Draft Summary", fr: "Brouillon de résumé" },
  save_summary_button: { ta: "احفظ الملخص", ar: "احفظ الملخص", en: "Save Summary", fr: "Enregistrer le résumé" },
  prepare_citation: { ta: "حضّر المرجع", ar: "حضّر المرجع", en: "Prepare Citation", fr: "Préparer la citation" },
  save_citation_button: { ta: "احفظ المرجع", ar: "احفظ المرجع", en: "Save Citation", fr: "Enregistrer la citation" },
  copy_bibliography: { ta: "انسخ البيبليوغرافيا", ar: "انسخ الببليوغرافيا", en: "Copy Bibliography", fr: "Copier la bibliographie" },
  copy_latex_cite: { ta: "انسخ LaTeX Cite", ar: "انسخ LaTeX Cite", en: "Copy LaTeX Cite", fr: "Copier la citation LaTeX" },
  copy_bibtex: { ta: "انسخ BibTeX", ar: "انسخ BibTeX", en: "Copy BibTeX", fr: "Copier BibTeX" },
  autofill_doi: { ta: "عمر تلقائيا من DOI", ar: "املأ تلقائيًا من DOI", en: "Auto-fill from DOI", fr: "Remplir depuis DOI" },
  export_bib: { ta: "صدّر .bib", ar: "صدّر .bib", en: "Export .bib", fr: "Exporter .bib" },
  export_bibliography_txt: { ta: "صدّر bibliography TXT", ar: "صدّر bibliography TXT", en: "Export Bibliography TXT", fr: "Exporter la bibliographie TXT" },
  export_citation_csv: { ta: "صدّر CSV المراجع", ar: "صدّر CSV للمراجع", en: "Export Citation CSV", fr: "Exporter le CSV des citations" },
  start_guided_run: { ta: "ابدأ مسار موجّه", ar: "ابدأ مسارًا موجّهًا", en: "Start Guided Run", fr: "Démarrer une session guidée" },
  save_snapshot: { ta: "احفظ لقطة", ar: "احفظ لقطة", en: "Save Snapshot", fr: "Enregistrer l’instantané" },
  complete_run: { ta: "أكمل المسار", ar: "أكمل المسار", en: "Complete Run", fr: "Terminer la session" },
  new_run: { ta: "مسار جديد", ar: "مسار جديد", en: "New Run", fr: "Nouvelle session" },
  send_to_lab_notes: { ta: "ابعث لملاحظات المخبر", ar: "أرسل إلى ملاحظات المختبر", en: "Send to Lab Notes", fr: "Envoyer aux notes de labo" },
  refresh_timeline: { ta: "حدّث الخط الزمني", ar: "حدّث الخط الزمني", en: "Refresh Timeline", fr: "Actualiser la chronologie" },
  generate_next_steps: { ta: "ولّد الخطوات الجاية", ar: "أنشئ الخطوات التالية", en: "Generate Next Steps", fr: "Générer les prochaines étapes" },
  app_name: { ta: "لاب أسيس", ar: "لاب أسيس", en: "Lab Asis", fr: "Lab Asis" },
  home_cellcounter: { ta: "عداد الخلايا", ar: "عداد الخلايا", en: "Cell Counter", fr: "Compteur de cellules" },
  home_timer: { ta: "المؤقت", ar: "المؤقت", en: "Timer", fr: "Minuteur" },
  home_todo: { ta: "قائمة المهام", ar: "قائمة المهام", en: "To-Do List", fr: "Liste de tâches" },
  home_labnotes: { ta: "ملاحظات المختبر", ar: "ملاحظات المختبر", en: "Lab Notes", fr: "Notes de labo" },
  home_protocols: { ta: "البروتوكولات", ar: "البروتوكولات", en: "Protocols", fr: "Protocoles" },
  home_voice: { ta: "تسجيل صوتي", ar: "تسجيل صوتي", en: "Voice Notes", fr: "Notes vocales" },
  home_photo: { ta: "صورة إلى بيانات", ar: "صورة إلى بيانات", en: "Photo to Data", fr: "Photo vers données" },
  home_failures: { ta: "سجل الأخطاء", ar: "سجل الأخطاء", en: "Failures Log", fr: "Journal des échecs" },
  home_converter: { ta: "محول الوحدات", ar: "محول الوحدات", en: "Unit Converter", fr: "Convertisseur" },
  home_articles: { ta: "مقالات علمية", ar: "مقالات علمية", en: "Articles", fr: "Articles" },
  home_calendar: { ta: "التقويم", ar: "التقويم", en: "Calendar", fr: "Calendrier" },
  home_pomodoro: { ta: "بومودورو", ar: "بومودورو", en: "Pomodoro", fr: "Pomodoro" },
  language_button: { ta: "اللغة", ar: "اللغة", en: "Language", fr: "Langue" },
  cell_title: { ta: "عداد خلايا مالاسيز", ar: "عداد خلايا مالاسيز", en: "Malassez Counter", fr: "Compteur Malassez" },
  cell_add1: { ta: "+1", ar: "+1", en: "+1", fr: "+1" },
  cell_add5: { ta: "+5", ar: "+5", en: "+5", fr: "+5" },
  cell_add10: { ta: "+10", ar: "+10", en: "+10", fr: "+10" },
  cell_clear: { ta: "مسح", ar: "مسح", en: "Clear", fr: "Effacer" },
  cell_calculate: { ta: "احسب", ar: "احسب", en: "Calculate", fr: "Calculer" },
  cell_save: { ta: "حفظ", ar: "حفظ", en: "Save", fr: "Enregistrer" },
  cell_result: { ta: "النتيجة", ar: "النتيجة", en: "Result", fr: "Résultat" },
  cell_squares: { ta: "عدد المربعات", ar: "عدد المربعات", en: "Number of squares", fr: "Nombre de carrés" },
  cell_dilution: { ta: "التخفيف", ar: "التخفيف", en: "Dilution", fr: "Dilution" },
  timer_name: { ta: "اسم التجربة", ar: "اسم التجربة", en: "Experiment Name", fr: "Nom de l'expérience" },
  timer_start: { ta: "بدء", ar: "بدء", en: "Start", fr: "Démarrer" },
  timer_stop: { ta: "إيقاف", ar: "إيقاف", en: "Stop", fr: "Arrêter" },
  timer_save: { ta: "حفظ الوقت", ar: "حفظ الوقت", en: "Save Time", fr: "Enregistrer" },
  timer_add: { ta: "أضف مؤقت", ar: "أضف مؤقت", en: "Add Timer", fr: "Ajouter un minuteur" },
  timer_restart: { ta: "أعد تشغيل المؤقت", ar: "أعد تشغيل المؤقت", en: "Restart Timer", fr: "Redémarrer le minuteur" },
  timer_new: { ta: "مؤقت جديد", ar: "مؤقت جديد", en: "New Timer", fr: "Nouveau minuteur" },
  timer_edit: { ta: "تعديل", ar: "تعديل", en: "Edit", fr: "Modifier" },
  timer_open_screen: { ta: "افتح المؤقتات", ar: "افتح المؤقتات", en: "Open Timers", fr: "Ouvrir les minuteurs" },
  timer_dismiss: { ta: "تمت المعاينة", ar: "تمت المعاينة", en: "Dismiss", fr: "Fermer" },
  timer_dismiss_all: { ta: "إخفاء الكل", ar: "إخفاء الكل", en: "Dismiss All", fr: "Tout fermer" },
  timer_live_running: { ta: "المؤقتات تعمل", ar: "المؤقتات تعمل", en: "Timers Running", fr: "Minuteurs en cours" },
  timer_live_finished: { ta: "مؤقت منتهٍ", ar: "مؤقت منتهٍ", en: "Timer Finished", fr: "Minuteur terminé" },
  timer_live_next: { ta: "الأقرب انتهاءً", ar: "الأقرب انتهاءً", en: "Next to finish", fr: "Prochain à finir" },
  timer_alert_title: { ta: "انتهى وقت المختبر", ar: "انتهى وقت المختبر", en: "Lab timer finished", fr: "Minuteur de labo terminé" },
  timer_alert_subtitle: {
    ta: "التطبيق مفتوح الآن، لذلك سيستمر التنبيه حتى تؤكد أنك رأيت المؤقت المنتهي.",
    ar: "التطبيق مفتوح الآن، لذلك سيستمر التنبيه حتى تؤكد أنك رأيت المؤقت المنتهي.",
    en: "The app is open, so this alert will stay visible until you confirm you saw the finished timer.",
    fr: "L'application est ouverte, donc cette alerte restera visible jusqu'à confirmation.",
  },
  timer_activity_tag: { ta: "نوع النشاط", ar: "نوع النشاط", en: "Activity Tag", fr: "Étiquette d'activité" },
  timer_minutes: { ta: "الدقائق", ar: "الدقائق", en: "Minutes", fr: "Minutes" },
  timer_seconds: { ta: "الثواني", ar: "الثواني", en: "Seconds", fr: "Secondes" },
  timer_lab_presets: { ta: "إعدادات مختبر سريعة", ar: "إعدادات مختبر سريعة", en: "Lab Presets", fr: "Préréglages labo" },
  active_timers: { ta: "المؤقتات النشطة", ar: "المؤقتات النشطة", en: "Active Timers", fr: "Minuteurs actifs" },
  timer_queue_hint: {
    ta: "شغّل عدة أنشطة في نفس الوقت، وواصل العد حتى بعد تغيير الشاشة أو إعادة الفتح.",
    ar: "شغّل عدة أنشطة في نفس الوقت، وواصل العد حتى بعد تغيير الشاشة أو إعادة الفتح.",
    en: "Run several activities at the same time, and keep them going even after screen changes or reopening.",
    fr: "Lancez plusieurs activités en même temps et gardez-les actives même après avoir changé d'écran ou rouvert l'app.",
  },
  timer_no_active: {
    ta: "لا توجد مؤقتات نشطة بعد. أضف واحدًا لمتابعة الحضانة أو الغسل أو الطرد المركزي أو التصوير.",
    ar: "لا توجد مؤقتات نشطة بعد. أضف واحدًا لمتابعة الحضانة أو الغسل أو الطرد المركزي أو التصوير.",
    en: "No active timers yet. Add one above to track incubations, washes, spins, or imaging.",
    fr: "Aucun minuteur actif pour le moment. Ajoutez-en un pour suivre les incubations, lavages, centrifugations ou imageries.",
  },
  timer_no_logs: { ta: "لا توجد سجلات مؤقت بعد.", ar: "لا توجد سجلات مؤقت بعد.", en: "No timer logs yet.", fr: "Aucun journal de minuteur pour le moment." },
  timer_status_running: { ta: "قيد التشغيل", ar: "قيد التشغيل", en: "Running", fr: "En cours" },
  timer_status_paused: { ta: "متوقف مؤقتًا", ar: "متوقف مؤقتًا", en: "Paused", fr: "En pause" },
  timer_status_completed: { ta: "مكتمل", ar: "مكتمل", en: "Completed", fr: "Terminé" },
  timer_preset_wash: { ta: "غسل 03:00", ar: "غسل 03:00", en: "Wash 03:00", fr: "Lavage 03:00" },
  timer_preset_incubation: { ta: "حضانة 05:00", ar: "حضانة 05:00", en: "Incubation 05:00", fr: "Incubation 05:00" },
  timer_preset_centrifuge: { ta: "طرد مركزي 10:00", ar: "طرد مركزي 10:00", en: "Centrifuge 10:00", fr: "Centrifuge 10:00" },
  timer_preset_staining: { ta: "تصبيغ 15:00", ar: "تصبيغ 15:00", en: "Staining 15:00", fr: "Coloration 15:00" },
  timer_preset_longrun: { ta: "تشغيل طويل 30:00", ar: "تشغيل طويل 30:00", en: "Long Run 30:00", fr: "Longue session 30:00" },
  delete_button: { ta: "حذف", ar: "حذف", en: "Delete", fr: "Supprimer" },
  converter_type: { ta: "نوع التحويل", ar: "نوع التحويل", en: "Conversion Type", fr: "Type de conversion" },
  converter_value: { ta: "القيمة", ar: "القيمة", en: "Value", fr: "Valeur" },
  converter_button: { ta: "تحويل", ar: "تحويل", en: "Convert", fr: "Convertir" },
  failure_what: { ta: "شنوة الخطأ؟", ar: "ما الخطأ؟", en: "What went wrong?", fr: "Qu'est-ce qui n'a pas fonctionné ?" },
  failure_why: { ta: "علاش حدث؟", ar: "لماذا حدث؟", en: "Why did it happen?", fr: "Pourquoi est-ce arrivé ?" },
  failure_solution: { ta: "الحل المقترح؟", ar: "الحل المقترح؟", en: "Proposed solution?", fr: "Solution proposée ?" },
  learn_label: { ta: "شنوة تعلمت اليوم؟", ar: "ماذا تعلمت اليوم؟", en: "What did you learn today?", fr: "Qu'as-tu appris aujourd'hui ?" },
  learn_category: { ta: "التصنيف", ar: "التصنيف", en: "Category", fr: "Catégorie" },
  learn_save: { ta: "حفظ", ar: "حفظ", en: "Save", fr: "Enregistrer" },
  todo_title: { ta: "عنوان المهمة", ar: "عنوان المهمة", en: "Task Title", fr: "Titre de la tâche" },
  todo_date: { ta: "التاريخ", ar: "التاريخ", en: "Date", fr: "Date" },
  todo_priority: { ta: "الأهمية", ar: "الأهمية", en: "Priority", fr: "Priorité" },
  todo_high: { ta: "عالي", ar: "عالي", en: "High", fr: "Haute" },
  todo_medium: { ta: "متوسط", ar: "متوسط", en: "Medium", fr: "Moyenne" },
  todo_low: { ta: "منخفض", ar: "منخفض", en: "Low", fr: "Basse" },
  todo_status: { ta: "الحالة", ar: "الحالة", en: "Status", fr: "Statut" },
  todo_pending: { ta: "قيد الانتظار", ar: "قيد الانتظار", en: "Pending", fr: "En attente" },
  todo_done: { ta: "منجز", ar: "منجز", en: "Done", fr: "Terminé" },
  todo_add: { ta: "إضافة مهمة", ar: "إضافة مهمة", en: "Add Task", fr: "Ajouter une tâche" },
  pomodoro_timer: { ta: "مؤقت بومودورو", ar: "مؤقت بومودورو", en: "Pomodoro Timer", fr: "Minuteur Pomodoro" },
  pomodoro_work: { ta: "وقت العمل", ar: "وقت العمل", en: "Work Time", fr: "Temps de travail" },
  pomodoro_break: { ta: "وقت الراحة", ar: "وقت الراحة", en: "Break Time", fr: "Temps de pause" },
  pomodoro_work_minutes: { ta: "دقائق العمل", ar: "دقائق العمل", en: "Work Minutes", fr: "Minutes de travail" },
  pomodoro_break_minutes: { ta: "دقائق الراحة", ar: "دقائق الراحة", en: "Break Minutes", fr: "Minutes de pause" },
  pomodoro_quick_presets: { ta: "إعدادات سريعة", ar: "إعدادات سريعة", en: "Quick Presets", fr: "Préréglages rapides" },
  pomodoro_start: { ta: "بدء", ar: "بدء", en: "Start", fr: "Démarrer" },
  pomodoro_pause: { ta: "إيقاف مؤقت", ar: "إيقاف مؤقت", en: "Pause", fr: "Pause" },
  pomodoro_reset: { ta: "إعادة ضبط", ar: "إعادة ضبط", en: "Reset", fr: "Réinitialiser" },
  pomodoro_sessions: { ta: "الجلسات", ar: "الجلسات", en: "Sessions", fr: "Sessions" },
  pomodoro_set_times: { ta: "اضبط الأوقات", ar: "اضبط الأوقات", en: "Set Times", fr: "Définir les temps" },
  pomodoro_save: { ta: "احفظ الجلسات", ar: "احفظ الجلسات", en: "Save Sessions", fr: "Enregistrer les sessions" },
  pomodoro_custom_hint: {
    ta: "اختر مدة العمل والراحة كما تريد. إعادة الضبط تستخدم أوقاتك الحالية.",
    ar: "اختر مدة العمل والراحة كما تريد. إعادة الضبط تستخدم أوقاتك الحالية.",
    en: "Choose your own work and break lengths. Reset uses your current custom times.",
    fr: "Choisissez vos propres durées de travail et de pause. Réinitialiser utilise vos temps actuels.",
  },
  pomodoro_preset_classic: { ta: "25 / 5", ar: "25 / 5", en: "25 / 5", fr: "25 / 5" },
  pomodoro_preset_deep: { ta: "50 / 10", ar: "50 / 10", en: "50 / 10", fr: "50 / 10" },
  pomodoro_preset_extended: { ta: "90 / 15", ar: "90 / 15", en: "90 / 15", fr: "90 / 15" },
  pomodoro_alert_title: { ta: "انتهت مرحلة بومودورو", ar: "انتهت مرحلة بومودورو", en: "Pomodoro phase finished", fr: "Phase Pomodoro terminée" },
  pomodoro_alert_subtitle: {
    ta: "سيستمر التنبيه حتى تؤكد أنك رأيت نهاية الجلسة.",
    ar: "سيستمر التنبيه حتى تؤكد أنك رأيت نهاية الجلسة.",
    en: "This alert will keep ringing until you confirm you saw the phase change.",
    fr: "Cette alerte continuera jusqu'à ce que vous confirmiez avoir vu le changement de phase.",
  },
  pomodoro_alert_work_complete: {
    ta: "انتهى وقت العمل وبدأت الراحة.",
    ar: "انتهى وقت العمل وبدأت الراحة.",
    en: "Work session finished. Break started.",
    fr: "La session de travail est terminée. La pause commence.",
  },
  pomodoro_alert_break_complete: {
    ta: "انتهت الراحة وبدأ وقت العمل.",
    ar: "انتهت الراحة وبدأ وقت العمل.",
    en: "Break finished. Work session started.",
    fr: "La pause est terminée. La session de travail commence.",
  },
  pomodoro_open_screen: { ta: "افتح بومودورو", ar: "افتح بومودورو", en: "Open Pomodoro", fr: "Ouvrir Pomodoro" },
  pomodoro_dismiss: { ta: "تمت المعاينة", ar: "تمت المعاينة", en: "Dismiss", fr: "Fermer" },
  calendar_title: { ta: "التقويم", ar: "التقويم", en: "Calendar", fr: "Calendrier" },
  calendar_add: { ta: "إضافة حدث", ar: "إضافة حدث", en: "Add Event", fr: "Ajouter un événement" },
  calendar_event: { ta: "عنوان الحدث", ar: "عنوان الحدث", en: "Event Title", fr: "Titre de l'événement" },
  calendar_notes: { ta: "ملاحظات", ar: "ملاحظات", en: "Notes", fr: "Notes" },
  back_button: { ta: "رجوع", ar: "رجوع", en: "Back", fr: "Retour" },
  save_button: { ta: "حفظ في إكسل", ar: "حفظ في إكسل", en: "Save to Excel", fr: "Enregistrer" },
  voice_instruction: {
    ta: "استخدم مسجل الصوت في هاتفك ثم ارفع الملف",
    ar: "استخدم مسجل الصوت في هاتفك ثم ارفع الملف",
    en: "Use your phone's voice recorder then upload the file",
    fr: "Utilisez l'enregistreur vocal de votre téléphone puis téléchargez le fichier",
  },
  voice_upload: { ta: "اختر ملف صوتي", ar: "اختر ملف صوتي", en: "Choose Audio File", fr: "Choisir un fichier audio" },
  voice_experiment: { ta: "اسم التجربة", ar: "اسم التجربة", en: "Experiment Name", fr: "Nom de l'expérience" },
  voice_notes: { ta: "ملاحظات إضافية", ar: "ملاحظات إضافية", en: "Additional Notes", fr: "Notes supplémentaires" },
  save_pdf: { ta: "حفظ PDF", ar: "حفظ PDF", en: "Save to PDF", fr: "Enregistrer en PDF" },
  legal_title: { ta: "الملكية والجانب القانوني", ar: "الملكية والجانب القانوني", en: "Ownership and Legal", fr: "Propriété et aspects juridiques" },
  legal_privacy: { ta: "سياسة الخصوصية", ar: "سياسة الخصوصية", en: "Privacy Policy", fr: "Politique de confidentialité" },
  legal_terms: { ta: "شروط الاستخدام", ar: "شروط الاستخدام", en: "Terms of Use", fr: "Conditions d'utilisation" },
  legal_copyright: { ta: "إشعار حقوق النشر", ar: "إشعار حقوق النشر", en: "Copyright Notice", fr: "Notice de droit d'auteur" },
  founder_credit: {
    ta: "تم إنشاء Lab Asis بواسطة Tasnim Gassem. تم تضمين إشعار حقوق النشر والصفحات القانونية للنشر.",
    ar: "تم إنشاء Lab Asis بواسطة Tasnim Gassem. تم تضمين إشعار حقوق النشر والصفحات القانونية للنشر.",
    en: "Lab Asis was created by Tasnim Gassem. Copyright notice and legal pages are included for publishing.",
    fr: "Lab Asis a été créé par Tasnim Gassem. La notice de droit d'auteur et les pages légales sont incluses pour la publication.",
  },
  labnotes_title: { ta: "ملاحظات المختبر", ar: "ملاحظات المختبر", en: "Lab Notes", fr: "Notes de labo" },
  notes_save: { ta: "حفظ الملاحظة", ar: "حفظ الملاحظة", en: "Save Note", fr: "Enregistrer la note" },
  note_title: { ta: "عنوان الملاحظة", ar: "عنوان الملاحظة", en: "Note Title", fr: "Titre de la note" },
  note_date: { ta: "تاريخ الملاحظة", ar: "تاريخ الملاحظة", en: "Date", fr: "Date" },
  note_experiment: { ta: "اسم التجربة", ar: "اسم التجربة", en: "Experiment Name", fr: "Nom de l'expérience" },
  note_protocol: { ta: "البروتوكول المرتبط", ar: "البروتوكول المرتبط", en: "Linked Protocol", fr: "Protocole lié" },
  protocol_choice_hint: {
    ta: "اختر بروتوكول محفوظ أو نموذج جاهز.",
    ar: "اختر بروتوكولًا محفوظًا أو نموذجًا جاهزًا.",
    en: "Choose one of your saved protocols or a starter template.",
    fr: "Choisissez un protocole enregistré ou un modèle de départ.",
  },
  note_tags: { ta: "الوسوم", ar: "الوسوم", en: "Tags", fr: "Tags" },
  note_observations: { ta: "الملاحظات", ar: "الملاحظات", en: "Observations", fr: "Observations" },
  note_results: { ta: "النتائج", ar: "النتائج", en: "Results", fr: "Résultats" },
  note_nextsteps: { ta: "الخطوات القادمة", ar: "الخطوات القادمة", en: "Next Steps", fr: "Prochaines étapes" },
  protocols_title: { ta: "البروتوكولات", ar: "البروتوكولات", en: "Protocols", fr: "Protocoles" },
  protocol_save: { ta: "حفظ البروتوكول", ar: "حفظ البروتوكول", en: "Save Protocol", fr: "Enregistrer le protocole" },
  protocol_title: { ta: "عنوان البروتوكول", ar: "عنوان البروتوكول", en: "Protocol Title", fr: "Titre du protocole" },
  protocol_category: { ta: "التصنيف", ar: "التصنيف", en: "Category", fr: "Catégorie" },
  protocol_objective: { ta: "الهدف", ar: "الهدف", en: "Objective", fr: "Objectif" },
  protocol_materials: { ta: "المواد", ar: "المواد", en: "Materials", fr: "Matériel" },
  protocol_steps: { ta: "الخطوات", ar: "الخطوات", en: "Steps", fr: "Étapes" },
  protocol_duration: { ta: "المدة المتوقعة", ar: "المدة المتوقعة", en: "Expected Duration", fr: "Durée prévue" },
  protocol_safety: { ta: "ملاحظات السلامة", ar: "ملاحظات السلامة", en: "Safety Notes", fr: "Notes de sécurité" },

  status_local: { ta: "حفظ محلي فقط", ar: "حفظ محلي فقط", en: "Local save only", fr: "Sauvegarde locale seulement" },
  status_sync: { ta: "متصل مع Make", ar: "متصل مع Make", en: "Connected to Make", fr: "Connecté à Make" },
  current_count: { ta: "العد الحالي", ar: "العد الحالي", en: "Current Count", fr: "Compte actuel" },
  saved_cell_counts: { ta: "العدات المحفوظة", ar: "العدادات المحفوظة", en: "Saved Cell Counts", fr: "Comptages enregistrés" },
  newest_first: { ta: "الأحدث أولاً", ar: "الأحدث أولاً", en: "Newest first", fr: "Plus récent d'abord" },
  experiment_timer: { ta: "مؤقت التجربة", ar: "مؤقت التجربة", en: "Experiment Timer", fr: "Minuteur d'expérience" },
  timer_logs: { ta: "سجلات المؤقت", ar: "سجلات المؤقت", en: "Timer Logs", fr: "Journaux du minuteur" },
  add_task_header: { ta: "أضف مهمة", ar: "أضف مهمة", en: "Add Task", fr: "Ajouter une tâche" },
  task_list: { ta: "قائمة المهام", ar: "قائمة المهام", en: "Task List", fr: "Liste des tâches" },
  new_lab_note: { ta: "ملاحظة مختبر جديدة", ar: "ملاحظة مختبر جديدة", en: "New Lab Note", fr: "Nouvelle note de labo" },
  saved_lab_notes: { ta: "ملاحظات المختبر المحفوظة", ar: "ملاحظات المختبر المحفوظة", en: "Saved Lab Notes", fr: "Notes de labo enregistrées" },
  new_protocol: { ta: "بروتوكول جديد", ar: "بروتوكول جديد", en: "New Protocol", fr: "Nouveau protocole" },
  saved_protocols: { ta: "البروتوكولات المحفوظة", ar: "البروتوكولات المحفوظة", en: "Saved Protocols", fr: "Protocoles enregistrés" },
  upload_voice_note: { ta: "ارفع ملاحظة صوتية", ar: "ارفع ملاحظة صوتية", en: "Upload Voice Note", fr: "Télécharger une note vocale" },
  saved_recordings: { ta: "التسجيلات المحفوظة", ar: "التسجيلات المحفوظة", en: "Saved Recordings", fr: "Enregistrements sauvegardés" },
  image_ocr: { ta: "استخراج النص من الصورة", ar: "استخراج النص من الصورة", en: "Image OCR", fr: "OCR d'image" },
  extracted_text: { ta: "النص المستخرج", ar: "النص المستخرج", en: "Extracted Text", fr: "Texte extrait" },
  preview: { ta: "معاينة", ar: "معاينة", en: "Preview", fr: "Aperçu" },
  no_image_selected: { ta: "لم يتم اختيار صورة بعد.", ar: "لم يتم اختيار صورة بعد.", en: "No image selected yet.", fr: "Aucune image sélectionnée pour le moment." },
  log_a_failure: { ta: "سجل خطأ", ar: "سجل خطأ", en: "Log a Failure", fr: "Enregistrer un échec" },
  past_failures: { ta: "الأخطاء السابقة", ar: "الأخطاء السابقة", en: "Past Failures", fr: "Échecs passés" },
  today_i_learned: { ta: "شنوة تعلمت اليوم", ar: "ماذا تعلمت اليوم", en: "Today I Learned", fr: "Aujourd'hui j'ai appris" },
  daily_learning_entry: { ta: "تدوينة تعلم يومية", ar: "تدوينة تعلم يومية", en: "Daily Learning Entry", fr: "Entrée d'apprentissage quotidienne" },
  learning_log: { ta: "سجل التعلم", ar: "سجل التعلم", en: "Learning Log", fr: "Journal d'apprentissage" },
  convert_units: { ta: "حوّل الوحدات", ar: "حوّل الوحدات", en: "Convert Units", fr: "Convertir les unités" },
  reference: { ta: "مرجع", ar: "مرجع", en: "Reference", fr: "Référence" },
  search_platforms: { ta: "منصات البحث", ar: "منصات البحث", en: "Search Platforms", fr: "Plateformes de recherche" },
  save_an_article: { ta: "احفظ مقالة", ar: "احفظ مقالة", en: "Save an Article", fr: "Enregistrer un article" },
  saved_articles: { ta: "المقالات المحفوظة", ar: "المقالات المحفوظة", en: "Saved Articles", fr: "Articles enregistrés" },
  focus_session: { ta: "جلسة تركيز", ar: "جلسة تركيز", en: "Focus Session", fr: "Session de concentration" },
  choose_language: { ta: "اختر اللغة", ar: "اختر اللغة", en: "Choose Language", fr: "Choisir la langue" },
  researcher_profile: { ta: "ملف الباحث", ar: "ملف الباحث", en: "Researcher Profile", fr: "Profil du chercheur" },
  save_profile: { ta: "احفظ الملف", ar: "احفظ الملف", en: "Save Profile", fr: "Enregistrer le profil" },
  google_sync: { ta: "مزامنة Google Sheets عبر Make", ar: "مزامنة Google Sheets عبر Make", en: "Google Sheets Sync Through Make", fr: "Synchronisation Google Sheets via Make" },
  save_sync_settings: { ta: "احفظ إعدادات المزامنة", ar: "احفظ إعدادات المزامنة", en: "Save Sync Settings", fr: "Enregistrer la synchro" },
  export_full_backup: { ta: "صدّر نسخة احتياطية كاملة", ar: "صدّر نسخة احتياطية كاملة", en: "Export Full Backup", fr: "Exporter la sauvegarde complète" },
  work: { ta: "عمل", ar: "عمل", en: "Work", fr: "Travail" },
  break: { ta: "راحة", ar: "راحة", en: "Break", fr: "Pause" },
  sessions_word: { ta: "جلسات", ar: "جلسات", en: "Sessions", fr: "Sessions" },
  open_learning_log: { ta: "افتح سجل التعلم", ar: "افتح سجل التعلم", en: "Open Learning Log", fr: "Ouvrir le journal" },
  install_app: { ta: "ثبّت التطبيق", ar: "ثبّت التطبيق", en: "Install App", fr: "Installer l'app" },
  save_article_button: { ta: "احفظ المقالة", ar: "احفظ المقالة", en: "Save Article", fr: "Enregistrer l'article" },
  extract_text: { ta: "استخرج النص", ar: "استخرج النص", en: "Extract Text", fr: "Extraire le texte" },
  export_csv: { ta: "صدّر CSV", ar: "صدّر CSV", en: "Export CSV", fr: "Exporter CSV" },
  open_groupdocs: { ta: "افتح GroupDocs", ar: "افتح GroupDocs", en: "Open GroupDocs", fr: "Ouvrir GroupDocs" },
  use_in_note: { ta: "استعمل في ملاحظة", ar: "استعمل في ملاحظة", en: "Use in Note", fr: "Utiliser dans une note" },
  your_protocols: { ta: "بروتوكولاتي", ar: "بروتوكولاتي", en: "Your Protocols", fr: "Vos protocoles" },
  starter_protocols: { ta: "نماذج جاهزة", ar: "نماذج جاهزة", en: "Starter Templates", fr: "Modèles de départ" },
  publish_and_backup: { ta: "Publishing, Sharing, and Backup", ar: "Publishing, Sharing, and Backup", en: "Publishing, Sharing, and Backup", fr: "Publication, partage et sauvegarde" },
  publish_ready_help: { ta: "Use your public app link to share Lab Asis, and keep a full backup so your data can move safely between devices.", ar: "Use your public app link to share Lab Asis, and keep a full backup so your data can move safely between devices.", en: "Use your public app link to share Lab Asis, and keep a full backup so your data can move safely between devices.", fr: "Utilisez le lien public de l'application pour partager Lab Asis et garder une sauvegarde complete entre appareils." },
  public_app_link: { ta: "Public App Link", ar: "Public App Link", en: "Public App Link", fr: "Lien public de l'application" },
  public_link_note: { ta: "This is the link you can post on LinkedIn, send to colleagues, or install from a phone browser.", ar: "This is the link you can post on LinkedIn, send to colleagues, or install from a phone browser.", en: "This is the link you can post on LinkedIn, send to colleagues, or install from a phone browser.", fr: "C'est le lien a publier sur LinkedIn, a envoyer a vos collegues ou a installer depuis un navigateur mobile." },
  copy_app_link: { ta: "Copy App Link", ar: "Copy App Link", en: "Copy App Link", fr: "Copier le lien de l'app" },
  share_app: { ta: "Share App", ar: "Share App", en: "Share App", fr: "Partager l'app" },
  restore_backup_file: { ta: "Restore Backup File", ar: "Restore Backup File", en: "Restore Backup File", fr: "Fichier de restauration" },
  restore_backup_note: { ta: "Restore merges backup records into this device and overwrites matching record IDs safely.", ar: "Restore merges backup records into this device and overwrites matching record IDs safely.", en: "Restore merges backup records into this device and overwrites matching record IDs safely.", fr: "La restauration fusionne les enregistrements de sauvegarde et remplace les identifiants correspondants en securite." },
  restore_backup: { ta: "Restore Backup", ar: "Restore Backup", en: "Restore Backup", fr: "Restaurer la sauvegarde" },
  version_label: { ta: "Version", ar: "Version", en: "Version", fr: "Version" },
};

const STORES = [
  "experimentRuns",
  "labNotes",
  "protocols",
  "cellCounts",
  "experiments",
  "tasks",
  "failures",
  "learnings",
  "articles",
  "citations",
  "voiceNotes",
  "spectroTables",
  "resultFiles",
  "paperSummaries",
  "pomodoro",
  "calendar",
  "timers",
  "users",
];

const SETTINGS_KEY = "lab-asis-settings";
const CELL_DRAFT_KEY = "lab-asis-cell-draft";
const TIMER_STATE_KEY = "lab-asis-timer-state";
const POMODORO_STATE_KEY = "lab-asis-pomodoro-state";
const DB_NAME = "lab-asis-db";
const DB_VERSION = 8;
const APP_VERSION = "1.5.4";
const PUBLIC_APP_URL = "https://tiagassem.github.io/Lab-Asis/";
const GROUPDOCS_IMAGE_TO_SPREADSHEET_URL = "https://products.groupdocs.app/conversion/image-to-spreadsheet";
const PDFJS_WORKER_SRC = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
const WORKSPACE_REFRESH_STORES = new Set(
  STORES.filter((storeName) => storeName !== "users")
);

const DEFAULT_TIMER_DRAFT = {
  name: "",
  activityTag: "",
  minutes: 15,
  seconds: 0,
};

const TIMER_PRESETS = {
  wash: { name: "Wash Step", activityTag: "Wash", totalSeconds: 180 },
  incubation: { name: "Incubation", activityTag: "Incubation", totalSeconds: 300 },
  centrifuge: { name: "Centrifuge", activityTag: "Centrifuge", totalSeconds: 600 },
  staining: { name: "Staining", activityTag: "Staining", totalSeconds: 900 },
  longrun: { name: "Long Run", activityTag: "Timed Run", totalSeconds: 1800 },
};

function createEmptySpectroRow(partial = {}) {
  return {
    sample: "",
    od1: "",
    od2: "",
    od3: "",
    comment: "",
    ...partial,
  };
}

const VOICE_SUMMARY_TEMPLATE = [
  "Objective:",
  "Method / Conditions:",
  "Key observations:",
  "Problems or deviations:",
  "Next actions:",
  "Values / names to verify:",
].join("\n");

const PAPER_SUMMARY_TEMPLATE = [
  "Research question:",
  "Model / sample:",
  "Methods:",
  "Main findings:",
  "Limitations:",
  "Why it matters:",
  "Exact supporting quotes:",
].join("\n");

const PAPER_SECTION_PATTERNS = {
  question: [/background:?/i, /objective:?/i, /objectives:?/i, /aim:?/i, /aims:?/i, /purpose:?/i, /introduction:?/i],
  methods: [/methods?:?/i, /materials and methods:?/i, /study design:?/i, /design:?/i],
  findings: [/results?:?/i, /findings:?/i, /outcomes?:?/i],
  limitations: [/limitations?:?/i, /limitations and future directions:?/i, /caution:?/i],
  importance: [/conclusions?:?/i, /conclusion:?/i, /interpretation:?/i, /significance:?/i, /discussion:?/i],
};

const state = {
  db: null,
  language: "en",
  settings: {
    researcherName: "",
    researcherEmail: "",
    webhooks: {},
  },
  deferredPrompt: null,
  timerInterval: null,
  timerAlertInterval: null,
  pomodoroInterval: null,
  pomodoroAlertInterval: null,
  photoFile: null,
  photoEnhancedDataUrl: "",
  editingTimerId: null,
  calendarView: {
    year: new Date().getFullYear(),
    month: new Date().getMonth(),
    selectedDate: toDateInputValue(new Date()),
  },
  activeTimers: [],
  timerDraft: { ...DEFAULT_TIMER_DRAFT },
  pomodoro: {
    phase: "work",
    remainingSeconds: 1500,
    workDurationSeconds: 1500,
    breakDurationSeconds: 300,
    running: false,
    endAt: null,
    sessionsCompleted: 0,
    alertVisible: false,
    alertType: "",
  },
  cellDraft: {
    totalCells: 0,
    squares: 10,
    dilution: 2,
  },
  spectroDraft: {
    title: "",
    project: "",
    notes: "",
    rows: [createEmptySpectroRow()],
  },
  activeScreen: "home",
  currentRunId: null,
  searchFilters: {
    workspace: "",
    runs: "",
    tasks: "",
    notes: "",
    protocols: "",
    papers: "",
    citations: "",
    timeline: "",
  },
  resultFilters: {
    type: "",
    project: "",
  },
};

const BASE_APP_TITLE = document.title;

function getAppShareUrl() {
  if (location.protocol === "http:" || location.protocol === "https:") {
    return new URL("./", location.href).href;
  }
  return PUBLIC_APP_URL;
}

function updateVersionCopy() {
  const versionText = `${t("version_label")} ${APP_VERSION}`;
  setText("settings-version-line", versionText);
  setText("footer-version", versionText);
}

function t(key) {
  const entry = TRANSLATIONS[key];
  if (!entry) {
    return key;
  }
  return entry[state.language] || entry.en || key;
}

function isRtl() {
  return RTL_LANGS.has(state.language);
}

function safeParse(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function persistSettings() {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(state.settings));
}

function persistCellDraft() {
  localStorage.setItem(CELL_DRAFT_KEY, JSON.stringify(state.cellDraft));
}

function persistTimerState() {
  localStorage.setItem(
    TIMER_STATE_KEY,
    JSON.stringify({
      draft: state.timerDraft,
      activeTimers: state.activeTimers,
    })
  );
}

function persistPomodoroState() {
  localStorage.setItem(POMODORO_STATE_KEY, JSON.stringify(state.pomodoro));
}

function makeId(prefix) {
  if (window.crypto?.randomUUID) {
    return `${prefix}-${window.crypto.randomUUID()}`;
  }
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function toDateInputValue(date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 10);
}

function formatDateTime(value) {
  if (!value) return "";
  const date = new Date(value);
  return date.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function formatDate(value) {
  if (!value) return "";
  return new Date(value).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function formatSeconds(totalSeconds) {
  const safeSeconds = Math.max(0, Math.floor(totalSeconds));
  const minutes = String(Math.floor(safeSeconds / 60)).padStart(2, "0");
  const seconds = String(safeSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function normalizeTimerDraft(raw = {}) {
  const minutes = Math.max(0, Math.floor(Number(raw.minutes ?? DEFAULT_TIMER_DRAFT.minutes) || 0));
  const seconds = Math.min(59, Math.max(0, Math.floor(Number(raw.seconds ?? DEFAULT_TIMER_DRAFT.seconds) || 0)));
  return {
    name: String(raw.name || ""),
    activityTag: String(raw.activityTag || ""),
    minutes,
    seconds,
  };
}

function draftFromSeconds(totalSeconds, extra = {}) {
  const safeSeconds = Math.max(0, Math.floor(Number(totalSeconds) || 0));
  return normalizeTimerDraft({
    ...DEFAULT_TIMER_DRAFT,
    ...extra,
    minutes: Math.floor(safeSeconds / 60),
    seconds: safeSeconds % 60,
  });
}

function getTimerStatus(timer) {
  if (timer.completed || Number(timer.remainingSeconds || 0) <= 0) {
    return "completed";
  }
  return timer.running ? "running" : "paused";
}

function getTimerStatusLabel(timer) {
  const status = getTimerStatus(timer);
  if (status === "completed") return t("timer_status_completed");
  if (status === "running") return t("timer_status_running");
  return t("timer_status_paused");
}

function getTimerStatusLabelFromValue(status) {
  if (status === "Completed") return t("timer_status_completed");
  if (status === "Running") return t("timer_status_running");
  return t("timer_status_paused");
}

function getVisibleTimerAlerts() {
  return state.activeTimers
    .filter((timer) => timer.completed && timer.alertVisible)
    .sort((a, b) => new Date(b.finishedAt || b.createdAt) - new Date(a.finishedAt || a.createdAt));
}

function runTimerAlertPattern() {
  beep();
  window.setTimeout(() => beep(), 220);
  window.setTimeout(() => beep(), 480);
  if (navigator.vibrate) {
    navigator.vibrate([220, 140, 220, 140, 220]);
  }
}

function syncTimerAlertSignal() {
  const alerts = getVisibleTimerAlerts();
  if (!alerts.length) {
    if (state.timerAlertInterval) {
      window.clearInterval(state.timerAlertInterval);
      state.timerAlertInterval = null;
    }
    document.title = BASE_APP_TITLE;
    return;
  }

  document.title = `${t("timer_live_finished")} - ${BASE_APP_TITLE}`;
  if (state.timerAlertInterval) return;
  runTimerAlertPattern();
  let flashOn = true;
  state.timerAlertInterval = window.setInterval(() => {
    flashOn = !flashOn;
    document.title = flashOn ? `${t("timer_live_finished")} - ${BASE_APP_TITLE}` : BASE_APP_TITLE;
    runTimerAlertPattern();
  }, 2200);
}

function renderTimerLiveBanner() {
  const banner = document.getElementById("timer-live-banner");
  if (!banner) return;

  const alerts = getVisibleTimerAlerts();
  const runningTimers = state.activeTimers
    .filter((timer) => timer.running)
    .sort((a, b) => getLiveRemainingSeconds(a) - getLiveRemainingSeconds(b));
  const pausedCount = state.activeTimers.filter((timer) => !timer.running && !timer.completed).length;

  if (alerts.length) {
    const alertNames = alerts.slice(0, 2).map((timer) => timer.name || timer.activityTag || "Timer").join(", ");
    banner.classList.remove("hidden");
    banner.classList.add("warning");
    banner.innerHTML = `
      <div class="timer-live-banner-content">
        <div class="timer-live-banner-text">
          <div class="timer-live-banner-title">${escapeHtml(t("timer_live_finished"))}</div>
          <div class="timer-live-banner-meta">${escapeHtml(alertNames)}${alerts.length > 2 ? ` +${alerts.length - 2}` : ""}</div>
        </div>
        <div class="button-row">
          <button class="secondary-button small-button" data-timer-open-screen="timer" type="button">${escapeHtml(t("timer_open_screen"))}</button>
          <button class="outline-button small-button" data-timer-dismiss-all type="button">${escapeHtml(t("timer_dismiss_all"))}</button>
        </div>
      </div>
    `;
    return;
  }

  if (!runningTimers.length && !pausedCount) {
    banner.classList.add("hidden");
    banner.classList.remove("warning");
    banner.innerHTML = "";
    return;
  }

  const nextTimer = runningTimers[0];
  const nextLabel = nextTimer
    ? `${t("timer_live_next")}: ${nextTimer.name || nextTimer.activityTag || "Timer"} (${formatSeconds(getLiveRemainingSeconds(nextTimer))})`
    : `${pausedCount} ${t("timer_status_paused").toLowerCase()}`;
  const summary = [
    runningTimers.length ? `${runningTimers.length} ${t("timer_status_running").toLowerCase()}` : "",
    pausedCount ? `${pausedCount} ${t("timer_status_paused").toLowerCase()}` : "",
  ]
    .filter(Boolean)
    .join(" | ");
  const bannerTitle = runningTimers.length ? t("timer_live_running") : t("timer_status_paused");
  const bannerMeta = runningTimers.length ? `${summary} | ${nextLabel}` : summary || nextLabel;

  banner.classList.remove("hidden", "warning");
  banner.innerHTML = `
    <div class="timer-live-banner-content">
      <div class="timer-live-banner-text">
        <div class="timer-live-banner-title">${escapeHtml(bannerTitle)}</div>
        <div class="timer-live-banner-meta">${escapeHtml(bannerMeta)}</div>
      </div>
      <div class="button-row">
        <button class="outline-button small-button" data-timer-open-screen="timer" type="button">${escapeHtml(t("timer_open_screen"))}</button>
      </div>
    </div>
  `;
}

function renderTimerAlertModal() {
  const modal = document.getElementById("timer-alert-modal");
  const card = document.getElementById("timer-alert-card");
  if (!modal || !card) return;

  const alerts = getVisibleTimerAlerts();
  if (!alerts.length) {
    modal.classList.add("hidden");
    card.innerHTML = "";
    return;
  }

  modal.classList.remove("hidden");
  card.innerHTML = `
    <div class="timer-alert-title">${escapeHtml(t("timer_alert_title"))}</div>
    <div class="timer-alert-subtitle">${escapeHtml(t("timer_alert_subtitle"))}</div>
    <div class="timer-alert-list">
      ${alerts
        .map(
          (timer) => `
            <div class="timer-alert-item">
              <strong>${escapeHtml(timer.name || timer.activityTag || "Timer")}</strong>
              <div class="item-meta">${escapeHtml(timer.activityTag || "General Lab")} | ${formatDateTime(timer.finishedAt || timer.createdAt)}</div>
              <div class="button-row">
                <button class="secondary-button small-button" data-timer-open-screen="timer" type="button">${escapeHtml(t("timer_open_screen"))}</button>
                <button class="outline-button small-button" data-timer-dismiss="${timer.id}" type="button">${escapeHtml(t("timer_dismiss"))}</button>
              </div>
            </div>
          `
        )
        .join("")}
    </div>
    <div class="button-row">
      <button class="outline-button" data-timer-dismiss-all type="button">${escapeHtml(t("timer_dismiss_all"))}</button>
    </div>
  `;
}

function renderTimerPresenceUi() {
  renderTimerLiveBanner();
  renderTimerAlertModal();
  syncTimerAlertSignal();
}

function getPomodoroAlertMessage() {
  return state.pomodoro.alertType === "break_complete"
    ? t("pomodoro_alert_break_complete")
    : t("pomodoro_alert_work_complete");
}

function syncPomodoroAlertSignal() {
  if (!state.pomodoro.alertVisible) {
    if (state.pomodoroAlertInterval) {
      window.clearInterval(state.pomodoroAlertInterval);
      state.pomodoroAlertInterval = null;
    }
    return;
  }

  if (state.pomodoroAlertInterval) return;
  runTimerAlertPattern();
  state.pomodoroAlertInterval = window.setInterval(() => {
    runTimerAlertPattern();
  }, 2200);
}

function renderPomodoroAlertModal() {
  const modal = document.getElementById("pomodoro-alert-modal");
  const card = document.getElementById("pomodoro-alert-card");
  if (!modal || !card) return;

  if (!state.pomodoro.alertVisible) {
    modal.classList.add("hidden");
    card.innerHTML = "";
    return;
  }

  modal.classList.remove("hidden");
  card.innerHTML = `
    <div class="timer-alert-title">${escapeHtml(t("pomodoro_alert_title"))}</div>
    <div class="timer-alert-subtitle">${escapeHtml(t("pomodoro_alert_subtitle"))}</div>
    <div class="timer-alert-list">
      <div class="timer-alert-item">
        <strong>${escapeHtml(getPomodoroAlertMessage())}</strong>
        <div class="item-meta">${escapeHtml(`${t("pomodoro_work_minutes")}: ${Math.round(getPomodoroPhaseDuration("work") / 60)} min | ${t("pomodoro_break_minutes")}: ${Math.round(getPomodoroPhaseDuration("break") / 60)} min`)}</div>
        <div class="button-row">
          <button class="secondary-button small-button" data-pomodoro-open-screen="pomodoro" type="button">${escapeHtml(t("pomodoro_open_screen"))}</button>
          <button class="outline-button small-button" data-pomodoro-dismiss type="button">${escapeHtml(t("pomodoro_dismiss"))}</button>
        </div>
      </div>
    </div>
  `;
}

function renderPomodoroPresenceUi() {
  renderPomodoroAlertModal();
  syncPomodoroAlertSignal();
}

function dismissPomodoroAlert() {
  state.pomodoro.alertVisible = false;
  state.pomodoro.alertType = "";
  persistPomodoroState();
  renderPomodoroPresenceUi();
}

function getLiveRemainingSeconds(timer, now = Date.now()) {
  if (!timer?.running || !timer?.endAt) {
    return Math.max(0, Math.floor(Number(timer?.remainingSeconds || 0)));
  }
  return Math.max(0, Math.ceil((Number(timer.endAt) - now) / 1000));
}

function normalizeActiveTimer(raw = {}) {
  const totalSeconds = Math.max(1, Math.floor(Number(raw.totalSeconds || raw.remainingSeconds || 0)));
  if (!totalSeconds) return null;
  const storedRemaining = Number(raw.remainingSeconds ?? totalSeconds);
  const completed = Boolean(raw.completed) || storedRemaining <= 0;
  const running = Boolean(raw.running) && !completed;
  const remainingSeconds = completed
    ? 0
    : Math.min(totalSeconds, Math.max(0, Math.floor(storedRemaining || 0)));

  return {
    id: raw.id || makeId("active-timer"),
    name: String(raw.name || ""),
    activityTag: String(raw.activityTag || ""),
    totalSeconds,
    remainingSeconds,
    running,
    endAt: running && raw.endAt ? Number(raw.endAt) : null,
    completed,
    createdAt: raw.createdAt || new Date().toISOString(),
    finishedAt: raw.finishedAt || null,
    alertVisible: Boolean(raw.alertVisible),
  };
}

function getStoredTimerState(raw = {}) {
  if (raw && typeof raw === "object" && (Array.isArray(raw.activeTimers) || raw.draft)) {
    return {
      draft: normalizeTimerDraft(raw.draft || DEFAULT_TIMER_DRAFT),
      activeTimers: Array.isArray(raw.activeTimers)
        ? raw.activeTimers.map(normalizeActiveTimer).filter(Boolean)
        : [],
    };
  }

  const draftSourceSeconds = Math.max(
    0,
    Math.floor(Number(raw.remainingSeconds || raw.totalSeconds || DEFAULT_TIMER_DRAFT.minutes * 60) || 0)
  );
  const draft = draftFromSeconds(draftSourceSeconds, {
    name: raw?.name || "",
  });

  const shouldRecoverLegacyTimer =
    raw &&
    typeof raw === "object" &&
    (Boolean(raw.name) ||
      Boolean(raw.running) ||
      Number(raw.remainingSeconds || 0) !== DEFAULT_TIMER_DRAFT.minutes * 60 ||
      Number(raw.totalSeconds || 0) !== DEFAULT_TIMER_DRAFT.minutes * 60);

  const recoveredTimer = shouldRecoverLegacyTimer
    ? normalizeActiveTimer({
        id: raw.id || makeId("active-timer"),
        name: raw.name || "Recovered Timer",
        activityTag: raw.activityTag || "Recovered",
        totalSeconds: Number(raw.totalSeconds || draftSourceSeconds || 1),
        remainingSeconds: Number(raw.remainingSeconds || draftSourceSeconds || 1),
        running: Boolean(raw.running),
        endAt: raw.endAt || null,
        completed: Number(raw.remainingSeconds || draftSourceSeconds || 0) <= 0,
        createdAt: raw.createdAt || new Date().toISOString(),
      })
    : null;

  return {
    draft,
    activeTimers: recoveredTimer ? [recoveredTimer] : [],
  };
}

function csvEscape(value) {
  const stringValue = value == null ? "" : String(value);
  if (/[",\n]/.test(stringValue)) {
    return `"${stringValue.replace(/"/g, '""')}"`;
  }
  return stringValue;
}

function downloadFile(filename, content, mimeType) {
  const blob = new Blob([content], { type: mimeType });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function downloadCsv(filename, rows) {
  if (!rows.length) {
    showToast("No data to export yet.");
    return;
  }
  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set())
  );
  const lines = [
    headers.map(csvEscape).join(","),
    ...rows.map((row) => headers.map((header) => csvEscape(row[header])).join(",")),
  ];
  downloadFile(filename, lines.join("\n"), "text/csv;charset=utf-8");
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function matchesSearch(record, query, fields) {
  const needle = String(query || "").trim().toLowerCase();
  if (!needle) return true;
  const haystack = fields
    .map((field) => String(record?.[field] ?? ""))
    .join(" ")
    .toLowerCase();
  return haystack.includes(needle);
}

function getCurrentProtocolDraft() {
  const title = document.getElementById("protocol-title")?.value.trim() || "";
  const category = document.getElementById("protocol-category")?.value || "";
  const objective = document.getElementById("protocol-objective")?.value.trim() || "";
  const materials = document.getElementById("protocol-materials")?.value.trim() || "";
  const steps = document.getElementById("protocol-steps")?.value.trim() || "";
  const duration = document.getElementById("protocol-duration")?.value.trim() || "";
  const safetyNotes = document.getElementById("protocol-safety")?.value.trim() || "";
  const hasContent = [title, objective, materials, steps, duration, safetyNotes].some(Boolean);
  if (!hasContent) return null;
  return {
    title: title || "Untitled protocol",
    category,
    objective,
    materials,
    steps,
    duration,
    safetyNotes,
    language: state.language,
    createdAt: new Date().toISOString(),
  };
}

function getCurrentLabNoteDraft() {
  const title = document.getElementById("note-title")?.value.trim() || "";
  const noteDate = document.getElementById("note-date")?.value || "";
  const experimentName = document.getElementById("note-experiment")?.value.trim() || "";
  const protocolId = document.getElementById("note-protocol")?.value || "";
  const tags = document.getElementById("note-tags")?.value.trim() || "";
  const observations = document.getElementById("note-observations")?.value.trim() || "";
  const results = document.getElementById("note-results")?.value.trim() || "";
  const nextSteps = document.getElementById("note-nextsteps")?.value.trim() || "";
  const hasContent = [title, experimentName, tags, observations, results, nextSteps].some(Boolean);
  if (!hasContent) return null;
  return {
    title: title || "Untitled Lab Note",
    noteDate,
    experimentName,
    protocolId,
    tags,
    observations,
    results,
    nextSteps,
    language: state.language,
    createdAt: new Date().toISOString(),
  };
}

function getCurrentPaperSummaryDraft() {
  const title = document.getElementById("paper-title")?.value.trim() || "";
  const authors = document.getElementById("paper-authors")?.value.trim() || "";
  const url = document.getElementById("paper-url")?.value.trim() || "";
  const sourceText = document.getElementById("paper-source-text")?.value.trim() || "";
  const question = document.getElementById("paper-question")?.value.trim() || "";
  const model = document.getElementById("paper-model")?.value.trim() || "";
  const methods = document.getElementById("paper-methods")?.value.trim() || "";
  const findings = document.getElementById("paper-findings")?.value.trim() || "";
  const limitations = document.getElementById("paper-limitations")?.value.trim() || "";
  const importance = document.getElementById("paper-importance")?.value.trim() || "";
  const quotes = document.getElementById("paper-quotes")?.value.trim() || "";
  const verified = Boolean(document.getElementById("paper-verified")?.checked);
  const hasContent = [title, authors, url, sourceText, question, model, methods, findings, limitations, importance, quotes].some(Boolean);
  if (!hasContent) return null;
  return {
    title: title || "Untitled Paper Summary",
    authors,
    url,
    sourceText,
    question,
    model,
    methods,
    findings,
    limitations,
    importance,
    quotes,
    verified,
    language: state.language,
    createdAt: new Date().toISOString(),
  };
}

function getCurrentCitationDraft() {
  const id = document.getElementById("citation-editing-id")?.value.trim() || "";
  const title = document.getElementById("citation-title")?.value.trim() || "";
  const authors = document.getElementById("citation-authors")?.value.trim() || "";
  const year = document.getElementById("citation-year")?.value.trim() || "";
  const journal = document.getElementById("citation-journal")?.value.trim() || "";
  const doi = document.getElementById("citation-doi")?.value.trim() || "";
  const url = document.getElementById("citation-url")?.value.trim() || "";
  const style = document.getElementById("citation-style")?.value || "apa";
  const project = document.getElementById("citation-project")?.value.trim() || "";
  const chapter = document.getElementById("citation-chapter")?.value.trim() || "";
  const usedIn = document.getElementById("citation-used-in")?.value.trim() || "";
  const usedFor = document.getElementById("citation-used-for")?.value.trim() || "";
  const evidence = document.getElementById("citation-evidence")?.value.trim() || "";
  const notes = document.getElementById("citation-notes")?.value.trim() || "";
  const citationKey = document.getElementById("citation-key")?.value.trim() || "";
  const linkedSourceId = document.getElementById("citation-linked-id")?.value.trim() || "";
  const linkedSourceType = document.getElementById("citation-linked-type")?.value.trim() || "";
  const linkedSourceLabel = document.getElementById("citation-linked-source")?.value.trim() || "";
  const hasContent = [title, authors, year, journal, doi, url, project, chapter, usedIn, usedFor, evidence, notes, citationKey].some(Boolean);
  if (!hasContent) return null;
  return {
    id,
    title: title || "Untitled Source",
    authors,
    year,
    journal,
    doi,
    url,
    style,
    project,
    chapter,
    usedIn,
    usedFor,
    evidence,
    notes,
    citationKey,
    linkedSourceId,
    linkedSourceType,
    linkedSourceLabel,
    language: state.language,
    createdAt: new Date().toISOString(),
  };
}

function extractCitationYear(value = "") {
  const match = String(value).match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : "";
}

function stripYearFromAuthors(value = "") {
  return String(value)
    .replace(/\(?\b(19|20)\d{2}\b\)?/g, "")
    .replace(/[;,()\s]+$/g, "")
    .trim();
}

function slugifyCitationToken(value = "") {
  return String(value)
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .toLowerCase()
    .replace(/[_\s-]+/g, "")
    .trim();
}

function getPrimaryAuthorToken(authors = "") {
  const cleaned = stripYearFromAuthors(authors)
    .replace(/\bet al\.?/gi, "")
    .trim();
  if (!cleaned) return "";
  const firstChunk = cleaned.split(/;|,|&|\band\b/i)[0].trim();
  const pieces = firstChunk.split(/\s+/).filter(Boolean);
  return pieces[pieces.length - 1] || firstChunk;
}

function getTitleKeyword(title = "") {
  const stopWords = new Set(["the", "and", "for", "with", "from", "into", "using", "study", "analysis", "effects"]);
  const parts = String(title)
    .toLowerCase()
    .match(/[a-z0-9]+/g);
  if (!parts?.length) return "source";
  return parts.find((part) => !stopWords.has(part)) || parts[0];
}

function buildCitationKey({ authors = "", title = "", year = "" } = {}) {
  const authorToken = slugifyCitationToken(getPrimaryAuthorToken(authors) || "source");
  const yearToken = slugifyCitationToken(year || "nd");
  const titleToken = slugifyCitationToken(getTitleKeyword(title)).slice(0, 18) || "item";
  return `${authorToken}${yearToken}${titleToken}`;
}

function normalizeCitationRecord(record = {}) {
  const title = record.title || "Untitled Source";
  const rawAuthors = record.authors || "";
  const year = record.year || extractCitationYear(rawAuthors) || extractCitationYear(record.url || "") || "";
  const authors = year ? stripYearFromAuthors(rawAuthors) || rawAuthors : rawAuthors;
  const journal = record.journal || "";
  const doi = record.doi || "";
  const url = record.url || "";
  const style = record.style || "apa";
  const project = record.project || "";
  const chapter = record.chapter || "";
  const citationKey = record.citationKey || buildCitationKey({ authors, title, year });
  return {
    ...record,
    title,
    authors,
    year,
    journal,
    doi,
    url,
    style,
    project,
    chapter,
    citationKey,
  };
}

function getSelectedCitationStyle() {
  return document.getElementById("citation-style")?.value || "apa";
}

function buildCitationText(record = {}, preferredStyle = "") {
  const normalized = normalizeCitationRecord(record);
  const style = (preferredStyle || normalized.style || "apa").toLowerCase();
  const authorPart = normalized.authors || "Unknown author";
  const yearPart = normalized.year || "n.d.";
  const titlePart = normalized.title || "Untitled source";
  const journalPart = normalized.journal || "";
  const doiPart = normalized.doi ? `https://doi.org/${normalized.doi.replace(/^https?:\/\/doi\.org\//i, "")}` : "";
  const urlPart = normalized.url || "";

  if (style === "vancouver") {
    return `${authorPart}. ${titlePart}. ${journalPart}${journalPart ? "." : ""} ${yearPart}; ${doiPart ? `${doiPart}.` : ""}${!doiPart && urlPart ? `${urlPart}.` : ""}`.replace(/\s+/g, " ").trim();
  }

  if (style === "mla") {
    return `${authorPart}. "${titlePart}." ${journalPart}${journalPart ? "," : ""} ${yearPart}${doiPart ? `, ${doiPart}` : urlPart ? `, ${urlPart}` : ""}.`.replace(/\s+/g, " ").trim();
  }

  return `${authorPart} (${yearPart}). ${titlePart}. ${journalPart ? `${journalPart}.` : ""}${doiPart ? ` ${doiPart}.` : urlPart ? ` ${urlPart}` : ""}`.replace(/\s+/g, " ").trim();
}

function buildBibtexEntry(record = {}) {
  const normalized = normalizeCitationRecord(record);
  const type = normalized.journal ? "article" : "misc";
  const fields = [
    ["title", normalized.title],
    ["author", normalized.authors],
    ["year", normalized.year],
    ["journal", normalized.journal],
    ["doi", normalized.doi],
    ["url", normalized.url],
    [
      "note",
      [normalized.usedIn ? `Used in: ${normalized.usedIn}` : "", normalized.usedFor ? `Used for: ${normalized.usedFor}` : ""]
        .filter(Boolean)
        .join(" | "),
    ],
    ["annote", normalized.evidence || normalized.notes || ""],
  ].filter(([, value]) => String(value || "").trim());

  const body = fields
    .map(([key, value]) => `  ${key} = {${String(value).replace(/[{}]/g, "")}}`)
    .join(",\n");

  return `@${type}{${normalized.citationKey || "source"},\n${body}\n}`;
}

function buildLatexCite(record = {}) {
  const normalized = normalizeCitationRecord(record);
  return `\\cite{${normalized.citationKey || "source"}}`;
}

function populateCitationForm(record = {}) {
  const normalized = normalizeCitationRecord(record);
  const fieldMap = {
    "citation-editing-id": normalized.id || "",
    "citation-linked-source": normalized.linkedSourceLabel || "",
    "citation-linked-id": normalized.linkedSourceId || "",
    "citation-linked-type": normalized.linkedSourceType || "",
    "citation-title": normalized.title || "",
    "citation-authors": normalized.authors || "",
    "citation-year": normalized.year || "",
    "citation-journal": normalized.journal || "",
    "citation-key": normalized.citationKey || "",
    "citation-doi": normalized.doi || "",
    "citation-url": normalized.url || "",
    "citation-style": normalized.style || "apa",
    "citation-project": normalized.project || "",
    "citation-chapter": normalized.chapter || "",
    "citation-used-in": normalized.usedIn || "",
    "citation-used-for": normalized.usedFor || "",
    "citation-evidence": normalized.evidence || "",
    "citation-notes": normalized.notes || "",
  };
  Object.entries(fieldMap).forEach(([id, value]) => {
    const field = document.getElementById(id);
    if (field) {
      field.value = value;
    }
  });
}

function clearCitationForm() {
  [
    "citation-linked-source",
    "citation-editing-id",
    "citation-linked-id",
    "citation-linked-type",
    "citation-title",
    "citation-authors",
    "citation-year",
    "citation-journal",
    "citation-key",
    "citation-doi",
    "citation-url",
    "citation-style",
    "citation-project",
    "citation-chapter",
    "citation-used-in",
    "citation-used-for",
    "citation-evidence",
    "citation-notes",
  ].forEach((id) => {
    const field = document.getElementById(id);
    if (field) {
      field.value = "";
    }
  });
}

function buildCitationDraftFromArticleRecord(record = {}) {
  return normalizeCitationRecord({
    linkedSourceId: record.id || "",
    linkedSourceType: "article",
    linkedSourceLabel: record.id ? `Saved article: ${record.title || "Article"}` : "Article draft",
    title: record.title || "",
    authors: record.authors || "",
    year: extractCitationYear(record.authors || ""),
    journal: record.journal || "",
    doi: extractDoiFromInput(record.url || ""),
    url: record.url || "",
    usedFor: record.summary || "",
  });
}

function buildCitationDraftFromPaperRecord(record = {}) {
  return normalizeCitationRecord({
    linkedSourceId: record.id || "",
    linkedSourceType: "paperSummary",
    linkedSourceLabel: record.id ? `Paper summary: ${record.title || "Paper"}` : "Paper summary draft",
    title: record.title || "",
    authors: stripYearFromAuthors(record.authors || "") || record.authors || "",
    year: extractCitationYear(record.authors || ""),
    journal: record.journal || "",
    doi: record.doi || extractDoiFromInput(record.url || ""),
    url: record.url || "",
    usedFor: record.findings || record.importance || "",
    evidence: record.quotes || "",
    notes: record.question || "",
  });
}

function buildCitationDraftFromArticleForm() {
  return buildCitationDraftFromArticleRecord({
    title: document.getElementById("article-title")?.value.trim() || "",
    authors: document.getElementById("article-authors")?.value.trim() || "",
    journal: document.getElementById("article-journal")?.value.trim() || "",
    url: document.getElementById("article-url")?.value.trim() || "",
    summary: document.getElementById("article-summary")?.value.trim() || "",
  });
}

function buildCitationDraftFromPaperForm() {
  return buildCitationDraftFromPaperRecord({
    title: document.getElementById("paper-title")?.value.trim() || "",
    authors: document.getElementById("paper-authors")?.value.trim() || "",
    url: document.getElementById("paper-url")?.value.trim() || "",
    findings: document.getElementById("paper-findings")?.value.trim() || "",
    importance: document.getElementById("paper-importance")?.value.trim() || "",
    quotes: document.getElementById("paper-quotes")?.value.trim() || "",
    question: document.getElementById("paper-question")?.value.trim() || "",
  });
}

function extractDoiFromInput(value = "") {
  const text = String(value || "").trim();
  if (!text) return "";
  const doiUrlMatch = text.match(/10\.\d{4,9}\/[-._;()/:A-Z0-9]+/i);
  return doiUrlMatch ? doiUrlMatch[0].replace(/[)>.,;]+$/g, "") : "";
}

function parseCrossrefAuthors(authors = []) {
  return authors
    .map((author) => [author.family, author.given].filter(Boolean).join(" ").trim())
    .filter(Boolean)
    .join("; ");
}

function parseOpenAlexAuthors(authorships = []) {
  return authorships
    .map((authorship) => authorship?.author?.display_name || "")
    .filter(Boolean)
    .join("; ");
}

async function fetchCrossrefCitationMetadata(doi) {
  const cleanDoi = extractDoiFromInput(doi);
  if (!cleanDoi) return null;
  const response = await fetch(`https://api.crossref.org/works/${encodeURIComponent(cleanDoi)}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`Crossref lookup failed with status ${response.status}`);
  }
  const json = await response.json();
  const message = json?.message || {};
  const title = Array.isArray(message.title) ? message.title[0] : message.title || "";
  const journal = Array.isArray(message["container-title"]) ? message["container-title"][0] : message["container-title"] || "";
  const year = message.issued?.["date-parts"]?.[0]?.[0] || "";
  const url = message.URL || (cleanDoi ? `https://doi.org/${cleanDoi}` : "");
  return normalizeCitationRecord({
    title,
    authors: parseCrossrefAuthors(message.author || []),
    year: year ? String(year) : "",
    journal,
    doi: message.DOI || cleanDoi,
    url,
  });
}

async function fetchOpenAlexCitationMetadata(doi) {
  const cleanDoi = extractDoiFromInput(doi);
  if (!cleanDoi) return null;
  const response = await fetch(`https://api.openalex.org/works/doi:${encodeURIComponent(cleanDoi)}`, {
    headers: { Accept: "application/json" },
  });
  if (!response.ok) {
    throw new Error(`OpenAlex lookup failed with status ${response.status}`);
  }
  const json = await response.json();
  const journal = json?.primary_location?.source?.display_name || "";
  const url = json?.doi || json?.id || (cleanDoi ? `https://doi.org/${cleanDoi}` : "");
  return normalizeCitationRecord({
    title: json?.display_name || json?.title || "",
    authors: parseOpenAlexAuthors(json?.authorships || []),
    year: json?.publication_year ? String(json.publication_year) : "",
    journal,
    doi: cleanDoi,
    url,
  });
}

function mergeCitationMetadata(baseRecord = {}, incomingRecord = {}) {
  const base = normalizeCitationRecord(baseRecord);
  const incoming = normalizeCitationRecord(incomingRecord);
  return normalizeCitationRecord({
    ...base,
    title: base.title || incoming.title,
    authors: base.authors || incoming.authors,
    year: base.year || incoming.year,
    journal: base.journal || incoming.journal,
    doi: base.doi || incoming.doi,
    url: base.url || incoming.url,
    citationKey: base.citationKey || incoming.citationKey,
  });
}

function normalizeDuplicateToken(value = "") {
  return String(value || "").trim().toLowerCase();
}

function buildCitationFingerprint(record = {}) {
  const normalized = normalizeCitationRecord(record);
  return `${normalizeDuplicateToken(normalized.title)}|${normalizeDuplicateToken(normalized.authors)}|${normalizeDuplicateToken(normalized.year)}`;
}

function findDuplicateCitation(candidate = {}, records = []) {
  const normalized = normalizeCitationRecord(candidate);
  const doiToken = normalizeDuplicateToken(normalized.doi);
  const keyToken = normalizeDuplicateToken(normalized.citationKey);
  const fingerprint = buildCitationFingerprint(normalized);

  return records.find((record) => {
    const existing = normalizeCitationRecord(record);
    if (normalized.id && existing.id === normalized.id) return false;
    if (doiToken && normalizeDuplicateToken(existing.doi) === doiToken) return true;
    if (keyToken && normalizeDuplicateToken(existing.citationKey) === keyToken) return true;
    return fingerprint && buildCitationFingerprint(existing) === fingerprint;
  }) || null;
}

async function updateCitationDuplicateWarning() {
  const warning = document.getElementById("citation-duplicate-warning");
  if (!warning) return;
  const draft = getCurrentCitationDraft();
  if (!draft) {
    warning.classList.add("hidden");
    warning.textContent = "";
    return;
  }
  const duplicate = findDuplicateCitation(draft, await getAllRecords("citations"));
  if (!duplicate) {
    warning.classList.add("hidden");
    warning.textContent = "";
    return;
  }
  warning.textContent = `Possible duplicate found: ${duplicate.title || "Saved citation"}${duplicate.project ? ` | ${duplicate.project}` : ""}${duplicate.chapter ? ` | ${duplicate.chapter}` : ""}`;
  warning.classList.remove("hidden");
}

function getLatestSavedRecord(rows = []) {
  if (!rows.length) return null;
  return [...rows].sort(
    (a, b) =>
      new Date(b.updatedAt || b.createdAt || 0) -
      new Date(a.updatedAt || a.createdAt || 0)
  )[0];
}

function humanizeReportKey(key) {
  return String(key || "")
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_-]+/g, " ")
    .replace(/\bId\b/g, "ID")
    .replace(/\bPdf\b/g, "PDF")
    .replace(/\bOd\b/g, "OD")
    .replace(/\bUrl\b/g, "URL")
    .replace(/\bAt\b/g, "At")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function formatReportValue(value) {
  if (value == null || value === "") return "—";
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return escapeHtml(String(value)).replace(/\n/g, "<br />");
}

function shouldUseCardReport(headers, rows) {
  if (headers.length > 8) return true;
  return rows.some((row) =>
    headers.some((header) => String(row?.[header] ?? "").length > 90)
  );
}

function buildReportCardsHtml(headers, rows) {
  return rows
    .map((row, index) => {
      const cardTitle = row.title || row.name || row.project || `Record ${index + 1}`;
      const fields = headers
        .filter((header) => row[header] != null && row[header] !== "")
        .map(
          (header) => `
            <div class="report-field">
              <div class="report-field-label">${escapeHtml(humanizeReportKey(header))}</div>
              <div class="report-field-value">${formatReportValue(row[header])}</div>
            </div>
          `
        )
        .join("");

      return `
        <section class="report-card">
          <div class="report-card-header">
            <h2>${escapeHtml(cardTitle)}</h2>
          </div>
          <div class="report-field-grid">
            ${fields}
          </div>
        </section>
      `;
    })
    .join("");
}

function buildReportTableHtml(headers, rows) {
  const tableHead = headers
    .map((header) => `<th>${escapeHtml(humanizeReportKey(header))}</th>`)
    .join("");
  const tableBody = rows
    .map(
      (row) =>
        `<tr>${headers
          .map((header) => `<td>${formatReportValue(row[header])}</td>`)
          .join("")}</tr>`
    )
    .join("");
  return `
    <div class="table-wrap">
      <table>
        <thead>
          <tr>${tableHead}</tr>
        </thead>
        <tbody>
          ${tableBody}
        </tbody>
      </table>
    </div>
  `;
}

function buildPdfHtml(title, rows) {
  const createdAt = new Date().toLocaleString();
  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set())
  );
  const useCardReport = shouldUseCardReport(headers, rows);
  const reportBody = useCardReport
    ? buildReportCardsHtml(headers, rows)
    : buildReportTableHtml(headers, rows);

  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${escapeHtml(title)}</title>
      <style>
        body {
          font-family: "Segoe UI", Arial, sans-serif;
          margin: 32px;
          color: #212529;
          background: #ffffff;
        }
        .cover {
          padding: 20px 22px;
          border: 2px solid #00a898;
          border-radius: 20px;
          margin-bottom: 14px;
          background: linear-gradient(135deg, rgba(0,168,152,0.08), rgba(255,192,14,0.14));
        }
        h1 {
          margin: 0 0 8px;
          font-size: 2rem;
        }
        h2 {
          margin: 0;
          font-size: 1.08rem;
        }
        .meta {
          color: #495057;
          margin: 4px 0;
        }
        .print-note {
          margin: 10px 0 14px;
          padding: 8px 10px;
          border-radius: 14px;
          background: #eef8f7;
          border: 1px solid #cfe8e4;
          color: #35515a;
          font-size: 0.83rem;
        }
        .table-wrap {
          overflow: visible;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          table-layout: fixed;
          font-size: 0.9rem;
        }
        th, td {
          border: 1px solid #d9e0e6;
          text-align: left;
          vertical-align: top;
          padding: 10px;
          overflow-wrap: anywhere;
          word-break: break-word;
          white-space: normal;
        }
        th {
          background: #eef8f7;
          color: #212529;
          font-size: 0.82rem;
          letter-spacing: 0.01em;
        }
        tr:nth-child(even) {
          background: #fafcfc;
        }
        .report-card {
          margin-bottom: 12px;
          padding: 14px 14px 6px;
          border: 1px solid #d9e0e6;
          border-radius: 18px;
          background: linear-gradient(180deg, #ffffff, #fbfcfd);
          break-inside: auto;
          page-break-inside: auto;
        }
        .report-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 10px;
          padding-bottom: 8px;
          border-bottom: 1px solid #e7edf2;
          break-after: avoid;
          page-break-after: avoid;
        }
        .report-field-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }
        .report-field {
          padding: 8px 10px;
          border-radius: 14px;
          background: #f9fbfc;
          border: 1px solid #e7edf2;
          break-inside: avoid;
          page-break-inside: avoid;
        }
        .report-field-label {
          margin-bottom: 6px;
          color: #35515a;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .report-field-value {
          color: #212529;
          line-height: 1.45;
          overflow-wrap: anywhere;
          white-space: normal;
        }
        @media print {
          @page {
            size: ${useCardReport ? "A4 portrait" : "A4 landscape"};
            margin: 12mm;
          }
          body {
            margin: 0;
          }
          .cover {
            break-inside: avoid;
            page-break-inside: avoid;
            margin-bottom: 8px;
          }
          .print-note {
            break-inside: avoid;
            page-break-inside: avoid;
            margin: 6px 0 10px;
          }
          .report-card {
            margin-bottom: 8px;
          }
          .report-field-label {
            font-size: 0.74rem;
          }
          .report-field-value {
            font-size: 0.92rem;
            line-height: 1.35;
          }
          .table-wrap {
            overflow: visible;
          }
        }
        @media (max-width: 820px) {
          .report-field-grid {
            grid-template-columns: 1fr;
          }
        }
      </style>
    </head>
    <body>
      <section class="cover">
        <h1>${escapeHtml(title)}</h1>
        <p class="meta">App: Lab Asis</p>
        <p class="meta">Created by: Tasnim Gassem</p>
        <p class="meta">Generated: ${escapeHtml(createdAt)}</p>
        <p class="meta">Language: ${escapeHtml(LANG[state.language] || state.language)}</p>
      </section>
      <section class="print-note">
        ${useCardReport
          ? "This report was optimized in portrait card layout for clear scientific reading and PDF download."
          : "This report was optimized in landscape table layout for clearer wide-column printing and PDF download."}
      </section>
      ${reportBody}
    </body>
  </html>`;
}

async function getRowsForReport(storeName) {
  const rows = await getAllRecords(storeName);
  switch (storeName) {
    case "experimentRuns":
      {
        const draft = getRunFormValues();
        if (draft.title) {
          return [
            {
              ...draft,
              status: "Draft",
              source: "Current run builder form",
            },
          ];
        }
        const latestRun = getLatestSavedRecord(rows);
        return latestRun
          ? [
              {
                ...latestRun,
                startedAt: latestRun.startedAt ? formatDateTime(latestRun.startedAt) : "",
                completedAt: latestRun.completedAt ? formatDateTime(latestRun.completedAt) : "",
              },
            ]
          : [];
      }
    case "protocols":
      {
        const draftProtocol = getCurrentProtocolDraft();
        if (draftProtocol) {
          return [
            {
              ...draftProtocol,
              source: "Current form draft",
            },
          ];
        }
        const latestProtocol = getLatestSavedRecord(rows);
        return latestProtocol
          ? [
              {
                ...latestProtocol,
                source: "Latest saved protocol",
              },
            ]
          : [];
      }
    case "labNotes":
      {
        const draftLabNote = getCurrentLabNoteDraft();
        if (draftLabNote) {
          return [
            {
              ...draftLabNote,
              source: "Current note form",
            },
          ];
        }
        const latestLabNote = getLatestSavedRecord(rows);
        return latestLabNote
          ? [
              {
                ...latestLabNote,
                source: "Latest saved lab note",
              },
            ]
          : [];
      }
    case "voiceNotes":
      {
        const latestVoiceNote = getLatestSavedRecord(rows);
        return latestVoiceNote ? [(({ audioData, ...rest }) => rest)(latestVoiceNote)] : [];
      }
    case "spectroTables":
      return rows.flatMap((record) => buildSpectroCsvRows(record));
    case "resultFiles":
      return rows.map(({ fileData, ...rest }) => ({
        ...rest,
        fileSize: formatFileSize(rest.fileSize),
      }));
    case "paperSummaries":
      {
        const draftPaper = getCurrentPaperSummaryDraft();
        if (draftPaper) {
          return [
            {
              ...draftPaper,
              source: "Current paper summary form",
            },
          ];
        }
        const latestPaper = getLatestSavedRecord(rows);
        return latestPaper
          ? [
              (({ pdfData, ...rest }) => ({
                ...rest,
                pdfSize: formatFileSize(rest.pdfSize),
                source: "Latest saved paper summary",
              }))(latestPaper),
            ]
          : [];
      }
    case "citations":
      {
        const draftCitation = getCurrentCitationDraft();
        if (draftCitation) {
          const normalizedDraft = normalizeCitationRecord(draftCitation);
          return [
            {
              ...normalizedDraft,
              bibliography: buildCitationText(normalizedDraft),
              bibtex: buildBibtexEntry(normalizedDraft),
              latexCommand: buildLatexCite(normalizedDraft),
              source: "Current citation form",
            },
          ];
        }
        const latestCitation = getLatestSavedRecord(rows);
        if (!latestCitation) return [];
        const normalizedRecord = normalizeCitationRecord(latestCitation);
        return [
          {
            ...normalizedRecord,
            bibliography: buildCitationText(normalizedRecord),
            bibtex: buildBibtexEntry(normalizedRecord),
            latexCommand: buildLatexCite(normalizedRecord),
            source: "Latest saved citation",
          },
        ];
      }
    default:
      return rows.map((row) => {
        const cleaned = { ...row };
        delete cleaned.audioData;
        delete cleaned.fileData;
        delete cleaned.pdfData;
        return cleaned;
      });
  }
}

async function exportStoreToPdf(storeName, title) {
  const rows = await getRowsForReport(storeName);
  if (!rows.length) {
    showToast("No data to export yet.");
    return;
  }
  const reportWindow = window.open("", "_blank");
  if (!reportWindow) {
    showToast("Allow pop-ups to open the PDF report.");
    return;
  }
  reportWindow.document.open();
  reportWindow.document.write(buildPdfHtml(title, rows));
  reportWindow.document.close();
  reportWindow.focus();
  showToast("Print window opened. Choose Save as PDF.");
  setTimeout(() => {
    reportWindow.print();
  }, 350);
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(showToast.timeout);
  showToast.timeout = setTimeout(() => toast.classList.add("hidden"), 2600);
}

function setText(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

function addListenerIfPresent(id, eventName, handler) {
  const element = document.getElementById(id);
  if (element) {
    element.addEventListener(eventName, handler);
  }
  return element;
}

function openDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);
    request.onupgradeneeded = () => {
      const db = request.result;
      STORES.forEach((storeName) => {
        if (!db.objectStoreNames.contains(storeName)) {
          db.createObjectStore(storeName, { keyPath: "id" });
        }
      });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function runStore(storeName, mode, runner) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, mode);
    const store = tx.objectStore(storeName);
    const result = runner(store);
    tx.oncomplete = () => resolve(result?.result ?? result);
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

function putRecord(storeName, value) {
  return runStore(storeName, "readwrite", (store) => store.put(value));
}

function deleteRecord(storeName, id) {
  return runStore(storeName, "readwrite", (store) => store.delete(id));
}

function getAllRecords(storeName) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(storeName, "readonly");
    const store = tx.objectStore(storeName);
    const request = store.getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function syncToWebhook(storeName, payload) {
  const url = state.settings.webhooks?.[storeName];
  if (!url) return;
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        appName: "Lab Asis",
        collection: storeName,
        language: state.language,
        researcherName: state.settings.researcherName || "",
        researcherEmail: state.settings.researcherEmail || "",
        sentAt: new Date().toISOString(),
        payload,
      }),
    });
    if (!response.ok) {
      throw new Error(`Webhook failed with status ${response.status}`);
    }
  } catch (error) {
    showToast(`Saved locally. Sync failed for ${storeName}.`);
    console.error(error);
  }
}

async function saveRecord(storeName, record, syncPayload = record) {
  await putRecord(storeName, record);
  await syncToWebhook(storeName, syncPayload);
  if (WORKSPACE_REFRESH_STORES.has(storeName)) {
    await renderWorkspace();
  }
}

function loadSettings() {
  state.settings = {
    researcherName: "",
    researcherEmail: "",
    webhooks: {},
    ...safeParse(SETTINGS_KEY, {}),
  };
  state.cellDraft = { ...state.cellDraft, ...safeParse(CELL_DRAFT_KEY, {}) };
  const storedTimerState = getStoredTimerState(safeParse(TIMER_STATE_KEY, {}));
  state.timerDraft = storedTimerState.draft;
  state.activeTimers = storedTimerState.activeTimers;
  state.pomodoro = { ...state.pomodoro, ...safeParse(POMODORO_STATE_KEY, {}) };
}

function updateDirectionAndLanguage() {
  document.documentElement.lang = state.language;
  document.documentElement.dir = isRtl() ? "rtl" : "ltr";
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = t(key);
  });
  const selectorMap = {
    "#screen-cell .panel:nth-of-type(1) h3": "current_count",
    "#screen-cell .panel:nth-of-type(2) h3": "saved_cell_counts",
    "#screen-cell .panel:nth-of-type(2) .helper-text": "newest_first",
    "#screen-timer .panel:nth-of-type(1) h3": "experiment_timer",
    "#screen-timer .panel:nth-of-type(2) h3": "active_timers",
    "#screen-timer .panel:nth-of-type(3) h3": "timer_logs",
    "#screen-todo .panel:nth-of-type(1) h3": "add_task_header",
    "#screen-todo .panel:nth-of-type(2) h3": "task_list",
    "#screen-notes .panel:nth-of-type(1) h3": "new_lab_note",
    "#screen-notes .panel:nth-of-type(2) h3": "saved_lab_notes",
    "#screen-protocols .panel:nth-of-type(1) h3": "new_protocol",
    "#screen-protocols .panel:nth-of-type(2) h3": "saved_protocols",
    "#screen-voice .panel:nth-of-type(1) h3": "upload_voice_note",
    "#screen-voice .panel:nth-of-type(2) h3": "saved_recordings",
    "#screen-photo .panel:nth-of-type(1) h3": "image_ocr",
    "#screen-photo .panel:nth-of-type(2) h3": "preview",
    "#screen-failures .panel:nth-of-type(1) h3": "log_a_failure",
    "#screen-failures .panel:nth-of-type(2) h3": "past_failures",
    "#screen-learning .panel:nth-of-type(1) h3": "daily_learning_entry",
    "#screen-learning .panel:nth-of-type(2) h3": "learning_log",
    "#screen-converter .panel:nth-of-type(1) h3": "convert_units",
    "#screen-converter .panel:nth-of-type(2) h3": "reference",
    "#screen-articles .panel:nth-of-type(1) h3": "search_platforms",
    "#screen-articles .panel:nth-of-type(2) h3": "save_an_article",
    "#screen-articles .panel:nth-of-type(3) h3": "saved_articles",
    "#screen-pomodoro .panel:nth-of-type(1) h3": "focus_session",
    "#screen-language .panel:nth-of-type(1) h3": "choose_language",
    "#screen-language .panel:nth-of-type(2) h3": "researcher_profile",
    "#screen-language .panel:nth-of-type(3) h3": "google_sync",
    "#screen-language .panel:nth-of-type(4) h3": "publish_and_backup",
  };
  Object.entries(selectorMap).forEach(([selector, key]) => {
    const node = document.querySelector(selector);
    if (node) node.textContent = t(key);
  });
  const buttonMap = {
    "photo-extract": "extract_text",
    "photo-open-groupdocs": "open_groupdocs",
    "photo-export": "export_csv",
    "article-save": "save_article_button",
    "pomodoro-save": "pomodoro_save",
    "pomodoro-apply": "pomodoro_set_times",
    "note-save": "notes_save",
    "protocol-save": "protocol_save",
    "settings-save-profile": "save_profile",
    "settings-save-webhooks": "save_sync_settings",
    "settings-export-backup": "export_full_backup",
    "settings-copy-link": "copy_app_link",
    "settings-share-link": "share_app",
    "settings-import-backup": "restore_backup",
  };
  Object.entries(buttonMap).forEach(([id, key]) => setText(id, t(key)));
  const presetMap = {
    wash: "timer_preset_wash",
    incubation: "timer_preset_incubation",
    centrifuge: "timer_preset_centrifuge",
    staining: "timer_preset_staining",
    longrun: "timer_preset_longrun",
  };
  document.querySelectorAll("[data-timer-preset]").forEach((button) => {
    const key = presetMap[button.dataset.timerPreset];
    if (key) {
      button.textContent = t(key);
    }
  });
  const pomodoroPresetMap = {
    classic: "pomodoro_preset_classic",
    deep: "pomodoro_preset_deep",
    extended: "pomodoro_preset_extended",
  };
  document.querySelectorAll("[data-pomodoro-preset]").forEach((button) => {
    const key = pomodoroPresetMap[button.dataset.pomodoroPreset];
    if (key) {
      button.textContent = t(key);
    }
  });
  setText("language-pill", LANG[state.language]);
  setText(
    "sync-pill",
    Object.values(state.settings.webhooks || {}).some(Boolean) ? t("status_sync") : t("status_local")
  );
  const installButton = document.getElementById("install-app");
  if (installButton) {
    installButton.textContent = t("install_app");
  }
  updateVersionCopy();
  document.querySelectorAll('[data-open-screen="learning"]').forEach((button) => {
    button.textContent = t("open_learning_log");
  });
  const learningTitle = document.querySelector("#screen-learning h2");
  if (learningTitle) {
    learningTitle.textContent = t("today_i_learned");
  }
  const photoStatus = document.getElementById("photo-status");
  if (photoStatus) {
    photoStatus.textContent = state.photoFile
      ? `${state.photoFile.name} selected`
      : t("no_image_selected");
  }
  setText("photo-extract", t("extract_cleaner_text"));
  setText("photo-extract-od", t("build_od_table"));
  setText("spectro-save", t("save_od_table"));
  setText("spectro-export", t("export_od_csv"));
  setText("result-save", t("save_result_title"));
  setText("result-export", t("export_metadata_csv"));
  setText("voice-template", t("load_summary_template"));
  setText("paper-template", t("draft_summary"));
  setText("paper-save", t("save_summary_button"));
  setText("paper-export", t("save_button"));
  setText("article-citation", t("prepare_citation"));
  setText("paper-citation", t("prepare_citation"));
  setText("citation-save", t("save_citation_button"));
  setText("citation-copy", t("copy_bibliography"));
  setText("citation-copy-cite", t("copy_latex_cite"));
  setText("citation-copy-bibtex", t("copy_bibtex"));
  setText("citation-autofill-doi", t("autofill_doi"));
  setText("citation-export-bib", t("export_bib"));
  setText("citation-export-text", t("export_bibliography_txt"));
  setText("citation-export-csv", t("export_citation_csv"));
  setText("run-start", t("start_guided_run"));
  setText("run-save", t("save_snapshot"));
  setText("run-complete", t("complete_run"));
  setText("run-new", t("new_run"));
  setText("run-send-note", t("send_to_lab_notes"));
  setText("run-export", t("save_button"));
  setText("timeline-refresh", t("refresh_timeline"));
  setText("assistant-generate", t("generate_next_steps"));
  setText("assistant-clear", t("cell_clear"));
  refreshTimerDraftControls();
}

function populateSettingsFields() {
  const fieldValues = {
    "settings-name": state.settings.researcherName || "",
    "settings-email": state.settings.researcherEmail || "",
    "settings-app-link": getAppShareUrl(),
    "webhook-labNotes": state.settings.webhooks?.labNotes || "",
    "webhook-protocols": state.settings.webhooks?.protocols || "",
    "webhook-cellCounts": state.settings.webhooks?.cellCounts || "",
    "webhook-experiments": state.settings.webhooks?.experiments || "",
    "webhook-experimentRuns": state.settings.webhooks?.experimentRuns || "",
    "webhook-tasks": state.settings.webhooks?.tasks || "",
    "webhook-failures": state.settings.webhooks?.failures || "",
    "webhook-learnings": state.settings.webhooks?.learnings || "",
    "webhook-articles": state.settings.webhooks?.articles || "",
    "webhook-citations": state.settings.webhooks?.citations || "",
    "webhook-voiceNotes": state.settings.webhooks?.voiceNotes || "",
    "webhook-spectroTables": state.settings.webhooks?.spectroTables || "",
    "webhook-resultFiles": state.settings.webhooks?.resultFiles || "",
    "webhook-paperSummaries": state.settings.webhooks?.paperSummaries || "",
    "webhook-pomodoro": state.settings.webhooks?.pomodoro || "",
    "webhook-calendar": state.settings.webhooks?.calendar || "",
    "webhook-timers": state.settings.webhooks?.timers || "",
  };
  Object.entries(fieldValues).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.value = value;
    }
  });
  const backupField = document.getElementById("settings-import-backup-file");
  if (backupField) {
    backupField.value = "";
  }
  updateVersionCopy();
}

function updateCellDraftUI() {
  document.getElementById("cell-total-display").textContent = String(state.cellDraft.totalCells || 0);
  document.getElementById("cell-squares").value = state.cellDraft.squares || 10;
  document.getElementById("cell-dilution").value = state.cellDraft.dilution || 2;
  document.getElementById("cell-result-display").textContent = formatCellResult();
  persistCellDraft();
}

function ensureDefaultNoteDate() {
  const noteDate = document.getElementById("note-date");
  if (noteDate && !noteDate.value) {
    noteDate.value = toDateInputValue(new Date());
  }
}

function formatCellResult() {
  const squares = Number(state.cellDraft.squares || 0);
  const dilution = Number(state.cellDraft.dilution || 0);
  const totalCells = Number(state.cellDraft.totalCells || 0);
  if (squares <= 0) return "0";
  const result = (totalCells * dilution * 10000) / squares;
  return Number.isFinite(result) ? result.toFixed(2) : "0";
}

async function renderCellRecords() {
  const container = document.getElementById("cell-records");
  const records = (await getAllRecords("cellCounts")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No saved cell counts yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${record.totalCells} cells</div>
              <div class="item-meta">${formatDateTime(record.createdAt)} | ${record.language}</div>
            </div>
            <button class="outline-button small-button" data-delete-store="cellCounts" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">Squares: ${record.squares} | Dilution: ${record.dilution}</div>
          <div class="item-meta">Result: ${record.result}</div>
        </div>
      `
    )
    .join("");
}

function readCurrentTimerInputs() {
  const name = document.getElementById("timer-name")?.value.trim() || "";
  const activityTag = document.getElementById("timer-tag")?.value.trim() || "";
  const minutes = Math.max(0, Math.floor(Number(document.getElementById("timer-minutes")?.value || 0) || 0));
  const seconds = Math.min(59, Math.max(0, Math.floor(Number(document.getElementById("timer-seconds")?.value || 0) || 0)));
  return {
    name,
    activityTag,
    minutes,
    seconds,
    totalSeconds: minutes * 60 + seconds,
  };
}

function syncTimerDraftFromInputs() {
  state.timerDraft = normalizeTimerDraft(readCurrentTimerInputs());
  persistTimerState();
}

function hydrateTimerInputs() {
  const nameField = document.getElementById("timer-name");
  const tagField = document.getElementById("timer-tag");
  const minutesField = document.getElementById("timer-minutes");
  const secondsField = document.getElementById("timer-seconds");
  if (nameField) nameField.value = state.timerDraft.name || "";
  if (tagField) tagField.value = state.timerDraft.activityTag || "";
  if (minutesField) minutesField.value = state.timerDraft.minutes ?? DEFAULT_TIMER_DRAFT.minutes;
  if (secondsField) secondsField.value = state.timerDraft.seconds ?? DEFAULT_TIMER_DRAFT.seconds;
}

function refreshTimerDraftControls() {
  const actionButton = document.getElementById("timer-add");
  if (actionButton) {
    actionButton.textContent = state.editingTimerId ? t("timer_restart") : t("timer_add");
  }
}

function resetTimerDraftForm() {
  state.editingTimerId = null;
  state.timerDraft = { ...DEFAULT_TIMER_DRAFT };
  persistTimerState();
  hydrateTimerInputs();
  refreshTimerDraftControls();
}

function buildTimerName(name, activityTag) {
  if (name) return name;
  if (activityTag) return `${activityTag} Timer`;
  return `Lab Timer ${state.activeTimers.length + 1}`;
}

function createActiveTimerFromDraft(draftInput) {
  const draft = normalizeTimerDraft(draftInput);
  const totalSeconds = Math.max(1, draft.minutes * 60 + draft.seconds);
  return {
    id: makeId("active-timer"),
    name: buildTimerName(draft.name, draft.activityTag),
    activityTag: draft.activityTag,
    totalSeconds,
    remainingSeconds: totalSeconds,
    running: false,
    endAt: null,
    completed: false,
    createdAt: new Date().toISOString(),
    finishedAt: null,
    alertVisible: false,
  };
}

function loadTimerIntoDraft(timerId) {
  const timer = state.activeTimers.find((item) => item.id === timerId);
  if (!timer) return;
  state.editingTimerId = timerId;
  state.timerDraft = draftFromSeconds(timer.totalSeconds, {
    name: timer.name || "",
    activityTag: timer.activityTag || "",
  });
  persistTimerState();
  hydrateTimerInputs();
  refreshTimerDraftControls();
  showToast("Timer loaded. Change the duration, then restart it.");
}

function applyTimerPreset(presetKey) {
  const preset = TIMER_PRESETS[presetKey];
  if (!preset) return;
  state.timerDraft = draftFromSeconds(preset.totalSeconds, {
    name: preset.name,
    activityTag: preset.activityTag,
  });
  persistTimerState();
  hydrateTimerInputs();
}

function normalizeActiveTimers({ notify = false } = {}) {
  const now = Date.now();
  const finishedNames = [];
  let changed = false;

  state.activeTimers = state.activeTimers
    .map((timer) => normalizeActiveTimer(timer))
    .filter(Boolean)
    .map((timer) => {
      if (!timer.running || !timer.endAt) {
        return timer;
      }

      const remainingSeconds = getLiveRemainingSeconds(timer, now);
      if (remainingSeconds <= 0) {
        changed = true;
        finishedNames.push(timer.name || timer.activityTag || "Timer");
        return {
          ...timer,
          remainingSeconds: 0,
          running: false,
          endAt: null,
          completed: true,
          finishedAt: new Date(now).toISOString(),
          alertVisible: true,
        };
      }

      if (remainingSeconds !== timer.remainingSeconds) {
        changed = true;
        return {
          ...timer,
          remainingSeconds,
        };
      }

      return timer;
    });

  if (finishedNames.length && notify) {
    showToast(`Timers finished: ${finishedNames.join(", ")}`);
  }
  if (changed) {
    persistTimerState();
  }
  return changed;
}

function renderActiveTimers() {
  const container = document.getElementById("timer-active-list");
  if (!container) return;

  if (!state.activeTimers.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">${escapeHtml(t("timer_no_active"))}</div></div>`;
    renderTimerPresenceUi();
    return;
  }

  container.innerHTML = [...state.activeTimers]
    .sort((a, b) => {
      if (a.running !== b.running) return a.running ? -1 : 1;
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .map((timer) => {
      const status = getTimerStatus(timer);
      const liveRemaining = getLiveRemainingSeconds(timer);
      return `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(timer.name || "Lab Timer")}</div>
              <div class="item-meta">${timer.activityTag ? escapeHtml(timer.activityTag) : "General Lab"} | ${formatDateTime(timer.createdAt)}</div>
            </div>
            <span class="tag ${status}">${escapeHtml(getTimerStatusLabel(timer))}</span>
          </div>
          <div class="timer-card-display">${formatSeconds(liveRemaining)}</div>
          <div class="item-meta">Planned: ${formatSeconds(timer.totalSeconds)} | Remaining: ${formatSeconds(liveRemaining)}</div>
          <div class="list-item-actions">
            <button class="outline-button small-button" data-timer-action="edit" data-timer-id="${timer.id}" type="button">
              ${escapeHtml(t("timer_edit"))}
            </button>
            <button class="primary-button small-button" data-timer-action="start" data-timer-id="${timer.id}" type="button" ${timer.running ? "disabled" : ""}>
              ${escapeHtml(t("timer_start"))}
            </button>
            <button class="secondary-button small-button" data-timer-action="pause" data-timer-id="${timer.id}" type="button" ${timer.running ? "" : "disabled"}>
              ${escapeHtml(t("pomodoro_pause"))}
            </button>
            <button class="outline-button small-button" data-timer-action="reset" data-timer-id="${timer.id}" type="button">
              ${escapeHtml(t("pomodoro_reset"))}
            </button>
            <button class="success-button small-button" data-timer-action="save" data-timer-id="${timer.id}" type="button">
              ${escapeHtml(t("timer_save"))}
            </button>
            <button class="danger-button small-button" data-timer-action="delete" data-timer-id="${timer.id}" type="button">
              ${escapeHtml(t("delete_button"))}
            </button>
          </div>
        </div>
      `;
    })
    .join("");
  renderTimerPresenceUi();
}

function startMainTimerLoop() {
  if (state.timerInterval) return;
  state.timerInterval = window.setInterval(() => {
    normalizeActiveTimers({ notify: true });
    renderActiveTimers();
  }, 500);
}

function submitTimerDraft() {
  const draft = readCurrentTimerInputs();
  if (!draft.totalSeconds) {
    showToast("Set a timer duration first.");
    return;
  }

  if (state.editingTimerId) {
    const timerId = state.editingTimerId;
    updateTimerById(timerId, (timer) => ({
      ...timer,
      name: buildTimerName(draft.name, draft.activityTag),
      activityTag: draft.activityTag,
      totalSeconds: draft.totalSeconds,
      remainingSeconds: draft.totalSeconds,
      running: true,
      endAt: Date.now() + draft.totalSeconds * 1000,
      completed: false,
      finishedAt: null,
      alertVisible: false,
    }));
    state.editingTimerId = null;
    state.timerDraft = normalizeTimerDraft(draft);
    persistTimerState();
    hydrateTimerInputs();
    refreshTimerDraftControls();
    showToast("Timer restarted with the new duration.");
    return;
  }

  const timer = createActiveTimerFromDraft(draft);
  state.activeTimers.unshift(timer);
  state.timerDraft = normalizeTimerDraft(draft);
  persistTimerState();
  renderActiveTimers();
  showToast(`${timer.name} added.`);
}

function updateTimerById(timerId, updater) {
  let changed = false;
  state.activeTimers = state.activeTimers.map((timer) => {
    if (timer.id !== timerId) return timer;
    changed = true;
    return normalizeActiveTimer(updater({ ...timer })) || timer;
  });
  if (changed) {
    persistTimerState();
    renderActiveTimers();
  }
  return changed;
}

function startActiveTimer(timerId) {
  updateTimerById(timerId, (timer) => {
    const remainingSeconds = timer.completed ? timer.totalSeconds : Math.max(1, getLiveRemainingSeconds(timer));
    return {
      ...timer,
      remainingSeconds,
      running: true,
      completed: false,
      finishedAt: null,
      alertVisible: false,
      endAt: Date.now() + remainingSeconds * 1000,
    };
  });
}

function pauseActiveTimer(timerId) {
  updateTimerById(timerId, (timer) => ({
    ...timer,
    remainingSeconds: getLiveRemainingSeconds(timer),
    running: false,
    endAt: null,
  }));
}

function resetActiveTimer(timerId) {
  updateTimerById(timerId, (timer) => ({
    ...timer,
    remainingSeconds: timer.totalSeconds,
    running: false,
    endAt: null,
    completed: false,
    finishedAt: null,
    alertVisible: false,
  }));
}

function dismissTimerAlert(timerId) {
  updateTimerById(timerId, (timer) => ({
    ...timer,
    alertVisible: false,
  }));
}

function dismissAllTimerAlerts() {
  let changed = false;
  state.activeTimers = state.activeTimers.map((timer) => {
    if (!timer.alertVisible) return timer;
    changed = true;
    return {
      ...timer,
      alertVisible: false,
    };
  });
  if (!changed) return;
  persistTimerState();
  renderActiveTimers();
}

function deleteActiveTimer(timerId) {
  const nextTimers = state.activeTimers.filter((timer) => timer.id !== timerId);
  if (nextTimers.length === state.activeTimers.length) return;
  state.activeTimers = nextTimers;
  if (state.editingTimerId === timerId) {
    state.editingTimerId = null;
  }
  persistTimerState();
  refreshTimerDraftControls();
  renderActiveTimers();
}

async function saveTimerLog(timerId) {
  const timer = state.activeTimers.find((item) => item.id === timerId);
  if (!timer) return;
  const remainingSeconds = getLiveRemainingSeconds(timer);
  const status = timer.completed ? "Completed" : timer.running ? "Running" : "Paused";
  const record = {
    id: makeId("timer"),
    name: timer.name || "Untitled timer",
    activityTag: timer.activityTag || "",
    totalSeconds: timer.totalSeconds,
    remainingSeconds,
    status,
    language: state.language,
    createdAt: new Date().toISOString(),
  };
  await saveRecord("timers", record);
  await saveRecord("experiments", { ...record, experimentType: "timer", id: makeId("exp") });
  showToast("Timer log saved.");
  await renderTimerRecords();
}

async function renderTimerRecords() {
  const container = document.getElementById("timer-records");
  if (!container) return;
  const records = (await getAllRecords("timers")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">${escapeHtml(t("timer_no_logs"))}</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.name || "Untitled timer")}</div>
              <div class="item-meta">${escapeHtml(record.activityTag || "General Lab")} | ${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="outline-button small-button" data-delete-store="timers" data-delete-id="${record.id}" type="button">${escapeHtml(t("delete_button"))}</button>
          </div>
          <div class="item-meta">Planned: ${formatSeconds(record.totalSeconds)} | Remaining: ${formatSeconds(record.remainingSeconds)}</div>
          <div class="item-meta">Status: ${escapeHtml(getTimerStatusLabelFromValue(record.status))}</div>
        </div>
      `
    )
    .join("");
}

async function renderTasks() {
  const container = document.getElementById("todo-records");
  const records = (await getAllRecords("tasks"))
    .sort((a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0))
    .filter((task) => matchesSearch(task, state.searchFilters.tasks, ["title", "priority", "status", "dueDate"]));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No tasks match this search yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map((task) => {
      const priorityClass = (task.priority || "medium").toLowerCase();
      const doneClass = task.status === "Done" ? "done" : priorityClass;
      const statusText = task.status === "Done" ? t("todo_done") : t("todo_pending");
      return `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${task.title}</div>
              <div class="item-meta">${task.dueDate ? formatDate(task.dueDate) : ""}</div>
            </div>
            <span class="tag ${doneClass}">${task.priority} | ${statusText}</span>
          </div>
          <div class="list-item-actions">
            <button class="primary-button small-button" data-task-toggle="${task.id}" type="button">
              ${task.status === "Done" ? t("todo_pending") : t("todo_done")}
            </button>
            <button class="danger-button small-button" data-delete-store="tasks" data-delete-id="${task.id}" type="button">Delete</button>
          </div>
        </div>
      `;
    })
    .join("");
}

async function renderProtocolOptions(selectedValue = "") {
  const select = document.getElementById("note-protocol");
  if (!select) return;
  const protocols = (await getAllRecords("protocols"))
    .map((protocol) => ({ ...protocol, source: "saved", selectValue: protocol.id }))
    .sort((a, b) => a.title.localeCompare(b.title));
  const starterOptions = STARTER_PROTOCOLS.map((protocol) => ({
    ...protocol,
    selectValue: `starter::${protocol.id}`,
  }));
  const currentSelected = selectedValue || select.value || "";
  const savedGroup = protocols.length
    ? `<optgroup label="${escapeHtml(t("your_protocols"))}">${protocols
        .map(
          (protocol) =>
            `<option value="${protocol.selectValue}" ${protocol.selectValue === currentSelected ? "selected" : ""}>${escapeHtml(protocol.title)}</option>`
        )
        .join("")}</optgroup>`
    : "";
  const starterGroup = `<optgroup label="${escapeHtml(t("starter_protocols"))}">${starterOptions
    .map(
      (protocol) =>
        `<option value="${protocol.selectValue}" ${protocol.selectValue === currentSelected ? "selected" : ""}>${escapeHtml(protocol.title)}</option>`
    )
    .join("")}</optgroup>`;

  select.innerHTML = [
    `<option value="">No protocol selected</option>`,
    savedGroup,
    starterGroup,
  ].join("");
}

async function getProtocolChoiceByValue(value) {
  if (!value) return null;
  if (value.startsWith("starter::")) {
    const starterId = value.replace("starter::", "");
    return STARTER_PROTOCOLS.find((protocol) => protocol.id === starterId) || null;
  }
  const protocols = await getAllRecords("protocols");
  const protocol = protocols.find((item) => item.id === value);
  return protocol ? { ...protocol, source: "saved", selectValue: protocol.id } : null;
}

async function renderRunProtocolOptions(selectedValue = "") {
  const select = document.getElementById("run-protocol");
  if (!select) return;
  const protocols = (await getAllRecords("protocols"))
    .map((protocol) => ({ ...protocol, source: "saved", selectValue: protocol.id }))
    .sort((a, b) => a.title.localeCompare(b.title));
  const starterOptions = STARTER_PROTOCOLS.map((protocol) => ({
    ...protocol,
    selectValue: `starter::${protocol.id}`,
  }));
  const currentSelected = selectedValue || select.value || "";
  const savedGroup = protocols.length
    ? `<optgroup label="${escapeHtml(t("your_protocols"))}">${protocols
        .map(
          (protocol) =>
            `<option value="${protocol.selectValue}" ${protocol.selectValue === currentSelected ? "selected" : ""}>${escapeHtml(protocol.title)}</option>`
        )
        .join("")}</optgroup>`
    : "";
  const starterGroup = `<optgroup label="${escapeHtml(t("starter_protocols"))}">${starterOptions
    .map(
      (protocol) =>
        `<option value="${protocol.selectValue}" ${protocol.selectValue === currentSelected ? "selected" : ""}>${escapeHtml(protocol.title)}</option>`
    )
    .join("")}</optgroup>`;

  select.innerHTML = [
    `<option value="">No protocol selected</option>`,
    savedGroup,
    starterGroup,
  ].join("");
}

function getRunFormValues() {
  return {
    title: document.getElementById("run-title")?.value.trim() || "",
    project: document.getElementById("run-project")?.value.trim() || "",
    protocolId: document.getElementById("run-protocol")?.value || "",
    objective: document.getElementById("run-objective")?.value.trim() || "",
    sampleIds: document.getElementById("run-samples")?.value.trim() || "",
    plannedMinutes: Math.max(1, Math.floor(Number(document.getElementById("run-duration")?.value || 30) || 30)),
    notes: document.getElementById("run-notes")?.value.trim() || "",
    checklistSetup: Boolean(document.getElementById("run-check-setup")?.checked),
    checklistTimer: Boolean(document.getElementById("run-check-timer")?.checked),
    checklistNote: Boolean(document.getElementById("run-check-note")?.checked),
    checklistResult: Boolean(document.getElementById("run-check-result")?.checked),
  };
}

async function populateRunForm(record = null) {
  state.currentRunId = record?.id || null;
  document.getElementById("run-title").value = record?.title || "";
  document.getElementById("run-project").value = record?.project || "";
  await renderRunProtocolOptions(record?.protocolId || "");
  document.getElementById("run-objective").value = record?.objective || "";
  document.getElementById("run-samples").value = record?.sampleIds || "";
  document.getElementById("run-duration").value = Number(record?.plannedMinutes || 30);
  document.getElementById("run-notes").value = record?.notes || "";
  document.getElementById("run-check-setup").checked = Boolean(record?.checklistSetup);
  document.getElementById("run-check-timer").checked = Boolean(record?.checklistTimer);
  document.getElementById("run-check-note").checked = Boolean(record?.checklistNote);
  document.getElementById("run-check-result").checked = Boolean(record?.checklistResult);
}

async function clearRunForm() {
  await populateRunForm({
    plannedMinutes: 30,
  });
}

function getRunStatusLabel(status = "") {
  switch (status) {
    case "Running":
      return "Running";
    case "Completed":
      return "Completed";
    default:
      return "Draft";
  }
}

function getRunStatusTag(status = "") {
  switch (status) {
    case "Running":
      return "running";
    case "Completed":
      return "completed";
    default:
      return "warning";
  }
}

async function saveExperimentRun({ status = "Draft", createTimer = false, completeNow = false } = {}) {
  const values = getRunFormValues();
  if (!values.title) {
    showToast("Add a run title first.");
    return null;
  }

  const existingRuns = await getAllRecords("experimentRuns");
  const existing = state.currentRunId ? existingRuns.find((item) => item.id === state.currentRunId) : null;
  const linkedProtocol = await getProtocolChoiceByValue(values.protocolId);
  const now = new Date().toISOString();

  const record = {
    id: existing?.id || makeId("run"),
    createdAt: existing?.createdAt || now,
    updatedAt: now,
    status,
    title: values.title,
    project: values.project,
    protocolId: values.protocolId,
    protocolTitle: linkedProtocol?.title || "",
    protocolSource: linkedProtocol?.source || "",
    objective: values.objective,
    sampleIds: values.sampleIds,
    plannedMinutes: values.plannedMinutes,
    notes: values.notes,
    checklistSetup: values.checklistSetup,
    checklistTimer: values.checklistTimer,
    checklistNote: values.checklistNote,
    checklistResult: values.checklistResult,
    linkedTimerId: existing?.linkedTimerId || "",
    startedAt: existing?.startedAt || "",
    completedAt: existing?.completedAt || "",
    language: state.language,
  };

  if (status === "Running" && !record.startedAt) {
    record.startedAt = now;
  }

  if (completeNow || status === "Completed") {
    record.completedAt = now;
  }

  const hasLinkedTimer = record.linkedTimerId && state.activeTimers.some((timer) => timer.id === record.linkedTimerId);
  if (createTimer && !hasLinkedTimer) {
    const activeTimer = createActiveTimerFromDraft({
      name: record.title,
      activityTag: record.project || record.protocolTitle || "Experiment Run",
      minutes: values.plannedMinutes,
      seconds: 0,
    });
    activeTimer.runId = record.id;
    state.activeTimers.unshift(activeTimer);
    persistTimerState();
    record.linkedTimerId = activeTimer.id;
    record.checklistTimer = true;
    startActiveTimer(activeTimer.id);
  }

  await saveRecord("experimentRuns", record);
  await populateRunForm(record);
  await renderExperimentRuns();
  await renderResearchTimeline();
  await renderDecisionAssistant();
  return record;
}

async function sendCurrentRunToLabNotes() {
  const values = getRunFormValues();
  if (!values.title) {
    showToast("Add a run title first.");
    return;
  }
  const linkedProtocol = await getProtocolChoiceByValue(values.protocolId);
  document.getElementById("note-title").value = `${values.title} - Lab Note`;
  document.getElementById("note-date").value = toDateInputValue(new Date());
  document.getElementById("note-experiment").value = values.project || values.title;
  document.getElementById("note-tags").value = [values.project, values.sampleIds].filter(Boolean).join(", ");
  document.getElementById("note-observations").value = values.notes || `Run objective: ${values.objective}`;
  document.getElementById("note-results").value = "";
  document.getElementById("note-nextsteps").value = linkedProtocol?.steps || "";
  await renderProtocolOptions(values.protocolId);
  openScreen("notes");
  showToast("Experiment run copied into a new lab note.");
}

async function renderExperimentRuns() {
  const container = document.getElementById("run-records");
  if (!container) return;
  const query = String(state.searchFilters.runs || "").trim().toLowerCase();
  const records = (await getAllRecords("experimentRuns"))
    .sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))
    .filter((record) =>
      !query ||
      matchesSearch(record, query, [
        "title",
        "project",
        "protocolTitle",
        "objective",
        "sampleIds",
        "notes",
        "status",
      ])
    );

  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No experiment runs saved yet.</div></div>`;
    await renderRunProtocolOptions();
    return;
  }

  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || "Experiment Run")}</div>
              <div class="item-meta">${escapeHtml(record.project || "No project")} | ${escapeHtml(record.protocolTitle || "No protocol")}</div>
            </div>
            <span class="tag ${getRunStatusTag(record.status)}">${escapeHtml(getRunStatusLabel(record.status))}</span>
          </div>
          <div class="item-meta">${record.startedAt ? `Started: ${formatDateTime(record.startedAt)}` : `Created: ${formatDateTime(record.createdAt)}`}</div>
          <div class="item-meta">${record.sampleIds ? `Samples: ${escapeHtml(record.sampleIds)}` : "Samples: not listed"}</div>
          <div class="item-meta">${record.notes ? escapeHtml(record.notes) : "No run notes yet."}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-run-load="${record.id}" type="button">Load</button>
            <button class="outline-button small-button" data-run-note="${record.id}" type="button">Use in Note</button>
            <button class="danger-button small-button" data-delete-store="experimentRuns" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
        </div>
      `
    )
    .join("");

  await renderRunProtocolOptions();
}

async function buildResearchTimelineItems(focus = "") {
  const [
    runs,
    notes,
    results,
    failures,
    papers,
    articles,
    citations,
    protocols,
    calendarEvents,
  ] = await Promise.all([
    getAllRecords("experimentRuns"),
    getAllRecords("labNotes"),
    getAllRecords("resultFiles"),
    getAllRecords("failures"),
    getAllRecords("paperSummaries"),
    getAllRecords("articles"),
    getAllRecords("citations"),
    getAllRecords("protocols"),
    getAllRecords("calendar"),
  ]);

  const query = String(focus || "").trim().toLowerCase();
  const itemSets = [
    runs.map((record) => ({
      type: "Run",
      screen: "runs",
      title: record.title || "Experiment Run",
      detail: `${record.project || "No project"} | ${record.protocolTitle || "No protocol"} | ${record.status || "Draft"}`,
      date: record.updatedAt || record.createdAt,
      haystack: `${record.title || ""} ${record.project || ""} ${record.protocolTitle || ""} ${record.sampleIds || ""} ${record.notes || ""}`,
    })),
    notes.map((record) => ({
      type: "Note",
      screen: "notes",
      title: record.title || "Lab Note",
      detail: `${record.experimentName || "No experiment"} | ${record.noteDate || ""}`,
      date: record.createdAt,
      haystack: `${record.title || ""} ${record.experimentName || ""} ${record.tags || ""} ${record.results || ""}`,
    })),
    results.map((record) => ({
      type: "Result",
      screen: "results",
      title: record.title || record.fileName || "Result File",
      detail: `${record.project || "No project"} | ${record.resultType || "Other"}`,
      date: record.createdAt,
      haystack: `${record.project || ""} ${record.title || ""} ${record.tags || ""} ${record.orderLabel || ""}`,
    })),
    failures.map((record) => ({
      type: "Failure",
      screen: "failures",
      title: record.what || "Failure",
      detail: record.solution || "No fix recorded",
      date: record.createdAt,
      haystack: `${record.what || ""} ${record.why || ""} ${record.solution || ""}`,
    })),
    papers.map((record) => ({
      type: "Paper",
      screen: "papers",
      title: record.title || "Paper Summary",
      detail: `${record.authors || "No authors"}${record.verified ? " | Verified" : " | Needs verification"}`,
      date: record.createdAt,
      haystack: `${record.title || ""} ${record.authors || ""} ${record.findings || ""} ${record.methods || ""}`,
    })),
    articles.map((record) => ({
      type: "Article",
      screen: "articles",
      title: record.title || "Saved Article",
      detail: record.url || "",
      date: record.createdAt,
      haystack: `${record.title || ""} ${record.summary || ""} ${record.url || ""}`,
    })),
    citations.map((record) => ({
      type: "Citation",
      screen: "citations",
      title: record.title || "Citation",
      detail: `${record.authors || "No authors"}${record.year ? ` | ${record.year}` : ""}${record.project ? ` | ${record.project}` : ""}${record.usedIn ? ` | ${record.usedIn}` : ""}`,
      date: record.createdAt,
      haystack: `${record.title || ""} ${record.authors || ""} ${record.journal || ""} ${record.doi || ""} ${record.project || ""} ${record.chapter || ""} ${record.citationKey || ""} ${record.usedFor || ""}`,
    })),
    protocols.map((record) => ({
      type: "Protocol",
      screen: "protocols",
      title: record.title || "Protocol",
      detail: `${record.category || "General Lab"} | ${record.duration || "No duration"}`,
      date: record.createdAt,
      haystack: `${record.title || ""} ${record.category || ""} ${record.objective || ""} ${record.steps || ""}`,
    })),
    calendarEvents.map((record) => ({
      type: "Calendar",
      screen: "calendar",
      title: record.title || "Calendar Event",
      detail: `${record.date || ""}${record.time ? ` ${record.time}` : ""}`,
      date: record.date ? `${record.date}T${record.time || "00:00"}` : record.createdAt,
      haystack: `${record.title || ""} ${record.date || ""} ${record.notes || ""}`,
    })),
  ];

  return itemSets
    .flat()
    .filter((item) => !query || item.haystack.toLowerCase().includes(query))
    .sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));
}

async function renderResearchTimeline() {
  const summaryContainer = document.getElementById("timeline-summary");
  const recordsContainer = document.getElementById("timeline-records");
  if (!summaryContainer || !recordsContainer) return;

  const focus = state.searchFilters.timeline || document.getElementById("timeline-focus")?.value || "";
  const items = await buildResearchTimelineItems(focus);
  const runCount = (await getAllRecords("experimentRuns")).length;
  const resultCount = (await getAllRecords("resultFiles")).length;
  const paperCount = (await getAllRecords("paperSummaries")).length;
  const citationCount = (await getAllRecords("citations")).length;
  const lastItem = items[0];

  const summaryCards = [
    { title: "Connected records", meta: `${items.length} items in this filtered history` },
    { title: "Experiment runs", meta: `${runCount} run records saved` },
    { title: "Results and papers", meta: `${resultCount} results files | ${paperCount} paper summaries` },
    { title: "Citations", meta: `${citationCount} saved citation record(s)` },
    { title: "Latest activity", meta: lastItem ? `${lastItem.type}: ${lastItem.title}` : "No timeline events yet" },
  ];

  summaryContainer.innerHTML = summaryCards
    .map(
      (item) => `
        <div class="list-item">
          <div class="item-title">${escapeHtml(item.title)}</div>
          <div class="item-meta">${escapeHtml(item.meta)}</div>
        </div>
      `
    )
    .join("");

  if (!items.length) {
    recordsContainer.innerHTML = `<div class="list-item"><div class="item-meta">No project history matches this filter yet.</div></div>`;
    return;
  }

  recordsContainer.innerHTML = items
    .map(
      (item) => `
        <button class="list-item search-result-button" data-open-screen="${item.screen}" type="button">
          <div class="list-item-top">
            <div class="item-title">${escapeHtml(item.title)}</div>
            <span class="tag info">${escapeHtml(item.type)}</span>
          </div>
          <div class="item-meta">${escapeHtml(item.detail)}</div>
          <div class="item-meta">${escapeHtml(formatDateTime(item.date))}</div>
        </button>
      `
    )
    .join("");
}

async function buildDecisionAssistantReport(focus = "") {
  const [
    runs,
    tasks,
    failures,
    notes,
    results,
    protocols,
    papers,
    citations,
    calendarEvents,
  ] = await Promise.all([
    getAllRecords("experimentRuns"),
    getAllRecords("tasks"),
    getAllRecords("failures"),
    getAllRecords("labNotes"),
    getAllRecords("resultFiles"),
    getAllRecords("protocols"),
    getAllRecords("paperSummaries"),
    getAllRecords("citations"),
    getAllRecords("calendar"),
  ]);

  const query = String(focus || "").trim().toLowerCase();
  const isRelevant = (record, fields) => !query || matchesSearch(record, query, fields);

  const relevantRuns = runs.filter((record) =>
    isRelevant(record, ["title", "project", "protocolTitle", "objective", "sampleIds", "notes", "status"])
  );
  const relevantTasks = tasks.filter((record) =>
    isRelevant(record, ["title", "priority", "status", "dueDate"])
  );
  const relevantFailures = failures.filter((record) =>
    isRelevant(record, ["what", "why", "solution"])
  );
  const relevantNotes = notes.filter((record) =>
    isRelevant(record, ["title", "experimentName", "tags", "observations", "results", "nextSteps"])
  );
  const relevantResults = results.filter((record) =>
    isRelevant(record, ["project", "title", "resultType", "orderLabel", "tags", "notes", "fileName"])
  );
  const relevantProtocols = protocols.filter((record) =>
    isRelevant(record, ["title", "category", "objective", "materials", "steps", "safetyNotes"])
  );
  const relevantPapers = papers.filter((record) =>
    isRelevant(record, ["title", "authors", "findings", "methods", "importance", "quotes"])
  );
  const relevantCitations = citations.filter((record) =>
    isRelevant(record, ["title", "authors", "journal", "doi", "url", "style", "project", "chapter", "citationKey", "usedIn", "usedFor", "evidence", "notes"])
  );
  const relevantCalendar = calendarEvents.filter((record) =>
    isRelevant(record, ["title", "date", "time", "notes"])
  );

  const suggestions = [];
  const evidence = [];
  const pendingTasks = relevantTasks.filter((task) => task.status !== "Done");
  const runningRuns = relevantRuns.filter((run) => run.status === "Running");
  const completedRuns = relevantRuns.filter((run) => run.status === "Completed");

  if (!relevantProtocols.length) {
    suggestions.push({
      title: "Create or refine a protocol before the next run",
      detail: "A reusable protocol makes future experiments faster, more consistent, and easier to review.",
      priority: "warning",
    });
    evidence.push({
      title: "No matching protocol found",
      detail: query
        ? `There is no saved protocol matching "${focus}" in this workspace yet.`
        : "There are no saved protocols in this workspace yet.",
    });
  }

  if (pendingTasks.length) {
    const topTask = pendingTasks.sort((a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0))[0];
    suggestions.push({
      title: "Clear the next pending task first",
      detail: `${topTask.title || "A pending task"} is still open${topTask.dueDate ? ` and due on ${topTask.dueDate}` : ""}.`,
      priority: "info",
    });
    evidence.push({
      title: "Pending task evidence",
      detail: `${pendingTasks.length} pending task(s) found in your workspace.`,
    });
  }

  if (runningRuns.length) {
    suggestions.push({
      title: "Finish documenting the active run before starting a new one",
      detail: "Running work is already in progress. Add observations and keep the evidence chain complete.",
      priority: "primary",
    });
    evidence.push({
      title: "Active run detected",
      detail: `${runningRuns[0].title || "Experiment run"} is still marked as Running.`,
    });
  }

  if (completedRuns.length && !relevantResults.length) {
    suggestions.push({
      title: "Store the raw or analyzed result files now",
      detail: "You have a completed run but no matching results in the vault yet.",
      priority: "warning",
    });
    evidence.push({
      title: "Run without stored result file",
      detail: `${completedRuns.length} completed run(s) found, but no matching results were found for this focus.`,
    });
  }

  if (relevantNotes.length && !relevantResults.length) {
    suggestions.push({
      title: "Move from observations to stored evidence",
      detail: "You already documented notes. The next useful step is to upload images, GraphPad files, tables, or spreadsheets.",
      priority: "secondary",
    });
    evidence.push({
      title: "Notes exist without result storage",
      detail: `${relevantNotes.length} matching note(s) found, but no matching result files yet.`,
    });
  }

  if (relevantResults.length && !relevantPapers.length) {
    suggestions.push({
      title: "Compare your results with at least one paper summary",
      detail: "Add a paper summary so interpretation is linked to literature, not only to raw outputs.",
      priority: "success",
    });
    evidence.push({
      title: "Results exist without linked literature note",
      detail: `${relevantResults.length} matching result file(s) found, but no matching paper summary yet.`,
    });
  }

  if (relevantPapers.length && !relevantCitations.length) {
    suggestions.push({
      title: "Save the paper as a reusable citation before writing",
      detail: "Capture the section used, the exact quote or result, and a BibTeX key so writing later is faster.",
      priority: "info",
    });
    evidence.push({
      title: "Literature note without citation record",
      detail: `${relevantPapers.length} matching paper summary record(s) found, but no matching citation record yet.`,
    });
  }

  if (relevantFailures.length) {
    const latestFailure = relevantFailures.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
    suggestions.push({
      title: "Turn the latest failure into a control or checklist step",
      detail: latestFailure.solution || "Use the latest failure log to update protocol steps before the next run.",
      priority: "warning",
    });
    evidence.push({
      title: "Failure history found",
      detail: `${relevantFailures.length} matching failure log(s) found. Latest issue: ${latestFailure.what || "Failure"}.`,
    });
  }

  const upcomingEvent = relevantCalendar
    .filter((event) => event.date)
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`))[0];
  if (upcomingEvent) {
    suggestions.push({
      title: "Prepare for the next scheduled date now",
      detail: `${upcomingEvent.title || "Upcoming event"} is already on your calendar${upcomingEvent.date ? ` for ${upcomingEvent.date}` : ""}.`,
      priority: "info",
    });
    evidence.push({
      title: "Calendar evidence",
      detail: `Upcoming matching event: ${upcomingEvent.title || "Event"}${upcomingEvent.date ? ` on ${upcomingEvent.date}` : ""}.`,
    });
  }

  if (!suggestions.length) {
    suggestions.push({
      title: "Your workflow looks well-covered right now",
      detail: "Use this moment to tighten labels, backup data, or summarize the next paper before your next experiment.",
      priority: "success",
    });
    evidence.push({
      title: "No major workflow gap detected",
      detail: query
        ? `The current records matching "${focus}" do not show a major missing step.`
        : "The current records do not show a major missing workflow step.",
    });
  }

  return { suggestions, evidence };
}

async function renderDecisionAssistant() {
  const suggestionsContainer = document.getElementById("assistant-recommendations");
  const evidenceContainer = document.getElementById("assistant-evidence");
  if (!suggestionsContainer || !evidenceContainer) return;

  const focus = document.getElementById("assistant-focus")?.value.trim() || "";
  const report = await buildDecisionAssistantReport(focus);

  suggestionsContainer.innerHTML = report.suggestions
    .map(
      (item) => `
        <div class="list-item">
          <div class="list-item-top">
            <div class="item-title">${escapeHtml(item.title)}</div>
            <span class="tag ${escapeHtml(item.priority || "info")}">${escapeHtml(item.priority || "info")}</span>
          </div>
          <div class="item-meta">${escapeHtml(item.detail)}</div>
        </div>
      `
    )
    .join("");

  evidenceContainer.innerHTML = report.evidence
    .map(
      (item) => `
        <div class="list-item">
          <div class="item-title">${escapeHtml(item.title)}</div>
          <div class="item-meta">${escapeHtml(item.detail)}</div>
        </div>
      `
    )
    .join("");
}

async function renderLabNotes() {
  const container = document.getElementById("note-records");
  if (!container) return;
  const records = (await getAllRecords("labNotes"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter((record) =>
      matchesSearch(record, state.searchFilters.notes, [
        "title",
        "noteDate",
        "experimentName",
        "protocolTitle",
        "tags",
        "observations",
        "results",
        "nextSteps",
      ])
    );
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No lab notes match this search yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${record.title}</div>
              <div class="item-meta">${record.noteDate || ""} | ${record.experimentName || "No experiment name"}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="labNotes" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${record.protocolTitle ? `Protocol: ${record.protocolTitle}` : "Protocol: none"}</div>
          <div class="item-meta">${record.tags ? `Tags: ${record.tags}` : ""}</div>
          <div class="item-meta"><strong>Observations:</strong> ${record.observations || ""}</div>
          <div class="item-meta"><strong>Results:</strong> ${record.results || ""}</div>
          <div class="item-meta"><strong>Next:</strong> ${record.nextSteps || ""}</div>
        </div>
      `
    )
    .join("");
}

async function renderProtocols() {
  const container = document.getElementById("protocol-records");
  if (!container) return;
  const records = (await getAllRecords("protocols"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter((record) =>
      matchesSearch(record, state.searchFilters.protocols, [
        "title",
        "category",
        "objective",
        "materials",
        "steps",
        "duration",
        "safetyNotes",
      ])
    );
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No protocols match this search yet.</div></div>`;
    await renderProtocolOptions();
    await renderRunProtocolOptions();
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title)}</div>
              <div class="item-meta">${escapeHtml(record.category || "General Lab")} | ${escapeHtml(record.duration || "No duration")}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="protocols" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta"><strong>Objective:</strong> ${escapeHtml(record.objective || "")}</div>
          <div class="item-meta"><strong>Materials:</strong> ${escapeHtml(record.materials || "")}</div>
          <div class="item-meta"><strong>Steps:</strong> ${escapeHtml(record.steps || "")}</div>
          <div class="item-meta"><strong>Safety:</strong> ${escapeHtml(record.safetyNotes || "")}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-use-protocol="${record.id}" type="button">${t("use_in_note")}</button>
          </div>
        </div>
      `
    )
    .join("");
  await renderProtocolOptions();
  await renderRunProtocolOptions();
}

async function renderVoiceNotes() {
  const container = document.getElementById("voice-records");
  const records = (await getAllRecords("voiceNotes")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No recordings yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${record.experimentName || "Voice note"}</div>
              <div class="item-meta">${formatDateTime(record.createdAt)} | ${record.audioName}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="voiceNotes" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${record.notes || ""}</div>
          <div class="item-meta">Transcript language: ${escapeHtml(record.transcriptLanguage || "Not set")} | Verified: ${record.verifiedTranscript ? "Yes" : "No"}</div>
          <div class="item-meta"><strong>Transcript:</strong> ${escapeHtml(record.transcript || "No transcript saved yet.")}</div>
          <div class="item-meta"><strong>Summary:</strong> ${escapeHtml(record.summary || "No summary saved yet.")}</div>
          <div class="item-meta"><strong>Exact values / terms:</strong> ${escapeHtml(record.evidence || "")}</div>
          <audio controls src="${record.audioData}"></audio>
        </div>
      `
    )
    .join("");
}

async function renderPaperSummaries() {
  const container = document.getElementById("paper-records");
  if (!container) return;
  const records = (await getAllRecords("paperSummaries"))
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .filter((record) =>
      matchesSearch(record, state.searchFilters.papers, [
        "title",
        "authors",
        "url",
        "question",
        "model",
        "methods",
        "findings",
        "limitations",
        "importance",
        "quotes",
      ])
    );
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No paper summaries match this search yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || "Paper summary")}</div>
              <div class="item-meta">${escapeHtml(record.authors || "No authors")} | ${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="paperSummaries" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${escapeHtml(record.url || "")}</div>
          <div class="item-meta"><strong>Question:</strong> ${escapeHtml(record.question || "")}</div>
          <div class="item-meta"><strong>Model:</strong> ${escapeHtml(record.model || "")}</div>
          <div class="item-meta"><strong>Findings:</strong> ${escapeHtml(record.findings || "")}</div>
          <div class="item-meta"><strong>Limitations:</strong> ${escapeHtml(record.limitations || "")}</div>
          <div class="item-meta"><strong>Verified:</strong> ${record.verified ? "Yes" : "No"}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-paper-citation="${record.id}" type="button">Save Citation</button>
            <button class="secondary-button small-button" data-paper-open="${record.id}" type="button">Open PDF</button>
            <button class="outline-button small-button" data-paper-download="${record.id}" type="button">Download PDF</button>
          </div>
        </div>
      `
    )
    .join("");
}

async function renderSpectroRecords() {
  const container = document.getElementById("spectro-records");
  if (!container) return;
  const records = (await getAllRecords("spectroTables")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No OD tables saved yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map((record) => {
      const rowCount = getFilledSpectroRows(record.rows || []).length;
      return `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || "OD Table")}</div>
              <div class="item-meta">${escapeHtml(record.project || "No project")} | ${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="spectroTables" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${rowCount} reviewed rows | Source: ${escapeHtml(record.sourceImageName || "Manual entry")}</div>
          <div class="item-meta">${escapeHtml(record.notes || "")}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-spectro-load="${record.id}" type="button">Load into editor</button>
            <button class="outline-button small-button" data-spectro-export-id="${record.id}" type="button">Export CSV</button>
          </div>
        </div>
      `;
    })
    .join("");
}

async function renderResultFiles() {
  const container = document.getElementById("results-records");
  if (!container) return;
  const records = (await getAllRecords("resultFiles"))
    .sort(
      (a, b) =>
        String(a.project || "").localeCompare(String(b.project || "")) ||
        String(a.orderLabel || "").localeCompare(String(b.orderLabel || "")) ||
        String(a.title || "").localeCompare(String(b.title || "")) ||
        new Date(b.createdAt) - new Date(a.createdAt)
    )
    .filter((record) => {
      const matchesType = !state.resultFilters.type || record.resultType === state.resultFilters.type;
      const projectNeedle = String(state.resultFilters.project || "").trim().toLowerCase();
      const haystack = `${record.project || ""} ${record.title || ""} ${record.tags || ""} ${record.orderLabel || ""}`.toLowerCase();
      return matchesType && (!projectNeedle || haystack.includes(projectNeedle));
    });

  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No stored results match this filter yet.</div></div>`;
    return;
  }

  container.innerHTML = records
    .map((record) => {
      const imagePreview = record.fileType?.startsWith("image/")
        ? `<img class="result-preview" src="${record.fileData}" alt="${escapeHtml(record.title || record.fileName || "Result preview")}" />`
        : "";
      return `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || record.fileName || "Result file")}</div>
              <div class="item-meta">${escapeHtml(record.project || "No project")} | ${escapeHtml(record.resultType || "Other")} | ${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="resultFiles" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          ${imagePreview}
          <div class="item-meta">File: ${escapeHtml(record.fileName || "No file")} (${formatFileSize(record.fileSize)})</div>
          <div class="item-meta">${record.orderLabel ? `Order / Sample: ${escapeHtml(record.orderLabel)} | ` : ""}${record.tags ? `Tags: ${escapeHtml(record.tags)}` : ""}</div>
          <div class="item-meta">${escapeHtml(record.notes || "")}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-result-open="${record.id}" type="button">Open</button>
            <button class="outline-button small-button" data-result-download="${record.id}" type="button">Download</button>
          </div>
        </div>
      `;
    })
    .join("");
}

async function renderFailures() {
  const container = document.getElementById("failure-records");
  const records = (await getAllRecords("failures")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No failures logged yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div class="item-title">${record.what}</div>
            <button class="danger-button small-button" data-delete-store="failures" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta"><strong>Why:</strong> ${record.why}</div>
          <div class="item-meta"><strong>Fix:</strong> ${record.solution}</div>
          <div class="item-meta">${formatDateTime(record.createdAt)}</div>
        </div>
      `
    )
    .join("");
}

async function renderLearnings() {
  const container = document.getElementById("learning-records");
  const records = (await getAllRecords("learnings")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No learning notes yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${record.category}</div>
              <div class="item-meta">${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="learnings" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${record.text}</div>
        </div>
      `
    )
    .join("");
}

async function renderArticles() {
  const container = document.getElementById("article-records");
  const records = (await getAllRecords("articles")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No saved articles yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || "Saved Article")}</div>
              <div class="item-meta">${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="articles" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${escapeHtml(record.authors || "No authors")} ${record.journal ? `| ${escapeHtml(record.journal)}` : ""}</div>
          <div class="item-meta"><a href="${record.url}" target="_blank" rel="noreferrer">${record.url}</a></div>
          <div class="item-meta">${escapeHtml(record.summary || "")}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-article-citation="${record.id}" type="button">Save Citation</button>
          </div>
        </div>
      `
    )
    .join("");
}

async function renderCitations() {
  const container = document.getElementById("citation-records");
  if (!container) return;
  const records = (await getAllRecords("citations"))
    .sort(
      (a, b) =>
        String(a.project || "").localeCompare(String(b.project || "")) ||
        String(a.chapter || "").localeCompare(String(b.chapter || "")) ||
        new Date(b.createdAt) - new Date(a.createdAt)
    )
    .filter((record) =>
      matchesSearch(record, state.searchFilters.citations, [
        "title",
        "authors",
        "year",
        "journal",
        "doi",
        "url",
        "style",
        "project",
        "chapter",
        "citationKey",
        "usedIn",
        "usedFor",
        "evidence",
        "notes",
      ])
    );
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No saved citations match this search yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map((record) => {
      const bibliography = buildCitationText(record, record.style);
      return `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${escapeHtml(record.title || "Citation")}</div>
              <div class="item-meta">${escapeHtml(record.authors || "No authors")} ${record.year ? `| ${escapeHtml(record.year)}` : ""} ${record.journal ? `| ${escapeHtml(record.journal)}` : ""}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="citations" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta"><strong>Project:</strong> ${escapeHtml(record.project || "Not grouped")} ${record.chapter ? `| <strong>Chapter:</strong> ${escapeHtml(record.chapter)}` : ""}</div>
          <div class="item-meta"><strong>Style:</strong> ${escapeHtml((record.style || "apa").toUpperCase())}</div>
          <div class="item-meta"><strong>Key:</strong> ${escapeHtml(record.citationKey || "No key")}</div>
          <div class="item-meta"><strong>Used in:</strong> ${escapeHtml(record.usedIn || "Not set")}</div>
          <div class="item-meta"><strong>What I used:</strong> ${escapeHtml(record.usedFor || "Not set")}</div>
          <div class="item-meta"><strong>Evidence:</strong> ${escapeHtml(record.evidence || "Not saved")}</div>
          <div class="item-meta"><strong>Bibliography:</strong> ${escapeHtml(bibliography)}</div>
          <div class="list-item-actions">
            <button class="secondary-button small-button" data-citation-load="${record.id}" type="button">Load</button>
            <button class="outline-button small-button" data-citation-copy="${record.id}" type="button">Copy Citation</button>
            <button class="outline-button small-button" data-citation-copy-cite="${record.id}" type="button">Copy \\cite</button>
            <button class="outline-button small-button" data-citation-copy-bibtex="${record.id}" type="button">Copy BibTeX</button>
          </div>
        </div>
      `;
    })
    .join("");
}

function updatePomodoroDisplay() {
  state.pomodoro.workDurationSeconds = Math.max(60, Number(state.pomodoro.workDurationSeconds || 1500));
  state.pomodoro.breakDurationSeconds = Math.max(60, Number(state.pomodoro.breakDurationSeconds || 300));
  if (!state.pomodoro.running && !state.pomodoro.remainingSeconds) {
    state.pomodoro.remainingSeconds = getPomodoroPhaseDuration(state.pomodoro.phase);
  }
  setText("pomodoro-display", formatSeconds(state.pomodoro.remainingSeconds || 0));
  setText("pomodoro-mode-pill", state.pomodoro.phase === "work" ? t("work") : t("break"));
  setText("pomodoro-sessions-pill", `${state.pomodoro.sessionsCompleted} ${t("sessions_word")}`);
  renderPomodoroPresenceUi();
}

function getPomodoroPhaseDuration(phase = state.pomodoro.phase) {
  return phase === "work"
    ? Number(state.pomodoro.workDurationSeconds || 1500)
    : Number(state.pomodoro.breakDurationSeconds || 300);
}

function hydratePomodoroInputs() {
  const workField = document.getElementById("pomodoro-work-minutes");
  const breakField = document.getElementById("pomodoro-break-minutes");
  if (workField) {
    workField.value = Math.max(1, Math.round(Number(state.pomodoro.workDurationSeconds || 1500) / 60));
  }
  if (breakField) {
    breakField.value = Math.max(1, Math.round(Number(state.pomodoro.breakDurationSeconds || 300) / 60));
  }
}

function readPomodoroInputs() {
  const workMinutes = Math.max(1, Math.floor(Number(document.getElementById("pomodoro-work-minutes")?.value || 25) || 25));
  const breakMinutes = Math.max(1, Math.floor(Number(document.getElementById("pomodoro-break-minutes")?.value || 5) || 5));
  return {
    workDurationSeconds: workMinutes * 60,
    breakDurationSeconds: breakMinutes * 60,
  };
}

function applyPomodoroSettings({ restartCurrentPhase = true, preserveSessions = true } = {}) {
  const { workDurationSeconds, breakDurationSeconds } = readPomodoroInputs();
  state.pomodoro.workDurationSeconds = workDurationSeconds;
  state.pomodoro.breakDurationSeconds = breakDurationSeconds;
  if (restartCurrentPhase) {
    state.pomodoro.running = false;
    state.pomodoro.endAt = null;
    state.pomodoro.remainingSeconds = getPomodoroPhaseDuration(state.pomodoro.phase);
  }
  state.pomodoro.alertVisible = false;
  state.pomodoro.alertType = "";
  if (!preserveSessions) {
    state.pomodoro.sessionsCompleted = 0;
  }
  persistPomodoroState();
  hydratePomodoroInputs();
  updatePomodoroDisplay();
}

function applyPomodoroPreset(presetKey) {
  const presets = {
    classic: { workDurationSeconds: 25 * 60, breakDurationSeconds: 5 * 60 },
    deep: { workDurationSeconds: 50 * 60, breakDurationSeconds: 10 * 60 },
    extended: { workDurationSeconds: 90 * 60, breakDurationSeconds: 15 * 60 },
  };
  const preset = presets[presetKey];
  if (!preset) return;
  state.pomodoro.workDurationSeconds = preset.workDurationSeconds;
  state.pomodoro.breakDurationSeconds = preset.breakDurationSeconds;
  state.pomodoro.running = false;
  state.pomodoro.endAt = null;
  state.pomodoro.remainingSeconds = getPomodoroPhaseDuration(state.pomodoro.phase);
  state.pomodoro.alertVisible = false;
  state.pomodoro.alertType = "";
  persistPomodoroState();
  hydratePomodoroInputs();
  updatePomodoroDisplay();
}

function startPomodoroLoop() {
  if (state.pomodoroInterval) return;
  state.pomodoroInterval = window.setInterval(async () => {
    if (!state.pomodoro.running || !state.pomodoro.endAt) return;
    const remaining = Math.ceil((state.pomodoro.endAt - Date.now()) / 1000);
    if (remaining <= 0) {
      if (state.pomodoro.phase === "work") {
        state.pomodoro.sessionsCompleted += 1;
        state.pomodoro.phase = "break";
        state.pomodoro.remainingSeconds = getPomodoroPhaseDuration("break");
        state.pomodoro.endAt = Date.now() + state.pomodoro.remainingSeconds * 1000;
        state.pomodoro.alertVisible = true;
        state.pomodoro.alertType = "work_complete";
        showToast("Work session complete. Break started.");
      } else {
        state.pomodoro.phase = "work";
        state.pomodoro.remainingSeconds = getPomodoroPhaseDuration("work");
        state.pomodoro.endAt = Date.now() + state.pomodoro.remainingSeconds * 1000;
        state.pomodoro.alertVisible = true;
        state.pomodoro.alertType = "break_complete";
        showToast("Break complete. Work session started.");
      }
      persistPomodoroState();
      updatePomodoroDisplay();
      return;
    }
    state.pomodoro.remainingSeconds = remaining;
    persistPomodoroState();
    updatePomodoroDisplay();
  }, 500);
}

async function renderPomodoroRecords() {
  const container = document.getElementById("pomodoro-records");
  const records = (await getAllRecords("pomodoro")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No pomodoro logs yet.</div></div>`;
    return;
  }
  container.innerHTML = records
    .map(
      (record) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${record.sessionsCompleted} ${t("sessions_word")}</div>
              <div class="item-meta">${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="pomodoro" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">Work: ${Math.round(Number(record.workDurationSeconds || 1500) / 60)} min | Break: ${Math.round(Number(record.breakDurationSeconds || 300) / 60)} min</div>
        </div>
      `
    )
    .join("");
}

async function renderCalendar() {
  const monthLabel = document.getElementById("calendar-month-label");
  const grid = document.getElementById("calendar-grid");
  const selectedLabel = document.getElementById("calendar-selected-date-label");
  const events = await getAllRecords("calendar");
  const current = new Date(state.calendarView.year, state.calendarView.month, 1);
  monthLabel.textContent = current.toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });

  const monthStart = new Date(state.calendarView.year, state.calendarView.month, 1);
  const firstWeekday = (monthStart.getDay() + 6) % 7;
  const daysInMonth = new Date(state.calendarView.year, state.calendarView.month + 1, 0).getDate();
  const previousMonthDays = new Date(state.calendarView.year, state.calendarView.month, 0).getDate();
  const cells = [];

  for (let i = 0; i < firstWeekday; i += 1) {
    const day = previousMonthDays - firstWeekday + i + 1;
    cells.push({ day, muted: true, date: null });
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(state.calendarView.year, state.calendarView.month, day);
    const dateValue = toDateInputValue(date);
    const count = events.filter((event) => event.date === dateValue).length;
    cells.push({
      day,
      date: dateValue,
      muted: false,
      count,
      selected: dateValue === state.calendarView.selectedDate,
    });
  }

  while (cells.length % 7 !== 0) {
    cells.push({ day: cells.length % 7, muted: true, date: null });
  }

  grid.innerHTML = cells
    .map((cell) => {
      if (!cell.date) {
        return `<div class="calendar-day muted"><span>${cell.day}</span></div>`;
      }
      return `
        <button class="calendar-day ${cell.selected ? "selected" : ""}" data-calendar-date="${cell.date}" type="button">
          <span>${cell.day}</span>
          ${cell.count ? `<span class="calendar-dot" aria-label="${cell.count} events"></span>` : "<span></span>"}
        </button>
      `;
    })
    .join("");

  selectedLabel.textContent = state.calendarView.selectedDate;
  document.getElementById("calendar-date").value = state.calendarView.selectedDate;
  renderCalendarEvents(events);
}

function renderCalendarEvents(events) {
  const container = document.getElementById("calendar-records");
  const filtered = events
    .filter((event) => event.date === state.calendarView.selectedDate)
    .sort((a, b) => (a.time || "").localeCompare(b.time || ""));
  if (!filtered.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No events on this date.</div></div>`;
    return;
  }
  container.innerHTML = filtered
    .map(
      (event) => `
        <div class="list-item">
          <div class="list-item-top">
            <div>
              <div class="item-title">${event.title}</div>
              <div class="item-meta">${event.time || "No time"} | ${event.date}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="calendar" data-delete-id="${event.id}" type="button">Delete</button>
          </div>
          <div class="item-meta">${event.notes || ""}</div>
        </div>
      `
    )
    .join("");
}

async function renderWorkspace() {
  const metricsContainer = document.getElementById("workspace-metrics");
  const summaryContainer = document.getElementById("workspace-summary");
  const checklistContainer = document.getElementById("workspace-checklist");
  const searchResultsContainer = document.getElementById("workspace-search-results");
  if (!metricsContainer || !summaryContainer || !checklistContainer || !searchResultsContainer) return;

  const [tasks, labNotes, protocols, results, papers, articles, citations, calendarEvents, experimentRuns] = await Promise.all([
    getAllRecords("tasks"),
    getAllRecords("labNotes"),
    getAllRecords("protocols"),
    getAllRecords("resultFiles"),
    getAllRecords("paperSummaries"),
    getAllRecords("articles"),
    getAllRecords("citations"),
    getAllRecords("calendar"),
    getAllRecords("experimentRuns"),
  ]);

  const pendingTasks = tasks.filter((task) => task.status !== "Done").length;
  const activeTimers = state.activeTimers.filter((timer) => !timer.completed).length;
  const upcomingEvent = calendarEvents
    .filter((event) => event.date)
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`))[0];
  const latestNote = [...labNotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const latestResult = [...results].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const latestPaper = [...papers].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const latestRun = [...experimentRuns].sort((a, b) => new Date(b.updatedAt || b.createdAt) - new Date(a.updatedAt || a.createdAt))[0];

  const metrics = [
    { label: "Pending Tasks", value: pendingTasks, tone: "warning" },
    { label: "Experiment Runs", value: experimentRuns.length, tone: "info" },
    { label: "Lab Notes", value: labNotes.length, tone: "info" },
    { label: "Protocols", value: protocols.length, tone: "primary" },
    { label: "Results Files", value: results.length, tone: "success" },
    { label: "Paper Summaries", value: papers.length, tone: "secondary" },
    { label: "Saved Articles", value: articles.length, tone: "primary" },
    { label: "Citations", value: citations.length, tone: "info" },
  ];

  metricsContainer.innerHTML = metrics
    .map(
      (metric) => `
        <div class="workspace-metric-card ${metric.tone}">
          <div class="workspace-metric-value">${escapeHtml(metric.value)}</div>
          <div class="workspace-metric-label">${escapeHtml(metric.label)}</div>
        </div>
      `
    )
    .join("");

  const summaryItems = [
    {
      title: "Active timers",
      meta: activeTimers ? `${activeTimers} running now` : "No active timers right now",
    },
    {
      title: "Next calendar event",
      meta: upcomingEvent
        ? `${escapeHtml(upcomingEvent.title)} | ${escapeHtml(upcomingEvent.date)}${upcomingEvent.time ? ` ${escapeHtml(upcomingEvent.time)}` : ""}`
        : "No calendar events saved yet",
    },
    {
      title: "Latest lab note",
      meta: latestNote
        ? `${escapeHtml(latestNote.title)} | ${escapeHtml(latestNote.noteDate || formatDateTime(latestNote.createdAt))}`
        : "No lab notes saved yet",
    },
    {
      title: "Latest experiment run",
      meta: latestRun
        ? `${escapeHtml(latestRun.title || "Experiment Run")} | ${escapeHtml(latestRun.status || "Draft")}`
        : "No experiment runs saved yet",
    },
    {
      title: "Latest result file",
      meta: latestResult
        ? `${escapeHtml(latestResult.title || latestResult.fileName || "Result file")} | ${escapeHtml(latestResult.project || "No project")}`
        : "No result files saved yet",
    },
    {
      title: "Latest paper summary",
      meta: latestPaper
        ? `${escapeHtml(latestPaper.title || "Paper summary")} | ${escapeHtml(latestPaper.authors || "No authors")}`
        : "No paper summaries saved yet",
    },
  ];

  summaryContainer.innerHTML = summaryItems
    .map(
      (item) => `
        <div class="list-item">
          <div class="item-title">${item.title}</div>
          <div class="item-meta">${item.meta}</div>
        </div>
      `
    )
    .join("");

  const checklist = [
    { label: "Save your researcher profile", done: Boolean(state.settings.researcherName || state.settings.researcherEmail) },
    { label: "Create your first protocol", done: protocols.length > 0 },
    { label: "Create your first guided experiment run", done: experimentRuns.length > 0, hint: "Use Experiment Runs to connect protocol, timing, notes, and results in one place." },
    { label: "Save your first lab note", done: labNotes.length > 0 },
    { label: "Store your first result file", done: results.length > 0 },
    { label: "Draft your first paper summary", done: papers.length > 0 },
    { label: "Save your first citation", done: citations.length > 0, hint: "Use Citation Vault to save what section you used and export bibliography or BibTeX later." },
    { label: "Add your first calendar event", done: calendarEvents.length > 0, hint: "Use the calendar to plan real experiment dates, deadlines, and follow-up tasks." },
  ];

  checklistContainer.innerHTML = checklist
    .map(
      (item) => `
        <div class="list-item">
          <div class="list-item-top">
            <div class="item-title">${item.done ? "Completed" : "Next step"}</div>
            <span class="tag ${item.done ? "success" : "warning"}">${item.done ? "Done" : "Pending"}</span>
          </div>
          <div class="item-meta">${escapeHtml(item.label)}</div>
          ${item.hint ? `<div class="item-meta">${escapeHtml(item.hint)}</div>` : ""}
        </div>
      `
    )
    .join("");

  const query = String(state.searchFilters.workspace || "").trim().toLowerCase();
  if (!query) {
    searchResultsContainer.innerHTML = `<div class="list-item"><div class="item-meta">Start typing to search across experiment runs, tasks, notes, protocols, results, papers, and citations.</div></div>`;
    return;
  }

  const searchSets = [
    {
      label: "Experiment Run",
      screen: "runs",
      records: experimentRuns.filter((record) =>
        matchesSearch(record, query, ["title", "project", "protocolTitle", "objective", "sampleIds", "notes", "status"])
      ),
      title: (record) => record.title || "Experiment Run",
      meta: (record) => `${record.project || "No project"} | ${record.status || "Draft"}`,
    },
    {
      label: "Task",
      screen: "todo",
      records: tasks.filter((record) => matchesSearch(record, query, ["title", "priority", "status", "dueDate"])),
      title: (record) => record.title || "Task",
      meta: (record) => `${record.priority || "No priority"} | ${record.status || "Pending"}${record.dueDate ? ` | ${record.dueDate}` : ""}`,
    },
    {
      label: "Lab Note",
      screen: "notes",
      records: labNotes.filter((record) =>
        matchesSearch(record, query, ["title", "experimentName", "protocolTitle", "tags", "observations", "results", "nextSteps"])
      ),
      title: (record) => record.title || "Lab Note",
      meta: (record) => `${record.experimentName || "No experiment"}${record.noteDate ? ` | ${record.noteDate}` : ""}`,
    },
    {
      label: "Protocol",
      screen: "protocols",
      records: protocols.filter((record) =>
        matchesSearch(record, query, ["title", "category", "objective", "materials", "steps", "safetyNotes"])
      ),
      title: (record) => record.title || "Protocol",
      meta: (record) => `${record.category || "General Lab"}${record.duration ? ` | ${record.duration}` : ""}`,
    },
    {
      label: "Citation",
      screen: "citations",
      records: citations.filter((record) =>
        matchesSearch(record, query, ["title", "authors", "journal", "doi", "url", "style", "project", "chapter", "citationKey", "usedIn", "usedFor", "evidence", "notes"])
      ),
      title: (record) => record.title || "Citation",
      meta: (record) =>
        `${record.authors || "No authors"}${record.year ? ` | ${record.year}` : ""}${record.project ? ` | ${record.project}` : ""}${record.usedIn ? ` | ${record.usedIn}` : ""}`,
    },
    {
      label: "Result",
      screen: "results",
      records: results.filter((record) =>
        matchesSearch(record, query, ["project", "title", "resultType", "orderLabel", "tags", "notes", "fileName"])
      ),
      title: (record) => record.title || record.fileName || "Result File",
      meta: (record) => `${record.project || "No project"} | ${record.resultType || "Other"}`,
    },
    {
      label: "Paper",
      screen: "papers",
      records: papers.filter((record) =>
        matchesSearch(record, query, ["title", "authors", "url", "question", "methods", "findings", "limitations", "importance", "quotes"])
      ),
      title: (record) => record.title || "Paper Summary",
      meta: (record) => `${record.authors || "No authors"}${record.verified ? " | Verified" : " | Needs verification"}`,
    },
  ];

  const searchResults = searchSets.flatMap((set) =>
    set.records.slice(0, 3).map((record) => ({
      label: set.label,
      screen: set.screen,
      title: set.title(record),
      meta: set.meta(record),
    }))
  );

  if (!searchResults.length) {
    searchResultsContainer.innerHTML = `<div class="list-item"><div class="item-meta">No workspace matches found for "${escapeHtml(query)}".</div></div>`;
    return;
  }

  searchResultsContainer.innerHTML = searchResults
    .map(
      (result) => `
        <button class="list-item search-result-button" data-open-screen="${result.screen}" type="button">
          <div class="list-item-top">
            <div class="item-title">${escapeHtml(result.title)}</div>
            <span class="tag info">${escapeHtml(result.label)}</span>
          </div>
          <div class="item-meta">${escapeHtml(result.meta)}</div>
        </button>
      `
    )
    .join("");
}

function updateConverterResult() {
  const type = document.getElementById("converter-type").value;
  const value = Number(document.getElementById("converter-value").value || 0);
  let result = 0;
  switch (type) {
    case "ml_to_l":
      result = value / 1000;
      break;
    case "l_to_ml":
      result = value * 1000;
      break;
    case "mm_to_m":
      result = value / 1000;
      break;
    case "m_to_mm":
      result = value * 1000;
      break;
    case "ug_to_mg":
      result = value / 1000;
      break;
    case "mg_to_ug":
      result = value * 1000;
      break;
    case "c_to_f":
      result = (value * 9) / 5 + 32;
      break;
    case "f_to_c":
      result = ((value - 32) * 5) / 9;
      break;
    default:
      result = value;
  }
  setText("converter-result", Number.isFinite(result) ? result.toFixed(4) : "0");
}

function openScreen(screenName) {
  state.activeScreen = screenName;
  const navScreenMap = {
    workspace: "home",
    timeline: "home",
    assistant: "home",
    protocols: "runs",
    articles: "library",
    papers: "library",
    citations: "library",
    cell: "tools",
    timer: "tools",
    todo: "tools",
    voice: "tools",
    photo: "tools",
    converter: "tools",
    pomodoro: "tools",
    failures: "tools",
    learning: "tools",
  };
  const activeNavScreen = navScreenMap[screenName] || screenName;
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${screenName}`);
  });
  document.querySelectorAll("[data-nav-screen]").forEach((button) => {
    button.classList.toggle("active", button.dataset.navScreen === activeNavScreen);
  });

  if (screenName === "workspace") {
    renderWorkspace();
  }
  if (screenName === "runs") {
    renderExperimentRuns();
  }
  if (screenName === "timeline") {
    renderResearchTimeline();
  }
  if (screenName === "assistant") {
    renderDecisionAssistant();
  }
  if (screenName === "calendar") {
    renderCalendar();
  }
  if (screenName === "photo") {
    hydrateSpectroFields();
    renderSpectroRows();
    renderSpectroRecords();
  }
  if (screenName === "notes") {
    ensureDefaultNoteDate();
    renderProtocolOptions();
  }
  if (screenName === "protocols") {
    renderProtocols();
  }
  if (screenName === "results") {
    renderResultFiltersFromState();
    renderResultFiles();
  }
  if (screenName === "papers") {
    renderPaperSummaries();
  }
}

function openScreenFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const requestedScreen = params.get("screen");
  if (!requestedScreen) return;
  if (document.getElementById(`screen-${requestedScreen}`)) {
    openScreen(requestedScreen);
  }
}

function beep() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const oscillator = ctx.createOscillator();
    const gain = ctx.createGain();
    oscillator.connect(gain);
    gain.connect(ctx.destination);
    oscillator.type = "sine";
    oscillator.frequency.value = 880;
    gain.gain.value = 0.16;
    oscillator.start();
    oscillator.stop(ctx.currentTime + 0.2);
    window.setTimeout(() => ctx.close().catch(() => undefined), 260);
  } catch {
    // Ignore devices that block audio context creation.
  }
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function stripFileExtension(filename = "") {
  return String(filename).replace(/\.[^.]+$/, "");
}

function formatFileSize(bytes = 0) {
  const size = Number(bytes || 0);
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function cloneSpectroRows(rows = []) {
  return rows.map((row) => createEmptySpectroRow(row));
}

function getFilledSpectroRows(rows = state.spectroDraft.rows) {
  return cloneSpectroRows(rows).filter((row) =>
    [row.sample, row.od1, row.od2, row.od3, row.comment].some((value) => String(value || "").trim())
  );
}

function hydrateSpectroFields() {
  const titleField = document.getElementById("spectro-title");
  const projectField = document.getElementById("spectro-project");
  const notesField = document.getElementById("spectro-notes");
  if (titleField) titleField.value = state.spectroDraft.title || "";
  if (projectField) projectField.value = state.spectroDraft.project || "";
  if (notesField) notesField.value = state.spectroDraft.notes || "";
}

function syncSpectroMetaFromInputs() {
  state.spectroDraft.title = document.getElementById("spectro-title")?.value.trim() || "";
  state.spectroDraft.project = document.getElementById("spectro-project")?.value.trim() || "";
  state.spectroDraft.notes = document.getElementById("spectro-notes")?.value.trim() || "";
}

function renderSpectroRows() {
  const container = document.getElementById("spectro-rows");
  if (!container) return;
  if (!state.spectroDraft.rows.length) {
    state.spectroDraft.rows = [createEmptySpectroRow()];
  }
  container.innerHTML = state.spectroDraft.rows
    .map(
      (row, index) => `
        <div class="spectro-table spectro-table-row" data-spectro-row="${index}">
          <input type="text" value="${escapeHtml(row.sample)}" data-spectro-field="sample" placeholder="Control / Sample / Condition" />
          <input type="number" step="any" value="${escapeHtml(row.od1)}" data-spectro-field="od1" placeholder="0.245" />
          <input type="number" step="any" value="${escapeHtml(row.od2)}" data-spectro-field="od2" placeholder="0.251" />
          <input type="number" step="any" value="${escapeHtml(row.od3)}" data-spectro-field="od3" placeholder="0.249" />
          <input type="text" value="${escapeHtml(row.comment)}" data-spectro-field="comment" placeholder="Replicates / note" />
          <button class="danger-button small-button" data-spectro-remove="${index}" type="button">Delete</button>
        </div>
      `
    )
    .join("");
}

function normalizeOcrNumberToken(token = "") {
  return String(token)
    .trim()
    .replace(/[Oo]/g, "0")
    .replace(/[Il|]/g, "1")
    .replace(/S/g, "5")
    .replace(/,/g, ".")
    .replace(/[^0-9.+-]/g, "");
}

function normalizeDecimalCellValue(value = "") {
  const cleaned = normalizeOcrNumberToken(value);
  if (!cleaned) return "";
  const numeric = Number(cleaned);
  return Number.isFinite(numeric) ? String(numeric) : String(value).trim();
}

function cleanOcrText(text = "") {
  return String(text || "")
    .replace(/\r/g, "")
    .replace(/[“”]/g, '"')
    .replace(/[‘’]/g, "'")
    .replace(/[|¦]/g, " ")
    .split("\n")
    .map((line) => line.replace(/\s+/g, " ").trim())
    .filter(Boolean)
    .join("\n")
    .trim();
}

function cleanResearchText(text = "") {
  return String(text || "")
    .replace(/\r/g, "\n")
    .replace(/\t/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

async function extractTextFromPdfFile(file, { maxPages = 12, maxChars = 30000 } = {}) {
  if (!file) {
    throw new Error("Choose a PDF file first.");
  }
  if (!window.pdfjsLib) {
    throw new Error("PDF reader unavailable right now.");
  }

  if (!window.pdfjsLib.GlobalWorkerOptions.workerSrc) {
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJS_WORKER_SRC;
  }

  const arrayBuffer = await file.arrayBuffer();
  const pdf = await window.pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const pageLimit = Math.min(pdf.numPages || 0, maxPages);
  const pageChunks = [];

  for (let pageNumber = 1; pageNumber <= pageLimit; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber);
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => String(item.str || "").trim())
      .filter(Boolean)
      .join(" ");
    if (pageText) {
      pageChunks.push(pageText);
    }
    const currentLength = pageChunks.join("\n\n").length;
    if (currentLength >= maxChars) {
      break;
    }
  }

  return cleanResearchText(pageChunks.join("\n\n")).slice(0, maxChars);
}

function splitResearchSentences(text = "") {
  return cleanResearchText(text)
    .replace(/\n+/g, " ")
    .split(/(?<=[.!?])\s+/)
    .map((sentence) => sentence.trim())
    .filter(Boolean);
}

function looksLikeSectionBoundary(line = "") {
  const compact = String(line || "").trim();
  if (!compact) return false;
  return Object.values(PAPER_SECTION_PATTERNS).some((patterns) => patterns.some((pattern) => pattern.test(compact)));
}

function extractSectionBlock(text, patterns) {
  const lines = cleanResearchText(text).split("\n").map((line) => line.trim()).filter(Boolean);
  for (let index = 0; index < lines.length; index += 1) {
    if (!patterns.some((pattern) => pattern.test(lines[index]))) continue;
    const sectionLines = [];
    const firstLine = lines[index].replace(/^[A-Za-z][A-Za-z /-]{1,40}:\s*/i, "").trim();
    if (firstLine) {
      sectionLines.push(firstLine);
    }
    for (let inner = index + 1; inner < lines.length; inner += 1) {
      if (looksLikeSectionBoundary(lines[inner])) break;
      sectionLines.push(lines[inner]);
    }
    const block = sectionLines.join(" ").trim();
    if (block) return block;
  }
  return "";
}

function selectSentences(sentences, keywords = [], limit = 2) {
  const loweredKeywords = keywords.map((keyword) => keyword.toLowerCase());
  const matches = sentences.filter((sentence) =>
    loweredKeywords.some((keyword) => sentence.toLowerCase().includes(keyword))
  );
  return matches.slice(0, limit);
}

function toBulletSummary(sentences = []) {
  const cleaned = [...new Set(sentences.map((sentence) => sentence.trim()).filter(Boolean))];
  return cleaned.map((sentence) => `- ${sentence}`).join("\n");
}

function buildPaperDraftFromSourceText(text = "") {
  const cleaned = cleanResearchText(text);
  if (!cleaned) return null;

  const structuredQuestion = extractSectionBlock(cleaned, PAPER_SECTION_PATTERNS.question);
  const structuredMethods = extractSectionBlock(cleaned, PAPER_SECTION_PATTERNS.methods);
  const structuredFindings = extractSectionBlock(cleaned, PAPER_SECTION_PATTERNS.findings);
  const structuredLimitations = extractSectionBlock(cleaned, PAPER_SECTION_PATTERNS.limitations);
  const structuredImportance = extractSectionBlock(cleaned, PAPER_SECTION_PATTERNS.importance);

  const sentences = splitResearchSentences(cleaned);
  const questionSentences = structuredQuestion
    ? [structuredQuestion]
    : selectSentences(sentences, ["aim", "objective", "investigated", "examined", "evaluated", "background"], 2);
  const methodSentences = structuredMethods
    ? [structuredMethods]
    : selectSentences(sentences, ["method", "participants", "cells", "mice", "patients", "using", "assay", "treated", "measured"], 3);
  const findingSentences = structuredFindings
    ? [structuredFindings]
    : selectSentences(sentences, ["result", "significant", "increase", "decrease", "reduced", "improved", "associated", "showed", "higher", "lower"], 3);
  const limitationSentences = structuredLimitations
    ? [structuredLimitations]
    : selectSentences(sentences, ["limitation", "however", "caution", "small sample", "future studies", "further research"], 2);
  const importanceSentences = structuredImportance
    ? [structuredImportance]
    : selectSentences(sentences, ["conclusion", "conclude", "suggest", "indicate", "support", "may", "therefore"], 2);
  const numericQuoteSentences = sentences.filter((sentence) =>
    /(\d+(\.\d+)?\s?(%|mm|cm|mg|ug|µg|nm|um|μm|h|hr|min|day|days|week|weeks|month|months)|p\s?[<=>]\s?0?\.\d+)/i.test(sentence)
  );

  return {
    question: toBulletSummary(questionSentences.length ? questionSentences : sentences.slice(0, 2)),
    model: toBulletSummary(selectSentences(sentences, ["cell", "cells", "mouse", "mice", "rat", "human", "patient", "cohort", "population", "sample"], 2)),
    methods: toBulletSummary(methodSentences),
    findings: toBulletSummary(findingSentences.length ? findingSentences : sentences.slice(0, 3)),
    limitations: toBulletSummary(limitationSentences),
    importance: toBulletSummary(importanceSentences),
    quotes: toBulletSummary(numericQuoteSentences.slice(0, 3)),
  };
}

function applyPaperDraftToFields(draft, { onlyIfEmpty = true } = {}) {
  if (!draft) return false;
  const fieldMap = {
    "paper-question": draft.question,
    "paper-model": draft.model,
    "paper-methods": draft.methods,
    "paper-findings": draft.findings,
    "paper-limitations": draft.limitations,
    "paper-importance": draft.importance,
    "paper-quotes": draft.quotes,
  };
  let changed = false;
  Object.entries(fieldMap).forEach(([fieldId, value]) => {
    if (!value) return;
    const field = document.getElementById(fieldId);
    if (!field) return;
    if (onlyIfEmpty && field.value.trim()) return;
    field.value = value;
    changed = true;
  });
  return changed;
}

function isSpectroNoiseLabel(label = "") {
  const value = String(label || "").trim().toLowerCase();
  return /^(od|densite optique|optical density|concentrations?|um|μm|nm|wavelength|legend|axis|mean|sd|sem)$/.test(
    value
  );
}

function parseSpectroDraftFromText(text = "") {
  const cleaned = cleanOcrText(text);
  const lines = cleaned.split("\n").map((line) => line.trim()).filter(Boolean);
  const rows = [];
  let pendingLabel = "";

  lines.forEach((line) => {
    const numberTokens = [...line.matchAll(/[-+]?[0-9OoIlS.,]+/g)]
      .map((match) => normalizeDecimalCellValue(match[0]))
      .filter((token) => token && Number.isFinite(Number(token)));

    if (!numberTokens.length) {
      pendingLabel = pendingLabel ? `${pendingLabel} ${line}`.trim() : line;
      return;
    }

    const labelFromLine = line.replace(/[-+]?[0-9OoIlS.,]+/g, " ").replace(/\s+/g, " ").trim();
    const sample = (labelFromLine || pendingLabel || "").trim();

    if (!sample && numberTokens.length === 1) {
      return;
    }

    if (sample && isSpectroNoiseLabel(sample) && numberTokens.length <= 1) {
      pendingLabel = "";
      return;
    }

    rows.push(
      createEmptySpectroRow({
        sample: sample || `Sample ${rows.length + 1}`,
        od1: numberTokens[0] || "",
        od2: numberTokens[1] || "",
        od3: numberTokens[2] || "",
        comment: numberTokens.length > 3 ? `Extra values: ${numberTokens.slice(3).join(", ")}` : "",
      })
    );
    pendingLabel = "";
  });

  return rows.length ? rows : [createEmptySpectroRow()];
}

async function loadImageElement(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Image could not be loaded for OCR."));
    image.src = source;
  });
}

async function buildEnhancedPhotoDataUrl(file) {
  const sourceDataUrl = await fileToDataUrl(file);
  const image = await loadImageElement(sourceDataUrl);
  const canvas = document.createElement("canvas");
  const maxDimension = 2200;
  const scale = Math.min(2, maxDimension / Math.max(image.width || 1, image.height || 1));
  canvas.width = Math.max(1, Math.round((image.width || 1) * scale));
  canvas.height = Math.max(1, Math.round((image.height || 1) * scale));
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const { data } = imageData;
  let brightnessSum = 0;
  const grayValues = new Array(data.length / 4);

  for (let index = 0, pixel = 0; index < data.length; index += 4, pixel += 1) {
    const gray = Math.round(data[index] * 0.299 + data[index + 1] * 0.587 + data[index + 2] * 0.114);
    grayValues[pixel] = gray;
    brightnessSum += gray;
  }

  const threshold = Math.max(90, Math.min(200, Math.round((brightnessSum / grayValues.length) * 0.97)));

  for (let index = 0, pixel = 0; index < data.length; index += 4, pixel += 1) {
    let value = grayValues[pixel];
    value = (value - threshold) * 1.65 + 132;
    if (value > 160) value = 255;
    if (value < 75) value = 0;
    value = Math.max(0, Math.min(255, Math.round(value)));
    data[index] = value;
    data[index + 1] = value;
    data[index + 2] = value;
  }

  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL("image/png");
}

async function ensureEnhancedPhotoDataUrl() {
  if (!state.photoFile) {
    throw new Error("Choose an image first.");
  }
  if (state.photoEnhancedDataUrl) {
    return state.photoEnhancedDataUrl;
  }
  state.photoEnhancedDataUrl = await buildEnhancedPhotoDataUrl(state.photoFile);
  const preview = document.getElementById("photo-enhanced-preview");
  if (preview) {
    preview.src = state.photoEnhancedDataUrl;
    preview.classList.remove("hidden");
  }
  return state.photoEnhancedDataUrl;
}

async function recognizeTextFromSource(source) {
  const result = await window.Tesseract.recognize(source, "eng");
  return {
    text: cleanOcrText(result?.data?.text || ""),
    confidence: Number(result?.data?.confidence || 0),
  };
}

async function extractCleanTextFromPhoto() {
  if (!state.photoFile) {
    throw new Error("Choose an image first.");
  }
  if (!window.Tesseract) {
    throw new Error("OCR library unavailable");
  }

  const output = document.getElementById("photo-output");
  const status = document.getElementById("photo-status");
  output.value = "Enhancing image...";
  if (status) {
    status.textContent = "Enhancing image for OCR...";
  }
  const enhancedDataUrl = await ensureEnhancedPhotoDataUrl();
  output.value = "Running OCR on the enhanced image...";

  let bestAttempt = await recognizeTextFromSource(enhancedDataUrl);
  if (bestAttempt.text.length < 20) {
    output.value = "Enhanced OCR was weak. Trying the original image too...";
    const fallbackAttempt = await recognizeTextFromSource(state.photoFile);
    if (fallbackAttempt.text.length > bestAttempt.text.length || fallbackAttempt.confidence > bestAttempt.confidence) {
      bestAttempt = fallbackAttempt;
    }
  }

  output.value = bestAttempt.text;
  if (status) {
    status.textContent = bestAttempt.text
      ? `${state.photoFile.name} processed. Review and correct before export.`
      : `No readable text found in ${state.photoFile.name}.`;
  }
  return bestAttempt.text;
}

function buildSpectroCsvRows(recordLike) {
  const rows = getFilledSpectroRows(recordLike.rows || []);
  return rows.map((row, index) => ({
    TableTitle: recordLike.title || "",
    Project: recordLike.project || "",
    SourceImage: recordLike.sourceImageName || "",
    Row: index + 1,
    Sample: row.sample,
    OD1: row.od1,
    OD2: row.od2,
    OD3: row.od3,
    Comment: row.comment,
    Notes: recordLike.notes || "",
    CreatedAt: recordLike.createdAt || "",
  }));
}

function renderResultFiltersFromState() {
  const typeField = document.getElementById("result-filter-type");
  const projectField = document.getElementById("result-filter-project");
  if (typeField) typeField.value = state.resultFilters.type || "";
  if (projectField) projectField.value = state.resultFilters.project || "";
}

function triggerDataDownload(dataUrl, filename) {
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = filename || "lab-asis-file";
  document.body.append(link);
  link.click();
  link.remove();
}

async function exportAllBackup() {
  const backup = {
    appName: "Lab Asis",
    version: APP_VERSION,
    exportedAt: new Date().toISOString(),
    language: state.language,
    settings: state.settings,
    localState: {
      cellDraft: state.cellDraft,
      timerState: {
        draft: state.timerDraft,
        activeTimers: state.activeTimers,
      },
      pomodoro: state.pomodoro,
      calendarView: state.calendarView,
      resultFilters: state.resultFilters,
    },
    stores: {},
  };
  for (const storeName of STORES) {
    backup.stores[storeName] = await getAllRecords(storeName);
  }
  downloadFile(
    `lab-asis-backup-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(backup, null, 2),
    "application/json;charset=utf-8"
  );
}

async function copyText(text) {
  try {
    if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
  } catch (error) {
    console.warn("Clipboard API unavailable, using fallback.", error);
  }

  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.opacity = "0";
  document.body.append(helper);
  helper.select();
  const copied = document.execCommand("copy");
  helper.remove();
  return copied;
}

async function shareAppLink() {
  const url = getAppShareUrl();
  const shareData = {
    title: "Lab Asis",
    text: "Lab Asis is a scientific lab and research workspace for students and researchers.",
    url,
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      showToast("App link shared.");
      return;
    }
    const copied = await copyText(url);
    showToast(copied ? "App link copied." : url);
  } catch (error) {
    if (error?.name !== "AbortError") {
      console.error(error);
      showToast("Unable to share right now.");
    }
  }
}

async function copyCitationOutput(record, mode = "bibliography") {
  if (!record) {
    showToast("No citation selected.");
    return;
  }
  const preferredStyle = normalizeCitationRecord(record).style || getSelectedCitationStyle();
  const output =
    mode === "bibtex"
      ? buildBibtexEntry(record)
      : mode === "latex"
        ? buildLatexCite(record)
        : buildCitationText(record, preferredStyle);
  const copied = await copyText(output);
  showToast(
    copied
      ? mode === "bibtex"
        ? "BibTeX copied."
        : mode === "latex"
          ? "LaTeX cite command copied."
          : "Bibliography text copied."
      : "Copy failed."
  );
}

async function exportCitationBibtexFile() {
  const records = (await getAllRecords("citations")).map((record) => buildBibtexEntry(record));
  if (!records.length) {
    showToast("No citations saved yet.");
    return;
  }
  downloadFile("lab-asis-citations.bib", `${records.join("\n\n")}\n`, "application/x-bibtex;charset=utf-8");
}

async function exportCitationBibliographyText() {
  const records = await getAllRecords("citations");
  if (!records.length) {
    showToast("No citations saved yet.");
    return;
  }
  const preferredStyle = getSelectedCitationStyle();
  const bibliography = records
    .sort((a, b) => String(a.authors || a.title || "").localeCompare(String(b.authors || b.title || "")))
    .map((record, index) => `${index + 1}. ${buildCitationText(record, preferredStyle)}`)
    .join("\n\n");
  downloadFile("lab-asis-bibliography.txt", bibliography, "text/plain;charset=utf-8");
}

async function autofillCitationFromDoi() {
  const doiField = document.getElementById("citation-doi");
  const urlField = document.getElementById("citation-url");
  const rawValue = doiField?.value.trim() || urlField?.value.trim() || "";
  const doi = extractDoiFromInput(rawValue);
  if (!doi) {
    showToast("Add a valid DOI first.");
    return;
  }

  const currentDraft = getCurrentCitationDraft() || {};
  let merged = normalizeCitationRecord({
    ...currentDraft,
    doi,
    url: currentDraft.url || `https://doi.org/${doi}`,
  });

  try {
    const crossrefMetadata = await fetchCrossrefCitationMetadata(doi);
    merged = mergeCitationMetadata(merged, crossrefMetadata || {});
  } catch (error) {
    console.warn("Crossref DOI lookup failed.", error);
  }

  try {
    const openAlexMetadata = await fetchOpenAlexCitationMetadata(doi);
    merged = mergeCitationMetadata(merged, openAlexMetadata || {});
  } catch (error) {
    console.warn("OpenAlex DOI lookup failed.", error);
  }

  if (!merged.title && !merged.authors && !merged.journal) {
    showToast("No metadata could be loaded from this DOI.");
    return;
  }

  merged.style = merged.style || getSelectedCitationStyle();
  merged.citationKey = merged.citationKey || buildCitationKey(merged);
  populateCitationForm(merged);
  await updateCitationDuplicateWarning();
  showToast("Citation metadata loaded from DOI.");
}

async function restoreBackupFromFile(file) {
  if (!file) {
    showToast("Choose a backup file first.");
    return;
  }

  let payload;
  try {
    payload = JSON.parse(await file.text());
  } catch (error) {
    console.error(error);
    showToast("Backup file is not valid JSON.");
    return;
  }

  if (!payload || typeof payload !== "object" || !payload.stores || typeof payload.stores !== "object") {
    showToast("Backup file is missing the expected Lab Asis data.");
    return;
  }

  const importableStores = STORES.filter((storeName) => Array.isArray(payload.stores[storeName]));
  for (const storeName of importableStores) {
    for (const record of payload.stores[storeName]) {
      await putRecord(storeName, record);
    }
  }

  if (payload.settings && typeof payload.settings === "object") {
    state.settings = {
      researcherName: "",
      researcherEmail: "",
      webhooks: {},
      ...state.settings,
      ...payload.settings,
    };
    persistSettings();
  }

  if (payload.language && LANG[payload.language]) {
    state.language = payload.language;
    localStorage.setItem("lab-asis-language", state.language);
    updateDirectionAndLanguage();
  }

  if (payload.localState?.cellDraft) {
    state.cellDraft = { ...state.cellDraft, ...payload.localState.cellDraft };
    persistCellDraft();
  }

  if (payload.localState?.timerState) {
    const restoredTimerState = getStoredTimerState(payload.localState.timerState);
    state.timerDraft = restoredTimerState.draft;
    state.activeTimers = restoredTimerState.activeTimers;
    persistTimerState();
  }

  if (payload.localState?.pomodoro) {
    state.pomodoro = { ...state.pomodoro, ...payload.localState.pomodoro };
    persistPomodoroState();
  }

  if (payload.localState?.calendarView) {
    state.calendarView = { ...state.calendarView, ...payload.localState.calendarView };
  }

  if (payload.localState?.resultFilters) {
    state.resultFilters = { ...state.resultFilters, ...payload.localState.resultFilters };
  }

  applyTranslations();
  populateSettingsFields();
  updateCellDraftUI();
  normalizeActiveTimers();
  hydrateTimerInputs();
  renderActiveTimers();
  hydratePomodoroInputs();
  updatePomodoroDisplay();
  hydrateSpectroFields();
  renderSpectroRows();
  renderResultFiltersFromState();
  await Promise.all([
    renderWorkspace(),
    renderLabNotes(),
    renderProtocols(),
    renderCellRecords(),
    renderTimerRecords(),
    renderTasks(),
    renderVoiceNotes(),
    renderSpectroRecords(),
    renderResultFiles(),
    renderPaperSummaries(),
    renderFailures(),
    renderLearnings(),
    renderArticles(),
    renderPomodoroRecords(),
    renderCalendar(),
  ]);
  showToast("Backup restored on this device.");
}

async function handleDeleteAction(target) {
  const storeName = target.dataset.deleteStore;
  const id = target.dataset.deleteId;
  if (!storeName || !id) return;
  await deleteRecord(storeName, id);
  if (storeName === "experimentRuns" && state.currentRunId === id) {
    await clearRunForm();
  }
  if (WORKSPACE_REFRESH_STORES.has(storeName)) {
    await renderWorkspace();
  }
  showToast("Record deleted.");
  await refreshLists(storeName);
}

async function refreshLists(storeName) {
  switch (storeName) {
    case "experimentRuns":
      await renderExperimentRuns();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "labNotes":
      await renderLabNotes();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "protocols":
      await renderProtocols();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "cellCounts":
      await renderCellRecords();
      break;
    case "timers":
      await renderTimerRecords();
      break;
    case "tasks":
      await renderTasks();
      await renderDecisionAssistant();
      break;
    case "voiceNotes":
      await renderVoiceNotes();
      break;
    case "spectroTables":
      await renderSpectroRecords();
      break;
    case "resultFiles":
      await renderResultFiles();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "paperSummaries":
      await renderPaperSummaries();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "failures":
      await renderFailures();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "learnings":
      await renderLearnings();
      break;
    case "articles":
      await renderArticles();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "citations":
      await renderCitations();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    case "pomodoro":
      await renderPomodoroRecords();
      break;
    case "calendar":
      await renderCalendar();
      await renderResearchTimeline();
      await renderDecisionAssistant();
      break;
    default:
      break;
  }
}

async function attachStaticHandlers() {
  document.querySelectorAll("[data-open-screen]").forEach((button) => {
    button.addEventListener("click", () => openScreen(button.dataset.openScreen));
  });

  const bindSection = (label, binders) => {
    try {
      binders();
    } catch (error) {
      console.warn(`Skipped handler section: ${label}`, error);
    }
  };

  bindSection("install", () => {
    document.getElementById("install-app").addEventListener("click", async () => {
      if (!state.deferredPrompt) return;
      state.deferredPrompt.prompt();
      await state.deferredPrompt.userChoice;
      state.deferredPrompt = null;
      document.getElementById("install-app").classList.add("hidden");
    });

    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      state.deferredPrompt = event;
      document.getElementById("install-app").classList.remove("hidden");
    });
  });

  bindSection("cell counter", () => {
    document.getElementById("cell-add-1").addEventListener("click", () => {
      state.cellDraft.totalCells += 1;
      updateCellDraftUI();
    });
    document.getElementById("cell-add-5").addEventListener("click", () => {
      state.cellDraft.totalCells += 5;
      updateCellDraftUI();
    });
    document.getElementById("cell-add-10").addEventListener("click", () => {
      state.cellDraft.totalCells += 10;
      updateCellDraftUI();
    });
    document.getElementById("cell-clear").addEventListener("click", () => {
      state.cellDraft.totalCells = 0;
      updateCellDraftUI();
    });
    document.getElementById("cell-calculate").addEventListener("click", updateCellDraftUI);
    document.getElementById("cell-squares").addEventListener("input", (event) => {
      state.cellDraft.squares = Number(event.target.value || 10);
      updateCellDraftUI();
    });
    document.getElementById("cell-dilution").addEventListener("input", (event) => {
      state.cellDraft.dilution = Number(event.target.value || 2);
      updateCellDraftUI();
    });
    document.getElementById("cell-save").addEventListener("click", async () => {
      const record = {
        id: makeId("cell"),
        totalCells: state.cellDraft.totalCells,
        squares: Number(state.cellDraft.squares || 10),
        dilution: Number(state.cellDraft.dilution || 2),
        result: formatCellResult(),
        language: state.language,
        createdAt: new Date().toISOString(),
        researcherName: state.settings.researcherName || "",
        researcherEmail: state.settings.researcherEmail || "",
      };
      await saveRecord("cellCounts", record);
      await saveRecord("experiments", { ...record, experimentType: "cell_counter", id: makeId("exp") });
      showToast("Cell count saved.");
      state.cellDraft.totalCells = 0;
      updateCellDraftUI();
      await renderCellRecords();
    });
    document.getElementById("cell-export").addEventListener("click", async () => {
      const rows = await getAllRecords("cellCounts");
      downloadCsv("lab-asis-cell-counts.csv", rows);
    });
  });

  bindSection("timers", () => {
    document.getElementById("timer-add").addEventListener("click", submitTimerDraft);
    document.getElementById("timer-draft-reset").addEventListener("click", resetTimerDraftForm);
    document.getElementById("timer-export").addEventListener("click", async () => {
      downloadCsv("lab-asis-timers.csv", await getAllRecords("timers"));
    });
    ["timer-name", "timer-tag", "timer-minutes", "timer-seconds"].forEach((fieldId) => {
      document.getElementById(fieldId).addEventListener("input", syncTimerDraftFromInputs);
    });
    document.querySelectorAll("[data-timer-preset]").forEach((button) => {
      button.addEventListener("click", () => applyTimerPreset(button.dataset.timerPreset));
    });
  });

  bindSection("tasks", () => {
    document.getElementById("todo-add").addEventListener("click", async () => {
      const title = document.getElementById("todo-title").value.trim();
      if (!title) {
        showToast("Add a task title first.");
        return;
      }
      const record = {
        id: makeId("task"),
        title,
        dueDate: document.getElementById("todo-date").value || "",
        priority: document.getElementById("todo-priority").value,
        status: "Pending",
        language: state.language,
        createdAt: new Date().toISOString(),
      };
      await saveRecord("tasks", record);
      document.getElementById("todo-title").value = "";
      document.getElementById("todo-date").value = "";
      showToast("Task saved.");
      await renderTasks();
    });
    document.getElementById("todo-export").addEventListener("click", async () => {
      downloadCsv("lab-asis-tasks.csv", await getAllRecords("tasks"));
    });
  });

  document.getElementById("note-protocol").addEventListener("change", async (event) => {
    const protocol = await getProtocolChoiceByValue(event.target.value);
    if (!protocol) return;
    const experimentField = document.getElementById("note-experiment");
    const observationsField = document.getElementById("note-observations");
    const nextStepsField = document.getElementById("note-nextsteps");
    const tagsField = document.getElementById("note-tags");

    if (!experimentField.value.trim()) {
      experimentField.value = protocol.title;
    }
    if (!tagsField.value.trim() && protocol.category) {
      tagsField.value = protocol.category;
    }
    if (!observationsField.value.trim()) {
      observationsField.value = `Protocol linked: ${protocol.title}`;
    }
    if (!nextStepsField.value.trim() && protocol.steps) {
      nextStepsField.value = protocol.steps;
    }
  });

  document.getElementById("run-protocol").addEventListener("change", async (event) => {
    const protocol = await getProtocolChoiceByValue(event.target.value);
    if (!protocol) return;
    const titleField = document.getElementById("run-title");
    const objectiveField = document.getElementById("run-objective");
    const notesField = document.getElementById("run-notes");
    if (!titleField.value.trim()) {
      titleField.value = protocol.title;
    }
    if (!objectiveField.value.trim()) {
      objectiveField.value = protocol.objective || "";
    }
    if (!notesField.value.trim()) {
      notesField.value = protocol.steps || "";
    }
  });

  document.getElementById("run-start").addEventListener("click", async () => {
    const record = await saveExperimentRun({ status: "Running", createTimer: true });
    if (!record) return;
    showToast("Guided experiment run started.");
  });
  document.getElementById("run-save").addEventListener("click", async () => {
    const existingRuns = await getAllRecords("experimentRuns");
    const current = state.currentRunId ? existingRuns.find((item) => item.id === state.currentRunId) : null;
    const record = await saveExperimentRun({ status: current?.status || "Draft" });
    if (!record) return;
    showToast("Experiment run snapshot saved.");
  });
  document.getElementById("run-complete").addEventListener("click", async () => {
    const record = await saveExperimentRun({ status: "Completed", completeNow: true });
    if (!record) return;
    showToast("Experiment run completed.");
  });
  document.getElementById("run-send-note").addEventListener("click", sendCurrentRunToLabNotes);
  document.getElementById("run-new").addEventListener("click", async () => {
    await clearRunForm();
    showToast("New run form ready.");
  });
  document.getElementById("run-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-experiment-runs.csv", await getAllRecords("experimentRuns"));
  });

  document.getElementById("note-save").addEventListener("click", async () => {
    const title = document.getElementById("note-title").value.trim();
    if (!title) {
      showToast("Add a note title first.");
      return;
    }
    const protocolValue = document.getElementById("note-protocol").value;
    const linkedProtocol = await getProtocolChoiceByValue(protocolValue);
    const record = {
      id: makeId("note"),
      title,
      noteDate: document.getElementById("note-date").value || toDateInputValue(new Date()),
      experimentName: document.getElementById("note-experiment").value.trim(),
      protocolId: protocolValue || "",
      protocolTitle: linkedProtocol?.title || "",
      protocolSource: linkedProtocol?.source || "",
      tags: document.getElementById("note-tags").value.trim(),
      observations: document.getElementById("note-observations").value.trim(),
      results: document.getElementById("note-results").value.trim(),
      nextSteps: document.getElementById("note-nextsteps").value.trim(),
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("labNotes", record);
    document.getElementById("note-title").value = "";
    document.getElementById("note-date").value = toDateInputValue(new Date());
    document.getElementById("note-experiment").value = "";
    document.getElementById("note-protocol").value = "";
    document.getElementById("note-tags").value = "";
    document.getElementById("note-observations").value = "";
    document.getElementById("note-results").value = "";
    document.getElementById("note-nextsteps").value = "";
    showToast("Lab note saved.");
    await renderLabNotes();
  });
  document.getElementById("note-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-lab-notes.csv", await getAllRecords("labNotes"));
  });

  document.getElementById("protocol-save").addEventListener("click", async () => {
    const draft = getCurrentProtocolDraft();
    if (!draft?.title || draft.title === "Untitled protocol") {
      showToast("Add a protocol title first.");
      return;
    }
    const record = {
      id: makeId("protocol"),
      ...draft,
    };
    try {
      await saveRecord("protocols", record);
      document.getElementById("protocol-title").value = "";
      document.getElementById("protocol-category").value = "Cell Culture";
      document.getElementById("protocol-objective").value = "";
      document.getElementById("protocol-materials").value = "";
      document.getElementById("protocol-steps").value = "";
      document.getElementById("protocol-duration").value = "";
      document.getElementById("protocol-safety").value = "";
      showToast("Protocol saved.");
      await renderProtocols();
    } catch (error) {
      console.error(error);
      showToast(`Protocol save failed: ${error?.message || "unknown error"}`);
    }
  });
  document.getElementById("protocol-export").addEventListener("click", async () => {
    const savedProtocols = await getAllRecords("protocols");
    if (savedProtocols.length) {
      downloadCsv("lab-asis-protocols.csv", savedProtocols);
      return;
    }
    const draft = getCurrentProtocolDraft();
    if (draft) {
      downloadCsv("lab-asis-protocols.csv", [draft]);
      return;
    }
    showToast("Save or fill one protocol first.");
  });

  document.getElementById("voice-save").addEventListener("click", async () => {
    const fileInput = document.getElementById("voice-file");
    const file = fileInput.files?.[0];
    if (!file) {
      showToast("Choose an audio file first.");
      return;
    }
    const audioData = await fileToDataUrl(file);
    const record = {
      id: makeId("voice"),
      experimentName: document.getElementById("voice-experiment").value.trim(),
      notes: document.getElementById("voice-notes").value.trim(),
      audioName: file.name,
      audioData,
      transcriptLanguage: document.getElementById("voice-transcript-language").value,
      transcript: document.getElementById("voice-transcript").value.trim(),
      summary: document.getElementById("voice-summary").value.trim(),
      evidence: document.getElementById("voice-evidence").value.trim(),
      verifiedTranscript: document.getElementById("voice-verified").checked,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("voiceNotes", record, {
      id: record.id,
      experimentName: record.experimentName,
      notes: record.notes,
      audioName: record.audioName,
      transcriptLanguage: record.transcriptLanguage,
      transcript: record.transcript,
      summary: record.summary,
      evidence: record.evidence,
      verifiedTranscript: record.verifiedTranscript,
      language: record.language,
      createdAt: record.createdAt,
    });
    document.getElementById("voice-experiment").value = "";
    document.getElementById("voice-notes").value = "";
    document.getElementById("voice-transcript").value = "";
    document.getElementById("voice-summary").value = "";
    document.getElementById("voice-evidence").value = "";
    document.getElementById("voice-verified").checked = false;
    document.getElementById("voice-file").value = "";
    showToast("Voice note saved.");
    await renderVoiceNotes();
  });
  document.getElementById("voice-template").addEventListener("click", () => {
    const summaryField = document.getElementById("voice-summary");
    if (!summaryField.value.trim()) {
      summaryField.value = VOICE_SUMMARY_TEMPLATE;
    }
    showToast("Voice summary template loaded.");
  });
  document.getElementById("voice-export").addEventListener("click", async () => {
    const rows = (await getAllRecords("voiceNotes")).map((record) => ({
      id: record.id,
      experimentName: record.experimentName,
      notes: record.notes,
      audioName: record.audioName,
      transcriptLanguage: record.transcriptLanguage,
      transcript: record.transcript,
      summary: record.summary,
      evidence: record.evidence,
      verifiedTranscript: record.verifiedTranscript ? "Yes" : "No",
      language: record.language,
      createdAt: record.createdAt,
    }));
    downloadCsv("lab-asis-voice-notes.csv", rows);
  });

  document.getElementById("photo-file").addEventListener("change", (event) => {
    state.photoFile = event.target.files?.[0] || null;
    state.photoEnhancedDataUrl = "";
    const preview = document.getElementById("photo-preview");
    const enhancedPreview = document.getElementById("photo-enhanced-preview");
    const status = document.getElementById("photo-status");
    if (!state.photoFile) {
      preview.classList.add("hidden");
      if (enhancedPreview) {
        enhancedPreview.classList.add("hidden");
        enhancedPreview.removeAttribute("src");
      }
      status.textContent = t("no_image_selected");
      return;
    }
    preview.src = URL.createObjectURL(state.photoFile);
    preview.classList.remove("hidden");
    if (enhancedPreview) {
      enhancedPreview.classList.add("hidden");
      enhancedPreview.removeAttribute("src");
    }
    status.textContent = `${state.photoFile.name} selected. Use OCR or build an OD table.`;
    if (!document.getElementById("spectro-title").value.trim()) {
      state.spectroDraft.title = stripFileExtension(state.photoFile.name);
      hydrateSpectroFields();
    }
  });
  document.getElementById("photo-extract").addEventListener("click", async () => {
    if (!state.photoFile) {
      showToast("Choose an image first.");
      return;
    }
    try {
      await extractCleanTextFromPhoto();
      showToast("Cleaner OCR extracted.");
    } catch (error) {
      document.getElementById("photo-output").value = "";
      showToast("OCR is unavailable right now. Use the GroupDocs button.");
      console.error(error);
    }
  });
  document.getElementById("photo-extract-od").addEventListener("click", async () => {
    if (!state.photoFile) {
      showToast("Choose a spectro image first.");
      return;
    }
    try {
      const extractedText =
        document.getElementById("photo-output").value.trim() || (await extractCleanTextFromPhoto());
      state.spectroDraft.rows = parseSpectroDraftFromText(extractedText);
      syncSpectroMetaFromInputs();
      if (!state.spectroDraft.title) {
        state.spectroDraft.title = stripFileExtension(state.photoFile.name);
      }
      renderSpectroRows();
      hydrateSpectroFields();
      showToast(`${getFilledSpectroRows().length} OD rows ready to review.`);
    } catch (error) {
      showToast("The OD table could not be prepared from this image yet.");
      console.error(error);
    }
  });
  document.getElementById("photo-open-groupdocs").addEventListener("click", () => {
    const openedWindow = window.open(GROUPDOCS_IMAGE_TO_SPREADSHEET_URL, "_blank", "noreferrer");
    if (!openedWindow) {
      showToast("Allow pop-ups to open GroupDocs.");
    }
  });
  document.getElementById("photo-export").addEventListener("click", () => {
    const text = document.getElementById("photo-output").value.trim();
    if (!text) {
      showToast("Extract text first.");
      return;
    }
    const rows = text.split("\n").map((line) => ({ ExtractedText: line }));
    downloadCsv("lab-asis-photo-ocr.csv", rows);
  });

  ["spectro-title", "spectro-project", "spectro-notes"].forEach((fieldId) => {
    document.getElementById(fieldId).addEventListener("input", syncSpectroMetaFromInputs);
  });

  document.getElementById("spectro-add-row").addEventListener("click", () => {
    state.spectroDraft.rows.push(createEmptySpectroRow());
    renderSpectroRows();
  });

  document.getElementById("spectro-normalize").addEventListener("click", () => {
    state.spectroDraft.rows = state.spectroDraft.rows.map((row) =>
      createEmptySpectroRow({
        ...row,
        od1: normalizeDecimalCellValue(row.od1),
        od2: normalizeDecimalCellValue(row.od2),
        od3: normalizeDecimalCellValue(row.od3),
      })
    );
    renderSpectroRows();
    showToast("Decimals normalized.");
  });

  document.getElementById("spectro-save").addEventListener("click", async () => {
    syncSpectroMetaFromInputs();
    const rows = getFilledSpectroRows();
    if (!rows.length) {
      showToast("Add at least one OD row first.");
      return;
    }
    const record = {
      id: makeId("spectro"),
      title: state.spectroDraft.title || stripFileExtension(state.photoFile?.name || "od-table"),
      project: state.spectroDraft.project || "",
      notes: state.spectroDraft.notes || "",
      rows,
      sourceImageName: state.photoFile?.name || "",
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("spectroTables", record, {
      id: record.id,
      title: record.title,
      project: record.project,
      notes: record.notes,
      rowCount: rows.length,
      rowsJson: JSON.stringify(rows),
      sourceImageName: record.sourceImageName,
      language: record.language,
      createdAt: record.createdAt,
    });
    state.spectroDraft.rows = [createEmptySpectroRow()];
    state.spectroDraft.notes = "";
    renderSpectroRows();
    hydrateSpectroFields();
    showToast("OD table saved.");
    await renderSpectroRecords();
  });

  document.getElementById("spectro-export").addEventListener("click", () => {
    syncSpectroMetaFromInputs();
    const rows = getFilledSpectroRows();
    if (!rows.length) {
      showToast("Build or type an OD table first.");
      return;
    }
    downloadCsv(
      `lab-asis-od-table-${stripFileExtension(state.spectroDraft.title || "spectro")}.csv`,
      buildSpectroCsvRows({
        title: state.spectroDraft.title,
        project: state.spectroDraft.project,
        notes: state.spectroDraft.notes,
        rows,
        sourceImageName: state.photoFile?.name || "",
        createdAt: new Date().toISOString(),
      })
    );
  });

  document.getElementById("spectro-rows").addEventListener("input", (event) => {
    const rowElement = event.target.closest("[data-spectro-row]");
    if (!rowElement || !event.target.dataset.spectroField) return;
    const rowIndex = Number(rowElement.dataset.spectroRow);
    const fieldName = event.target.dataset.spectroField;
    const row = state.spectroDraft.rows[rowIndex];
    if (!row) return;
    row[fieldName] = event.target.value;
  });

  document.getElementById("result-save").addEventListener("click", async () => {
    const fileInput = document.getElementById("result-file");
    const file = fileInput.files?.[0];
    if (!file) {
      showToast("Choose a result file first.");
      return;
    }
    const title = document.getElementById("result-title").value.trim() || stripFileExtension(file.name);
    const fileData = await fileToDataUrl(file);
    const record = {
      id: makeId("result"),
      project: document.getElementById("result-project").value.trim(),
      title,
      resultType: document.getElementById("result-type").value,
      orderLabel: document.getElementById("result-order").value.trim(),
      tags: document.getElementById("result-tags").value.trim(),
      notes: document.getElementById("result-notes").value.trim(),
      fileName: file.name,
      fileType: file.type || "application/octet-stream",
      fileSize: file.size || 0,
      fileData,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("resultFiles", record, {
      id: record.id,
      project: record.project,
      title: record.title,
      resultType: record.resultType,
      orderLabel: record.orderLabel,
      tags: record.tags,
      notes: record.notes,
      fileName: record.fileName,
      fileType: record.fileType,
      fileSize: record.fileSize,
      language: record.language,
      createdAt: record.createdAt,
    });
    document.getElementById("result-project").value = "";
    document.getElementById("result-title").value = "";
    document.getElementById("result-order").value = "";
    document.getElementById("result-tags").value = "";
    document.getElementById("result-notes").value = "";
    fileInput.value = "";
    showToast("Result stored in the vault.");
    await renderResultFiles();
  });

  document.getElementById("result-export").addEventListener("click", async () => {
    const rows = (await getAllRecords("resultFiles")).map((record) => ({
      Project: record.project || "",
      Title: record.title || "",
      ResultType: record.resultType || "",
      OrderLabel: record.orderLabel || "",
      Tags: record.tags || "",
      Notes: record.notes || "",
      FileName: record.fileName || "",
      FileType: record.fileType || "",
      FileSize: formatFileSize(record.fileSize),
      CreatedAt: record.createdAt || "",
    }));
    downloadCsv("lab-asis-results-vault.csv", rows);
  });

  document.getElementById("result-filter-type").addEventListener("change", async (event) => {
    state.resultFilters.type = event.target.value;
    await renderResultFiles();
  });

  document.getElementById("result-filter-project").addEventListener("input", async (event) => {
    state.resultFilters.project = event.target.value;
    await renderResultFiles();
  });

  document.getElementById("workspace-search").addEventListener("input", async (event) => {
    state.searchFilters.workspace = event.target.value;
    await renderWorkspace();
  });

  document.getElementById("todo-search").addEventListener("input", async (event) => {
    state.searchFilters.tasks = event.target.value;
    await renderTasks();
  });

  document.getElementById("note-search").addEventListener("input", async (event) => {
    state.searchFilters.notes = event.target.value;
    await renderLabNotes();
  });

  document.getElementById("protocol-search").addEventListener("input", async (event) => {
    state.searchFilters.protocols = event.target.value;
    await renderProtocols();
  });

  addListenerIfPresent("paper-search", "input", async (event) => {
    state.searchFilters.papers = event.target.value;
    await renderPaperSummaries();
  });

  addListenerIfPresent("citation-search", "input", async (event) => {
    state.searchFilters.citations = event.target.value;
    await renderCitations();
  });

  [
    "citation-title",
    "citation-authors",
    "citation-year",
    "citation-journal",
    "citation-doi",
    "citation-url",
    "citation-key",
    "citation-project",
    "citation-chapter",
  ].forEach((fieldId) => {
    addListenerIfPresent(fieldId, "input", () => {
      updateCitationDuplicateWarning();
    });
  });

  addListenerIfPresent("citation-style", "change", () => {
    updateCitationDuplicateWarning();
  });

  addListenerIfPresent("citation-autofill-doi", "click", autofillCitationFromDoi);

  document.getElementById("paper-template").addEventListener("click", async () => {
    const sourceField = document.getElementById("paper-source-text");
    let sourceText = sourceField.value.trim();
    const pdfFile = document.getElementById("paper-file").files?.[0] || null;

    if (!sourceText && pdfFile) {
      try {
        sourceField.value = "Extracting text from PDF...";
        sourceText = await extractTextFromPdfFile(pdfFile);
        if (sourceText) {
          sourceField.value = sourceText;
        } else {
          sourceField.value = "";
        }
      } catch (error) {
        console.error(error);
        sourceField.value = "";
        showToast(`PDF text extraction failed: ${error?.message || "unknown error"}`);
        return;
      }
    }

    if (!sourceText) {
      sourceField.value = "Paste the abstract or exact paper passage used for this summary here.";
      if (!document.getElementById("paper-findings").value.trim()) {
        document.getElementById("paper-findings").value = PAPER_SUMMARY_TEMPLATE;
      }
      showToast("This PDF may be scanned or image-based. Paste the abstract text, then try again.");
      return;
    }
    const draft = buildPaperDraftFromSourceText(sourceText);
    if (!draft) {
      showToast("The source text is too short to summarize.");
      return;
    }
    applyPaperDraftToFields(draft, { onlyIfEmpty: false });
    showToast("Draft paper summary created. Review it before saving.");
  });

  document.getElementById("paper-save").addEventListener("click", async () => {
    const title = document.getElementById("paper-title").value.trim();
    if (!title) {
      showToast("Add a paper title first.");
      return;
    }
    let sourceText = document.getElementById("paper-source-text").value.trim();
    const summaryFields = [
      "paper-question",
      "paper-model",
      "paper-methods",
      "paper-findings",
      "paper-limitations",
      "paper-importance",
      "paper-quotes",
    ];
    const hasSummaryContent = summaryFields.some((id) => document.getElementById(id).value.trim());
    const pdfFile = document.getElementById("paper-file").files?.[0] || null;
    if (!sourceText && pdfFile) {
      try {
        showToast("Reading text from PDF...");
        sourceText = await extractTextFromPdfFile(pdfFile);
        if (sourceText) {
          document.getElementById("paper-source-text").value = sourceText;
        }
      } catch (error) {
        console.error(error);
      }
    }
    if (!hasSummaryContent && sourceText) {
      applyPaperDraftToFields(buildPaperDraftFromSourceText(sourceText), { onlyIfEmpty: false });
    }
    const stillEmpty = summaryFields.every((id) => !document.getElementById(id).value.trim());
    if (stillEmpty && !sourceText) {
      showToast("The attached PDF may not contain readable text. Paste the abstract or paper text first.");
      return;
    }
    const pdfData = pdfFile ? await fileToDataUrl(pdfFile) : "";
    const record = {
      id: makeId("paper"),
      title,
      authors: document.getElementById("paper-authors").value.trim(),
      url: document.getElementById("paper-url").value.trim(),
      pdfName: pdfFile?.name || "",
      pdfType: pdfFile?.type || "",
      pdfSize: pdfFile?.size || 0,
      pdfData,
      sourceText: document.getElementById("paper-source-text").value.trim(),
      question: document.getElementById("paper-question").value.trim(),
      model: document.getElementById("paper-model").value.trim(),
      methods: document.getElementById("paper-methods").value.trim(),
      findings: document.getElementById("paper-findings").value.trim(),
      limitations: document.getElementById("paper-limitations").value.trim(),
      importance: document.getElementById("paper-importance").value.trim(),
      quotes: document.getElementById("paper-quotes").value.trim(),
      verified: document.getElementById("paper-verified").checked,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("paperSummaries", record, {
      id: record.id,
      title: record.title,
      authors: record.authors,
      url: record.url,
      pdfName: record.pdfName,
      pdfType: record.pdfType,
      pdfSize: record.pdfSize,
      question: record.question,
      model: record.model,
      methods: record.methods,
      findings: record.findings,
      limitations: record.limitations,
      importance: record.importance,
      quotes: record.quotes,
      verified: record.verified,
      language: record.language,
      createdAt: record.createdAt,
    });
    [
      "paper-title",
      "paper-authors",
      "paper-url",
      "paper-source-text",
      "paper-question",
      "paper-model",
      "paper-methods",
      "paper-findings",
      "paper-limitations",
      "paper-importance",
      "paper-quotes",
    ].forEach((id) => {
      document.getElementById(id).value = "";
    });
    document.getElementById("paper-verified").checked = false;
    document.getElementById("paper-file").value = "";
    showToast("PDF summary saved.");
    await renderPaperSummaries();
  });

  document.getElementById("paper-export").addEventListener("click", async () => {
    const rows = (await getAllRecords("paperSummaries")).map((record) => ({
      Title: record.title || "",
      Authors: record.authors || "",
      URL: record.url || "",
      PdfName: record.pdfName || "",
      SourceText: record.sourceText || "",
      Question: record.question || "",
      Model: record.model || "",
      Methods: record.methods || "",
      Findings: record.findings || "",
      Limitations: record.limitations || "",
      Importance: record.importance || "",
      Quotes: record.quotes || "",
      Verified: record.verified ? "Yes" : "No",
      CreatedAt: record.createdAt || "",
    }));
    downloadCsv("lab-asis-pdf-summaries.csv", rows);
  });

  addListenerIfPresent("paper-citation", "click", () => {
    const hasPaperSource = [
      document.getElementById("paper-title").value.trim(),
      document.getElementById("paper-authors").value.trim(),
      document.getElementById("paper-url").value.trim(),
    ].some(Boolean);
    if (!hasPaperSource) {
      showToast("Add paper details first, then prepare the citation.");
      return;
    }
    const draft = buildCitationDraftFromPaperForm();
    populateCitationForm(draft);
    updateCitationDuplicateWarning();
    openScreen("citations");
    showToast("Paper details loaded into Citation Vault.");
  });

  document.getElementById("failure-save").addEventListener("click", async () => {
    const what = document.getElementById("failure-what").value.trim();
    const why = document.getElementById("failure-why").value.trim();
    const solution = document.getElementById("failure-solution").value.trim();
    if (!what || !why || !solution) {
      showToast("Fill in all failure fields first.");
      return;
    }
    const record = {
      id: makeId("failure"),
      what,
      why,
      solution,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("failures", record);
    document.getElementById("failure-what").value = "";
    document.getElementById("failure-why").value = "";
    document.getElementById("failure-solution").value = "";
    showToast("Failure saved.");
    await renderFailures();
  });
  document.getElementById("failure-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-failures.csv", await getAllRecords("failures"));
  });

  document.getElementById("learning-save").addEventListener("click", async () => {
    const text = document.getElementById("learning-text").value.trim();
    if (!text) {
      showToast("Write what you learned first.");
      return;
    }
    const record = {
      id: makeId("learn"),
      text,
      category: document.getElementById("learning-category").value,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("learnings", record);
    document.getElementById("learning-text").value = "";
    showToast("Learning saved.");
    await renderLearnings();
  });
  document.getElementById("learning-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-learnings.csv", await getAllRecords("learnings"));
  });

  document.getElementById("converter-run").addEventListener("click", updateConverterResult);

  document.getElementById("article-save").addEventListener("click", async () => {
    const title = document.getElementById("article-title").value.trim();
    const url = document.getElementById("article-url").value.trim();
    if (!title || !url) {
      showToast("Add article title and URL first.");
      return;
    }
    const record = {
      id: makeId("article"),
      title,
      authors: document.getElementById("article-authors")?.value.trim() || "",
      journal: document.getElementById("article-journal")?.value.trim() || "",
      url,
      summary: document.getElementById("article-summary").value.trim(),
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("articles", record);
    if (document.getElementById("article-authors")) document.getElementById("article-authors").value = "";
    if (document.getElementById("article-journal")) document.getElementById("article-journal").value = "";
    document.getElementById("article-title").value = "";
    document.getElementById("article-url").value = "";
    document.getElementById("article-summary").value = "";
    showToast("Article saved.");
    await renderArticles();
  });
  addListenerIfPresent("article-citation", "click", () => {
    const hasArticleSource = [
      document.getElementById("article-title").value.trim(),
      document.getElementById("article-authors").value.trim(),
      document.getElementById("article-url").value.trim(),
    ].some(Boolean);
    if (!hasArticleSource) {
      showToast("Add article details first, then prepare the citation.");
      return;
    }
    const draft = buildCitationDraftFromArticleForm();
    populateCitationForm(draft);
    updateCitationDuplicateWarning();
    openScreen("citations");
    showToast("Article details loaded into Citation Vault.");
  });
  document.getElementById("article-export").addEventListener("click", async () => {
    const rows = (await getAllRecords("articles")).map((record) => ({
      Title: record.title || "",
      Authors: record.authors || "",
      Journal: record.journal || "",
      URL: record.url || "",
      Summary: record.summary || "",
      CreatedAt: record.createdAt || "",
    }));
    downloadCsv("lab-asis-articles.csv", rows);
  });

  addListenerIfPresent("citation-save", "click", async () => {
    const draft = getCurrentCitationDraft();
    if (!draft?.title) {
      showToast("Add a source title before saving the citation.");
      return;
    }
    const isEditing = Boolean(draft.id);
    const record = normalizeCitationRecord({
      id: draft.id || makeId("cite"),
      ...draft,
      createdAt: new Date().toISOString(),
    });
    const duplicate = findDuplicateCitation(record, await getAllRecords("citations"));
    if (duplicate) {
      populateCitationForm(duplicate);
      await updateCitationDuplicateWarning();
      showToast("Duplicate detected. Existing citation loaded instead of saving another copy.");
      await renderCitations();
      return;
    }
    await saveRecord("citations", record, {
      ...record,
      bibliography: buildCitationText(record, record.style),
      bibtex: buildBibtexEntry(record),
      latex: buildLatexCite(record),
    });
    clearCitationForm();
    await updateCitationDuplicateWarning();
    showToast(isEditing ? "Citation updated." : "Citation saved.");
    await renderCitations();
  });

  addListenerIfPresent("citation-copy", "click", async () => {
    const draft = getCurrentCitationDraft() || getLatestSavedRecord(await getAllRecords("citations"));
    if (!draft) {
      showToast("Add or save a citation first.");
      return;
    }
    await copyCitationOutput(draft, "bibliography");
  });

  addListenerIfPresent("citation-copy-cite", "click", async () => {
    const draft = getCurrentCitationDraft() || getLatestSavedRecord(await getAllRecords("citations"));
    if (!draft) {
      showToast("Add or save a citation first.");
      return;
    }
    await copyCitationOutput(draft, "latex");
  });

  addListenerIfPresent("citation-copy-bibtex", "click", async () => {
    const draft = getCurrentCitationDraft() || getLatestSavedRecord(await getAllRecords("citations"));
    if (!draft) {
      showToast("Add or save a citation first.");
      return;
    }
    await copyCitationOutput(draft, "bibtex");
  });

  addListenerIfPresent("citation-export-bib", "click", exportCitationBibtexFile);
  addListenerIfPresent("citation-export-text", "click", exportCitationBibliographyText);
  addListenerIfPresent("citation-export-csv", "click", async () => {
    const rows = (await getAllRecords("citations")).map((record) => ({
      Title: record.title || "",
      Authors: record.authors || "",
      Year: record.year || "",
      Journal: record.journal || "",
      DOI: record.doi || "",
      URL: record.url || "",
      Style: record.style || "apa",
      Project: record.project || "",
      Chapter: record.chapter || "",
      CitationKey: record.citationKey || "",
      UsedIn: record.usedIn || "",
      UsedFor: record.usedFor || "",
      Evidence: record.evidence || "",
      Notes: record.notes || "",
      LinkedSourceType: record.linkedSourceType || "",
      LinkedSourceLabel: record.linkedSourceLabel || "",
      CreatedAt: record.createdAt || "",
    }));
    downloadCsv("lab-asis-citations.csv", rows);
  });

  document.getElementById("calendar-prev").addEventListener("click", () => {
    state.calendarView.month -= 1;
    if (state.calendarView.month < 0) {
      state.calendarView.month = 11;
      state.calendarView.year -= 1;
    }
    renderCalendar();
  });
  document.getElementById("calendar-next").addEventListener("click", () => {
    state.calendarView.month += 1;
    if (state.calendarView.month > 11) {
      state.calendarView.month = 0;
      state.calendarView.year += 1;
    }
    renderCalendar();
  });
  document.getElementById("calendar-save").addEventListener("click", async () => {
    const title = document.getElementById("calendar-title").value.trim();
    const date = document.getElementById("calendar-date").value;
    if (!title || !date) {
      showToast("Add event title and date first.");
      return;
    }
    const record = {
      id: makeId("calendar"),
      title,
      date,
      time: document.getElementById("calendar-time").value || "",
      notes: document.getElementById("calendar-notes").value.trim(),
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("calendar", record);
    document.getElementById("calendar-title").value = "";
    document.getElementById("calendar-time").value = "";
    document.getElementById("calendar-notes").value = "";
    state.calendarView.selectedDate = date;
    showToast("Calendar event saved.");
    await renderCalendar();
  });
  document.getElementById("calendar-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-calendar.csv", await getAllRecords("calendar"));
  });

  document.getElementById("pomodoro-start").addEventListener("click", () => {
    if (state.pomodoro.running) return;
    state.pomodoro.alertVisible = false;
    state.pomodoro.alertType = "";
    state.pomodoro.endAt = Date.now() + state.pomodoro.remainingSeconds * 1000;
    state.pomodoro.running = true;
    persistPomodoroState();
    updatePomodoroDisplay();
  });
  document.getElementById("pomodoro-pause").addEventListener("click", () => {
    if (!state.pomodoro.running) return;
    state.pomodoro.remainingSeconds = Math.max(0, Math.ceil((state.pomodoro.endAt - Date.now()) / 1000));
    state.pomodoro.running = false;
    state.pomodoro.endAt = null;
    persistPomodoroState();
    updatePomodoroDisplay();
  });
  document.getElementById("pomodoro-reset").addEventListener("click", () => {
    state.pomodoro.phase = "work";
    state.pomodoro.remainingSeconds = getPomodoroPhaseDuration("work");
    state.pomodoro.running = false;
    state.pomodoro.endAt = null;
    state.pomodoro.sessionsCompleted = 0;
    state.pomodoro.alertVisible = false;
    state.pomodoro.alertType = "";
    persistPomodoroState();
    hydratePomodoroInputs();
    updatePomodoroDisplay();
  });
  document.getElementById("pomodoro-apply").addEventListener("click", () => {
    applyPomodoroSettings({ restartCurrentPhase: true, preserveSessions: true });
    showToast("Pomodoro times updated.");
  });
  ["pomodoro-work-minutes", "pomodoro-break-minutes"].forEach((fieldId) => {
    document.getElementById(fieldId).addEventListener("change", () => {
      if (state.pomodoro.running) return;
      applyPomodoroSettings({ restartCurrentPhase: true, preserveSessions: true });
    });
  });
  document.querySelectorAll("[data-pomodoro-preset]").forEach((button) => {
    button.addEventListener("click", () => {
      applyPomodoroPreset(button.dataset.pomodoroPreset);
      showToast("Pomodoro preset applied.");
    });
  });
  document.getElementById("pomodoro-save").addEventListener("click", async () => {
    const record = {
      id: makeId("pomodoro"),
      phase: state.pomodoro.phase,
      sessionsCompleted: state.pomodoro.sessionsCompleted,
      workDurationSeconds: state.pomodoro.workDurationSeconds,
      breakDurationSeconds: state.pomodoro.breakDurationSeconds,
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("pomodoro", record);
    showToast("Pomodoro sessions saved.");
    await renderPomodoroRecords();
  });
  document.getElementById("pomodoro-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-pomodoro.csv", await getAllRecords("pomodoro"));
  });

  document.querySelectorAll(".language-choice").forEach((button) => {
    button.addEventListener("click", async () => {
      state.language = button.dataset.language;
      state.cellDraft.language = state.language;
      localStorage.setItem("lab-asis-language", state.language);
      updateDirectionAndLanguage();
      applyTranslations();
      renderActiveTimers();
      updatePomodoroDisplay();
      await renderTasks();
      await renderLabNotes();
      await renderProtocols();
      await renderCellRecords();
      await renderTimerRecords();
      await renderSpectroRecords();
      await renderResultFiles();
      await renderPaperSummaries();
      await renderWorkspace();
      await renderLearnings();
      await renderFailures();
      await renderArticles();
      await renderCitations();
      await renderPomodoroRecords();
      await renderCalendar();
      showToast(`Language set to ${LANG[state.language]}.`);
    });
  });

  document.getElementById("settings-save-profile").addEventListener("click", () => {
    state.settings.researcherName = document.getElementById("settings-name").value.trim();
    state.settings.researcherEmail = document.getElementById("settings-email").value.trim();
    persistSettings();
    showToast("Profile saved.");
  });

  document.getElementById("settings-save-webhooks").addEventListener("click", () => {
    state.settings.webhooks = {
      labNotes: document.getElementById("webhook-labNotes").value.trim(),
      protocols: document.getElementById("webhook-protocols").value.trim(),
      cellCounts: document.getElementById("webhook-cellCounts").value.trim(),
      experiments: document.getElementById("webhook-experiments").value.trim(),
      experimentRuns: document.getElementById("webhook-experimentRuns").value.trim(),
      tasks: document.getElementById("webhook-tasks").value.trim(),
      failures: document.getElementById("webhook-failures").value.trim(),
      learnings: document.getElementById("webhook-learnings").value.trim(),
      articles: document.getElementById("webhook-articles").value.trim(),
      citations: document.getElementById("webhook-citations")?.value.trim() || "",
      voiceNotes: document.getElementById("webhook-voiceNotes").value.trim(),
      spectroTables: document.getElementById("webhook-spectroTables").value.trim(),
      resultFiles: document.getElementById("webhook-resultFiles").value.trim(),
      paperSummaries: document.getElementById("webhook-paperSummaries").value.trim(),
      pomodoro: document.getElementById("webhook-pomodoro").value.trim(),
      calendar: document.getElementById("webhook-calendar").value.trim(),
      timers: document.getElementById("webhook-timers").value.trim(),
    };
    persistSettings();
    applyTranslations();
    showToast("Sync settings saved.");
  });

  document.getElementById("settings-export-backup").addEventListener("click", exportAllBackup);
  document.getElementById("settings-copy-link").addEventListener("click", async () => {
    const copied = await copyText(getAppShareUrl());
    showToast(copied ? "App link copied." : "Copy failed.");
  });
  document.getElementById("settings-share-link").addEventListener("click", shareAppLink);
  document.getElementById("settings-import-backup").addEventListener("click", async () => {
    const file = document.getElementById("settings-import-backup-file").files?.[0];
    await restoreBackupFromFile(file);
  });

  document.getElementById("run-search").addEventListener("input", (event) => {
    state.searchFilters.runs = event.target.value || "";
    renderExperimentRuns();
  });
  document.getElementById("timeline-focus").addEventListener("input", (event) => {
    state.searchFilters.timeline = event.target.value || "";
    renderResearchTimeline();
  });
  document.getElementById("timeline-refresh").addEventListener("click", renderResearchTimeline);
  document.getElementById("assistant-generate").addEventListener("click", renderDecisionAssistant);
  document.getElementById("assistant-clear").addEventListener("click", async () => {
    document.getElementById("assistant-focus").value = "";
    await renderDecisionAssistant();
  });

  document.body.addEventListener("click", async (event) => {
    const target = event.target;
    const delegatedScreenButton = target.closest(".search-result-button[data-open-screen]");
    if (delegatedScreenButton) {
      openScreen(delegatedScreenButton.dataset.openScreen);
      return;
    }
    const pomodoroOpenScreen = target.closest("[data-pomodoro-open-screen]");
    if (pomodoroOpenScreen) {
      openScreen(pomodoroOpenScreen.dataset.pomodoroOpenScreen || "pomodoro");
      return;
    }
    const pomodoroDismiss = target.closest("[data-pomodoro-dismiss]");
    if (pomodoroDismiss) {
      dismissPomodoroAlert();
      return;
    }
    const timerOpenScreen = target.closest("[data-timer-open-screen]");
    if (timerOpenScreen) {
      openScreen(timerOpenScreen.dataset.timerOpenScreen || "timer");
      return;
    }
    const dismissTimer = target.closest("[data-timer-dismiss]");
    if (dismissTimer) {
      dismissTimerAlert(dismissTimer.dataset.timerDismiss);
      return;
    }
    const dismissAllTimers = target.closest("[data-timer-dismiss-all]");
    if (dismissAllTimers) {
      dismissAllTimerAlerts();
      return;
    }
    const timerAction = target.closest("[data-timer-action]");
    if (timerAction) {
    const timerId = timerAction.dataset.timerId;
    const action = timerAction.dataset.timerAction;
      if (action === "edit") {
        loadTimerIntoDraft(timerId);
      } else if (action === "start") {
        startActiveTimer(timerId);
      } else if (action === "pause") {
        pauseActiveTimer(timerId);
      } else if (action === "reset") {
        resetActiveTimer(timerId);
      } else if (action === "save") {
        await saveTimerLog(timerId);
      } else if (action === "delete") {
        deleteActiveTimer(timerId);
      }
      return;
    }
    const pdfButton = target.closest("[data-export-pdf]");
    if (pdfButton) {
      await exportStoreToPdf(pdfButton.dataset.exportPdf, pdfButton.dataset.exportTitle || "Lab Asis Report");
      return;
    }
    const spectroRemove = target.closest("[data-spectro-remove]");
    if (spectroRemove) {
      const rowIndex = Number(spectroRemove.dataset.spectroRemove);
      state.spectroDraft.rows.splice(rowIndex, 1);
      if (!state.spectroDraft.rows.length) {
        state.spectroDraft.rows = [createEmptySpectroRow()];
      }
      renderSpectroRows();
      return;
    }
    const spectroLoad = target.closest("[data-spectro-load]");
    if (spectroLoad) {
      const records = await getAllRecords("spectroTables");
      const record = records.find((item) => item.id === spectroLoad.dataset.spectroLoad);
      if (!record) return;
      state.spectroDraft = {
        title: record.title || "",
        project: record.project || "",
        notes: record.notes || "",
        rows: cloneSpectroRows(record.rows || [createEmptySpectroRow()]),
      };
      hydrateSpectroFields();
      renderSpectroRows();
      openScreen("photo");
      showToast("Saved OD table loaded into the editor.");
      return;
    }
    const spectroExport = target.closest("[data-spectro-export-id]");
    if (spectroExport) {
      const records = await getAllRecords("spectroTables");
      const record = records.find((item) => item.id === spectroExport.dataset.spectroExportId);
      if (!record) return;
      downloadCsv(
        `lab-asis-od-table-${stripFileExtension(record.title || "spectro")}.csv`,
        buildSpectroCsvRows(record)
      );
      return;
    }
    const resultOpen = target.closest("[data-result-open]");
    if (resultOpen) {
      const records = await getAllRecords("resultFiles");
      const record = records.find((item) => item.id === resultOpen.dataset.resultOpen);
      if (!record?.fileData) return;
      if (/^(image\/|text\/|application\/pdf)/.test(record.fileType || "")) {
        window.open(record.fileData, "_blank", "noreferrer");
      } else {
        triggerDataDownload(record.fileData, record.fileName || `${record.title || "lab-asis-result"}`);
      }
      return;
    }
    const resultDownload = target.closest("[data-result-download]");
    if (resultDownload) {
      const records = await getAllRecords("resultFiles");
      const record = records.find((item) => item.id === resultDownload.dataset.resultDownload);
      if (!record?.fileData) return;
      triggerDataDownload(record.fileData, record.fileName || `${record.title || "lab-asis-result"}`);
      return;
    }
    const articleCitation = target.closest("[data-article-citation]");
    if (articleCitation) {
      const records = await getAllRecords("articles");
      const record = records.find((item) => item.id === articleCitation.dataset.articleCitation);
      if (!record) return;
      populateCitationForm(buildCitationDraftFromArticleRecord(record));
      await updateCitationDuplicateWarning();
      openScreen("citations");
      showToast("Article loaded into Citation Vault.");
      return;
    }
    const citationLoad = target.closest("[data-citation-load]");
    if (citationLoad) {
      const records = await getAllRecords("citations");
      const record = records.find((item) => item.id === citationLoad.dataset.citationLoad);
      if (!record) return;
      populateCitationForm(record);
      await updateCitationDuplicateWarning();
      openScreen("citations");
      showToast("Citation loaded into the editor.");
      return;
    }
    const citationCopy = target.closest("[data-citation-copy]");
    if (citationCopy) {
      const records = await getAllRecords("citations");
      const record = records.find((item) => item.id === citationCopy.dataset.citationCopy);
      await copyCitationOutput(record, "bibliography");
      return;
    }
    const citationCopyCite = target.closest("[data-citation-copy-cite]");
    if (citationCopyCite) {
      const records = await getAllRecords("citations");
      const record = records.find((item) => item.id === citationCopyCite.dataset.citationCopyCite);
      await copyCitationOutput(record, "latex");
      return;
    }
    const citationCopyBibtex = target.closest("[data-citation-copy-bibtex]");
    if (citationCopyBibtex) {
      const records = await getAllRecords("citations");
      const record = records.find((item) => item.id === citationCopyBibtex.dataset.citationCopyBibtex);
      await copyCitationOutput(record, "bibtex");
      return;
    }
    const paperOpen = target.closest("[data-paper-open]");
    if (paperOpen) {
      const records = await getAllRecords("paperSummaries");
      const record = records.find((item) => item.id === paperOpen.dataset.paperOpen);
      if (!record?.pdfData) return;
      window.open(record.pdfData, "_blank", "noreferrer");
      return;
    }
    const paperCitation = target.closest("[data-paper-citation]");
    if (paperCitation) {
      const records = await getAllRecords("paperSummaries");
      const record = records.find((item) => item.id === paperCitation.dataset.paperCitation);
      if (!record) return;
      populateCitationForm(buildCitationDraftFromPaperRecord(record));
      await updateCitationDuplicateWarning();
      openScreen("citations");
      showToast("Paper summary loaded into Citation Vault.");
      return;
    }
    const paperDownload = target.closest("[data-paper-download]");
    if (paperDownload) {
      const records = await getAllRecords("paperSummaries");
      const record = records.find((item) => item.id === paperDownload.dataset.paperDownload);
      if (!record?.pdfData) return;
      triggerDataDownload(record.pdfData, record.pdfName || `${record.title || "lab-asis-paper"}.pdf`);
      return;
    }
    const deleteButton = target.closest("[data-delete-store]");
    if (deleteButton) {
      await handleDeleteAction(deleteButton);
      return;
    }
    const taskToggle = target.closest("[data-task-toggle]");
    if (taskToggle) {
      const id = taskToggle.dataset.taskToggle;
      const tasks = await getAllRecords("tasks");
      const task = tasks.find((item) => item.id === id);
      if (!task) return;
      task.status = task.status === "Done" ? "Pending" : "Done";
      await saveRecord("tasks", task);
      await renderTasks();
      return;
    }
    const calendarButton = target.closest("[data-calendar-date]");
    if (calendarButton) {
      state.calendarView.selectedDate = calendarButton.dataset.calendarDate;
      await renderCalendar();
      return;
    }
    const protocolButton = target.closest("[data-use-protocol]");
    if (protocolButton) {
      const id = protocolButton.dataset.useProtocol;
      const protocols = await getAllRecords("protocols");
      const protocol = protocols.find((item) => item.id === id);
      if (!protocol) return;
      document.getElementById("note-title").value = `${protocol.title} - Lab Note`;
      document.getElementById("note-date").value = toDateInputValue(new Date());
      document.getElementById("note-experiment").value = protocol.title;
      document.getElementById("note-tags").value = protocol.category || "";
      document.getElementById("note-observations").value = `Protocol loaded from: ${protocol.title}`;
      document.getElementById("note-results").value = "";
      document.getElementById("note-nextsteps").value = protocol.steps || "";
      await renderProtocolOptions(id);
      openScreen("notes");
      showToast("Protocol loaded into a new lab note.");
      return;
    }
    const runLoadButton = target.closest("[data-run-load]");
    if (runLoadButton) {
      const records = await getAllRecords("experimentRuns");
      const record = records.find((item) => item.id === runLoadButton.dataset.runLoad);
      if (!record) return;
      await populateRunForm(record);
      openScreen("runs");
      showToast("Experiment run loaded into the builder.");
      return;
    }
    const runNoteButton = target.closest("[data-run-note]");
    if (runNoteButton) {
      const records = await getAllRecords("experimentRuns");
      const record = records.find((item) => item.id === runNoteButton.dataset.runNote);
      if (!record) return;
      await populateRunForm(record);
      await sendCurrentRunToLabNotes();
    }
  });
}

async function bootstrap() {
  state.db = await openDb();
  loadSettings();
  state.language = localStorage.getItem("lab-asis-language") || "en";
  updateDirectionAndLanguage();
  applyTranslations();
  populateSettingsFields();
  await attachStaticHandlers();
  const safeBootstrapStep = async (label, task) => {
    try {
      await task();
    } catch (error) {
      console.warn(`Bootstrap step failed: ${label}`, error);
    }
  };

  await safeBootstrapStep("cell draft ui", async () => updateCellDraftUI());
  await safeBootstrapStep("default note date", async () => ensureDefaultNoteDate());
  await safeBootstrapStep("active timers", async () => {
    normalizeActiveTimers();
    hydrateTimerInputs();
    renderActiveTimers();
  });
  await safeBootstrapStep("pomodoro", async () => {
    hydratePomodoroInputs();
    updatePomodoroDisplay();
  });
  await safeBootstrapStep("converter", async () => updateConverterResult());
  await safeBootstrapStep("spectro draft", async () => {
    hydrateSpectroFields();
    renderSpectroRows();
  });
  await safeBootstrapStep("run form", async () => clearRunForm());
  await safeBootstrapStep("result filters", async () => renderResultFiltersFromState());

  startMainTimerLoop();
  startPomodoroLoop();

  await Promise.allSettled([
    renderWorkspace(),
    renderExperimentRuns(),
    renderResearchTimeline(),
    renderDecisionAssistant(),
    renderLabNotes(),
    renderProtocols(),
    renderCellRecords(),
    renderTimerRecords(),
    renderTasks(),
    renderVoiceNotes(),
    renderSpectroRecords(),
    renderResultFiles(),
    renderPaperSummaries(),
    renderFailures(),
    renderLearnings(),
    renderArticles(),
    renderCitations(),
    renderPomodoroRecords(),
    renderCalendar(),
  ]);
  openScreenFromQuery();

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch((error) => console.error(error));
  }
}

bootstrap().catch((error) => {
  console.error(error);
  showToast(`App failed to load: ${error?.message || "unknown error"}`);
});
