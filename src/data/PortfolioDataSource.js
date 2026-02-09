/**
 * Data Layer - Data Source
 * Mock data source (in production, this would call APIs)
 */

export class PortfolioDataSource {
    async getUserProfileData() {
        return {
            name: "Madheshwaran J",
            title: "Data Practitioner & Developer",
            subtitle: "Transforming Data into Insights",
            location: "Chennai, Tamil Nadu",
            phone: "+91 9344668506",
            email: "waranmadhesh24@gmail.com",
            linkedin: "https://linkedin.com/in/madheshwaran-j/",
            github: "https://github.com/Madhesh0203",
            bio: "Computer Science graduate passionate about data analysis, cloud computing, and building intelligent systems. Currently working as a Data Practitioner Intern, specializing in SQL, Azure, and Linux systems.",
            education: {
                institution: "Sathyabama Institute of Science and Technology",
                degree: "Bachelor of Computer Science and Engineering",
                duration: "Sep. 2021 – May 2025",
                cgpa: "7.35/10",
                location: "Chennai, Tamil Nadu"
            }
        };
    }

    async getSkillsData() {
        return [
            {
                id: 1,
                category: "Programming",
                icon: "💻",
                items: ["Java", "Python", "SQL"]
            },
            {
                id: 2,
                category: "Data Analysis",
                icon: "📊",
                items: ["Data Cleaning", "SQL Queries", "Data Validation", "Analysis"]
            },
            {
                id: 3,
                category: "Tools & Software",
                icon: "🛠️",
                items: ["MS Excel", "Power BI", "Git", "GitHub", "PuTTY", "WinSCP"]
            },
            {
                id: 4,
                category: "Web Technologies",
                icon: "🌐",
                items: ["HTML", "CSS", "JavaScript"]
            },
            {
                id: 5,
                category: "Cloud & Networking",
                icon: "☁️",
                items: ["Microsoft Azure", "Virtual Machines", "TCP/IP", "OSI"]
            },
            {
                id: 6,
                category: "Development Environment",
                icon: "🖥️",
                items: ["VS Code", "Jupyter Notebook", "Linux"]
            }
        ];
    }

    async getExperiencesData() {
        return [
            {
                id: 1,
                role: "Data Practitioner Intern",
                company: "MethodHub Software",
                location: "Chennai, Tamil Nadu",
                startDate: "November 2025",
                endDate: "",
                isCurrent: true,
                responsibilities: [
                    "Applied core concepts of SQL, Linux operating systems, networking, and Microsoft Azure cloud fundamentals",
                    "Worked with Azure virtual machines for basic instance creation, configuration, and monitoring",
                    "Configured networking concepts including IP addressing, OSI layers, and secure access controls",
                    "Used PuTTY and WinSCP to securely access and manage Linux-based cloud servers",
                    "Prepared weekly technical transcripts covering RDBMS concepts, switching, routing, and process synchronization",
                    "Participated in team meetings, webinars, and technical discussions to gain real-world industry exposure"
                ]
            },
            {
                id: 2,
                role: "Web Development Intern",
                company: "Lemonpeak Technologies",
                location: "Chennai, Tamil Nadu",
                startDate: "October 2023",
                endDate: "December 2023",
                isCurrent: false,
                responsibilities: [
                    "Contributed to developing an online e-commerce platform with user-friendly and responsive design",
                    "Collaborated with the team to build clean and optimized web pages ahead of deadlines",
                    "Reused front-end components to streamline development and maintain consistency",
                    "Implemented catalog and cart functionality using HTML, CSS, and JavaScript",
                    "Integrated SQL database for product inventory, order tracking, and customer data management",
                    "Improved site performance by reducing load times and ensuring cross-browser compatibility"
                ]
            }
        ];
    }

    async getProjectsData() {
        return [
            {
                id: 1,
                title: "Sentiment Analysis using Machine Learning in Traditional Language",
                year: "2025",
                description: "Developed a speech-based sentiment analysis system capable of accurately identifying emotions such as happy, sad, and neutral from voice input. Extracted advanced audio features using MFCC and STFT techniques, and implemented LSTM models for precise emotion classification.",
                technologies: ["Python", "LSTM", "MFCC", "STFT", "Flask", "Groq API"],
                icon: "🎤",
                highlights: [
                    "Extracted advanced audio features using MFCC and STFT techniques",
                    "Implemented LSTM models for precise emotion classification",
                    "Integrated Tamil-to-English voice translation using the Groq API",
                    "Deployed the system as an interactive web application with Flask and HTML/CSS"
                ]
            },
            {
                id: 2,
                title: "Environmental Survey Project - Mega Foundation",
                year: "2024",
                description: "Organized and managed a college event addressing real-world environmental challenges. Conducted a drone survey to assess a dead river, mapping its area and identifying key problem zones for ecological restoration planning.",
                technologies: ["Drone Technology", "Data Analysis", "GIS", "Environmental Research"],
                icon: "🌍",
                highlights: [
                    "Conducted drone survey to assess a dead river, mapping its area and identifying key problem zones",
                    "Calculated and analyzed the total number of unwanted gum arabic trees to support ecological restoration",
                    "Coordinated a team of volunteers, delegating tasks and ensuring timely completion",
                    "Presented findings and solutions to Mega Foundation representatives"
                ]
            }
        ];
    }
}
