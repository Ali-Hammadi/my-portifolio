# Afiete --- عافيتي

## Arabic Case Study

### نبذة عن المشروع

**Afiete (عافيتي)** هو تطبيق ومنصة رقمية للصحة النفسية تهدف إلى تسهيل
الوصول إلى خدمات الدعم والاستشارات النفسية ضمن بيئة أكثر خصوصية وتنظيمًا.
يوفّر النظام مجموعة من الخدمات التي تربط المستخدمين بالأخصائيين النفسيين،
مع دعم إدارة المواعيد، التقييمات النفسية، السجلات الرقمية، التواصل،
والإشعارات.

### المشكلة

يعالج المشروع عدة مشاكل في تجربة الوصول إلى خدمات الصحة النفسية، من
أبرزها:

-   صعوبة العثور على مراكز وأخصائيين نفسيين مناسبين.
-   الحاجة إلى مستوى عالٍ من الخصوصية والسرية بسبب حساسية خدمات الصحة
    النفسية.
-   صعوبة تنسيق المواعيد والتواصل مع الأخصائيين بطريقة مرنة.
-   الاعتماد على طرق تقليدية في حفظ وإدارة السجلات، مما قد يزيد من
    احتمالية فقدان البيانات المهمة أو نسيان الالتزامات والمواعيد.
-   الحاجة إلى منصة موحدة تجمع الخدمات النفسية المختلفة ضمن نظام رقمي
    واحد.

### الحل

تم تطوير Afiete كمنصة رقمية موحدة تهدف إلى تنظيم رحلة المستخدم في الحصول
على خدمات الصحة النفسية.

اعتمد التطبيق على **Flutter وDart** لتطوير تطبيق الموبايل، مع **Django
وDjango REST Framework** لبناء الـ Backend وتوفير RESTful APIs، بالإضافة
إلى **PostgreSQL** لإدارة البيانات.

تم تنظيم التطبيق باستخدام **Clean Architecture** وتقسيمه إلى طبقات Data
وDomain وPresentation، مع استخدام **Cubit** لإدارة حالات التطبيق.

ومن أبرز الوظائف التي يدعمها النظام:

-   البحث والوصول إلى الأخصائيين.
-   حجز وإدارة المواعيد.
-   التقييمات والاختبارات النفسية.
-   التمارين والأنشطة النفسية.
-   السجلات الرقمية للمستخدمين.
-   التواصل بين المستخدم والأخصائي.
-   الإشعارات الفورية.
-   دعم وظائف التواصل الرقمي مثل المحادثة النصية والمكالمات وفق وظائف
    النظام الموثقة.

### دوري في المشروع --- My Role

كان دوري الأساسي في المشروع هو **تطوير تطبيق الموبايل والتعامل بشكل قوي
وفعّال مع الـ Backend**.

شملت مسؤولياتي بشكل أساسي:

-   تطوير تطبيق الموبايل باستخدام **Flutter وDart**.
-   تنفيذ وربط الواجهات البرمجية **REST APIs** مع تطبيق الموبايل.
-   التعامل مع الـ Backend المبني باستخدام **Django وDjango REST
    Framework**.
-   تنفيذ عمليات جلب وإرسال وتحديث وحذف البيانات من خلال الـ APIs.
-   التعامل مع حالات التطبيق وإدارة الـ State باستخدام **Cubit**.
-   تطبيق مبادئ **Clean Architecture** وتنظيم الكود ضمن طبقات Data
    وDomain وPresentation.
-   التعامل مع نماذج البيانات وتحويل البيانات القادمة من الـ API إلى
    Models مناسبة داخل التطبيق.
-   المساهمة في ربط وظائف التطبيق المختلفة مع خدمات الـ Backend.
-   اختبار الـ APIs والتأكد من صحة التكامل بين تطبيق الموبايل والـ
    Backend باستخدام أدوات مثل **Postman**.
-   المساهمة في حل المشاكل البرمجية المتعلقة بالتكامل بين أجزاء النظام
    وتحسين قابلية صيانة الكود.

**لم تكن مسؤولياتي الأساسية متعلقة بتصميم UI/UX**، حيث كان تركيزي
الرئيسي على التطوير البرمجي لتطبيق الموبايل والتكامل مع الـ Backend.

### التقنيات المستخدمة

**Mobile** - Flutter - Dart

**Backend** - Python - Django - Django REST Framework (DRF) - RESTful
APIs

**Database** - PostgreSQL

**State Management** - Cubit

**Architecture** - Clean Architecture - Data Layer - Domain Layer -
Presentation Layer

**Notifications** - Pushy - Device Tokens

**Development & Testing** - Visual Studio Code - Android Studio -
Postman - PgAdmin

**Design & Modeling** - Figma - Draw.io - Visual Paradigm

### المعمارية البرمجية

تم اعتماد **Clean Architecture** بهدف فصل مسؤوليات النظام وتنظيم الكود
بطريقة تسهّل تطويره وصيانته.

#### Data Layer

مسؤولة عن التعامل مع مصادر البيانات الخارجية مثل الـ APIs وقاعدة
البيانات، وتحويل البيانات القادمة من المصادر الخارجية إلى Models يمكن
للتطبيق التعامل معها.

#### Domain Layer

تحتوي على الـ Entities والـ Use Cases وقواعد العمل الأساسية، بحيث تكون
منطقية ومستقلة قدر الإمكان عن تفاصيل مصادر البيانات والمكتبات الخارجية.

#### Presentation Layer

تحتوي على واجهات التطبيق ومنطق إدارة حالة الواجهات، مع استخدام **Cubit**
لإدارة حالات التطبيق والتواصل مع طبقات النظام الأخرى.

### إدارة الحالة باستخدام Cubit

تم استخدام **Cubit** لإدارة حالات التطبيق بسبب بساطة تدفق الحالة ووضوحه،
بالإضافة إلى ملاءمته لبناء تطبيق قابل للاختبار والصيانة.

يساعد هذا الأسلوب على فصل منطق التطبيق عن واجهات المستخدم، بحيث تكون
عملية التعامل مع حالات مثل التحميل، النجاح، الفشل، وتحديث البيانات منظمة
وواضحة.

### التعامل مع الـ Backend

كان التكامل بين تطبيق الموبايل والـ Backend جزءًا أساسيًا من دوري في
المشروع.

اعتمد النظام على **Django REST Framework** لتوفير RESTful APIs، وتم
التعامل مع العمليات الأساسية باستخدام HTTP methods مثل:

-   `GET` لجلب البيانات.
-   `POST` لإرسال وإنشاء البيانات.
-   `PUT` لتحديث البيانات.
-   `DELETE` لحذف البيانات.

هذا التكامل مكّن تطبيق الموبايل من التعامل مع بيانات المستخدمين والخدمات
والمواعيد وغيرها من وظائف النظام بطريقة منظمة.

### التحديات والدروس المستفادة

من طبيعة المشروع، كان من الضروري التعامل مع نظام يجمع بين تطبيق موبايل،
Backend، قاعدة بيانات، وإدارة حالات متعددة، بالإضافة إلى حساسية البيانات
المتعلقة بالصحة النفسية.

أبرز الجوانب البرمجية التي تطلبت اهتمامًا كانت:

-   تنظيم مشروع الموبايل بطريقة قابلة للتوسع والصيانة.
-   الحفاظ على فصل واضح بين واجهة التطبيق والمنطق البرمجي ومصادر
    البيانات.
-   بناء تكامل منظم بين Flutter والـ REST APIs.
-   التعامل مع حالات مختلفة لطلبات الشبكة مثل التحميل والنجاح والفشل.
-   تحويل وتنظيم البيانات القادمة من الـ Backend لتناسب احتياجات
    التطبيق.
-   الحفاظ على وضوح تدفق البيانات بين طبقات Clean Architecture.

ومن خلال العمل على هذه الجوانب، تطورت خبرتي بشكل عملي في **Flutter، REST
APIs، Django، إدارة الحالة، Clean Architecture، والتكامل بين تطبيقات
الموبايل والـ Backend**.

### الأدوات والخدمات المساندة

-   **Postman:** اختبار الـ APIs والتحقق من التكامل.
-   **PgAdmin:** التعامل مع قاعدة بيانات PostgreSQL.
-   **Pushy:** إرسال Push Notifications باستخدام Device Tokens.
-   **Draw.io / Visual Paradigm:** نمذجة وتصميم أجزاء النظام وUML.
-   **Figma:** كان مستخدمًا في جانب تصميم واجهات وتجربة المستخدم، مع كون
    UI/UX خارج نطاق مسؤوليتي الأساسية.

### النتيجة

نتج عن المشروع منصة رقمية تجمع مجموعة من خدمات الصحة النفسية في نظام
واحد، مع تطبيق موبايل مبني باستخدام Flutter وBackend مبني باستخدام
Django وDjango REST Framework، وقاعدة بيانات PostgreSQL.

وقد منحني المشروع خبرة عملية قوية في تطوير تطبيقات الموبايل، بناء وربط
REST APIs، التعامل مع Backend، إدارة حالة التطبيق، وتطبيق Clean
Architecture في مشروع متكامل.

------------------------------------------------------------------------

## English Case Study

### Project Overview

**Afiete** is a digital mental-health platform designed to make
psychological support and consultation services more accessible,
private, and organized.

The platform connects users with psychological specialists and provides
functionality for appointment management, psychological assessments,
digital records, communication, self-care activities, and notifications.

### The Problem

The project addresses several challenges in accessing and managing
mental-health services:

-   Difficulty finding suitable psychological specialists and nearby
    services.
-   The need for strong privacy and confidentiality due to the sensitive
    nature of mental-health services.
-   Difficulty coordinating appointments and communicating with
    specialists in a flexible way.
-   Reliance on traditional methods for storing and managing records,
    which can increase the risk of losing important information or
    forgetting appointments and obligations.
-   The need for a unified digital platform that brings multiple
    mental-health services together.

### The Solution

Afiete was developed as a unified digital platform for organizing the
user's mental-health service experience.

The mobile application was developed using **Flutter and Dart**, while
the backend was built with **Python, Django, and Django REST
Framework**, providing RESTful APIs. **PostgreSQL** was used as the
relational database.

The mobile application follows **Clean Architecture**, separating the
system into Data, Domain, and Presentation layers. **Cubit** was used
for state management.

The documented functionality includes:

-   Psychological specialist discovery.
-   Appointment booking and management.
-   Psychological assessments and tests.
-   Psychological exercises and self-care activities.
-   Digital user records.
-   Communication between users and specialists.
-   Push notifications.
-   Digital communication capabilities such as text chat and calls,
    according to the documented system functionality.

### My Role

My primary responsibility in the project was **mobile application
development, with strong and active involvement in the backend
integration**.

My responsibilities mainly included:

-   Developing the mobile application using **Flutter and Dart**.
-   Integrating **REST APIs** with the mobile application.
-   Working extensively with the **Django and Django REST Framework**
    backend.
-   Implementing data retrieval, creation, update, and deletion through
    APIs.
-   Managing application state using **Cubit**.
-   Applying **Clean Architecture** principles and organizing the code
    into Data, Domain, and Presentation layers.
-   Handling data models and transforming API responses into application
    models.
-   Connecting different mobile application features with backend
    services.
-   Testing APIs and verifying mobile-to-backend integration using tools
    such as **Postman**.
-   Contributing to solving integration-related development issues and
    improving code maintainability.

**UI/UX design was not part of my primary responsibilities.** My main
focus was software development for the mobile application and its
integration with the backend.

### Tech Stack

**Mobile** - Flutter - Dart

**Backend** - Python - Django - Django REST Framework (DRF) - RESTful
APIs

**Database** - PostgreSQL

**State Management** - Cubit

**Architecture** - Clean Architecture - Data Layer - Domain Layer -
Presentation Layer

**Notifications** - Pushy - Device Tokens

**Development & Testing** - Visual Studio Code - Android Studio -
Postman - PgAdmin

**Design & Modeling** - Figma - Draw.io - Visual Paradigm

### Architecture

The project adopted **Clean Architecture** to separate responsibilities
and make the codebase easier to maintain and extend.

#### Data Layer

The Data Layer handles external data sources such as APIs and databases.
It is responsible for processing external data and converting it into
models that can be used by the application.

#### Domain Layer

The Domain Layer contains entities, use cases, and core business rules.
It is designed to remain as independent as possible from external data
sources and libraries.

#### Presentation Layer

The Presentation Layer contains the application's UI and
state-management logic. **Cubit** is used to manage application states
and coordinate communication with the underlying layers.

### State Management with Cubit

**Cubit** was used for application state management because it provides
a simple and predictable state flow while supporting maintainability and
testing.

This approach helps separate application logic from the UI and provides
a clear structure for handling states such as loading, success, failure,
and data updates.

### Backend Integration

Backend integration was a major part of my role in the project.

The system used **Django REST Framework** to provide RESTful APIs, with
standard HTTP methods including:

-   `GET` for retrieving data.
-   `POST` for creating and submitting data.
-   `PUT` for updating data.
-   `DELETE` for deleting data.

This integration allowed the mobile application to communicate with
backend services and work with users, services, appointments, and other
system functionality in a structured way.

### Challenges & Lessons Learned

The nature of the project required integrating a mobile application,
backend services, database, and multiple application states while
dealing with sensitive mental-health-related data.

Key engineering areas that required careful attention included:

-   Structuring the mobile application for maintainability and future
    expansion.
-   Maintaining clear separation between UI, business logic, and data
    sources.
-   Building structured communication between Flutter and REST APIs.
-   Handling different network states such as loading, success, and
    failure.
-   Transforming and organizing backend responses into
    application-friendly models.
-   Maintaining a clear data flow across the Clean Architecture layers.

Working on these areas strengthened my practical experience with
**Flutter, REST APIs, Django, state management, Clean Architecture, and
mobile-to-backend integration**.

### Supporting Tools & Services

-   **Postman:** API testing and integration verification.
-   **PgAdmin:** PostgreSQL database management.
-   **Pushy:** Push notifications using device tokens.
-   **Draw.io / Visual Paradigm:** System modeling and UML.
-   **Figma:** Used for UI/UX design, while UI/UX was outside my primary
    responsibilities.

### Outcome

The project resulted in a digital platform that brings multiple
mental-health services together in one system, with a Flutter-based
mobile application, a Django/Django REST Framework backend, and a
PostgreSQL database.

The project provided strong practical experience in mobile application
development, REST API integration, backend interaction, state
management, and applying Clean Architecture within a complete software
system.
