// Project Data
const projects = [
    {
        id: 1,
        title: "AI & IoT-based Energy Monitoring System",
        description: "A comprehensive system using AI algorithms to monitor, analyze, and optimize energy consumption in real-time.",
        technologies: ["Python", "TensorFlow", "Arduino", "MQTT"],
        featured: true,
        // github: "https://github.com",
        // demo: "https://example.com"
    },
    {
        id: 2,
        title: "Smart Energy Dashboard",
        description: "A web application for visualizing energy consumption data with interactive charts and maps for spatial analysis.",
        technologies: ["Laravel", "ApexCharts", "Mapbox", "MySQL"],
        featured: false,
        // github: "https://github.com",
        // demo: "https://example.com"
    },
    {
        id: 3,
        title: "Predictive Maintenance System",
        description: "An AI-powered system that predicts equipment failures before they occur, reducing downtime and maintenance costs.",
        technologies: ["Python", "Scikit-learn", "Flask", "React"],
        featured: false,
        // github: "https://github.com",
        // demo: "https://example.com"
    },
    {
        id: 4,
        title: "Smart Home Energy Manager",
        description: "IoT system that optimizes home energy usage through real-time monitoring and automation.",
        technologies: ["IoT", "NodeJS", "MQTT", "React Native"],
        featured: false,
        // github: "https://github.com",
        // demo: null
    },
    {
        id: 5,
        title: "Renewable Energy Forecasting",
        description: "ML model that predicts renewable energy generation based on weather data and historical patterns.",
        technologies: ["Python", "TensorFlow", "Pandas", "Web"],
        featured: false,
        // github: "https://github.com",
        // demo: "https://example.com"
    },
    {
        id: 6,
        title: "Industrial IoT Gateway",
        description: "Edge computing solution that collects and processes sensor data in industrial environments.",
        technologies: ["IoT", "C++", "Python", "MQTT"],
        featured: false,
        // github: "https://github.com",
        // demo: null
    }
];

// Certification Data
const certifications = [
    {
        id: 1,
        title: "Sequence Models",
        issuer: "DeepLearning.AI",
        date: "March 2025",
        description: "Advanced sequence modeling with RNNs, LSTMs, GRUs, and Transformers.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/coursera.svg",
        colorClass: "bg-primary-light"
    },
    {
        id: 2,
        title: "Custom Models, Layers, and Loss Functions with TensorFlow",
        issuer: "DeepLearning.AI",
        date: "September 2024",
        description: "Building and customizing deep learning models using TensorFlow and Python.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/deeplearningai.png",
        colorClass: "bg-green-100"
    },
    {
        id: 3,
        title: "AI Fundamentals",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Core AI concepts including LLMs, deep learning, and generative AI techniques.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/datacamp.svg",
        colorClass: "bg-blue-100"
    },    
    {
        id: 4,
        title: "Intermediate Python for Developers",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Intermediate programming concepts and best practices in Python for developers.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/datacamp.svg",
        colorClass: "bg-purple-100"
    },
    {
        id: 5,
        title: "Introduction to Python for Developers",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Introduction to Python programming and scripting fundamentals.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/datacamp.svg",
        colorClass: "bg-yellow-100"
    },
    {
        id: 6,
        title: "Large Language Models (LLMs) Concepts",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Understanding LLMs, their architecture, and their application in AI systems.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/datacamp.svg",
        colorClass: "bg-red-100"
    },
    {
        id: 7,
        title: "Machine Learning Engineering for Production (MLOps) L2",
        issuer: "Coursera",
        date: "August 2024",
        description: "Production-level deployment and management of machine learning pipelines.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/coursera.svg",
        colorClass: "bg-teal-100"
    },
    {
        id: 8,
        title: "Machine Learning in Production",
        issuer: "DeepLearning.AI",
        date: "August 2024",
        description: "Strategies and tools for deploying and scaling ML systems.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/deeplearningai.png",
        colorClass: "bg-indigo-100"
    },
    {
        id: 9,
        title: "Structuring Machine Learning Projects",
        issuer: "DeepLearning.AI",
        date: "August 2024",
        description: "Frameworks and best practices for planning and structuring ML projects.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/coursera.svg",
        colorClass: "bg-pink-100"
    },
    {
        id: 10,
        title: "Understanding Cloud Computing",
        issuer: "DataCamp",
        date: "August 2024",
        description: "Fundamentals of cloud computing and its applications in data science and AI.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/datacamp.svg",
        colorClass: "bg-orange-100"
    },
    {
        id: 11,
        title: "AI Digital Marketing with Real-World Examples",
        issuer: "Udemy",
        date: "July 2024",
        description: "Using AI for sentiment analysis, recommender systems, and churn prediction in marketing.",
        credentialUrl: "https://www.linkedin.com/in/boutelis-moussaab/details/certifications/",
        iconUrl: "images/udemy.svg",
        colorClass: "bg-lime-100"
    }
];

// Experience Data
const experiences = [
    {
        year: "2023 – 2024",
        title: "Graduate Project: AIoT-Based Smart Energy Monitoring System",
        organization: "Batna, Algeria",
        description: "Developed an AI-powered IoT system for real-time energy tracking, implementing CNN and LSTM models for number recognition and energy prediction, enhancing resource management.",
        tags: ["AI", "IoT", "Energy Management"]
    },
    {
        year: "2023",
        title: "Automation Intern",
        organization: "Siemens SPA Hydra",
        description: "Assisted in automating industrial systems, improving efficiency using Siemens technologies, and gained hands-on experience with SIMATIC MANAGER and WINCC EXPLORER.",
        tags: ["Automation", "Siemens"]
    },
    {
        year: "2022",
        title: "Renewable Energy Intern",
        organization: "Ministry of Environment",
        description: "Contributed to solar energy projects, collaborating on sustainability solutions and energy optimization with experts.",
        tags: ["Renewable Energy", "Sustainability"]
    },
    {
        year: "2022",
        title: "Research Intern",
        organization: "Applied Research Unit in Renewable Energies (URAER)",
        description: "Worked on renewable energy systems, assisting with deployment and improving system efficiency.",
        tags: ["Research", "Renewable Energy"]
    }
];
