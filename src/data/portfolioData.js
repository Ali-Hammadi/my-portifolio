import caseStudies from './caseStudies';

export const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/Ali-Hammadi', icon: 'fa-brands fa-github' },
    { label: 'WhatsApp', href: 'https://wa.me/963937472856', icon: 'fa-brands fa-whatsapp' },
    { label: 'Telegram', href: 'https://t.me/aliehammadi', icon: 'fa-brands fa-telegram' },
    { label: 'Email', href: 'mailto:hamadea524@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aliehammadi?utm_source=share_via&utm_content=profile&utm_medium=member_android', icon: 'fa-brands fa-linkedin' },
];

export const projectCatalog = {
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

export const projectList = [
    { id: 'telmi', title: 'Telmi', cover: '/images/telmi/mockup_telmi.jpeg', short: { en: 'A special-needs daily-life support app with smart routines and communication tools.', ar: 'تطبيق لدعم الروتين اليومي والتواصل للأشخاص ذوي الاحتياجات الخاصة.' } },
    { id: 'tfouki', title: 'Tfouki', cover: '/images/tfouki/mockup_tfouki.jpeg', short: { en: 'School app designed to manage students, schedules, and academic operations efficiently.', ar: 'تطبيق تعليمي لإدارة الطلاب والجدول الدراسي والمهام الدراسية بسهولة.' } },
    { id: 'afiete', title: 'Afiete', cover: '/images/afiete/afiete_mockup.jpeg', short: { en: 'Mental health and care platform for doctors and patients with appointments, medication tracking, and follow-ups.', ar: 'منصة صحية نفسية للرعاية الطبية للطبيب والمريض مع المواعيد وتتبّع الأدوية والمتابعة.' } },
];

export const initialFeedback = [
    { name: 'Sarah', role: 'Product Owner', message: 'The work is polished, professional, and very easy to use. The mobile experience feels premium and thoughtful.' },
    { name: 'Mohammed', role: 'Client', message: 'Very clear interfaces and strong attention to details. The app feels reliable and modern on every screen.' },
    { name: 'Lina', role: 'Teacher', message: 'The design is clean, consistent, and functional. It makes complex information easy to understand for users.' },
];

export const skillGroups = ( text ) => [
    { title: text.skill_cat_1, items: [ 'Flutter', 'Dart', 'BLoC / Cubit', 'GetX' ] },
    { title: text.skill_cat_2, items: [ 'Django', 'Python', 'REST APIs', 'Firebase', 'SQLite' ] },
    { title: text.skill_cat_3, items: [ 'Clean Architecture', 'Git / GitHub', 'Postman', 'Responsive UI' ] },
];
