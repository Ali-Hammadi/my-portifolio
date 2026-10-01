const caseStudies = {
    telmi: {
        en: {
            overview: 'Telmi is a Flutter-powered communication and support ecosystem for children with speech and communication challenges, including children with ASD and speech delays. It combines a parent mobile application with a child smartwatch application for communication, safety, and personalized daily support.',
            problem: [
                'Children may struggle to express their needs and communicate verbally.',
                'Parents need reliable ways to communicate with their child, monitor location, and organize daily routines.',
                'The solution required secure device pairing and real-time synchronization between the phone and smartwatch.',
            ],
            solution: 'Telmi connects the parent mobile app and child smartwatch through Firebase services and cloud infrastructure. It provides visual AAC communication with more than 120 icons, support for 8 languages, audio playback, parent-created content, secure WebRTC video calls, live location tracking, routines, reminders, notifications, and QR-based pairing.',
            role: 'Telmi was developed as a team project, and the available case study describes the team contribution rather than assigning individual responsibilities. The team built the connected Flutter applications, integrated Firebase services, implemented synchronization, WebRTC communication, AAC features, multilingual support, QR pairing, location tracking, and smartwatch updates.',
            stack: [
                'Flutter', 'Dart', 'Flutter Wear OS', 'Firebase Authentication', 'Cloud Firestore',
                'Realtime Database', 'FCM', 'Firebase Storage', 'Cloud Functions', 'WebRTC',
                'Firebase Signaling', 'OpenStreetMap', 'BLoC / Cubit', 'GetIt',
            ],
            architecture: 'The system follows Clean Architecture and Repository Pattern to separate business logic from data sources and technical details. BLoC/Cubit manages application state, while GetIt handles dependency management. Cloud Firestore Transactions support reliable and synchronized QR-based device pairing.',
            challenges: [
                'Building two connected Flutter applications as one ecosystem.',
                'Maintaining real-time synchronization between the mobile application and smartwatch.',
                'Integrating multiple Firebase services and WebRTC signaling.',
                'Handling continuous location updates and secure device-to-account pairing.',
                'Designing a multilingual and customizable AAC experience focused on accessibility.',
            ],
            highlights: [ 'Two connected Flutter applications', '8 supported languages', '120+ AAC icons', 'Live location tracking', 'WebRTC video communication', 'Wear OS integration' ],
            outcome: 'Telmi brings communication, safety, accessibility, and personalized daily support together in one connected ecosystem for children and their parents.',
        },
        ar: {
            overview: 'Telmi هو نظام تواصل ومساندة رقمية مبني باستخدام Flutter، صُمم لمساعدة الأطفال الذين يواجهون تحديات في النطق والتواصل، بما في ذلك الأطفال ضمن طيف التوحد وتأخر الكلام. يتكون النظام من تطبيق للوالدين وتطبيق للساعة الذكية الخاصة بالطفل لتوفير التواصل والأمان والدعم اليومي المخصص.',
            problem: [
                'يواجه بعض الأطفال صعوبة في التعبير عن احتياجاتهم والتواصل اللفظي.',
                'يحتاج الوالدان إلى وسيلة موثوقة للتواصل مع الطفل ومتابعة موقعه وتنظيم روتينه اليومي.',
                'كان من الضروري توفير ربط آمن بين الأجهزة ومزامنة لحظية بين الهاتف والساعة الذكية.',
            ],
            solution: 'يربط Telmi بين تطبيق الوالدين وتطبيق الساعة الذكية عبر خدمات Firebase والبنية السحابية. يوفر النظام تواصلًا بصريًا باستخدام AAC مع أكثر من 120 رمزًا، ودعم 8 لغات، وتشغيل الصوت، وإضافة محتوى مخصص، ومكالمات فيديو آمنة عبر WebRTC، وتتبع الموقع، والروتين والتذكيرات، والإشعارات، والربط باستخدام QR.',
            role: 'كان Telmi مشروعًا جماعيًا، والدراسة المتوفرة تصف مساهمة الفريق ككل ولا تنسب مسؤوليات فردية محددة. شمل عمل الفريق بناء تطبيقي Flutter مترابطين، ودمج خدمات Firebase، وتنفيذ المزامنة، وتكامل WebRTC، ووظائف AAC، ودعم اللغات، وربط الأجهزة عبر QR، وتتبع الموقع، وتحديثات الساعة الذكية.',
            stack: [
                'Flutter', 'Dart', 'Flutter Wear OS', 'Firebase Authentication', 'Cloud Firestore',
                'Realtime Database', 'FCM', 'Firebase Storage', 'Cloud Functions', 'WebRTC',
                'Firebase Signaling', 'OpenStreetMap', 'BLoC / Cubit', 'GetIt',
            ],
            architecture: 'يعتمد النظام على Clean Architecture وRepository Pattern لفصل منطق الأعمال عن مصادر البيانات والتفاصيل التقنية. تم استخدام BLoC/Cubit لإدارة حالات التطبيق، وGetIt لإدارة الاعتماديات، بينما تضمن Cloud Firestore Transactions تنفيذ ربط الأجهزة عبر QR بطريقة متزامنة وآمنة.',
            challenges: [
                'بناء تطبيقين مترابطين باستخدام Flutter ضمن منظومة واحدة.',
                'الحفاظ على المزامنة اللحظية بين تطبيق الهاتف والساعة الذكية.',
                'دمج خدمات Firebase المتعددة مع WebRTC وآلية الإشارة.',
                'التعامل مع تحديثات الموقع المستمرة وربط الجهاز بالحساب بأمان.',
                'بناء نظام AAC متعدد اللغات وقابل للتخصيص مع التركيز على سهولة الوصول.',
            ],
            highlights: [ 'تطبيقان Flutter مترابطان', 'دعم 8 لغات', 'أكثر من 120 رمز AAC', 'تتبع مباشر للموقع', 'مكالمات فيديو عبر WebRTC', 'تكامل Wear OS' ],
            outcome: 'يجمع Telmi التواصل والأمان وسهولة الوصول والدعم اليومي المخصص ضمن منظومة واحدة مترابطة للأطفال ووالديهم.',
        },
    },
    tfouki: {
        en: {
            overview: 'Tafouki (School on your mobile screen) is a digital educational and examination platform that helps schools deliver private video lessons, interactive exams, and real-time student progress tracking through a structured mobile experience.',
            problem: [
                'Students need a more organized digital way to follow school curricula and assessments.',
                'Schools need timed MCQ exams categorized by subject, term, and chapter.',
                'Teachers and students need private educational video content and clear progress metrics.',
            ],
            solution: 'Tafouki organizes the student journey from learning to assessment. It supports student accounts, categorized subjects, private school-uploaded video lessons, timed multiple-choice exams, progress percentages, notes, and saved items through a Flutter mobile app connected to Django REST APIs.',
            role: 'My main responsibility was mobile application development and backend integration. I developed the Flutter application, integrated REST APIs, implemented data retrieval and CRUD operations, managed states with Cubit, applied Clean Architecture, transformed API responses into models, connected video, exam, and progress features, and tested the integration with Postman. UI/UX design was not my primary responsibility; the implementation followed Figma designs.',
            stack: [
                'Flutter', 'Dart', 'Python', 'Django', 'Django REST Framework', 'RESTful APIs',
                'PostgreSQL', 'SQLite', 'Cubit', 'Clean Architecture', 'Postman', 'pgAdmin', 'Figma',
            ],
            architecture: 'The application is separated into Data, Domain, and Presentation layers. The Data Layer handles APIs and transforms JSON into models, the Domain Layer contains entities and use cases such as score calculation and progress evaluation, and the Presentation Layer uses Cubit to coordinate video and exam states.',
            challenges: [
                'Connecting video completion with access to the related exam.',
                'Building a timed MCQ engine with immediate evaluation without affecting performance.',
                'Synchronizing local student progress with the Django backend.',
                'Keeping UI, business logic, and data sources clearly separated.',
            ],
            highlights: [ 'Private school video lessons', 'Timed MCQ exams', 'Subject-based progress tracking', 'Student notes and saved items', 'Flutter and Django integration' ],
            outcome: 'Tafouki delivers a structured mobile learning and self-assessment experience, giving students access to lessons, exams, and progress information in one platform.',
        },
        ar: {
            overview: 'تفوقي (School on your mobile screen) هو تطبيق ومنصة تعليمية وامتحانية رقمية تساعد المدارس على تقديم الدروس المصورة الخاصة والاختبارات التفاعلية وتتبع تقدم الطلاب بشكل فوري ضمن تجربة منظمة على الهاتف.',
            problem: [
                'يحتاج الطلاب إلى طريقة رقمية منظمة لمتابعة المناهج والاختبارات.',
                'تحتاج المدارس إلى اختبارات مؤقتة بنظام الاختيار من متعدد ومقسمة حسب المواد والفصول والأجزاء.',
                'يحتاج الطلاب والمدرسون إلى محتوى فيديو خاص ومؤشرات واضحة للتقدم الدراسي.',
            ],
            solution: 'ينظم تفوقي رحلة الطالب من التعلم إلى التقييم. يدعم إنشاء حسابات الطلاب، والمواد المصنفة، ودروس الفيديو الخاصة بالمدرسة، والاختبارات المؤقتة بنظام MCQ، ونسب الإنجاز، والملاحظات، والمحفوظات، من خلال تطبيق Flutter متصل بواجهات Django REST.',
            role: 'كان دوري الأساسي تطوير تطبيق الموبايل والتكامل مع الـBackend. طورت تطبيق Flutter، وربطت REST APIs، ونفذت عمليات جلب وإرسال وتحديث وحذف البيانات، وأدرت الحالات باستخدام Cubit، وطبقت Clean Architecture، وحولت استجابات API إلى Models، وربطت الفيديوهات والامتحانات وتتبع التقدم، واختبرت التكامل باستخدام Postman. لم يكن تصميم UI/UX ضمن مسؤولياتي الأساسية، بل تم اعتماد تصميمات Figma.',
            stack: [
                'Flutter', 'Dart', 'Python', 'Django', 'Django REST Framework', 'RESTful APIs',
                'PostgreSQL', 'SQLite', 'Cubit', 'Clean Architecture', 'Postman', 'pgAdmin', 'Figma',
            ],
            architecture: 'تم تقسيم التطبيق إلى طبقات Data وDomain وPresentation. تتعامل طبقة Data مع الواجهات البرمجية وتحول JSON إلى Models، وتحتوي طبقة Domain على الكيانات وحالات الاستخدام مثل حساب النتائج وتقييم التقدم، بينما تستخدم Presentation مبدأ Cubit لإدارة حالات الفيديو والاختبارات.',
            challenges: [
                'ربط إكمال مشاهدة الفيديو بإتاحة الاختبار المرتبط به.',
                'بناء نظام MCQ بمؤقت تنازلي وتقييم فوري دون التأثير على الأداء.',
                'مزامنة تقدم الطالب المحلي مع قاعدة بيانات Django.',
                'الحفاظ على فصل واضح بين الواجهة والمنطق البرمجي ومصادر البيانات.',
            ],
            highlights: [ 'دروس فيديو خاصة بالمدارس', 'اختبارات MCQ مؤقتة', 'تتبع التقدم حسب المادة', 'ملاحظات ومحفوظات للطلاب', 'تكامل Flutter مع Django' ],
            outcome: 'يقدم تفوقي تجربة تعليم وتقييم ذاتي منظمة عبر الهاتف، ويجمع الدروس والاختبارات ومعلومات التقدم في منصة واحدة.',
        },
    },
    afiete: {
        en: {
            overview: 'Afiete is a digital mental-health platform designed to make psychological support and consultations more accessible, private, and organized. It connects users with specialists and supports appointments, assessments, digital records, communication, self-care activities, and notifications.',
            problem: [
                'Users may struggle to find suitable psychological specialists and services.',
                'Mental-health services require strong privacy and confidentiality.',
                'Appointments, communication, and digital records need a more flexible and organized workflow.',
            ],
            solution: 'Afiete provides a unified journey for mental-health services, including specialist discovery, appointment booking, psychological assessments, exercises, digital records, communication, and push notifications through a Flutter mobile app backed by Django REST APIs and PostgreSQL.',
            role: 'My primary responsibility was mobile application development with strong backend integration. I developed the Flutter application, integrated REST APIs, implemented GET/POST/PUT/DELETE operations, managed states with Cubit, applied Clean Architecture, converted API data into models, connected features with backend services, tested APIs with Postman, and helped resolve integration issues. UI/UX design was not my primary responsibility.',
            stack: [
                'Flutter', 'Dart', 'Python', 'Django', 'Django REST Framework', 'RESTful APIs',
                'PostgreSQL', 'Cubit', 'Clean Architecture', 'Pushy', 'Postman', 'pgAdmin', 'Figma',
                'Draw.io', 'Visual Paradigm',
            ],
            architecture: 'Afiete separates the Data, Domain, and Presentation layers. The Data Layer handles APIs and external data, the Domain Layer contains entities, use cases, and business rules, and the Presentation Layer uses Cubit to manage loading, success, failure, and update states independently from the UI.',
            challenges: [
                'Structuring a maintainable mobile application for sensitive mental-health data.',
                'Building a reliable Flutter and Django REST API integration.',
                'Handling loading, success, failure, and data-update states clearly.',
                'Transforming backend responses into application-friendly models.',
                'Maintaining a clear data flow across Clean Architecture layers.',
            ],
            highlights: [ 'Specialist discovery', 'Appointment management', 'Psychological assessments', 'Digital records', 'Push notifications', 'Secure communication workflows' ],
            outcome: 'Afiete brings multiple mental-health services together in one organized platform and strengthened practical experience in Flutter, REST APIs, Django, Cubit, and Clean Architecture.',
        },
        ar: {
            overview: 'عافيتي (Afiete) هو تطبيق ومنصة رقمية للصحة النفسية تهدف إلى تسهيل الوصول إلى الدعم والاستشارات النفسية ضمن بيئة أكثر خصوصية وتنظيمًا. يربط المستخدمين بالأخصائيين ويدعم المواعيد والتقييمات والسجلات الرقمية والتواصل والأنشطة النفسية والإشعارات.',
            problem: [
                'صعوبة العثور على أخصائيين وخدمات نفسية مناسبة.',
                'الحاجة إلى مستوى عالٍ من الخصوصية والسرية بسبب حساسية خدمات الصحة النفسية.',
                'الحاجة إلى تنظيم المواعيد والتواصل والسجلات الرقمية ضمن سير عمل أكثر مرونة.',
            ],
            solution: 'يوفر عافيتي رحلة موحدة لخدمات الصحة النفسية، تشمل البحث عن الأخصائيين، حجز المواعيد، التقييمات والاختبارات النفسية، التمارين، السجلات الرقمية، التواصل، والإشعارات الفورية عبر تطبيق Flutter وBackend مبني باستخدام Django REST وقاعدة PostgreSQL.',
            role: 'كان دوري الأساسي تطوير تطبيق الموبايل مع مشاركة قوية في تكامل الـBackend. طورت تطبيق Flutter، وربطت REST APIs، ونفذت عمليات GET وPOST وPUT وDELETE، وأدرت الحالات باستخدام Cubit، وطبقت Clean Architecture، وحولت بيانات API إلى Models، وربطت الوظائف بخدمات الـBackend، واختبرت الواجهات باستخدام Postman، وساهمت في حل مشاكل التكامل. لم يكن تصميم UI/UX ضمن مسؤولياتي الأساسية.',
            stack: [
                'Flutter', 'Dart', 'Python', 'Django', 'Django REST Framework', 'RESTful APIs',
                'PostgreSQL', 'Cubit', 'Clean Architecture', 'Pushy', 'Postman', 'pgAdmin', 'Figma',
                'Draw.io', 'Visual Paradigm',
            ],
            architecture: 'يفصل عافيتي بين طبقات Data وDomain وPresentation. تتعامل Data مع الواجهات ومصادر البيانات الخارجية، وتحتوي Domain على الكيانات وحالات الاستخدام وقواعد العمل، بينما تستخدم Presentation مبدأ Cubit لإدارة حالات التحميل والنجاح والفشل والتحديث بعيدًا عن واجهة المستخدم.',
            challenges: [
                'تنظيم تطبيق قابل للصيانة للتعامل مع بيانات الصحة النفسية الحساسة.',
                'بناء تكامل موثوق بين Flutter وDjango REST APIs.',
                'إدارة حالات التحميل والنجاح والفشل وتحديث البيانات بوضوح.',
                'تحويل استجابات الـBackend إلى Models مناسبة للتطبيق.',
                'الحفاظ على تدفق بيانات واضح بين طبقات Clean Architecture.',
            ],
            highlights: [ 'البحث عن الأخصائيين', 'إدارة المواعيد', 'التقييمات النفسية', 'السجلات الرقمية', 'الإشعارات الفورية', 'تدفق تواصل آمن' ],
            outcome: 'يجمع عافيتي خدمات متعددة للصحة النفسية ضمن منصة منظمة واحدة، وعزز خبرتي العملية في Flutter وREST APIs وDjango وCubit وClean Architecture.',
        },
    },
};

export default caseStudies;
