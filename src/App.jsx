import { useEffect, useState } from 'react';
import caseStudies from './caseStudies';

const translations = {
  en: {
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_exp: 'Experience',
    nav_contact: 'Contact',
    hero_title: 'Ali Hammadi',
    hero_desc:
      'Professional Software Engineer specializing in high-performance mobile application development with Flutter and Django, with extensive experience designing and implementing Clean Architecture, managing application state with BLoC, and integrating Firebase and Firestore to deliver smooth, reliable user experiences.',
    hero_btn_contact: 'Contact Me',
    hero_cv: 'Download CV',
    location: 'Homs, Syria',
    about_heading: 'About Me',
    about_text:
      'Professional Software Engineer specializing in high-quality mobile applications and scalable digital solutions. I design and implement performant cross-platform apps with Flutter and Django, using Clean Architecture and BLoC/Cubit for maintainable code and predictable state management, while integrating Firebase and Firestore to deliver smooth, reliable user experiences.',
    skills_heading: 'Technical Skills',
    skill_cat_1: 'Mobile & Frameworks',
    skill_cat_2: 'Backend & Databases',
    skill_cat_3: 'Architecture & Tools',
    projects_heading: 'Featured Projects',
    proj_telmi_desc:
      'An all-in-one mobile application designed to manage weekly routines and assist people with special needs, communication/speech difficulties, and the elderly. Features real-time call features, notification scheduling, and routine tracking.',
    proj_tfouki_desc:
      'A dedicated educational mobile application built for structured learning content and interactive student experiences. Features adaptive UI layout across all mobile devices, dynamic data integration, and offline data access via SQLite.',
    exp_heading: 'Experience',
    exp_1_title: 'Freelance Flutter Developer',
    exp_1_desc:
      'Designed and developed scalable mobile apps using Clean Architecture, BLoC/Cubit, and integrated Django backends with Firebase real-time chat systems.',
    exp_2_title: 'Freelance Flutter Instructor',
    exp_2_date: 'Homs, Syria',
    exp_2_desc:
      'Trained students on Flutter development, UI design, state management, and real-world API deployment.',
    edu_heading: 'Education & Certification',
    edu_1_title: 'Bachelor of IT Engineering',
    edu_1_desc: 'Al-Ba\'ath University, Homs, Syria',
    contact_heading: 'Get In Touch',
    contact_sub: 'Feel free to reach out for project collaborations or technical inquiries.',
    feedback_heading: 'Comments & Feedback',
    feedback_tag: 'People trust the work',
    feedback_name: 'Your name',
    feedback_email: 'Your email',
    feedback_message: 'Your feedback',
    feedback_pending: 'Thank you. Your feedback was sent for review.',
    send_feedback: 'Send Feedback',
    close: 'Close',
    case_study: 'Case Study',
    overview: 'Project Overview',
    problem: 'The Problem',
    solution: 'The Solution',
    role: 'My Role',
    tech_stack: 'Tech Stack',
    architecture: 'Architecture',
    challenges: 'Challenges & Lessons Learned',
    highlights: 'Project Highlights',
    outcome: 'Outcome',
  },
  ar: {
    nav_about: 'عنّي',
    nav_skills: 'المهارات',
    nav_projects: 'المشاريع',
    nav_exp: 'الخبرات',
    nav_contact: 'تواصل معي',
    hero_title: 'علي حمادي',
    hero_desc:
      'مهندس برمجيات محترف متخصص في تطوير تطبيقات الهواتف المحمولة عالية الأداء باستخدام Flutter وDjango، مع خبرة واسعة في تصميم وتنفيذ Clean Architecture وإدارة الحالة باستخدام BLoC، بالإضافة إلى التكامل مع Firebase وFirestore لضمان تجربة مستخدم سلسة وموثوقة.',
    hero_btn_contact: 'تواصل معي',
    hero_cv: 'تحميل السيرة الذاتية',
    location: 'حمص، سوريا',
    about_heading: 'عنّي',
    about_text:
      'مهندس برمجيات محترف متخصص في بناء تطبيقات الهواتف المحمولة وحلول رقمية عالية الجودة. أعمل على تصميم وتنفيذ تطبيقات متعددة المنصات باستخدام Flutter وDjango، مع تطبيق Clean Architecture وإدارة الحالة باستخدام BLoC/Cubit، والتكامل مع Firebase وFirestore لبناء تجارب سلسة وموثوقة وقابلة للتوسع.',
    skills_heading: 'المهارات التقنية',
    skill_cat_1: 'تطوير الجوال وأطر العمل',
    skill_cat_2: 'الأنظمة الخلفية وقواعد البيانات',
    skill_cat_3: 'الهندسة والأدوات',
    projects_heading: 'أبرز المشاريع',
    proj_telmi_desc:
      'تطبيق متكامل لإدارة الجداول الأسبوعية ومساعدة ذوي الاحتياجات الخاصة، ومن يعانون من مشاكل النطق والتواصل، وكبار السن. يتضمن ميزات إشعار المهام المجدولة وإجراء المكالمات وتتبع الأنشطة اليومية.',
    proj_tfouki_desc:
      'تطبيق تعليمي موجه لعرض المحتوى التعليمي بطريقة منظمة وتفاعلية. يتميز بواجهات متكيفة مع جميع الشاشات ودعم العمل بدون إنترنت بفضل التخزين المحلي عبر SQLite.',
    exp_heading: 'الخبرة العملية',
    exp_1_title: 'مطور Flutter مستقل',
    exp_1_desc:
      'تصميم وتطوير تطبيقات جوال متكاملة بتركيز على Clean Architecture وإدارة الحالة بـ BLoC/Cubit، وبناء وتكامل الأنظمة الخلفية عبر Django ونظم المراسلة اللحظية بـ Firebase.',
    exp_2_title: 'مدرب Flutter مستقل',
    exp_2_date: 'حمص، سوريا',
    exp_2_desc:
      'تدريب الطلاب على تطوير التطبيقات باستخدام Flutter، وتدريس تصميم الواجهات، إدارة الحالة، وربط الواجهات البرمجية.',
    edu_heading: 'التعليم والشهادات',
    edu_1_title: 'بكالوريوس هندسة تكنولوجيا المعلومات',
    edu_1_desc: 'جامعة البعث، حمص، سوريا',
    contact_heading: 'تواصل معي',
    contact_sub: 'لا تتردد في التواصل معي لأي استفسارات أو فرص عمل ومشاريع مشتركة.',
    feedback_heading: 'التعليقات والملاحظات',
    feedback_tag: 'الناس تثق بالأعمال',
    feedback_name: 'اسمك',
    feedback_email: 'بريدك الإلكتروني',
    feedback_message: 'ملاحظتك',
    feedback_pending: 'شكرًا لك. تم إرسال ملاحظتك للمراجعة وستظهر بعد اعتمادها.',
    send_feedback: 'إرسال الملاحظات',
    close: 'إغلاق',
    case_study: 'دراسة الحالة',
    overview: 'نبذة عن المشروع',
    problem: 'المشكلة',
    solution: 'الحل',
    role: 'دوري في المشروع',
    tech_stack: 'التقنيات المستخدمة',
    architecture: 'المعمارية البرمجية',
    challenges: 'التحديات والدروس المستفادة',
    highlights: 'أبرز أرقام وميزات المشروع',
    outcome: 'النتيجة',
  },
};

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Ali-Hammadi', icon: 'fa-brands fa-github' },
  { label: 'WhatsApp', href: 'https://wa.me/963937472856', icon: 'fa-brands fa-whatsapp' },
  { label: 'Telegram', href: 'https://t.me/aliehammadi', icon: 'fa-brands fa-telegram' },
  { label: 'Email', href: 'mailto:hamadea524@gmail.com', icon: 'fa-solid fa-envelope' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aliehammadi?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'fa-brands fa-linkedin' },
];

const projectCatalog = {
  telmi: {
    name: 'Telmi',
    cover: '/images/telmi/mockup_telmi.jpeg',
    caseStudy: caseStudies.telmi,
    summary: {
      en: 'A personal productivity and care platform designed to support daily routines, communication, reminders, and wellness for people with special needs, seniors, and busy families.',
      ar: 'منصة شخصية تهدف إلى تنظيم الروتين اليومي، دعم التواصل، التذكير، وتعزيز الجودة الحياتية للأشخاص ذوي الاحتياجات الخاصة وكبار السن والعائلات المشغولة.',
    },
    gallery: [
      '/images/telmi/photo_1_2026-10-01_12-00-45.jpeg',
      '/images/telmi/photo_2_2026-10-01_12-00-45.jpeg',
      '/images/telmi/photo_3_2026-10-01_12-00-45.jpeg',
      '/images/telmi/photo_4_2026-10-01_12-00-45.jpeg',
      '/images/telmi/photo_5_2026-10-01_12-00-45.jpeg',
      '/images/telmi/photo_6_2026-10-01_12-00-45.jpeg',
    ],
  },
  tfouki: {
    name: 'Tfouki',
    cover: '/images/tfouki/mockup_tfouki.jpeg',
    caseStudy: caseStudies.tfouki,
    summary: {
      en: 'A school management mobile app created for educational institutions to streamline student administration, academic organization, schedules, and daily workflows in one clear experience.',
      ar: 'تطبيق لإدارة المدارس يساعد المؤسسات التعليمية على تنظيم الطلاب، الجدول الدراسي، والمهام اليومية في تجربة موحدة واضحة وسهلة الاستخدام.',
    },
    gallery: [
      '/images/tfouki/tafawwoq-educational-app-1.jpeg',
      '/images/tfouki/tafawwoq-educational-app-2.jpeg',
      '/images/tfouki/tafawwoq-educational-app-3.jpeg',
      '/images/tfouki/tafawwoq-educational-app-4.jpeg',
      '/images/tfouki/tafawwoq-educational-app-5.jpeg',
      '/images/tfouki/tafawwoq-educational-app-6.jpeg',
    ],
  },
  afiete: {
    name: 'Afiete',
    cover: '/images/afiete/afiete_mockup.jpeg',
    caseStudy: caseStudies.afiete,
    summary: {
      en: 'Afiete is a mental health and healthcare platform for doctors and patients, designed to manage appointments, patient records, medication instructions, follow-ups, and treatment schedules in a clear and secure workflow.',
      ar: 'Afiete هو نظام طبي للصحة النفسية والخدمات الصحية للمريض والطبيب، مصمم لإدارة المواعيد، ملفات المرضى، وصفات الأدوية، المتابعة، والجداول العلاجية بواجهة واضحة وآمنة.',
    },
    gallery: [
      '/images/afiete/photo_1_2026-10-01_12-23-53.jpeg',
      '/images/afiete/photo_2_2026-10-01_12-23-53.jpeg',
      '/images/afiete/photo_3_2026-10-01_12-23-53.jpeg',
      '/images/afiete/photo_4_2026-10-01_12-23-53.jpeg',
      '/images/afiete/photo_5_2026-10-01_12-23-53.jpeg',
      '/images/afiete/photo_6_2026-10-01_12-23-53.jpeg',
    ],
  },
};

const initialFeedback = [
  { name: 'Sarah', role: 'Product Owner', message: 'The work is polished, professional, and very easy to use. The mobile experience feels premium and thoughtful.' },
  { name: 'Mohammed', role: 'Client', message: 'Very clear interfaces and strong attention to details. The app feels reliable and modern on every screen.' },
  { name: 'Lina', role: 'Teacher', message: 'The design is clean, consistent, and functional. It makes complex information easy to understand for users.' },
];

function App() {
  const [lang, setLang] = useState('en');
  const [selectedProject, setSelectedProject] = useState(null);
  const [feedbacks, setFeedbacks] = useState(initialFeedback);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [feedbackNotice, setFeedbackNotice] = useState('');

  const text = translations[lang];
  const projectList = [
    {
      id: 'telmi',
      title: 'Telmi',
      cover: '/images/telmi/mockup_telmi.jpeg',
      short: lang === 'en'
        ? 'A special-needs daily-life support app with smart routines and communication tools.'
        : 'تطبيق لدعم الروتين اليومي والتواصل للأشخاص ذوي الاحتياجات الخاصة.',
    },
    {
      id: 'tfouki',
      title: 'Tfouki',
      cover: '/images/tfouki/mockup_tfouki.jpeg',
      short: lang === 'en'
        ? 'School app designed to manage students, schedules, and academic operations efficiently.'
        : 'تطبيق تعليمي لإدارة الطلاب والجدول الدراسي والمهام الدراسية بسهولة.',
    },
    {
      id: 'afiete',
      title: 'Afiete',
      cover: '/images/afiete/afiete_mockup.jpeg',
      short: lang === 'en'
        ? 'Mental health and care platform for doctors and patients with appointments, medication tracking, and follow-ups.'
        : 'منصة صحية نفسية للرعاية الطبية للطبيب والمريض مع المواعيد وتتبّع الأدوية والمتابعة.',
    },
  ];

  const activeProject = selectedProject ? projectCatalog[selectedProject] : null;
  const activeCaseStudy = activeProject?.caseStudy[lang] ?? null;

  useEffect(() => {
    document.body.style.overflow = selectedProject ? 'hidden' : 'unset';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'en' ? 'ar' : 'en';
      document.documentElement.dir = next === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = next;
      return next;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = formData.name.trim();
    const email = formData.email.trim().toLowerCase();
    const message = formData.message.trim();

    if (!name || !email || !message) return;

    const timestamp = new Date().toISOString();
    const item = {
      name,
      email,
      message,
      role: lang === 'en' ? 'User Feedback' : 'مستخدم',
      status: 'pending',
      timestamp,
    };

    try {
      const saved = JSON.parse(localStorage.getItem('portfolio-feedbacks') || '[]');
      const otherFeedbacks = saved.filter((savedItem) => savedItem.email !== email);
      localStorage.setItem('portfolio-feedbacks', JSON.stringify([item, ...otherFeedbacks].slice(0, 20)));
    } catch (error) {
      console.error('Unable to save feedback locally:', error);
    }

    const subject = encodeURIComponent(`${lang === 'en' ? 'New portfolio feedback for review' : 'ملاحظة جديدة للمراجعة'} — ${email}`);
    const body = encodeURIComponent([
      `${lang === 'en' ? 'Name' : 'الاسم'}: ${name}`,
      `${lang === 'en' ? 'Email' : 'البريد الإلكتروني'}: ${email}`,
      `${lang === 'en' ? 'Status' : 'الحالة'}: pending / بانتظار الموافقة`,
      '',
      `${lang === 'en' ? 'Message' : 'الرسالة'}:`,
      message,
    ].join('\n'));

    window.location.href = `mailto:hamadea524@gmail.com?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', message: '' });
    setFeedbackNotice(text.feedback_pending);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          <a href="#top" className="text-lg font-black tracking-[0.2em] text-indigo-400 sm:text-xl">ALI HAMMADI</a>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-300 md:flex">
            <a href="#about" className="transition hover:text-indigo-400">{text.nav_about}</a>
            <a href="#skills" className="transition hover:text-indigo-400">{text.nav_skills}</a>
            <a href="#projects" className="transition hover:text-indigo-400">{text.nav_projects}</a>
            <a href="#experience" className="transition hover:text-indigo-400">{text.nav_exp}</a>
            <a href="#contact" className="transition hover:text-indigo-400">{text.nav_contact}</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={toggleLanguage}
              className="rounded-xl border border-slate-700 bg-slate-900 px-3 py-2 text-[11px] font-semibold text-indigo-300 transition hover:bg-slate-800"
            >
              {lang === 'en' ? 'العربية' : 'English'}
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="pt-24">
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:px-6 lg:pb-20">
          <div className="grid grid-cols-[minmax(0,1fr)_auto] items-start gap-5 sm:gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-10">
            <div className="max-w-2xl">
              <h1 className="mb-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                {text.hero_title}
              </h1>
              <p className="mb-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                {text.hero_desc}
              </p>
              <div className="mb-8 flex flex-wrap gap-4">
                <a href="#contact" className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">
                  {text.hero_btn_contact}
                </a>
                <a href="/cv/my-cv.pdf" download="Ali-Hammadi-CV.pdf" className="rounded-xl border border-slate-700 bg-slate-900 px-5 py-3 font-semibold text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400">
                  {text.hero_cv}
                </a>
              </div>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-lg text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400"
                    aria-label={item.label}
                    title={item.label}
                  >
                    <i className={item.icon}></i>
                  </a>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[420px]">
              <div className="absolute inset-0 rounded-[2.5rem] bg-indigo-500/20 blur-3xl"></div>
              <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-indigo-500/30 bg-slate-900 shadow-2xl shadow-indigo-950/50 sm:h-36 sm:w-36 lg:h-[440px] lg:w-[400px]">
                <img
                  src="/images/me.jpeg"
                  alt="Ali Hammadi profile"
                  className="h-full w-full rounded-full object-cover object-center transition duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
              <span className="h-1 w-8 rounded bg-indigo-500"></span>
              <span>{text.about_heading}</span>
            </h2>
            <p className="max-w-4xl text-base leading-relaxed text-slate-300 sm:text-lg">{text.about_text}</p>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
            <span className="h-1 w-8 rounded bg-indigo-500"></span>
            <span>{text.skills_heading}</span>
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            {[{
              title: text.skill_cat_1,
              items: ['Flutter', 'Dart', 'BLoC / Cubit', 'GetX'],
            }, {
              title: text.skill_cat_2,
              items: ['Django', 'Python', 'REST APIs', 'Firebase', 'SQLite'],
            }, {
              title: text.skill_cat_3,
              items: ['Clean Architecture', 'Git / GitHub', 'Postman', 'Responsive UI'],
            }].map((card) => (
              <div key={card.title} className="rounded-3xl border border-slate-800 bg-slate-900/70 p-6">
                <h3 className="mb-4 text-lg font-semibold text-indigo-400">{card.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {card.items.map((item) => (
                    <span key={item} className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-1.5 text-sm text-slate-200">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="border-y border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
              <span className="h-1 w-8 rounded bg-indigo-500"></span>
              <span>{text.projects_heading}</span>
            </h2>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projectList.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setSelectedProject(project.id)}
                  className="group block h-full w-full text-left"
                >
                  <div className="flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-800 bg-slate-900 shadow-lg shadow-slate-950/20 transition hover:border-indigo-500/50">
                    <div className="flex aspect-[4/3] items-center justify-center rounded-[22px] bg-slate-950 p-3 sm:p-4">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="h-full w-full rounded-2xl object-contain transition duration-500 group-hover:scale-[1.02]"
                      />
                    </div>

                    <div className="flex flex-1 flex-col p-4">
                      <h3 className="mb-2 text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-sm leading-relaxed text-slate-300">{project.short}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
                <span className="h-1 w-8 rounded bg-indigo-500"></span>
                <span>{text.exp_heading}</span>
              </h2>
              <div className="space-y-6 border-l-2 border-slate-800 pl-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">Aug 2024 – Present</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{text.exp_1_title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{text.exp_1_desc}</p>
                </div>
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">{text.exp_2_date}</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{text.exp_2_title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{text.exp_2_desc}</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-8 flex items-center gap-3 text-2xl font-bold text-white sm:text-3xl">
                <span className="h-1 w-8 rounded bg-indigo-500"></span>
                <span>{text.edu_heading}</span>
              </h2>
              <div className="space-y-6 border-l-2 border-slate-800 pl-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">2021 – Expected 2027</span>
                  <h3 className="mt-2 text-lg font-semibold text-white">{text.edu_1_title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{text.edu_1_desc}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-800 bg-slate-900/70 px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white">{text.contact_heading}</h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-400">{text.contact_sub}</p>

            <div className="mb-10 flex flex-wrap justify-center gap-4">
              <a href="mailto:hamadea524@gmail.com" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400">
                <i className="fa-solid fa-envelope text-indigo-400"></i>
                hamadea524@gmail.com
              </a>
              <a href="tel:+963937472856" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400">
                <i className="fa-solid fa-phone text-indigo-400"></i>
                +963 937 472 856
              </a>
              <a href="/cv/my-cv.pdf" download="Ali-Hammadi-CV.pdf" className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900 px-4 py-3 text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400">
                <i className="fa-solid fa-download text-indigo-400"></i>
                {text.hero_cv}
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-xl text-slate-200 transition hover:border-indigo-500 hover:text-indigo-400"
                  aria-label={item.label}
                  title={item.label}
                >
                  <i className={item.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.24em] text-indigo-400">{lang === 'en' ? 'Feedback' : 'ملاحظات'}</p>
              <h2 className="text-3xl font-bold text-white">{text.feedback_heading}</h2>
            </div>
            <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">{text.feedback_tag}</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
            <form onSubmit={handleSubmit} className="rounded-[28px] border border-slate-800 bg-slate-900 p-6 shadow-lg shadow-slate-950/20">
              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_name}</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                  placeholder={lang === 'en' ? 'Enter your name' : 'اكتب اسمك'}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_email}</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                  placeholder={lang === 'en' ? 'you@example.com' : 'you@example.com'}
                  required
                />
              </div>

              <div className="mb-5">
                <label className="mb-2 block text-sm font-medium text-slate-200">{text.feedback_message}</label>
                <textarea
                  value={formData.message}
                  onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                  rows="5"
                  className="w-full rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100 outline-none transition focus:border-indigo-500"
                  placeholder={lang === 'en' ? 'Leave a message' : 'اكتب تعليقك'}
                  required
                />
              </div>

              <button type="submit" className="w-full rounded-2xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-500">
                {text.send_feedback}
              </button>
              {feedbackNotice && <p className="mt-4 text-sm leading-relaxed text-emerald-300">{feedbackNotice}</p>}
            </form>

            <div className="space-y-5">
              {feedbacks.map((item) => (
                <article key={`${item.name}-${item.message}`} className="rounded-[28px] border border-slate-800 bg-slate-900 p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/15 text-sm font-bold text-indigo-300">
                      {item.name.slice(0, 1).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-xs text-slate-400">{item.role}</p>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">“{item.message}”</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        <p>{text.location} • © 2026 Ali Hammadi</p>
      </footer>

      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-3 backdrop-blur-sm sm:p-4" onClick={() => setSelectedProject(null)}>
          <div className="max-h-[92vh] w-full max-w-5xl overflow-auto rounded-[24px] border border-slate-700 bg-slate-900 shadow-2xl shadow-slate-950/80" onClick={(event) => event.stopPropagation()}>
            <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b border-slate-800 bg-slate-900/95 px-4 py-3 backdrop-blur-sm sm:px-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">{lang === 'en' ? 'Project showcase' : 'عرض المشروع'}</p>
                <h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">{activeProject.name}</h3>
              </div>
              <button type="button" onClick={() => setSelectedProject(null)} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-700 sm:px-4 sm:text-sm">
                {text.close}
              </button>
            </div>

            <div className="p-4 sm:p-6">
              <div className="mb-6 flex flex-col gap-6">
                <div className="rounded-[28px] border border-slate-800 bg-slate-950 p-3 sm:p-4">
                  <div className="flex h-[220px] w-full items-center justify-center rounded-[22px] bg-slate-900 p-2 sm:h-[320px] md:h-[420px]">
                    <img src={activeProject.cover} alt={`${activeProject.name} cover`} className="h-full w-full rounded-2xl object-contain" />
                  </div>
                </div>

                <div className="rounded-[22px] border border-slate-800 bg-slate-950 p-5">
                  <p className="text-sm leading-relaxed text-slate-300 sm:text-base">{activeProject.summary[lang]}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {(
                      selectedProject === 'telmi'
                        ? ['Flutter', 'Daily Planning', 'Care Support', 'Mobile App']
                        : selectedProject === 'tfouki'
                          ? ['Flutter', 'Education', 'School App', 'Student Management']
                          : ['Flutter', 'Healthcare', 'Doctor Dashboard', 'Patient App']
                    ).map((tag) => (
                      <span key={tag} className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid auto-cols-[minmax(150px,1fr)] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain pb-3 snap-x sm:auto-cols-[minmax(180px,1fr)] xl:auto-cols-[minmax(0,1fr)]">
                {activeProject.gallery.map((image, index) => (
                  <div key={`${activeProject.name}-${index}`} className="flex aspect-[9/16] min-w-0 snap-start items-center justify-center overflow-hidden rounded-[26px] border border-slate-800 bg-slate-950 p-2">
                    <img src={image} alt={`${activeProject.name} screenshot ${index + 1}`} className="h-full w-full rounded-2xl object-contain" />
                  </div>
                ))}
              </div>

              {activeCaseStudy && (
                <section className="mt-10 border-t border-slate-800 pt-8">
                  <div className="mb-6">
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-indigo-400">{text.case_study}</p>
                    <h4 className="text-2xl font-bold text-white">{activeProject.name}</h4>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.overview}</h5>
                      <p className="leading-relaxed text-slate-300">{activeCaseStudy.overview}</p>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.problem}</h5>
                      <ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">
                        {activeCaseStudy.problem.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.solution}</h5>
                      <p className="text-sm leading-relaxed text-slate-300">{activeCaseStudy.solution}</p>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.role}</h5>
                      <p className="leading-relaxed text-slate-300">{activeCaseStudy.role}</p>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2">
                      <h5 className="mb-4 text-lg font-semibold text-indigo-300">{text.tech_stack}</h5>
                      <div className="flex flex-wrap gap-2">
                        {activeCaseStudy.stack.map((item) => (
                          <span key={item} className="rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3 py-1.5 text-xs font-medium text-indigo-200">{item}</span>
                        ))}
                      </div>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5 md:col-span-2">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.architecture}</h5>
                      <p className="leading-relaxed text-slate-300">{activeCaseStudy.architecture}</p>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.challenges}</h5>
                      <ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">
                        {activeCaseStudy.challenges.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>

                    <article className="rounded-[22px] border border-slate-800 bg-slate-950 p-5">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-300">{text.highlights}</h5>
                      <ul className="list-disc space-y-2 ps-5 text-sm leading-relaxed text-slate-300">
                        {activeCaseStudy.highlights.map((item) => <li key={item}>{item}</li>)}
                      </ul>
                    </article>

                    <article className="rounded-[22px] border border-indigo-500/20 bg-indigo-500/10 p-5 md:col-span-2">
                      <h5 className="mb-3 text-lg font-semibold text-indigo-200">{text.outcome}</h5>
                      <p className="leading-relaxed text-slate-200">{activeCaseStudy.outcome}</p>
                    </article>
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
