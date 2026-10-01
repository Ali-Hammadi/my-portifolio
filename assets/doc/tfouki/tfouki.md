# Tafouki --- تفوقي

## Arabic Case Study

### نبذة عن المشروع

**Tafouki (تفوقي - School on your mobile screen)** هو تطبيق رقمي ونظام تعليمي وامتحاني متكامل يهدف إلى تسهيل العملية التعليمية للطلاب في المدارس (مثل المدارس السورية) وتمكين المدارس من تقديم محتواها التعليمي واختباراتها بصورة رقمية حديثة. يوفّر النظام بيئة تعليمية تفاعلية تجمع بين متابعة الدروس عبر مقاطع الفيديو المخصصة، وإجراء الاختبارات التفاعلية، وتتبع نسب إنجاز الطلاب وتقييم مستوياتهم.

### المشكلة

يعالج المشروع عدة مشاكل في تجربة الوصول إلى التعليم المدرسي والتقييم الامتحاني، من أبرزها:

- صعوبة متابعة المناهج والامتحانات بشكل منظم ورقمي خارج أو داخل نطاق المدرسة.
- الحاجة إلى نظام اختبارات إلكتروني دقيق يعتمد نظام الاختيار من متعدد (MCQ) ومقسم حسب المواد، الفصول، والأجزاء.
- غياب منصة تسمح للمدرسة برفع محتواها المرئي (الفيديوهات التعليمية) بشكل خاص ومستقل لكل مدرسة أو حساب.
- صعوبة تتبع الطالب لإنجازه الأكاديمي ونسب تقدمه في كل مادة دراسية بشكل فوري.
- الاعتماد على الطرق التقليدية في إجراء الاختبارات ورصد النتائج، مما يستهلك وقتاً وجهداً كبيراً.

### الحل

تم تطوير Tafouki كمنصة تعليمية رقمية شاملة تنظم رحلة الطالب التعليمية من الدراسة إلى التقييم.

اعتمد التطبيق على **Flutter وDart** لتطوير تطبيق الموبايل المتوافق مع مختلف الأجهزة، مع **Django وDjango REST Framework** لبناء الـ Backend وتوفير RESTful APIs، بالإضافة إلى **PostgreSQL / SQLite** لإدارة البيانات، واستخدام **pgAdmin** لإدارة قاعدة البيانات.

تم تنظيم التطبيق باستخدام **Clean Architecture** وتقسيمه إلى طبقات Data وDomain وPresentation، مع استخدام **Cubit** لإدارة حالات التطبيق.

ومن أبرز الوظائف التي يدعمها النظام:

- تسجيل الطلاب وإنشاء الحسابات الشخصية (الاسم، الكنية، البريد، كلمة المرور).
- استعراض المواد الدراسية المقسمة هيكلياً (مثل الرياضيات، الفيزياء، الكيمياء، الأحياء، اللغات).
- عرض مقاطع الفيديو التعليمية المرفوعة بشكل خاص لكل مدرسة أو فصل.
- إجراء امتحانات إلكترونية تفاعلية بنظام الاختيار من متعدد (MCQ) مع وجود مؤقت زمني للامتحان.
- تتبع نسبة الإنجاز والتقدم الدراسي في كل مادة وفصل.
- نظام حفظ الملاحظات والمحفوظات الخاصة بالطلاب.

### دوري في المشروع --- My Role

كان دوري الأساسي في المشروع هو **تطوير تطبيق الموبايل والتعامل بشكل قوي وفعّال مع الـ Backend**.

شملت مسؤولياتي بشكل أساسي:

- تطوير تطبيق الموبايل باستخدام **Flutter وDart**.
- تنفيذ وربط الواجهات البرمجية **REST APIs** مع تطبيق الموبايل.
- التعامل مع الـ Backend المبني باستخدام **Django وDjango REST Framework**.
- تنفيذ عمليات جلب وإرسال وتحديث وحذف البيانات من خلال الـ APIs.
- التعامل مع حالات التطبيق وإدارة الـ State باستخدام **Cubit**.
- تطبيق مبادئ **Clean Architecture** وتنظيم الكود ضمن طبقات Data وDomain وPresentation.
- التعامل مع نماذج البيانات وتحويل البيانات القادمة من الـ API إلى Models مناسبة داخل التطبيق.
- المساهمة في ربط وظائف التطبيق المختلفة (الفيديوهات، الامتحانات، وتتبع التقدم) مع خدمات الـ Backend.
- اختبار الـ APIs والتأكد من صحة التكامل بين تطبيق الموبايل والـ Backend باستخدام أدوات مثل **Postman**.
- المساهمة في حل المشاكل البرمجية المتعلقة بالتكامل بين أجزاء النظام وتحسين قابلية صيانة الكود.

**لم تكن مسؤولياتي الأساسية متعلقة بتصميم UI/UX**، حيث تم الاعتماد على تصميمات جاهزة ومصممة باستخدام **Figma**، وكان تركيزي الرئيسي على التطوير البرمجي لتطبيق الموبايل والتكامل مع الـ Backend.

### التقنيات المستخدمة

**Mobile** - Flutter - Dart

**Backend** - Python - Django - Django REST Framework (DRF) - RESTful APIs

**Database** - PostgreSQL / SQLite

**State Management** - Cubit

**Architecture** - Clean Architecture - Data Layer - Domain Layer - Presentation Layer

**Development & Testing** - Visual Studio Code - Android Studio - Postman - pgAdmin

**Design & Modeling** - Figma

### المعمارية البرمجية

تم اعتماد **Clean Architecture** بهدف فصل مسؤوليات النظام وتنظيم الكود بطريقة تسهّل تطويره وصيانته.

#### Data Layer
مسؤولة عن التعامل مع مصادر البيانات الخارجية مثل الـ APIs وقواعد البيانات، وتحويل البيانات القادمة من السيرفر (مثل أسئلة الامتحانات والفيديوهات) إلى Models يمكن للتطبيق التعامل معها.

#### Domain Layer
تحتوي على الـ Entities والـ Use Cases وقواعد العمل الأساسية، مثل احتساب نتائج الامتحانات وحساب نسبة التقدم.

#### Presentation Layer
تحتوي على واجهات التطبيق ومنطق إدارة حالة الواجهات، مع استخدام **Cubit** لإدارة حالات التطبيق للتنقل بين الفيديوهات والاختبارات.

### إدارة الحالة باستخدام Cubit

تم استخدام **Cubit** لإدارة حالات التطبيق بسبب بساطة تدفق الحالة ووضوحه، بالإضافة إلى ملاءمته لبناء تطبيق قابل للاختبار والصيانة.

يساعد هذا الأسلوب على فصل منطق التطبيق عن واجهات المستخدم، بحيث تكون عملية التعامل مع حالات مثل تشغيل الفيديوهات، تقديم الامتحان، والتحقق من الإجابات، والتحميل منظمة وواضحة.

### التعامل مع الـ Backend

كان التكامل بين تطبيق الموبايل والـ Backend جزءًا أساسيًا من دوري في المشروع.

اعتمد النظام على **Django REST Framework** لتوفير RESTful APIs، وتم التعامل مع العمليات الأساسية باستخدام HTTP methods مثل:

- `GET` لجلب المواد، الدروس، الفيديوهات، والامتحانات.
- `POST` لإرسال إجابات الامتحانات، إنشاء الحسابات، وتسجيل الدخول.
- `PUT` لتحديث بيانات الملف الشخصي ونسبة التقدم.
- `DELETE` لحذف الملاحظات أو البيانات غير المطلوبة.

### التحديات والدروس المستفادة

من طبيعة المشروع، كان من الضروري التعامل مع نظام يجمع بين مشغل فيديو، نظام اختبارات تفاعلي مؤقت، وتتبع دقيق للتقدم الأكاديمي.

أبرز الجوانب البرمجية التي تطلبت اهتمامًا كانت:

- تشغيل الفيديوهات بمرونة وربط انتهاء مشاهدة الدرس بإتاحة الاختبار الخاص به.
- بناء نظام امتحانات اختيار من متعدد مع مؤقت تنازلي وحساب فوري للنتيجة دون التأثير على أداء التطبيق.
- إدارة المزامنة بين تقدم الطالب المحلي على التطبيق وبيانات الـ Backend.
- الحفاظ على فصل واضح بين واجهة التطبيق والمنطق البرمجي ومصادر البيانات باستخدام Clean Architecture.

ومن خلال العمل على هذه الجوانب، تطورت خبرتي بشكل عملي في **Flutter، REST APIs، Django، إدارة الحالة، Clean Architecture، والتكامل بين تطبيقات الموبايل والـ Backend**.

### الأدوات والخدمات المساندة

- **Postman:** اختبار الـ APIs والتحقق من التكامل.
- **pgAdmin:** التعامل مع قواعد البيانات وإدارتها.
- **Figma:** كان مستخدمًا في جانب تصميم واجهات وتجربة المستخدم، مع كون UI/UX خارج نطاق مسؤوليتي الأساسية.

### النتيجة

نتج عن المشروع تطبيق تعليمي متكامل لـ **Tafouki** يربط الطلاب بمدارسهم ومناهجهم، مع توفير تجربة اختبارات تفاعلية وم مشاهدة فيديوهات سلسة، بناءً على تطبيق موبايل بـ Flutter وBackend بـ Django وDjango REST Framework.

وقد منحني المشروع خبرة عملية قوية في تطوير تطبيقات الموبايل، بناء وربط REST APIs، التعامل مع Backend، إدارة حالة التطبيق، وتطبيق Clean Architecture في مشروع تعليمي متكامل.

---

## English Case Study

### Project Overview

**Tafouki (School on your mobile screen)** is a comprehensive educational and examination mobile application designed to digitize school learning and testing processes. The platform enables educational institutions (such as Syrian schools) to host private video lessons, deliver interactive multiple-choice exams categorized by subjects, semesters, and chapters, and track student progress seamlessly.

### The Problem

The project addresses several key challenges in traditional and remote school education:

- Difficulty in systematically delivering school curricula and assessments digitally.
- Lack of a structured electronic testing system supporting timed Multiple Choice Questions (MCQ) categorized by subject, term, and unit.
- Need for a private media space where each school can securely host its own educational video content.
- Lack of real-time progress tracking for students to monitor their completion percentage per subject.
- Inefficiencies and time loss associated with traditional paper-based examinations.

### The Solution

Tafouki was developed as a unified mobile platform organizing the student learning journey from video instruction to self-assessment.

The mobile application was developed using **Flutter and Dart**, while the backend was built with **Python, Django, and Django REST Framework**, providing RESTful APIs. **PostgreSQL / SQLite** was used as the relational database, managed via **pgAdmin**.

The application follows **Clean Architecture**, separating the system into Data, Domain, and Presentation layers, with **Cubit** utilized for state management.

Key functional features include:

- Student account registration and authentication (First Name, Last Name, Email, Password).
- Categorized academic subjects (Mathematics, Physics, Chemistry, Biology, Languages, etc.).
- Streaming private school-uploaded video lessons per chapter.
- Interactive timed Multiple Choice Question (MCQ) exams.
- Real-time subject progress tracking and completion percentages.
- Student notes and saved items management.

### My Role

My primary responsibility in the project was **mobile application development, with strong and active involvement in backend integration**.

My main responsibilities included:

- Developing the mobile application using **Flutter and Dart**.
- Integrating **REST APIs** with the mobile application.
- Working extensively with the **Django and Django REST Framework** backend.
- Implementing data retrieval, creation, update, and deletion operations via APIs.
- Managing application state using **Cubit**.
- Applying **Clean Architecture** principles, organizing code into Data, Domain, and Presentation layers.
- Handling data models and transforming API responses into application-friendly models.
- Connecting core app functionality (video playback, exam engines, progress tracking) with backend services.
- Testing APIs and verifying mobile-to-backend integration using **Postman**.
- Resolving integration-related development issues and enhancing overall code maintainability.

**UI/UX design was not part of my primary responsibilities.** The UI was implemented based on Figma designs, with my primary focus remaining on mobile software development and backend integration.

### Tech Stack

**Mobile** - Flutter - Dart

**Backend** - Python - Django - Django REST Framework (DRF) - RESTful APIs

**Database** - PostgreSQL / SQLite

**State Management** - Cubit

**Architecture** - Clean Architecture - Data Layer - Domain Layer - Presentation Layer

**Development & Testing** - Visual Studio Code - Android Studio - Postman - pgAdmin

**Design & Modeling** - Figma

### Architecture

The project adopted **Clean Architecture** to ensure separation of concerns and maintainability.

#### Data Layer
Handles communications with external data sources like REST APIs and databases, transforming raw JSON backend responses into Flutter data models.

#### Domain Layer
Contains business logic, use cases, and entities, such as score calculation algorithms and progress state evaluations.

#### Presentation Layer
Contains the user interface widgets and state management logic. **Cubit** orchestrates UI states across video streaming and quiz sessions.

### State Management with Cubit

**Cubit** was selected for state management due to its predictable state flow, simplicity, and excellent support for clean, testable code.

This approach decoupled business logic from the UI, providing structured state handling for video streaming, examination submission, countdown timers, and network operations.

### Backend Integration

Backend integration formed a core part of my engineering duties.

The backend provided RESTful APIs via **Django REST Framework**, handling standard HTTP operations:

- `GET` to retrieve subjects, chapters, video links, and quiz questions.
- `POST` for user authentication and quiz answer submissions.
- `PUT` for updating student progress and profile details.
- `DELETE` for removing saved notes.

### Challenges & Lessons Learned

The application required seamlessly linking media streaming, timed quiz execution, and progress calculation.

Key technical focus areas included:

- Implementing seamless video playback linked with lesson completion gates.
- Building an interactive MCQ engine featuring a live countdown timer and instant evaluation.
- Synchronizing local progress states with the remote Django database.
- Maintaining clean boundaries between UI, domain logic, and data layers.

This project deepened my expertise in **Flutter, REST APIs, Django, Cubit state management, Clean Architecture, and full-stack integration**.

### Supporting Tools

- **Postman:** API testing and integration verification.
- **pgAdmin:** PostgreSQL database management.
- **Figma:** Used for UI/UX references.

### Outcome

The project successfully delivered the **Tafouki** mobile platform, offering students a clean, structured environment for digital learning and self-testing.

It provided strong practical experience in cross-platform mobile development, API integration, state management, and Clean Architecture implementation.