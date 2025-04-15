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
        title: "Deep Learning Specialization",
        issuer: "DeepLearning.AI",
        date: "June 2022",
        description: "Comprehensive program covering neural networks, deep learning, and AI applications.",
        credentialUrl: "https://example.com/cert/1",
        iconName: "award",
        colorClass: "bg-primary-light"
    },
    {
        id: 2,
        title: "AI for Edge Computing",
        issuer: "NVIDIA DLI",
        date: "March 2022",
        description: "Implementation of AI models on edge devices for real-time processing and analysis.",
        credentialUrl: "https://example.com/cert/2",
        iconName: "microchip",
        colorClass: "bg-green-100"
    },
    {
        id: 3,
        title: "IBM Cloud Essentials",
        issuer: "IBM",
        date: "November 2021",
        description: "Cloud computing fundamentals with IBM services for scalable AI and IoT applications.",
        credentialUrl: "https://example.com/cert/3",
        iconName: "cloud",
        colorClass: "bg-blue-100"
    },
    {
        id: 4,
        title: "Machine Learning",
        issuer: "Coursera (Stanford)",
        date: "August 2021",
        description: "Comprehensive course on machine learning algorithms, applications, and implementation.",
        credentialUrl: "https://example.com/cert/4",
        iconName: "laptop-code",
        colorClass: "bg-purple-100"
    },
    {
        id: 5,
        title: "Renewable Energy Systems",
        issuer: "edX (MIT)",
        date: "May 2021",
        description: "Principles of renewable energy generation, storage, and smart grid integration.",
        credentialUrl: "https://example.com/cert/5",
        iconName: "bolt",
        colorClass: "bg-yellow-100"
    },
    {
        id: 6,
        title: "IoT Foundations",
        issuer: "Cisco Networking Academy",
        date: "February 2021",
        description: "Fundamentals of IoT architecture, protocols, and implementation strategies.",
        credentialUrl: "https://example.com/cert/6",
        iconName: "network-wired",
        colorClass: "bg-red-100"
    }
];

// Experience Data
const experiences = [
    {
        year: "2023",
        title: "AI Conference Speaker",
        organization: "AI Shaping Tomorrow's Life",
        description: "Presented research on energy optimization using AI at an international conference, discussing real-world applications and future potential.",
        tags: ["Conference", "Research"]
    },
    {
        year: "2022",
        title: "Engineering Intern",
        organization: "Siemens Energy",
        description: "Developed and implemented energy monitoring solutions using AI algorithms to optimize power consumption in industrial environments.",
        tags: ["Internship", "6 months"]
    },
    {
        year: "2021",
        title: "Research Assistant",
        organization: "URAER (Renewable Energy Research Unit)",
        description: "Assisted in research on renewable energy integration with smart grids, focusing on AI applications for predictive maintenance and energy forecasting.",
        tags: ["Research", "4 months"]
    },
    {
        year: "2020",
        title: "Environmental Technology Intern",
        organization: "Ministry of Environment",
        description: "Worked on implementing IoT solutions for environmental monitoring, including air quality sensors and data analysis platforms.",
        tags: ["Internship", "3 months"]
    }
];