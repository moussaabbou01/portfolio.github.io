// Project Data
const projects = [
    {
        id: 1,
        title: "HSE RAG Dashboard - Intelligent Accident Management System",
        description: "Professional web application for HSE (Health, Safety & Environment) accident management at Sonatrach GL1K. Uses RAG (Retrieval-Augmented Generation) technology combined with AI to analyze historical accidents, identify root causes, generate preventive recommendations, and produce professional PDF/Word reports.",
        technologies: ["Python", "RAG", "LLM", "Streamlit", "NLP", "Generative AI"],
        featured: true,
        isNew: true,
        status: "In Development",
        github: "https://github.com/moussaabbou01",
        highlights: ["RAG-powered analysis", "Root cause identification", "Automated report generation", "HSE domain expertise"]
    },
    {
        id: 2,
        title: "AI & IoT-based Energy Monitoring System",
        description: "A comprehensive system using AI algorithms to monitor, analyze, and optimize energy consumption in real-time. Developed as graduation project at ENREDD using ESP32-CAM devices and AI technologies.",
        technologies: ["Python", "TensorFlow", "Arduino", "MQTT", "IoT", "ESP32"],
        featured: true,
        status: "Completed",
        highlights: ["Real-time monitoring", "AI predictions", "ESP32-CAM integration", "Web dashboard"]
    },
    {
        id: 3,
        title: "AI Insight Daily: 5 Concepts, 5 Minutes",
        description: "Automated daily AI learning system that sends beautiful HTML emails with 5 new AI concepts every day. Features smart tracking to avoid duplicates, responsive design, and runs 100% free on GitHub Actions with zero maintenance.",
        technologies: ["Python", "GitHub Actions", "Email Automation", "AI Education"],
        featured: false,
        status: "Completed",
        github: "https://github.com/moussaabbou01/ai-insight-daily",
        highlights: ["Daily AI concepts", "No duplicate topics", "Beautiful HTML emails", "Zero maintenance"]
    },
];

// Certification Data
const certifications = [
    {
        id: 1,
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "July 2025",
        description: "Comprehensive specialization covering neural networks, CNNs, RNNs, and deep learning best practices.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "brain",
        colorClass: "bg-primary-light",
        isNew: true
    },
    {
        id: 2,
        title: "Convolutional Neural Networks",
        issuer: "DeepLearning.AI",
        date: "July 2025",
        description: "Advanced techniques in computer vision and CNN architectures for image recognition and analysis.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "eye",
        colorClass: "bg-green-100",
        isNew: true
    },
    {
        id: 3,
        title: "Deep Learning Specialization (v.2)",
        issuer: "Coursera",
        date: "July 2025",
        description: "Updated version of the comprehensive deep learning specialization program.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "graduation-cap",
        colorClass: "bg-blue-100",
        isNew: true
    },
    {
        id: 4,
        title: "Sequence Models",
        issuer: "DeepLearning.AI",
        date: "March 2025",
        description: "Advanced sequence modeling with RNNs, LSTMs, GRUs, Transformers, and attention mechanisms for NLP and generative AI.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "code-branch",
        colorClass: "bg-purple-100"
    },
    {
        id: 5,
        title: "Custom Models, Layers, and Loss Functions with TensorFlow",
        issuer: "DeepLearning.AI",
        date: "September 2024",
        description: "Building and customizing deep learning models, layers, and loss functions using TensorFlow and advanced Python techniques.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "cube",
        colorClass: "bg-orange-100"
    },
    {
        id: 6,
        title: "AI Fundamentals",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Core AI concepts including machine learning, generative AI, deep learning, and large language models fundamentals.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "robot",
        colorClass: "bg-teal-100"
    },
    {
        id: 7,
        title: "Intermediate Python for Developers",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Intermediate programming concepts and best practices in Python for professional software development.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "python",
        colorClass: "bg-yellow-100"
    },
    {
        id: 8,
        title: "Introduction to Python for Developers",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Python programming fundamentals for software development and data science applications.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "code",
        colorClass: "bg-green-200"
    },
    {
        id: 9,
        title: "Large Language Models (LLMs) Concepts",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Understanding LLMs architecture, applications, and implementation in AI systems and deep neural networks.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "language",
        colorClass: "bg-red-100"
    },
    {
        id: 10,
        title: "Machine Learning Engineering for Production (MLOps)",
        issuer: "Coursera",
        date: "August 2024",
        description: "Production-level deployment and management of machine learning pipelines with agile project management practices.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "cogs",
        colorClass: "bg-indigo-100"
    },
    {
        id: 11,
        title: "Machine Learning in Production",
        issuer: "DeepLearning.AI",
        date: "August 2024",
        description: "Strategies and tools for deploying and scaling ML systems in production environments with data management focus.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "server",
        colorClass: "bg-pink-100"
    },
    {
        id: 12,
        title: "Structuring Machine Learning Projects",
        issuer: "DeepLearning.AI",
        date: "August 2024",
        description: "Frameworks and best practices for planning, structuring, and managing ML projects with predictive modeling.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "project-diagram",
        colorClass: "bg-lime-100"
    },
    {
        id: 13,
        title: "Understanding Cloud Computing",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Fundamentals of cloud computing and its applications in data science and data management.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "cloud",
        colorClass: "bg-cyan-100"
    },
    {
        id: 14,
        title: "AI Digital Marketing with Real World Examples",
        issuer: "Udemy",
        date: "July 2024",
        description: "Applying AI for digital marketing analytics, recommendation systems, churn prediction, and sentiment analysis.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "chart-line",
        colorClass: "bg-yellow-200"
    },
    {
        id: 15,
        title: "Delivering Quality Work with Agility",
        issuer: "IBM",
        date: "July 2024",
        description: "Project management principles focusing on quality delivery, agile methodologies, and strategic communication.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "tasks",
        colorClass: "bg-gray-100"
    },
    {
        id: 16,
        title: "Developing with Llama 3: Meta's Innovative LLM",
        issuer: "LinkedIn",
        date: "July 2024",
        description: "Hands-on development experience with Meta's Llama 3 large language model and software development applications.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "code",
        colorClass: "bg-blue-200"
    },
    {
        id: 17,
        title: "Improving Deep Neural Networks: Hyperparameter Tuning",
        issuer: "DeepLearning.AI",
        date: "July 2024",
        description: "Advanced techniques for hyperparameter tuning, regularization, and optimization of deep neural networks.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "sliders-h",
        colorClass: "bg-purple-200"
    },
    {
        id: 18,
        title: "Neural Networks and Deep Learning",
        issuer: "DeepLearning.AI",
        date: "July 2024",
        description: "Foundational course covering neural networks, backpropagation, and deep learning fundamentals with AI problem solving.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "network-wired",
        colorClass: "bg-green-300"
    },
    {
        id: 19,
        title: "Python for Data Science and AI",
        issuer: "Coursera",
        date: "July 2024",
        description: "Comprehensive Python programming for data science and AI applications with data analysis focus.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "python",
        colorClass: "bg-yellow-300"
    },
    {
        id: 20,
        title: "Python for Data Science, AI & Development",
        issuer: "IBM",
        date: "July 2024",
        description: "Professional Python programming for data science, AI development, REST APIs, and data management.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "database",
        colorClass: "bg-orange-200"
    },
    {
        id: 21,
        title: "Using Basic Formulas and Functions in Microsoft Excel",
        issuer: "Coursera",
        date: "July 2024",
        description: "Data analysis fundamentals using Microsoft Excel formulas and functions for business applications.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "file-excel",
        colorClass: "bg-green-400"
    },
    {
        id: 22,
        title: "Typing Certificate",
        issuer: "Ratatype",
        date: "June 2024",
        description: "Professional typing certification demonstrating advanced written communication and keyboard proficiency skills.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "keyboard",
        colorClass: "bg-gray-200"
    },
    {
        id: 23,
        title: "ChatGPT Prompt Engineering Mastery",
        issuer: "Udemy",
        date: "April 2024",
        description: "Advanced prompt engineering techniques for optimizing ChatGPT and LLM interactions with problem-solving focus.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "comment-dots",
        colorClass: "bg-purple-300"
    },
    {
        id: 24,
        title: "Internet of Things (IoT) Online Course",
        issuer: "Udemy",
        date: "April 2024",
        description: "Comprehensive IoT development including sensors, connectivity, and embedded systems programming.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "wifi",
        colorClass: "bg-orange-300"
    },
    {
        id: 25,
        title: "Machine Learning Online Course",
        issuer: "Udemy",
        date: "April 2024",
        description: "Comprehensive machine learning course covering Jupyter, programming, data analysis, and Python implementation.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "chart-bar",
        colorClass: "bg-red-200"
    },
    {
        id: 26,
        title: "Advanced Learning Algorithms",
        issuer: "DeepLearning.AI",
        date: "March 2024",
        description: "Advanced ML algorithms including XGBoost, decision trees, random forests, and neural networks with TensorFlow.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "tree",
        colorClass: "bg-green-500"
    },
    {
        id: 27,
        title: "Generative AI Essentials",
        issuer: "IBM",
        date: "January 2024",
        description: "Fundamentals of generative AI, including programming, data analysis, and artificial intelligence applications.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "magic",
        colorClass: "bg-purple-400"
    },
    {
        id: 28,
        title: "Generative AI: Introduction and Applications",
        issuer: "IBM",
        date: "January 2024",
        description: "Comprehensive introduction to generative AI with deep learning, machine learning, and data collection focus.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "lightbulb",
        colorClass: "bg-yellow-400"
    },
    {
        id: 29,
        title: "Introduction to Artificial Intelligence (AI) with Honors",
        issuer: "IBM",
        date: "January 2024",
        description: "Comprehensive introduction to AI concepts with honors recognition, covering programming and data analysis.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "award",
        colorClass: "bg-gold"
    },
    {
        id: 30,
        title: "The 21st Century Skills Training",
        issuer: "World Learning",
        date: "October 2023",
        description: "Leadership, communication, critical thinking, public speaking, and team leadership skills for modern professionals.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "users",
        colorClass: "bg-blue-300"
    },
    {
        id: 31,
        title: "Communicate, Captivate and Convince",
        issuer: "Udemy",
        date: "June 2023",
        description: "Advanced communication and presentation skills focusing on convincing people and critical thinking.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "bullhorn",
        colorClass: "bg-red-300"
    },
    {
        id: 32,
        title: "Intro to ChatGPT: Essential Skills for Getting Started",
        issuer: "Udemy",
        date: "May 2023",
        description: "Foundational skills for using ChatGPT effectively with command prompt and AI interaction techniques.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "robot",
        colorClass: "bg-cyan-200"
    },
    {
        id: 33,
        title: "SIMATIC MANAGER and WINCC EXPLORER Programming",
        issuer: "Siemens",
        date: "March 2023",
        description: "Comprehensive training in industrial automation programming, documentation, and HMI development with Siemens tools.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "industry",
        colorClass: "bg-gray-300"
    },
    {
        id: 34,
        title: "Fundamentals of Deep Learning",
        issuer: "NVIDIA",
        date: "July 2022",
        description: "Hands-on experience with GPU-accelerated deep learning using NVIDIA's development platform and TensorFlow.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "microchip",
        colorClass: "bg-green-600"
    },
    {
        id: 35,
        title: "Public Speaking for Startups - Cure Stage Fright",
        issuer: "Udemy",
        date: "April 2019",
        description: "Overcoming stage fright and developing confident public speaking skills for entrepreneurs and professionals.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconName: "microphone",
        colorClass: "bg-orange-400"
    }
];

// Skills Data
const skillsData = {
    technical: [
        { name: "Deep Learning", level: 95, category: "AI/ML" },
        { name: "TensorFlow", level: 93, category: "AI/ML" },
        { name: "PyTorch", level: 90, category: "AI/ML" },
        { name: "Generative AI", level: 88, category: "AI/ML" },
        { name: "Computer Vision", level: 92, category: "AI/ML" },
        { name: "Natural Language Processing", level: 85, category: "AI/ML" },
        { name: "Python", level: 95, category: "Programming" },
        { name: "Machine Learning", level: 93, category: "AI/ML" },
        { name: "Neural Networks", level: 90, category: "AI/ML" },
        { name: "Transformers", level: 87, category: "AI/ML" },
        { name: "Data Science", level: 88, category: "Data" },
        { name: "LLMs", level: 83, category: "AI/ML" },
        { name: "JavaScript", level: 80, category: "Programming" },
        { name: "Data Visualization", level: 85, category: "Data" },
        { name: "Git", level: 85, category: "Tools" }
    ],
    tools: [
        "VS Code", "Jupyter Notebook", "Google Colab", "Git", "Docker",
        "Hugging Face", "Weights & Biases", "TensorBoard", "PyCharm", "Kaggle"
    ],
    languages: [
        { name: "Arabic", level: "Native" },
        { name: "French", level: "Intermediate" },
        { name: "English", level: "Intermediate" }
    ]
};

// Experience Data (Timeline format)
const experiences = [
    {
        year: "Aug 2025 - Present",
        title: "Artificial Intelligence Engineer",
        organization: "Sonatrach · Contract",
        description: "Developing and implementing AI solutions for Algeria's leading energy company. Applying artificial intelligence technologies to optimize operations and drive innovation in the oil and gas sector.",
        tags: ["Artificial Intelligence", "Energy Sector", "AI Engineering"],
        achievements: [
            "Designing AI-driven solutions for energy sector optimization",
            "Implementing machine learning models for operational efficiency",
            "Collaborating with cross-functional teams on AI initiatives"
        ]
    },
    {
        year: "Jan 2025 - Aug 2025",
        title: "AI/ML Engineer & Researcher",
        organization: "Independent AI Research & Development",
        description: "Specialized in deep learning, generative AI, and computer vision projects. Developing cutting-edge AI solutions with focus on transformer architectures and neural network optimization.",
        tags: ["Deep Learning", "Generative AI", "Computer Vision", "Research"],
        achievements: [
            "Developed 8+ advanced AI projects with 90%+ accuracy rates",
            "Specialized in transformer architectures and attention mechanisms",
            "Implemented custom neural networks for computer vision tasks",
            "Published research on AI optimization and deep learning techniques"
        ]
    },
    {
        year: "2023 – 2024",
        title: "AI Research Project: Deep Learning Systems",
        organization: "ENREDD - Research & Development, Batna, Algeria",
        description: "Led development of advanced AI systems for master's thesis. Implemented state-of-the-art deep learning models including CNNs, LSTMs, and transformer architectures.",
        tags: ["AI Research", "Deep Learning", "Neural Networks", "Academic Research"],
        achievements: [
            "Achieved 96% accuracy in computer vision tasks using custom CNN architectures",
            "Implemented LSTM networks for time series prediction with 98% accuracy",
            "Developed transformer-based models for multi-modal AI applications",
            "Published research findings on deep learning optimization techniques"
        ]
    },
    {
        year: "Mar 2023 - Apr 2023",
        title: "AI Systems Integration Intern",
        organization: "Siemens SPA Hydra, Algeria",
        description: "Gained experience in AI-driven automation systems and intelligent control algorithms. Applied machine learning techniques for industrial process optimization.",
        tags: ["AI Automation", "Machine Learning", "Industrial AI", "Systems Integration"],
        achievements: [
            "Integrated ML algorithms into industrial automation systems",
            "Developed predictive maintenance models using deep learning",
            "Improved system efficiency by 25% through AI optimization",
            "Collaborated on advanced AI-driven control solutions"
        ]
    },
    {
        year: "Jun 2022",
        title: "AI Research Assistant - Computer Vision",
        organization: "Ministry of Environment, Batna, Algeria",
        description: "Applied computer vision and deep learning for environmental monitoring. Developed AI models for satellite image analysis and environmental data processing.",
        tags: ["Computer Vision", "Environmental AI", "Deep Learning", "Research"],
        achievements: [
            "Developed computer vision models for satellite image analysis",
            "Applied deep learning for environmental pattern recognition",
            "Created AI-driven solutions for environmental monitoring",
            "Contributed to AI policy recommendations for government initiatives"
        ]
    },
    {
        year: "2022",
        title: "Research Intern",
        organization: "Applied Research Unit in Renewable Energies (URAER)",
        description: "Worked on renewable energy systems, assisting with deployment and improving system efficiency.",
        tags: ["Research", "Renewable Energy"]
    }
];
