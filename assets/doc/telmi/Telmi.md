# Telmi

## Arabic Case Study

### نبذة عن المشروع

**Telmi** هو نظام تواصل ومساندة رقمية مبني باستخدام Flutter، صُمم لدعم
الأطفال الذين يواجهون تحديات في النطق والتواصل، بما في ذلك الأطفال ضمن
طيف التوحد (ASD) والأطفال الذين يعانون من تأخر في الكلام.

لا يقتصر Telmi على تطبيق واحد، بل يتكون من **منظومة مترابطة** تضم تطبيقًا
للوالدين وتطبيقًا للساعة الذكية الخاصة بالطفل، بهدف توفير التواصل الفوري،
الأمان، والدعم اليومي المخصص.

### المشكلة

يواجه الأطفال الذين لديهم تحديات في النطق والتواصل صعوبة في التعبير عن
احتياجاتهم والتواصل مع من حولهم، بينما يحتاج الوالدان إلى وسائل أكثر
فعالية لمتابعة الطفل والتواصل معه ومعرفة موقعه وتنظيم يومه.

كان الهدف من Telmi بناء نظام موحد يساعد على:

-   تسهيل التواصل بين الطفل ووالديه.
-   توفير وسيلة AAC للتواصل باستخدام رموز وصور مرئية.
-   دعم التواصل الفوري من خلال الساعة الذكية.
-   توفير وسائل لمتابعة موقع الطفل.
-   تنظيم الروتين اليومي والأسبوعي للطفل.
-   إعطاء الوالدين قدرة أكبر على تخصيص المحتوى والإعدادات.
-   توفير وسائل آمنة لربط جهاز الطفل بحساب الوالدين.

### الحل

تم تطوير Telmi كمنظومة مترابطة تتكون من تطبيقين مبنيين باستخدام
**Flutter**:

1.  **تطبيق الوالدين Mobile App**
2.  **تطبيق الساعة الذكية للطفل Smartwatch App**

يتكامل التطبيقان مع خدمات Firebase والبنية السحابية للنظام، مما يسمح
بمزامنة البيانات والتواصل في الوقت الحقيقي.

يدعم النظام **AAC (Augmentative and Alternative Communication)** من خلال
أكثر من **120 رمزًا مرئيًا**، مع دعم **8 لغات**، وإمكانية تشغيل الصوت
وإضافة محتوى مخصص من قبل الوالدين.

كما يوفر النظام:

-   التواصل باستخدام الرموز والصور.
-   التكامل مع الساعة الذكية.
-   مكالمات فيديو آمنة باستخدام WebRTC.
-   تتبع موقع الطفل بشكل مباشر.
-   روتين يومي وأسبوعي مخصص.
-   إرشادات تلقائية على الساعة الذكية.
-   مزامنة لحظية بين التطبيق والساعة.
-   ربط آمن بين أجهزة الطفل وحساب الوالد باستخدام QR.
-   الإشعارات والتحديثات في الوقت الحقيقي.

### دوري في المشروع --- My Role

كان **Telmi مشروعًا جماعيًا**، والمعلومات المتوفرة في المنشور الحالي تصف
مساهمة الفريق ككل ولا تحدد مسؤولية عضو بعينه.

لذلك، يتم وصف الدور هنا على مستوى الفريق:

-   تطوير تطبيقين مترابطين باستخدام Flutter.
-   بناء تجربة تواصل بين تطبيق الوالدين وتطبيق الساعة الذكية.
-   دمج خدمات Firebase المختلفة ضمن النظام.
-   تنفيذ آليات المزامنة والتحديث في الوقت الحقيقي.
-   دمج WebRTC لإجراء مكالمات الفيديو.
-   تطوير وظائف AAC ودعم المحتوى متعدد اللغات.
-   بناء آلية QR-based pairing لربط الأجهزة والحسابات.
-   تنفيذ تتبع الموقع والتحديثات المستمرة من الساعة الذكية.
-   تطبيق Clean Architecture وRepository Pattern.
-   استخدام BLoC/Cubit لإدارة حالة التطبيق.
-   استخدام GetIt لإدارة الاعتماديات.

> **ملاحظة:** هذا القسم لا ينسب أي مسؤولية شخصية محددة لك قبل أن تحدد
> الجزء الذي كنت مسؤولًا عنه في Telmi.

### التقنيات المستخدمة

**Mobile** - Flutter - Dart

**Smartwatch** - Flutter - Wear OS

**Architecture & State Management** - Clean Architecture - Repository
Pattern - BLoC / Cubit - GetIt

**Firebase** - Firebase Authentication - Cloud Firestore - Firebase
Realtime Database - Firebase Cloud Messaging (FCM) - Firebase Storage -
Cloud Functions

**Communication** - WebRTC - Firebase Signaling

**Maps & Location** - OpenStreetMap - Live Location Tracking

**Data & Synchronization** - Cloud Firestore Transactions - Real-time
synchronization

### المعمارية البرمجية

تم اعتماد **Clean Architecture** إلى جانب **Repository Pattern** بهدف
تنظيم المشروع وفصل مسؤوليات مكونات النظام.

يساعد هذا الأسلوب على فصل منطق الأعمال عن مصادر البيانات والتفاصيل
التقنية، كما يجعل النظام أكثر قابلية للصيانة والتوسع.

تم استخدام **BLoC/Cubit** لإدارة حالات التطبيق، مع استخدام **GetIt**
لإدارة الاعتماديات وربط مكونات النظام بطريقة منظمة.

### تطبيقات الموبايل والساعة الذكية

من أهم الجوانب التقنية في Telmi أن النظام لا يعتمد على تطبيق واحد، بل
على تطبيقين مترابطين:

#### تطبيق الوالدين

يتيح للوالدين إدارة المحتوى والإعدادات ومتابعة الطفل والتفاعل مع وظائف
النظام المختلفة.

#### تطبيق الساعة الذكية

يعمل كواجهة مباشرة للطفل، ويوفر وظائف مثل:

-   التواصل السريع.
-   الوصول إلى رموز AAC.
-   التذكيرات.
-   الإرشادات اليومية.
-   تحديثات ومزامنة البيانات.
-   دعم التواصل الفوري مع الوالدين.

هذا التصميم يجعل الساعة جزءًا أساسيًا من منظومة التواصل بدل أن تكون مجرد
جهاز منفصل عن التطبيق.

### نظام AAC

يستخدم Telmi نظام **AAC (Augmentative and Alternative Communication)**
لمساعدة الأطفال على التعبير عن احتياجاتهم وأفكارهم من خلال الرموز
المرئية.

يتضمن النظام:

-   أكثر من **120 رمزًا**.
-   دعم **8 لغات**.
-   تشغيل صوتي للرموز.
-   إمكانية إنشاء محتوى مخصص من قبل الوالدين.

يساعد ذلك على توفير طريقة تواصل أكثر ملاءمة للأطفال الذين يواجهون صعوبة
في التواصل اللفظي.

### WebRTC والتواصل الفوري

تم استخدام **WebRTC** لدعم مكالمات الفيديو الآمنة بين الأطراف، مع
استخدام Firebase كآلية **Signaling**.

هذا الدمج يتيح إنشاء قناة اتصال في الوقت الحقيقي ضمن منظومة Telmi دون
الاعتماد على بنية منفصلة لإدارة عملية الإشارة.

### الموقع والتتبع المباشر

يعتمد Telmi على **OpenStreetMap** لعرض الموقع، مع تحديثات مستمرة من
الساعة الذكية.

يسمح ذلك للوالدين بمتابعة موقع الطفل بشكل مباشر ضمن النظام.

### الروتين اليومي والأسبوعي

يوفر النظام إمكانية إنشاء **روتين يومي وأسبوعي مخصص** للطفل، مع إرسال
إرشادات تلقائية إلى الساعة الذكية.

يساعد ذلك على تحويل الساعة من وسيلة تواصل فقط إلى أداة للمساندة اليومية
وتنظيم الأنشطة.

### QR-Based Pairing

تم تصميم آلية آمنة لربط جهاز الطفل بحساب الوالدين باستخدام **QR Code**.

ويعتمد النظام على **Cloud Firestore Transactions** لضمان تنفيذ عملية
الربط بطريقة متزامنة وآمنة عند التعامل مع البيانات.

### التحديات والدروس المستفادة

استنادًا إلى طبيعة النظام والميزات المذكورة في المنشور، تطلب المشروع
التعامل مع مجموعة من الجوانب التقنية المعقدة، من أبرزها:

-   بناء تطبيقين مترابطين يعملان ضمن منظومة واحدة.
-   الحفاظ على مزامنة البيانات في الوقت الحقيقي بين الهاتف والساعة
    الذكية.
-   دمج عدد كبير من خدمات Firebase ضمن تطبيق متكامل.
-   دمج WebRTC مع Firebase Signaling للتواصل بالفيديو.
-   التعامل مع تحديثات الموقع المستمرة من الساعة.
-   تصميم نظام AAC متعدد اللغات وقابل للتخصيص.
-   إنشاء آلية آمنة لربط الأجهزة والحسابات.
-   تنظيم المشروع باستخدام Clean Architecture وRepository Pattern مع
    إدارة الحالة باستخدام BLoC/Cubit.

ومن خلال هذه الجوانب، يجمع المشروع بين **تطوير تطبيقات Flutter، الأنظمة
المترابطة، الاتصالات الفورية، الخدمات السحابية، تقنيات Wear OS، وإمكانية
الوصول (Accessibility)** ضمن حل واحد.

### أبرز أرقام المشروع

-   📱 **تطبيقان Flutter مترابطان:** Mobile + Smartwatch
-   🌍 **8 لغات** مدعومة
-   🧩 **120+ رمز AAC**
-   ☁️ التكامل مع **5 خدمات Firebase**
-   📍 تتبع مباشر للموقع
-   📹 مكالمات فيديو باستخدام WebRTC

### النتيجة

Telmi عبارة عن منظومة تقنية تجمع بين تطبيق الوالدين وتطبيق الساعة الذكية
للطفل لتوفير التواصل، الأمان، وتنظيم الدعم اليومي.

يجمع المشروع بين **Flutter، Firebase، WebRTC، Wear OS، AAC، Clean
Architecture، وإدارة الحالة** لبناء حل تقني يركز على تسهيل التواصل
ومساعدة الأطفال الذين يواجهون تحديات في النطق والتواصل، مع منح الوالدين
وسائل أكبر للمتابعة والتخصيص.

------------------------------------------------------------------------

## English Case Study

### Project Overview

**Telmi** is a Flutter-powered communication and support platform
designed to help children with speech and communication challenges,
including children with Autism Spectrum Disorder (ASD) and speech
delays.

Rather than being a single application, Telmi is a **connected
ecosystem** consisting of a parent mobile application and a child
smartwatch application, enabling real-time communication, safety, and
personalized daily support.

### The Problem

Children with speech and communication challenges may have difficulty
expressing their needs and communicating with people around them. At the
same time, parents need more effective ways to communicate with their
children, monitor their location, and organize their daily routines.

Telmi was designed to address these needs by providing:

-   Easier communication between children and their parents.
-   An AAC-based communication system using visual icons.
-   Real-time communication through a smartwatch.
-   Live child location tracking.
-   Personalized daily and weekly routines.
-   Parent-controlled customization.
-   Secure device-to-parent account pairing.

### The Solution

Telmi was developed as a connected ecosystem consisting of two Flutter
applications:

1.  **Parent Mobile App**
2.  **Child Smartwatch App**

The two applications communicate through Firebase services and the
platform's cloud infrastructure, enabling real-time synchronization and
communication.

The system provides **AAC (Augmentative and Alternative Communication)**
through more than **120 visual icons**, supports **8 languages**,
provides audio playback, and allows parents to create customized
content.

The platform also includes:

-   Visual AAC communication.
-   Smartwatch integration.
-   Secure WebRTC video calls.
-   Live location tracking.
-   Personalized daily and weekly routines.
-   Automatic smartwatch guidance.
-   Real-time synchronization.
-   QR-based device pairing.
-   Real-time notifications and updates.

### My Role

**Telmi was developed as a team project**, and the available project
post describes the team's work as a whole rather than identifying the
responsibilities of individual team members.

Therefore, the role is described here at the team level:

-   Developing two connected Flutter applications.
-   Building communication between the parent mobile app and child
    smartwatch app.
-   Integrating multiple Firebase services.
-   Implementing real-time synchronization.
-   Integrating WebRTC for video communication.
-   Developing AAC functionality and multilingual support.
-   Implementing QR-based pairing.
-   Building location tracking and smartwatch updates.
-   Applying Clean Architecture and Repository Pattern.
-   Using BLoC/Cubit for state management.
-   Using GetIt for dependency injection and dependency management.

> **Note:** This section intentionally does not assign specific
> responsibilities to you until you provide your exact contribution to
> Telmi.

### Tech Stack

**Mobile** - Flutter - Dart

**Smartwatch** - Flutter - Wear OS

**Architecture & State Management** - Clean Architecture - Repository
Pattern - BLoC / Cubit - GetIt

**Firebase** - Firebase Authentication - Cloud Firestore - Firebase
Realtime Database - Firebase Cloud Messaging (FCM) - Firebase Storage -
Cloud Functions

**Communication** - WebRTC - Firebase Signaling

**Maps & Location** - OpenStreetMap - Live Location Tracking

**Data & Synchronization** - Cloud Firestore Transactions - Real-time
synchronization

### Architecture

The project adopted **Clean Architecture** together with the
**Repository Pattern** to organize the codebase and separate system
responsibilities.

This approach helps isolate business logic from data sources and
implementation details, making the system easier to maintain and extend.

**BLoC/Cubit** was used for application state management, while
**GetIt** was used for dependency management.

### Mobile and Smartwatch Applications

One of Telmi's key technical characteristics is that it is not a single
application. It consists of two connected applications.

#### Parent Mobile Application

The parent application provides functionality for managing content and
settings, monitoring the child, and interacting with the different
features of the platform.

#### Child Smartwatch Application

The smartwatch application acts as a direct interface for the child and
provides features such as:

-   One-tap communication.
-   AAC icon access.
-   Reminders.
-   Daily guidance.
-   Data synchronization.
-   Real-time communication with parents.

This architecture makes the smartwatch an integral part of the
communication ecosystem rather than a standalone device.

### AAC Communication System

Telmi uses **AAC (Augmentative and Alternative Communication)** to help
children communicate through visual representations.

The system includes:

-   More than **120 visual icons**.
-   Support for **8 languages**.
-   Audio playback.
-   Parent-created custom content.

This provides an alternative communication method for children who
experience difficulties with verbal communication.

### WebRTC and Real-Time Communication

**WebRTC** was integrated to support secure video calls, with Firebase
used for **signaling**.

This integration enables real-time video communication as part of the
Telmi ecosystem.

### Live Location Tracking

Telmi uses **OpenStreetMap** for location visualization, combined with
continuous location updates from the smartwatch.

This enables parents to monitor the child's location through the
platform.

### Daily and Weekly Routines

The platform supports **personalized daily and weekly routines** for
children, with automatic guidance delivered through the smartwatch.

This extends the smartwatch's role beyond communication and makes it
part of the child's daily support system.

### QR-Based Pairing

Telmi implements a secure QR-based mechanism for pairing the child's
device with the parent's account.

The pairing process uses **Cloud Firestore Transactions** to handle the
relationship between devices and accounts in a synchronized and reliable
way.

### Challenges & Lessons Learned

Based on the project's documented functionality, the system required
solving several technically demanding problems, including:

-   Building two connected applications as one ecosystem.
-   Maintaining real-time synchronization between the mobile application
    and smartwatch.
-   Integrating multiple Firebase services into a single platform.
-   Integrating WebRTC with Firebase Signaling for video communication.
-   Handling continuous location updates from the smartwatch.
-   Building a multilingual and customizable AAC system.
-   Implementing secure device and account pairing.
-   Structuring the project with Clean Architecture and Repository
    Pattern while managing application state with BLoC/Cubit.

These areas provided practical experience across **Flutter development,
connected applications, real-time communication, cloud infrastructure,
Wear OS, and accessibility-focused software**.

### Project Highlights

-   📱 **Two connected Flutter applications:** Mobile + Smartwatch
-   🌍 **8 supported languages**
-   🧩 **120+ AAC communication icons**
-   ☁️ Integration with **5 Firebase services**
-   📍 Live location tracking
-   📹 WebRTC video communication

### Outcome

Telmi is a connected ecosystem that combines a parent mobile application
with a child smartwatch application to provide communication, safety,
and personalized daily support.

The project brings together **Flutter, Firebase, WebRTC, Wear OS, AAC,
Clean Architecture, and state management** to build an
accessibility-focused solution that helps children with speech and
communication challenges communicate more effectively while giving
parents greater visibility and control.
