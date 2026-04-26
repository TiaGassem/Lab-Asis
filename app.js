const LANG = {
  ta: "Tunisian Arabic",
  ar: "العربية",
  en: "English",
  fr: "Français",
};

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
};

const STORES = [
  "labNotes",
  "protocols",
  "cellCounts",
  "experiments",
  "tasks",
  "failures",
  "learnings",
  "articles",
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
const DB_VERSION = 4;
const GROUPDOCS_IMAGE_TO_SPREADSHEET_URL = "https://products.groupdocs.app/conversion/image-to-spreadsheet";
const PDFJS_WORKER_SRC = "https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js";

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
  resultFilters: {
    type: "",
    project: "",
  },
};

const BASE_APP_TITLE = document.title;

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

function buildPdfHtml(title, rows) {
  const createdAt = new Date().toLocaleString();
  const headers = Array.from(
    rows.reduce((set, row) => {
      Object.keys(row).forEach((key) => set.add(key));
      return set;
    }, new Set())
  );
  const tableHead = headers.map((header) => `<th>${escapeHtml(header)}</th>`).join("");
  const tableBody = rows
    .map(
      (row) =>
        `<tr>${headers
          .map((header) => `<td>${escapeHtml(row[header] == null ? "" : row[header])}</td>`)
          .join("")}</tr>`
    )
    .join("");

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
        }
        .cover {
          padding: 24px;
          border: 2px solid #00a898;
          border-radius: 20px;
          margin-bottom: 24px;
          background: linear-gradient(135deg, rgba(0,168,152,0.08), rgba(255,192,14,0.14));
        }
        h1 {
          margin: 0 0 8px;
          font-size: 2rem;
        }
        .meta {
          color: #495057;
          margin: 4px 0;
        }
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.95rem;
        }
        th, td {
          border: 1px solid #d9e0e6;
          text-align: left;
          vertical-align: top;
          padding: 10px 12px;
          word-break: break-word;
        }
        th {
          background: #eef8f7;
          color: #212529;
        }
        tr:nth-child(even) {
          background: #fafcfc;
        }
        @media print {
          body {
            margin: 14mm;
          }
          .cover {
            break-inside: avoid;
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
      <table>
        <thead>
          <tr>${tableHead}</tr>
        </thead>
        <tbody>
          ${tableBody}
        </tbody>
      </table>
    </body>
  </html>`;
}

async function getRowsForReport(storeName) {
  const rows = await getAllRecords(storeName);
  switch (storeName) {
    case "protocols":
      if (rows.length) {
        return rows.map((row) => ({
          ...row,
          source: "Saved protocol",
        }));
      }
      const draftProtocol = getCurrentProtocolDraft();
      return draftProtocol
        ? [
            {
              ...draftProtocol,
              source: "Current form draft",
            },
          ]
        : [];
    case "voiceNotes":
      return rows.map(({ audioData, ...rest }) => rest);
    case "spectroTables":
      return rows.flatMap((record) => buildSpectroCsvRows(record));
    case "resultFiles":
      return rows.map(({ fileData, ...rest }) => ({
        ...rest,
        fileSize: formatFileSize(rest.fileSize),
      }));
    case "paperSummaries":
      return rows.map(({ pdfData, ...rest }) => ({
        ...rest,
        pdfSize: formatFileSize(rest.pdfSize),
      }));
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
  setText("photo-extract", "Extract Cleaner Text");
  setText("photo-extract-od", "Build OD Table");
  setText("spectro-save", "Save OD Table");
  setText("spectro-export", "Export OD CSV");
  setText("result-save", "Save Result");
  setText("result-export", "Export Metadata CSV");
  setText("voice-template", "Load Summary Template");
  setText("paper-template", "Draft Summary");
  setText("paper-save", "Save Summary");
  setText("paper-export", "Save to Excel");
  refreshTimerDraftControls();
}

function populateSettingsFields() {
  const fieldValues = {
    "settings-name": state.settings.researcherName || "",
    "settings-email": state.settings.researcherEmail || "",
    "webhook-labNotes": state.settings.webhooks?.labNotes || "",
    "webhook-protocols": state.settings.webhooks?.protocols || "",
    "webhook-cellCounts": state.settings.webhooks?.cellCounts || "",
    "webhook-experiments": state.settings.webhooks?.experiments || "",
    "webhook-tasks": state.settings.webhooks?.tasks || "",
    "webhook-failures": state.settings.webhooks?.failures || "",
    "webhook-learnings": state.settings.webhooks?.learnings || "",
    "webhook-articles": state.settings.webhooks?.articles || "",
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
  const records = (await getAllRecords("tasks")).sort((a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No tasks yet.</div></div>`;
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

async function renderLabNotes() {
  const container = document.getElementById("note-records");
  if (!container) return;
  const records = (await getAllRecords("labNotes")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No lab notes yet.</div></div>`;
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
  const records = (await getAllRecords("protocols")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No protocols yet.</div></div>`;
    await renderProtocolOptions();
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
  const records = (await getAllRecords("paperSummaries")).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  if (!records.length) {
    container.innerHTML = `<div class="list-item"><div class="item-meta">No paper summaries yet.</div></div>`;
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
              <div class="item-title">${record.title}</div>
              <div class="item-meta">${formatDateTime(record.createdAt)}</div>
            </div>
            <button class="danger-button small-button" data-delete-store="articles" data-delete-id="${record.id}" type="button">Delete</button>
          </div>
          <div class="item-meta"><a href="${record.url}" target="_blank" rel="noreferrer">${record.url}</a></div>
          <div class="item-meta">${record.summary || ""}</div>
        </div>
      `
    )
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
  if (!metricsContainer || !summaryContainer) return;

  const [tasks, labNotes, protocols, results, papers, articles, calendarEvents] = await Promise.all([
    getAllRecords("tasks"),
    getAllRecords("labNotes"),
    getAllRecords("protocols"),
    getAllRecords("resultFiles"),
    getAllRecords("paperSummaries"),
    getAllRecords("articles"),
    getAllRecords("calendar"),
  ]);

  const pendingTasks = tasks.filter((task) => task.status !== "Done").length;
  const activeTimers = state.activeTimers.filter((timer) => !timer.completed).length;
  const upcomingEvent = calendarEvents
    .filter((event) => event.date)
    .sort((a, b) => `${a.date} ${a.time || ""}`.localeCompare(`${b.date} ${b.time || ""}`))[0];
  const latestNote = [...labNotes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const latestResult = [...results].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];
  const latestPaper = [...papers].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))[0];

  const metrics = [
    { label: "Pending Tasks", value: pendingTasks, tone: "warning" },
    { label: "Lab Notes", value: labNotes.length, tone: "info" },
    { label: "Protocols", value: protocols.length, tone: "primary" },
    { label: "Results Files", value: results.length, tone: "success" },
    { label: "Paper Summaries", value: papers.length, tone: "secondary" },
    { label: "Saved Articles", value: articles.length, tone: "primary" },
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
  document.querySelectorAll(".screen").forEach((screen) => {
    screen.classList.toggle("active", screen.id === `screen-${screenName}`);
  });

  if (screenName === "workspace") {
    renderWorkspace();
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
  const backup = { exportedAt: new Date().toISOString(), settings: state.settings, stores: {} };
  for (const storeName of STORES) {
    backup.stores[storeName] = await getAllRecords(storeName);
  }
  downloadFile(
    `lab-asis-backup-${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(backup, null, 2),
    "application/json;charset=utf-8"
  );
}

async function handleDeleteAction(target) {
  const storeName = target.dataset.deleteStore;
  const id = target.dataset.deleteId;
  if (!storeName || !id) return;
  await deleteRecord(storeName, id);
  showToast("Record deleted.");
  await refreshLists(storeName);
}

async function refreshLists(storeName) {
  switch (storeName) {
    case "labNotes":
      await renderLabNotes();
      break;
    case "protocols":
      await renderProtocols();
      break;
    case "cellCounts":
      await renderCellRecords();
      break;
    case "timers":
      await renderTimerRecords();
      break;
    case "tasks":
      await renderTasks();
      break;
    case "voiceNotes":
      await renderVoiceNotes();
      break;
    case "spectroTables":
      await renderSpectroRecords();
      break;
    case "resultFiles":
      await renderResultFiles();
      break;
    case "paperSummaries":
      await renderPaperSummaries();
      break;
    case "failures":
      await renderFailures();
      break;
    case "learnings":
      await renderLearnings();
      break;
    case "articles":
      await renderArticles();
      break;
    case "pomodoro":
      await renderPomodoroRecords();
      break;
    case "calendar":
      await renderCalendar();
      break;
    default:
      break;
  }
}

async function attachStaticHandlers() {
  document.querySelectorAll("[data-open-screen]").forEach((button) => {
    button.addEventListener("click", () => openScreen(button.dataset.openScreen));
  });

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
      url,
      summary: document.getElementById("article-summary").value.trim(),
      language: state.language,
      createdAt: new Date().toISOString(),
    };
    await saveRecord("articles", record);
    document.getElementById("article-title").value = "";
    document.getElementById("article-url").value = "";
    document.getElementById("article-summary").value = "";
    showToast("Article saved.");
    await renderArticles();
  });
  document.getElementById("article-export").addEventListener("click", async () => {
    downloadCsv("lab-asis-articles.csv", await getAllRecords("articles"));
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
      tasks: document.getElementById("webhook-tasks").value.trim(),
      failures: document.getElementById("webhook-failures").value.trim(),
      learnings: document.getElementById("webhook-learnings").value.trim(),
      articles: document.getElementById("webhook-articles").value.trim(),
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

  document.body.addEventListener("click", async (event) => {
    const target = event.target;
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
    const paperOpen = target.closest("[data-paper-open]");
    if (paperOpen) {
      const records = await getAllRecords("paperSummaries");
      const record = records.find((item) => item.id === paperOpen.dataset.paperOpen);
      if (!record?.pdfData) return;
      window.open(record.pdfData, "_blank", "noreferrer");
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
  updateCellDraftUI();
  ensureDefaultNoteDate();
  normalizeActiveTimers();
  hydrateTimerInputs();
  renderActiveTimers();
  hydratePomodoroInputs();
  updatePomodoroDisplay();
  updateConverterResult();
  hydrateSpectroFields();
  renderSpectroRows();
  renderResultFiltersFromState();
  startMainTimerLoop();
  startPomodoroLoop();
  await attachStaticHandlers();
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

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").catch((error) => console.error(error));
  }
}

bootstrap().catch((error) => {
  console.error(error);
  showToast(`App failed to load: ${error?.message || "unknown error"}`);
});
