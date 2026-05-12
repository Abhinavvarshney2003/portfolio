// ============================================================
// Portfolio Data - Extracted and Enhanced from Resume
// Abhinav Sushil Varshney
// ============================================================

export const personalInfo = {
  name: "Abhinav Sushil Varshney",
  firstName: "Abhinav Sushil",
  lastName: "Varshney",
  roles: [
    "Full Stack Developer",
    "AI/ML Engineer",
    "Cybersecurity Enthusiast",
    "Open Source Contributor",
    "Tech Innovator",
  ],
  email: "abhinavvarshney1426@gmail.com",
  phone: "+91 8299721941",
  location: "Noida, India",
  summary:
    "Passionate Computer Science & Business Systems student specializing in AI/ML, full-stack development, and cybersecurity. Building intelligent systems that bridge the gap between cutting-edge research and real-world applications. President of PlayStorm Gaming Club with a track record of leading 100+ members and organizing 15+ events.",
  resumeUrl: "/cv.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/abhinav-sushil-varshney/",
    github: "https://github.com/Abhinavvarshney2003/",
    email: "mailto:abhinavvarshney1426@gmail.com",
  },
};

export const aboutMe = {
  story: `I'm a curious builder who thrives at the intersection of artificial intelligence, cybersecurity, and software engineering. My journey in tech began with an insatiable curiosity about how things work from low-level network packets to high-level neural architectures.

Currently pursuing B.Tech in Computer Science & Business Systems at Amity University, I've channeled my passion into building real-world AI solutions from medical imaging systems that detect PCOS using deep learning, to financial intelligence platforms processing real-time market data across equities, crypto, and forex.

As the President of PlayStorm, Amity's premier gaming club, I've learned that great technology is nothing without great leadership. I lead 100+ members, organize large-scale tournaments, and build partnerships that push boundaries.

My philosophy: Ship fast, learn faster, and never stop building.`,
  traits: [
    "Problem Solver",
    "Team Leader",
    "Quick Learner",
    "Innovation-Driven",
    "Detail-Oriented",
    "Community Builder",
  ],
  goals: [
    "Build AI systems that make healthcare more accessible",
    "Contribute to open-source AI/ML frameworks",
    "Launch a SaaS product solving real-world problems",
    "Work at a top-tier tech company pushing boundaries",
  ],
};

export const skills = {
  languages: [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "JavaScript", level: 90, icon: "⚡" },
    { name: "TypeScript", level: 85, icon: "📘" },
    { name: "Java", level: 80, icon: "☕" },
    { name: "C/C++", level: 78, icon: "⚙️" },
  ],
  frameworks: [
    { name: "React / Next.js", level: 88, icon: "⚛️" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "TensorFlow", level: 82, icon: "🧠" },
    { name: "PyTorch", level: 80, icon: "🔥" },
    { name: "Streamlit", level: 78, icon: "📊" },
  ],
  aiml: [
    { name: "Deep Learning", level: 88, icon: "🧬" },
    { name: "Computer Vision", level: 85, icon: "👁️" },
    { name: "NLP / LLMs", level: 83, icon: "💬" },
    { name: "RAG Systems", level: 80, icon: "📚" },
    { name: "GenAI", level: 82, icon: "✨" },
  ],
  tools: [
    { name: "Git & GitHub", level: 92, icon: "🔧" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Docker", level: 75, icon: "🐳" },
    { name: "Power BI", level: 80, icon: "📈" },
    { name: "Android Studio", level: 72, icon: "📱" },
  ],
  cloud: [
    { name: "Azure", level: 80, icon: "☁️" },
    { name: "AWS", level: 70, icon: "🌐" },
    { name: "GCP", level: 65, icon: "🔷" },
    { name: "Vercel", level: 85, icon: "▲" },
    { name: "Netlify", level: 80, icon: "🌿" },
  ],
  databases: [
    { name: "MongoDB", level: 82, icon: "🍃" },
    { name: "PostgreSQL", level: 78, icon: "🐘" },
    { name: "CosmosDB", level: 75, icon: "🌌" },
    { name: "Redis", level: 70, icon: "🔴" },
    { name: "Firebase", level: 76, icon: "🔶" },
  ],
};

export const projects = [
  {
    id: "ai-portfolio",
    title: "Portfolio",
    description:
      "Designed and developed a premium, high-performance developer portfolio using Next.js 14, Framer Motion, and Tailwind CSS. Features an integrated AI chatbot, a Command Palette (Cmd+K) for quick navigation, and a glassmorphism aesthetic.",
    longDescription: "This portfolio isn't just a static site; it's a showcase of modern web engineering. I built it to be exceptionally fast, accessible, and interactive, featuring an AI assistant that can answer questions about my background in real-time.",
    architecture: ["Framework: Next.js 14 with App Router and Server Components.", "Styling: Tailwind CSS with a custom design system and glassmorphism.", "AI: Integration with Vercel AI SDK and OpenAI for the chatbot.", "Animations: Framer Motion for premium-feel transitions and micro-interactions."],
    challenges: ["Creating a cohesive design that feels premium without being cluttered.", "Optimizing the AI chatbot for low-latency responses.", "Ensuring smooth performance across all device types and browsers."],
    solutions: ["Developed a custom design system using CSS variables for a unified 'Glass' theme.", "Implemented stream-based AI responses to give users immediate feedback.", "Utilized Next.js Image optimization and code-splitting to achieve near-perfect Lighthouse scores."],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI", "Vercel AI SDK"],
    category: "Full Stack",
    featured: true,
    github: "#",
    demo: "#",
    image: "/projects/portfolio-v2.webp",
    metrics: ["AI Chatbot integration", "Command Palette (Cmd+K)", "95+ Core Web Vitals score"],
  },
  {
    id: "vip-bot",
    title: "VIP Bot – AI Financial Intelligence Platform",
    description:
      "Engineered a multi-asset trading intelligence platform providing real-time AI price predictions for Equities, Crypto, and Forex using an ensemble of LSTM, LightGBM, and Prophet models. Architected a multi-agent framework and WebSocket-based dashboard delivering holistic market reports and live signals.",
    longDescription: "The VIP Bot is a comprehensive AI-powered financial intelligence platform designed to democratize quantitative trading insights. It processes real-time tick data across multiple asset classes (Equities, Crypto, Forex) and applies an ensemble of machine learning models to predict short-term price movements and generate actionable trading signals.",
    architecture: ["Data Ingestion: Node.js WebSocket bridge connecting to NSE/BSE and Crypto exchanges.", "Machine Learning Core: Python microservices running TensorFlow (LSTM), Scikit-learn, and LightGBM models.", "Frontend Dashboard: Next.js + Tailwind CSS with real-time WebSocket updates."],
    challenges: ["Processing high-frequency tick data with minimal latency.", "Ensuring model accuracy and mitigating overfitting in highly volatile crypto markets.", "Managing state and real-time updates across multiple clients via WebSockets."],
    solutions: ["Implemented a distributed message queue (Redis) to buffer and process high-frequency data streams asynchronously.", "Used an ensemble approach combining LSTM for sequence prediction and LightGBM for feature-based classification to stabilize predictions.", "Leveraged Socket.io with room-based broadcasting to optimize client updates."],
    tech: ["Python", "TensorFlow", "Scikit-learn", "Node.js", "WebSocket", "LightGBM"],
    category: "AI/ML",
    featured: true,
    github: "#",
    demo: "#",
    image: "/projects/vip-bot.webp",
    metrics: ["Real-time predictions across 3 asset classes", "Multi-agent architecture", "Live WebSocket dashboard"],
  },
  {
    id: "pcos-detection",
    title: "AI-Powered PCOS Detection",
    description:
      "Researched and applied deep-learning models (U-Net, YOLO, GAN) for early detection of Polycystic Ovary Syndrome in ultrasound images. Improved diagnostic efficiency by reducing reliance on manual interpretation and enhancing consistency across medical imaging workflows.",
    longDescription: "This research-focused project tackles the challenge of early PCOS diagnosis. Polycystic Ovary Syndrome is often difficult to diagnose consistently from ultrasound images due to noise and varying image quality. This system uses advanced deep learning to segment, detect, and classify ovarian cysts automatically.",
    architecture: ["Preprocessing Pipeline: Image augmentation and noise reduction using GANs.", "Segmentation: U-Net architecture to isolate the region of interest (ovaries).", "Detection: YOLOv8 for precise bounding box detection of cysts."],
    challenges: ["Scarcity of annotated medical datasets for PCOS.", "High variability in ultrasound image quality and equipment.", "The need for highly interpretable results for medical professionals."],
    solutions: ["Utilized Generative Adversarial Networks (GANs) to synthesize realistic ultrasound images, expanding the training dataset.", "Implemented aggressive data augmentation (rotation, scaling, noise injection) to make the model robust to different ultrasound machines.", "Added Grad-CAM visualizations to highlight the specific regions the model focused on, aiding doctor interpretability."],
    tech: ["U-Net", "YOLO", "GAN", "Python", "OpenCV", "Medical Imaging"],
    category: "AI/ML",
    featured: true,
    github: "#",
    demo: "#",
    image: "/projects/pcos.webp",
    metrics: ["Deep learning medical diagnostics", "Automated ultrasound analysis", "Enhanced diagnostic consistency"],
  },
  {
    id: "myfitnessbuddy",
    title: "MyFitnessBuddy – AI Fitness Coach",
    description:
      "Built a personalized AI fitness assistant using Retrieval-Augmented Generation (RAG) to generate goal-specific workout and diet plans. Integrated Azure services (Prompt Flow, AI Search) for fast, context-aware responses across structured and unstructured health data.",
    longDescription: "MyFitnessBuddy acts as a 24/7 personal trainer and nutritionist. Unlike static fitness apps, it uses RAG to pull from a vast database of nutritional science and exercise physiology, tailoring every response to the user's specific biometric data, goals, and limitations.",
    architecture: ["Vector Database: Azure CosmosDB with vector search capabilities.", "LLM Orchestration: Azure Prompt Flow managing OpenAI GPT-4 calls.", "Frontend: React Native mobile app (or React web app)."],
    challenges: ["Preventing hallucinations in health and fitness advice.", "Handling complex, multi-turn conversations about diet adjustments.", "Ensuring low latency in generating comprehensive weekly plans."],
    solutions: ["Implemented strict RAG boundaries, forcing the LLM to ground its answers exclusively in the retrieved scientific literature context.", "Used a specialized conversational memory buffer that summarizes past dietary restrictions.", "Pre-computed embeddings for common workout routines to speed up the retrieval process."],
    tech: ["Azure", "OpenAI", "CosmosDB", "RAG", "Python", "React"],
    category: "Full Stack",
    featured: true,
    github: "#",
    demo: "#",
    image: "/projects/fitness.webp",
    metrics: ["RAG-powered personalization", "Azure AI integration", "Context-aware health recommendations"],
  },
  {
    id: "netmarshal",
    title: "NetMarshal – AI Network Automation",
    description:
      "Built an intelligent network management system using a closed-loop sense–decide–act architecture to automate traffic analysis and policy enforcement. Implemented ML-based device classification enabling real-time QoS optimization across multi-vendor environments.",
    longDescription: "NetMarshal is an autonomous network management framework designed to replace manual network administration tasks. It continuously monitors network traffic, classifies devices and applications using machine learning, and automatically pushes QoS or security policies to routers and switches.",
    architecture: ["Traffic Sensing: NFStream for deep packet inspection and flow extraction.", "Intelligence Engine: Scikit-learn Random Forest models for traffic classification.", "Actuation: Netmiko for pushing CLI commands to network devices.", "Dashboard: Streamlit for real-time visualization."],
    challenges: ["Normalizing traffic features across different network environments.", "Safely pushing configuration changes to live network hardware without causing downtime.", "Achieving high accuracy in encrypted traffic classification."],
    solutions: ["Standardized flow features (packet sizes, inter-arrival times) independent of IP/Port.", "Implemented a dry-run feature and a rollback mechanism for all Netmiko automated configurations.", "Focused on statistical flow analysis (behavioral patterns) rather than deep packet inspection, allowing classification of encrypted SSL/TLS traffic."],
    tech: ["NFStream", "Scikit-learn", "Netmiko", "Streamlit", "GNS3", "Python"],
    category: "Cybersecurity",
    featured: true,
    github: "#",
    demo: "#",
    image: "/projects/netmarshal.webp",
    metrics: ["Autonomous network control", "ML-based device classification", "Real-time QoS optimization"],
  },
  {
    id: "convoai",
    title: "ConvoAI – AI Voice Call Assistant",
    description:
      "Developed a voice-powered Android assistant leveraging OpenAI's Whisper for high-precision, real-time speech-to-text transcription and intelligent, hands-free call management. Optimized on-device speech recognition pipelines for low-latency intent detection.",
    longDescription: "ConvoAI is a state-of-the-art voice assistant designed specifically for Android. It bridges the gap between traditional telephony and modern AI by using OpenAI's Whisper model to transcribe calls in real-time, allowing users to interact with their calls through voice commands and intelligent summaries.",
    architecture: ["Speech Recognition: OpenAI Whisper (on-device optimization).", "Mobile Framework: Kotlin-based Android application with background services.", "AI Processing: Integration with LLMs for intent classification and summarization."],
    challenges: ["Managing audio stream latency for real-time transcription.", "Balancing high-accuracy AI models with mobile battery life.", "Ensuring privacy and security for sensitive call data."],
    solutions: ["Implemented a chunked audio processing buffer to stream data to Whisper without waiting for silence.", "Used quantized model versions to reduce the computational load on the mobile CPU.", "Enabled end-to-end encryption for all processed audio fragments."],
    tech: ["Android", "Whisper", "Speech Recognition", "Kotlin", "OpenAI"],
    category: "Mobile",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/convoai.webp",
    metrics: ["Real-time speech-to-text", "Low-latency intent detection", "Battery-efficient processing"],
  },
  {
    id: "adaptive-traffic",
    title: "Adaptive Traffic Signal Control",
    description:
      "Developed an intelligent traffic management system using computer vision and reinforcement learning to dynamically optimize signal timings based on real-time traffic flow analysis, reducing average wait times significantly.",
    longDescription: "Traditional traffic lights operate on fixed timers, which is inefficient. This project uses computer vision to count vehicles and Reinforcement Learning (RL) to decide which lane gets the green light and for how long, adapting to real-time surges in traffic.",
    architecture: ["Computer Vision: OpenCV and YOLOv8 for vehicle detection and counting.", "RL Engine: Deep Q-Learning (DQN) agent trained in a simulated environment.", "Simulation: SUMO (Simulation of Urban MObility) for testing and validation."],
    challenges: ["Training the RL agent to handle edge cases like emergency vehicles.", "Coordinating multiple intersections to prevent bottleneck downstream.", "Processing high-resolution video feeds at low latency."],
    solutions: ["Integrated a priority-based reward system in the RL algorithm for emergency vehicle detection.", "Implemented a multi-agent RL approach where neighboring signals communicate their flow states.", "Used TensorRT for hardware-accelerated inference on the edge."],
    tech: ["Python", "OpenCV", "Reinforcement Learning", "TensorFlow", "Simulation"],
    category: "AI/ML",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/traffic.webp",
    metrics: ["Real-time traffic analysis", "RL-based optimization", "Reduced wait times"],
  },
  {
    id: "resume-matcher",
    title: "Resume Matcher – AI-Powered ATS",
    description:
      "Built an intelligent resume parsing and matching system that analyzes job descriptions and candidate resumes to provide compatibility scores and recommendations, helping recruiters streamline their hiring pipeline.",
    longDescription: "The AI-Powered ATS helps bridge the gap between job seekers and recruiters. By using advanced NLP, it doesn't just look for keywords; it understands the context of skills and experience to match candidates with the most relevant job descriptions.",
    architecture: ["Parsing: spaCy and PyPDF2 for structured data extraction.", "NLP: Word2Vec and Cosine Similarity for semantic matching.", "Backend: Flask-based API for handling resume uploads and processing."],
    challenges: ["Handling various resume formats (PDF, DOCX, Images).", "Understanding semantic similarity (e.g., 'React Developer' matching 'Frontend Engineer').", "Ensuring fair and unbiased scoring."],
    solutions: ["Standardized all input formats into a clean text representation using robust OCR and parsing libraries.", "Utilized pre-trained word embeddings to capture semantic relationships between different job titles.", "Implemented a transparent scoring breakdown that highlights matching skills and missing gaps."],
    tech: ["Python", "NLP", "Scikit-learn", "Flask", "spaCy"],
    category: "AI/ML",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/resume-matcher.webp",
    metrics: ["NLP-powered matching", "ATS compatibility scoring", "Recruiter workflow optimization"],
  },
  {
    id: "spotify-analytics",
    title: "Spotify Data Analytics Platform",
    description:
      "Comprehensive data analytics project analyzing Spotify streaming data to uncover listening patterns, genre trends, and user behavior insights using Python data science libraries and interactive visualizations.",
    longDescription: "This project transforms raw Spotify streaming logs into actionable insights. It allows users to visualize their listening journey, discover their 'true' favorite genres, and predict their future listening habits based on historical trends.",
    architecture: ["Data Ingestion: Spotify API and user-exported JSON logs.", "Analysis: Pandas and NumPy for statistical processing.", "Visualization: Interactive Power BI dashboard and Matplotlib/Seaborn plots."],
    challenges: ["Cleaning and normalizing inconsistent data from the Spotify API.", "Efficiently processing large datasets of thousands of listening events.", "Creating intuitive visualizations for complex temporal data."],
    solutions: ["Built a robust data cleaning pipeline that handles missing values and merges multiple data sources.", "Optimized memory usage by using vectorized operations in Pandas.", "Developed a time-series heat map to visualize listening intensity throughout the day/week."],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Power BI"],
    category: "Data Analytics",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/spotify.webp",
    metrics: ["Data-driven insights", "Interactive visualizations", "Pattern recognition"],
  },
  {
    id: "playstorm-website",
    title: "PlayStorm Official Website",
    description:
      "Engineered the official web platform for Amity University's premier gaming club. Built a responsive frontend with Vite and React, backed by a Node.js API and SQLite database to manage event registrations, leaderboards, and member profiles.",
    longDescription: "PlayStorm needed a central hub for their gaming community. I built a modern, responsive website that handles everything from tournament registrations to real-time leaderboards, serving hundreds of students at Amity University.",
    architecture: ["Frontend: Vite + React with Tailwind CSS for high performance.", "Backend: Node.js/Express API handling business logic.", "Database: SQLite for efficient, lightweight data storage."],
    challenges: ["Handling concurrent tournament registrations without data loss.", "Designing a mobile-first experience for gamers on the go.", "Implementing a secure admin dashboard for club leads."],
    solutions: ["Implemented database transactions to ensure registration integrity.", "Used a mobile-first CSS grid layout to maintain design consistency across devices.", "Added JWT-based authentication for the administration portal."],
    tech: ["React", "Vite", "Node.js", "Express", "SQLite"],
    category: "Full Stack",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["100+ active members managed", "Integrated event registration", "Responsive UI"],
  },
  {
    id: "playstorm-main-bot",
    title: "PlayStorm Core Discord Bot",
    description:
      "Developed an enterprise-grade Discord bot using TypeScript and Prisma ORM to automate club operations. Features include automated role management, dynamic voice channels, social media integration, and a sophisticated permission system.",
    longDescription: "This bot is the backbone of the PlayStorm Discord server. It automates tedious administrative tasks, allowing the club leads to focus on organizing events. It features a custom permission system that rivals enterprise software.",
    architecture: ["Language: TypeScript for type-safety and better maintenance.", "ORM: Prisma for interacting with a PostgreSQL database.", "Infrastructure: Containerized using Docker for easy deployment."],
    challenges: ["Handling high volumes of concurrent Discord events.", "Managing complex state across persistent voice channels.", "Ensuring the bot stays online 24/7 during major tournaments."],
    solutions: ["Implemented an event handler with rate-limiting to stay within Discord API bounds.", "Used a centralized database to track state instead of in-memory storage.", "Deployed with Docker and automated health checks to ensure near 100% uptime."],
    tech: ["TypeScript", "Discord.js", "Prisma", "PostgreSQL", "Docker"],
    category: "Automation Tools",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["Automated role assignment", "Database-backed persistence", "Containerized deployment"],
  },
  {
    id: "ministorm-bot",
    title: "Ministorm Bot",
    description:
      "Created a lightweight utility bot for the PlayStorm server to handle day-to-day moderation, automated ticketing, and quick polling. Focused on high uptime and rapid response times for server admins.",
    longDescription: "Ministorm is the 'Swiss Army Knife' of the PlayStorm server. It handles the essential daily tasks like moderation and ticketing that don't require the heavy lifting of the main bot, ensuring a fast and responsive experience for users.",
    architecture: ["Logic: Node.js event-driven architecture.", "Integration: Discord.js API for real-time interaction.", "Storage: Lightweight JSON-based persistence for small datasets."],
    challenges: ["Implementing a reliable ticketing system that doesn't lose track of user issues.", "Ensuring moderation commands are executed instantly.", "Keeping the codebase lightweight and easy to update."],
    solutions: ["Developed a custom ticketing manager with automated archival.", "Optimized the event loop to prioritize moderation commands over utility tasks.", "Used a modular command structure for easy expansion of features."],
    tech: ["JavaScript", "Node.js", "Discord.js"],
    category: "Automation Tools",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["Custom moderation tools", "Ticketing system", "High availability"],
  },
  {
    id: "playstorm-music-bot",
    title: "PlayStorm Music Bot",
    description:
      "Architected a high-performance Discord music bot using Python and Lavalink. Designed to provide lag-free, high-fidelity audio streaming for club tournaments and casual gaming sessions, complete with custom audio filters.",
    longDescription: "The Music Bot is the soul of the PlayStorm gaming sessions. By leveraging Lavalink, it provides high-fidelity audio without putting a heavy load on the main bot process, supporting hundreds of concurrent listeners with custom filters like Bass Boost.",
    architecture: ["Audio Engine: Lavalink server for high-performance audio processing.", "Controller: Python-based discord.py client managing the queue.", "Deployment: Docker Compose to manage both the bot and Lavalink containers."],
    challenges: ["Eliminating audio stuttering during high-latency network periods.", "Managing a complex queue system across multiple voice channels.", "Implementing real-time audio filters without lag."],
    solutions: ["Used Lavalink's native audio-caching to buffer music effectively.", "Built a state-driven queue manager that persists data in a Redis cache.", "Utilized Lavalink's native audio filter API to perform heavy calculations off-thread."],
    tech: ["Python", "discord.py", "Lavalink", "Docker"],
    category: "Automation Tools",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["High-fidelity audio streaming", "Custom audio filters", "Lavalink integration"],
  },
  {
    id: "transcribe-app",
    title: "Real-Time Audio Transcription",
    description:
      "Built a Python-based audio transcription tool utilizing custom speech recognition logic. Designed to convert speech to text with high accuracy, optimizing processing for offline use cases.",
    longDescription: "This transcription tool is designed for privacy and speed. By focusing on offline processing, it ensures that sensitive audio never leaves the user's machine, providing high-accuracy text conversion for long-form recordings.",
    architecture: ["Input: Audio stream capture using PyAudio.", "Engine: SpeechRecognition library with custom model tuning.", "Output: Formatted text export for documentation."],
    challenges: ["Optimizing for different accents and background noise levels.", "Handling long audio files without crashing due to memory limits.", "Maintaining accuracy in specialized domains (e.g., medical or legal)."],
    solutions: ["Implemented a noise-gating filter to clean audio before processing.", "Used stream-processing to transcribe audio in manageable chunks rather than loading entire files.", "Added a custom dictionary feature to improve accuracy for technical terms."],
    tech: ["Python", "SpeechRecognition", "Audio Processing"],
    category: "AI/ML",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["Real-time processing", "Custom recognition models", "Offline capability"],
  },
  {
    id: "turbidity-app",
    title: "Turbidity Analysis App",
    description:
      "Developed a specialized application for analyzing liquid turbidity. Leveraged Python to process environmental or chemical data, providing accurate readings and automated analysis workflows.",
    longDescription: "The Turbidity Analysis App provides a digital solution for monitoring water quality. By converting optical sensor data into clear, actionable metrics, it helps environmentalists and researchers track pollution levels with high precision.",
    architecture: ["Data Processing: Python script for signal processing and calibration.", "UI: Lightweight interface for real-time monitoring.", "Storage: CSV-based logging for long-term data tracking."],
    challenges: ["Calibrating sensor readings to match laboratory standards.", "Handling noisy data from low-cost optical sensors.", "Designing an interface for non-technical field workers."],
    solutions: ["Developed a multi-point calibration algorithm to improve sensor accuracy by 15%.", "Applied a moving-average filter to smooth out sensor jitter.", "Created a simplified 'Traffic Light' status indicator (Safe/Caution/Hazard)."],
    tech: ["Python", "Data Analysis"],
    category: "Data Analytics",
    featured: false,
    github: "#",
    demo: "#",
    image: "/projects/placeholder.webp",
    metrics: ["Automated data analysis", "Environmental monitoring", "Precision readings"],
  },
];

export const experience = [
  {
    title: "AI & Automation Intern",
    company: "Marksman Technologies",
    period: "May – Jul 2025",
    description: [
      "Designed and integrated AI solutions including intelligent chatbots and multimodal GenAI (text/image/voice)",
      "Automated manual business workflows with advanced low-code tools, improving team efficiency by 30%",
      "Deployed production-grade RAG pipelines for enterprise knowledge management",
    ],
    tech: ["Python", "RAG", "OpenAI", "Azure", "Low-Code"],
    type: "internship",
  },
  {
    title: "Cybersecurity Intern (VIP Program)",
    company: "Cisco",
    period: "Jun – Aug 2025",
    description: [
      "Completed Cisco's AICTE virtual internship in cybersecurity with hands-on threat detection experience",
      "Developed practical skills in secure network practices through industry-oriented tasks",
      "Gained expertise in Cisco Packet Tracer for network simulation and security analysis",
    ],
    tech: ["Cybersecurity", "Cisco Packet Tracer", "Network Security"],
    type: "internship",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology in Computer Science & Business Systems",
    institution: "Amity University, Uttar Pradesh, Noida",
    period: "2022 – 2026",
    status: "Pursuing",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Operating Systems",
      "Computer Networks",
      "Machine Learning",
      "Database Management",
    ],
  },
  {
    degree: "Class XII – ISC",
    institution: "Lucknow Public College",
    period: "2020 – 2022",
    status: "Completed",
    coursework: [
      "Physics",
      "Chemistry",
      "Mathematics",
      "Computer Science",
      "English",
    ],
  },
  {
    degree: "Class X – ICSE",
    institution: "Lucknow Public School",
    period: "2018 – 2020",
    status: "Completed",
    coursework: [
      "Mathematics",
      "Science (Physics, Chemistry, Biology)",
      "Computer Applications",
      "Social Science",
      "English",
    ],
  },
];

export const certifications = [
  {
    name: "Cybersecurity Essentials",
    issuer: "Cisco",
    icon: "🛡️",
  },
  {
    name: "CCNAv7 (I, II & III)",
    issuer: "Cisco",
    icon: "🌐",
  },
  {
    name: "Python Programming Essentials (I & II)",
    issuer: "Cisco",
    icon: "🐍",
  },
  {
    name: "Ethical Hacking",
    issuer: "Cisco",
    icon: "🔓",
  },
  {
    name: "Fundamentals of Deep Learning",
    issuer: "NVIDIA",
    icon: "🧠",
  },
  {
    name: "Apply AI: Analyze Customer Reviews",
    issuer: "NVIDIA",
    icon: "⭐",
  },
  {
    name: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Data Analytics",
    icon: "📊",
  },
  {
    name: "Microsoft Data Analyst (Power BI & Tableau)",
    issuer: "Microsoft",
    icon: "📈",
  },
  {
    name: "Introduction to IoT Digital Transformation",
    issuer: "Blackstone",
    icon: "🔗",
  },
  {
    name: "Understanding Design",
    issuer: "NPTEL",
    icon: "🎨",
  },
];

export const leadership = [
  {
    title: "Club President",
    organization: "PlayStorm – Amity University Gaming Club",
    period: "2025 – Present",
    description:
      "Leading 100+ active members, organizing 15+ gaming tournaments and strategy workshops. Initiated outreach campaigns and industry collaborations to grow visibility and partnerships.",
    achievements: [
      "Led 100+ active members across multiple gaming divisions",
      "Organized 15+ tournaments and strategy workshops",
      "Built industry partnerships and sponsorship deals",
      "Grew club visibility through strategic outreach campaigns",
    ],
  },
];

export const testimonials = [
  {
    name: "Dr. Priya Sharma",
    role: "Professor, Amity University",
    content:
      "Abhinav is one of the most driven students I've mentored. His ability to bridge AI research with practical applications is remarkable. His PCOS detection project demonstrated both technical depth and real-world impact.",
    avatar: "PS",
  },
  {
    name: "Rahul Mehta",
    role: "Tech Lead, Marksman Technologies",
    content:
      "During his internship, Abhinav's initiative and technical prowess were exceptional. He didn't just complete tasks  he identified workflow bottlenecks and automated them, improving our team's efficiency by 30%.",
    avatar: "RM",
  },
  {
    name: "Arjun Kapoor",
    role: "Co-founder, PlayStorm Club",
    content:
      "Abhinav transformed PlayStorm from a casual gaming group into a campus powerhouse. His leadership, vision, and ability to inspire the team made him the perfect president for our club.",
    avatar: "AK",
  },
];

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Leadership", href: "#leadership" },
  { label: "Contact", href: "#contact" },
];
