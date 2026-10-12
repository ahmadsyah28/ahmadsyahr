export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  category: string;
  role: string;
  year: string;
  status?: string;
  type: string; // "Individual Project" | "Team Project" | "Internship" | etc.
  shortDescription: string;
  overview: string;
  challenge: string;
  solution: string;
  keyFeatures: string[];
  contribution: string;
  process?: string[];
  researchAnalysis?: string;
  impact: string;
  technologies: string[];
  publications: Array<{ label: string; url: string; type?: "live" | "github" | "kaggle" | "paper" }>;
  images: string[];
  logo?: string;
  metrics?: Array<{ label: string; value: string }>;
}

export const projectsData: ProjectDetail[] = [
  {
    slug: "flowin",
    title: "FLOWIN",
    tagline: "Customer Access & Integrated Water Utility Management Platform",
    category: "Mobile App Development",
    role: "Mobile Developer",
    year: "2026",
    status: "Completed",
    type: "Individual Project",
    shortDescription: "Developed the Flowin mobile app, translating service needs into features and integrating backend services.",
    overview: "Flowin is a digital platform developed to improve customer access to water utility services. The platform integrates water service monitoring, new connection requests, billing information, payments, water issue reporting, service status updates, and notifications into a single digital experience.",
    challenge: "Water utility customers needed a more convenient way to access services that were previously handled through separate or manual processes. Customers also needed better access to service information and a more structured way to report water-related issues.",
    solution: "Developed a customer-facing mobile application that brings essential water utility services into one platform, including customer registration, document submission, water service monitoring, billing and payment information, complaint reporting, service status updates, and notifications.",
    keyFeatures: [
      "Customer registration & secure digital document submission",
      "Real-time water service monitoring & meter readings",
      "Billing, payment history, and automated invoice reminders",
      "Structured complaint ticketing & water issue reporting",
      "Push notifications for maintenance and live service status updates"
    ],
    contribution: "I developed the Flowin mobile application and translated identified service needs into application features and user flows. I also worked on the integration between the application, backend services, and database to support the required functionality.",
    impact: "Improved accessibility to water utility services, simplified customer service processes, centralized essential service information, and provided a more structured channel for reporting water-related issues.",
    technologies: ["Flutter", "GraphQL", "Node.js", "Express.js", "MongoDB", "Redis"],
    publications: [
      { label: "Mobile App Repository", url: "https://github.com/ahmadsyah28/flowin-mobile.git", type: "github" },
      { label: "Backend Repository", url: "https://github.com/ahmadsyah28/flowin-backend.git", type: "github" }
    ],
    images: ["/product/ui/flowin/flowin 1.png"],
    logo: "/product/flowin.png"
  },
  {
    slug: "getsmart",
    title: "GetSmart",
    tagline: "Interactive AI-Powered Personalized Learning & Emotion Diagnostics Platform",
    category: "Product Management & Strategy",
    role: "Product Manager",
    year: "2026",
    status: "Ongoing Development",
    type: "Team Project",
    shortDescription: "Defined product requirements and user flows, coordinating development for students, teachers, and parents.",
    overview: "GetSmart is an interactive learning platform designed to support students, teachers, and parents through personalized learning experiences, emotion-based diagnostics, learning analytics, and AI-powered feedback.",
    challenge: "Conventional digital learning platforms often focus primarily on academic scores without providing a broader understanding of how students learn, engage, and respond during the learning process. Teachers and parents also need more comprehensive information to monitor student progress, while students need interactive learning materials and feedback that support their individual learning journey.",
    solution: "GetSmart integrates interactive learning materials, AI-based emotion diagnostics, learning analytics, and personalized feedback into a single platform. Students can learn through interactive flipbooks and E-LKPD, while teachers and parents can monitor learning progress through a real-time dashboard.",
    keyFeatures: [
      "Interactive Modules & Digital E-LKPD (Lembar Kerja Peserta Didik)",
      "AI Emotion Diagnostic Test for learning engagement",
      "Real-time LAD Dashboard (Learning Analytics & Diagnostics)",
      "Adaptive Video Remedial & AI-powered Emotion Feedback"
    ],
    contribution: "As Product Manager, I contributed to defining product requirements, structuring features, developing user flows, and coordinating the development process to ensure that the product addressed the needs of students, teachers, and parents.",
    process: [
      "Problem identification",
      "User/persona understanding",
      "Requirement analysis",
      "Feature structuring",
      "Product backlog",
      "Sprint planning",
      "Development coordination",
      "Validation and iteration"
    ],
    impact: "GetSmart provides a more comprehensive learning experience by combining academic performance, learning behavior, emotional patterns, and personalized feedback, enabling stakeholders to gain broader insights into student learning progress.",
    technologies: ["AI Diagnostics", "Next.js", "Learning Analytics", "Interactive E-LKPD", "Cloud Infrastructure"],
    publications: [
      { label: "Official Website", url: "https://getsmart.id/", type: "live" }
    ],
    images: ["/product/ui/getsmart/getsmart 1.png"],
    logo: "/product/getsmart.png"
  },
  {
    slug: "sigap-stunting",
    title: "Sigap Stunting",
    tagline: "Posyandu Digital Health Platform for Child & Fetal Growth Monitoring",
    category: "Product Management",
    role: "Product Manager • Business Analysis • System Development",
    year: "2026",
    status: "Active Implementation",
    type: "Team Project",
    shortDescription: "Structured user flows and digital features for monitoring and reporting based on Posyandu cadres' needs.",
    overview: "Sigap Stunting is a web-based platform designed to support Posyandu activities in monitoring child and fetal development. The system records growth, development, and immunization data while providing health status information to support early awareness and stunting prevention.",
    challenge: "Growth and immunization records at Posyandu require consistent documentation and monitoring. Limited access to structured digital data can also make it more difficult for parents and health workers to identify growth conditions early and for researchers to analyze population-level data effectively.",
    solution: "Sigap Stunting digitalizes growth and immunization records and provides automated status information such as stunting, normal, or overweight based on recorded data. The platform also provides data visualizations to make growth patterns and collected information easier to understand and analyze.",
    keyFeatures: [
      "Automated anthropometric status calculation (Stunting, Normal, Overweight)",
      "Child & fetal growth curve visualizations (WHO standard percentiles)",
      "Immunization record tracking & posyandu cadre logbooks",
      "Population-level health analytics dashboard for health workers and researchers"
    ],
    contribution: "Contributed to defining product requirements, structuring user flows, and developing system features based on the needs of Posyandu cadres, parents, and researchers. I also worked on translating monitoring and reporting requirements into practical digital features.",
    impact: "The platform helps Posyandu cadres manage growth and immunization records more systematically, provides parents with clearer information about children's and fetal development, and supports researchers through more accessible and visualized health data.",
    technologies: ["Web Application", "Data Visualization", "WHO Growth Standards", "PostgreSQL", "Next.js"],
    publications: [
      { label: "Official Website", url: "https://sigapstunting.id/", type: "live" }
    ],
    images: ["/product/ui/sigapstunting/sigapstunting 1.png"],
    logo: "/product/sigapstunting.png"
  },
  {
    slug: "daur-tani",
    title: "Daur Tani",
    tagline: "Circular Economy Marketplace Connecting Agricultural Waste Producers & Buyers",
    category: "UX Research & Product Strategy",
    role: "Business Analyst • Product Management",
    year: "2025",
    status: "Concept & Prototyping",
    type: "Team Project",
    shortDescription: "Conducted stakeholder interviews and translated findings into product requirements for the development team.",
    overview: "DaurTani is a digital marketplace concept designed to connect agricultural waste producers with potential buyers and create economic value from underutilized agricultural waste.",
    challenge: "Farmers and potential buyers, including exporters, faced challenges in connecting with each other and understanding the supply and demand for agricultural waste products.",
    solution: "Conceptualized and structured a two-sided digital marketplace that indexes agricultural waste categories, provides transparent volume metrics, and bridges rural farmers with national and export buyers.",
    keyFeatures: [
      "Agricultural waste inventory listing with verifiable metrics",
      "Direct buyer-seller negotiation and quotation system",
      "Logistics integration and bulk pickup estimation",
      "Market demand analytics and pricing transparency"
    ],
    researchAnalysis: "Conducted direct interviews with farmers and exporters to understand their needs, challenges, existing processes, and expectations. The findings were analyzed and translated into product requirements, user needs, and marketplace features.",
    contribution: "As a Business Analyst and Product Manager, I conducted stakeholder interviews, analyzed the information gathered, identified key pain points, and translated the findings into product requirements and workflows for the development team.",
    process: [
      "User Research & Farmer Field Interviews",
      "Stakeholder Analysis (Exporters & Recyclers)",
      "Requirement Analysis & Persona Definition",
      "Product Management & PRD Specification"
    ],
    impact: "The research provided a clearer understanding of stakeholder needs and helped define a marketplace concept that connects agricultural waste producers with potential buyers, turning waste into high-value raw material.",
    technologies: ["User Research", "Stakeholder Analysis", "Marketplace Architecture", "Figma", "Product Strategy"],
    publications: [
      { label: "Platform Overview", url: "https://www.daurtani.id/", type: "live" }
    ],
    images: ["/product/ui/daurtani/daurtani 1.png"],
    logo: "/product/daurtani.png"
  },
  {
    slug: "cirvia",
    title: "CIRVIA",
    tagline: "Multimodal Virtual Physics Practicum with Computer Vision Hand Interaction",
    category: "Software Engineering & Computer Vision",
    role: "Software Developer • Virtual Practicum Development",
    year: "2025",
    status: "Completed",
    type: "Team Project",
    shortDescription: "Developed virtual circuit simulation features enabling physical hand interactions via computer vision.",
    overview: "CIRVIA is a web-based learning platform for students and teachers that provides an interactive learning experience for Direct Current (DC) electricity. The platform incorporates visual, auditory, and kinesthetic learning approaches.",
    challenge: "Schools may rely heavily on conventional learning approaches that do not accommodate different ways students understand learning materials. Limited laboratory facilities can also make practical experiments difficult, particularly for DC electricity topics.",
    solution: "CIRVIA provides an interactive learning environment that combines different learning approaches with virtual electrical circuit practicum. The practicum uses drag-and-drop circuit assembly and computer vision-based interaction, allowing students to simulate assembling electrical circuits in a more realistic and interactive environment.",
    keyFeatures: [
      "Interactive DC electrical circuit simulation engine",
      "Real-time webcam hand tracking & gesture assembly powered by MediaPipe",
      "Multimodal curriculum: Visual animations, audio explanations, kinesthetic gestures",
      "Virtual circuit component testing (batteries, resistors, switches, multimeters)"
    ],
    contribution: "I developed the virtual practicum features, including drag-and-drop circuit simulation and computer vision-based practicum. The computer vision feature enables students to interact with virtual circuit components through physical hand movements.",
    impact: "The interactive approach provides students with an alternative way to practice assembling electrical circuits through virtual interaction, overcoming laboratory equipment shortages and enhancing student engagement.",
    technologies: ["Next.js", "OpenCV", "MediaPipe Hands", "Computer Vision", "Canvas API", "Webcam API"],
    publications: [
      { label: "Live Application Demo", url: "https://cirvia-usk.vercel.app/", type: "live" }
    ],
    images: ["/product/ui/cirvia/cirvia 1.png"]
  },
  {
    slug: "ecoflow",
    title: "EcoFlow",
    tagline: "IoT Water Filtration & Real-Time Multi-Sensor Telemetry Mobile App",
    category: "IoT & Mobile App Development",
    role: "Application Developer • IoT Application Development",
    year: "2024",
    status: "Prototype Tested",
    type: "Individual Project",
    shortDescription: "Built a Flutter app integrated with ESP32-S3 for real-time water quality monitoring and data visualization.",
    overview: "EcoFlow is an IoT-based water filtration and monitoring prototype designed to provide real-time information about water quality through a mobile application. Developed a Flutter application connected to an ESP32-S3 via Wi-Fi to receive and display readings from pH, turbidity, temperature, and TDS sensors.",
    challenge: "Traditional water filter validation requires manual chemical drop kits or lab tests, leaving users uncertain about current filtration effectiveness, filter cartridge lifespan, and water safety.",
    solution: "Built a connected physical prototype using an ESP32-S3 microcontroller coupled with multiple water probes, streaming continuous telemetry over local Wi-Fi to an intuitive Flutter dashboard.",
    keyFeatures: [
      "Live multi-probe telemetry: pH, Turbidity, Temperature, and TDS sensors",
      "ESP32-S3 microcontroller firmware with Wi-Fi HTTP / Socket broadcasting",
      "Flutter mobile UI with live gauges, calibration charts, and safety thresholds",
      "Instant push alerts when water parameters deviate from safe drinking standards"
    ],
    contribution: "Developed the Flutter mobile application, connected it to the ESP32-S3 microchip via Wi-Fi, and engineered real-time sensor processing pipelines to present clear readings for pH, turbidity, temperature, and TDS levels.",
    impact: "Successfully validated end-to-end telemetry between hardware sensors and a mobile device, offering instant water health visibility and preventive filter maintenance warnings.",
    technologies: ["Flutter", "ESP32-S3", "Wi-Fi Protocol", "pH Sensor", "Turbidity Sensor", "Temperature Sensor", "TDS Sensor", "C++ / Arduino"],
    publications: [
      { label: "EcoFlow GitHub Repository", url: "https://github.com/ahmadsyah28/EcoFlow.git", type: "github" }
    ],
    images: ["/product/ui/ecoflow/ecoflow 1.png"],
    logo: "/product/ecoflow.png"
  },
  {
    slug: "getdirme",
    title: "GetDIRME",
    tagline: "Adaptive LMS & Granular Student Behavioral Evaluation Platform",
    category: "Product Management & Leadership",
    role: "Product Development • System Analysis",
    year: "2026",
    status: "Active Deployment",
    type: "Team Project",
    shortDescription: "Led product development for an LMS, defining interactive features, evaluation tools, and detailed activity tracking.",
    overview: "GetDirme is a Learning Management System and research platform designed to support interactive learning and collect detailed student activity data. The platform enables group-based evaluations and records interactions such as reading duration, evaluation activity, and changes in students' answers.",
    challenge: "Standard LMS applications only track submission timestamps and final scores, obscuring student learning struggles, hesitation points, reading persistence, and peer collaboration dynamics.",
    solution: "Engineered a specialized telemetry-enabled LMS recording granular student interaction micro-events alongside structured collaborative assessment tools for educators.",
    keyFeatures: [
      "Granular reading duration & interactive module dwell-time capture",
      "Delta tracking for student answer revisions during exams",
      "Collaborative group-based peer evaluation and scoring system",
      "In-depth research telemetry export for educational scientists"
    ],
    contribution: "Contributed to structuring learning activities and evaluation workflows and to the development and analysis of LMS features, ensuring robust telemetry and high usability.",
    impact: "Enabled teachers and educational researchers to observe how students study, where they hesitate, and how interactive interventions boost retention and learning outcomes.",
    technologies: ["System Analysis", "Behavioral Telemetry", "Next.js", "PostgreSQL", "Product Management"],
    publications: [
      { label: "Platform Access", url: "https://getdirme.id/login", type: "live" }
    ],
    images: ["/product/ ui/getdirme/getdirme 1.png"],
    logo: "/product/getdirme.png"
  },
  {
    slug: "tirta-daroy-analytics",
    title: "PERUMDAM Tirta Daroy",
    tagline: "Water Consumption Analytics, ARIMA Time-Series Forecasting & Anomaly Detection",
    category: "Data Science & Machine Learning",
    role: "Machine Learning Engineer Intern",
    year: "2025",
    status: "Completed (July–Dec 2025)",
    type: "Internship Project",
    shortDescription: "Analyzed 600,000+ utility records with ARIMA forecasting and multi-method anomaly detection (Z-Score, IQR, Rule-based).",
    overview: "Worked with municipal water consumption data containing 600,000+ records to support data-driven decision-making, predictive utility forecasting, and automated anomaly detection.",
    challenge: "Municipal water networks suffer from undetected leaks, illegal tapping, and meter malfunctions. Identifying irregular consumption patterns across 600,000+ records manually was virtually impossible.",
    solution: "Built an end-to-end data pipeline implementing ARIMA/SARIMA forecasting alongside an ensemble of statistical and heuristic anomaly detection models (Z-score, IQR, ratio-based analysis, and rule-based checks).",
    keyFeatures: [
      "End-to-end data cleansing & ETL for 600,000+ utility consumption logs",
      "Time-series modeling with ARIMA(0,1,1) achieving 96.35% accuracy and 3.65% MAPE",
      "Ensemble anomaly detection: Z-score, Interquartile Range (IQR), and heuristic rule-based checks",
      "Identified 50,220 unique anomaly records across municipal customer accounts"
    ],
    contribution: "Developed and optimized machine learning models through data preprocessing, model training, evaluation, and performance improvement. Collaborated with multidisciplinary teams to support integration of AI models into production-ready applications.",
    process: [
      "Data understanding",
      "Data cleaning",
      "Preprocessing",
      "Exploratory analysis",
      "Feature engineering",
      "Model training",
      "Evaluation",
      "Interpretation"
    ],
    metrics: [
      { label: "Analyzed Records", value: "600,000+" },
      { label: "Model Accuracy", value: "96.35%" },
      { label: "MAPE", value: "3.65%" },
      { label: "Unique Anomalies Detected", value: "50,220" }
    ],
    impact: "Uncovered over 50,220 irregular consumption events across various methods, empowering water utility operators with clear flags for meter malfunction, pipe leakage, and revenue loss prevention.",
    technologies: ["Python", "Pandas", "Scikit-learn", "TensorFlow/Keras", "ARIMA / SARIMA", "Time Series Analysis"],
    publications: [
      { label: "Kaggle Model & Notebook", url: "https://www.kaggle.com/code/ahmadsyahramadhan/prediction-pemakaian-air-banda-aceh-arima", type: "kaggle" }
    ],
    images: ["/product/ui/perumdam/perumdam 1.jpg"]
  },
  {
    slug: "physics-laboratory",
    title: "Physics Laboratory USK",
    tagline: "Administrative Digitalization & Laboratory Asset Management System",
    category: "Full Stack Web Development",
    role: "Full Stack Developer",
    year: "2025",
    status: "Completed",
    type: "Individual Project",
    shortDescription: "Developed a web-based lab system with 10+ modules for equipment borrowing, visits, and staff management.",
    overview: "A web-based laboratory management system developed to digitalize administrative and information services at Universitas Syiah Kuala. The platform facilitates equipment borrowing, laboratory visits, and access to information about staff, experts, and facilities.",
    challenge: "Laboratory visit requests and specialized apparatus loan procedures were documented manually on paper, leading to lost records, scheduling overlaps, and difficulty managing inventory availability.",
    solution: "Engineered a centralized Laravel & MySQL web application with 10+ distinct operational modules managing user authentication, real-time apparatus availability, borrowing workflows, and scheduling.",
    keyFeatures: [
      "10+ complete system modules covering full lab administrative lifecycle",
      "Online laboratory apparatus borrowing with digital loan logs",
      "Visit reservation schedule with conflict prevention",
      "Directory for faculty staff, subject matter experts, and research apparatus specifications"
    ],
    contribution: "Developed and maintained 10+ system modules using Laravel and MySQL, translated laboratory operational requirements into system functionalities, and integrated frontend and backend components.",
    impact: "Reduced manual administrative paperwork, centralized laboratory records into an accessible database, and streamlined equipment loans and academic visit approvals.",
    technologies: ["Laravel", "PHP", "MySQL", "Bootstrap", "Blade", "REST APIs"],
    publications: [
      { label: "GitHub Repository", url: "https://github.com/ahmadsyah28/basic-physics-laboratory.git", type: "github" }
    ],
    images: ["/product/ui/physics/physics 1.png"]
  }
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projectsData.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
