document.addEventListener('DOMContentLoaded', function () {
    // Theme switching functionality
    const themeRadios = document.querySelectorAll('input[name="theme"]');

    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.toggle('dark-theme', savedTheme === 'dark');
        document.getElementById(savedTheme).checked = true;
    }

    // Add event listeners to theme toggle
    themeRadios.forEach(radio => {
        radio.addEventListener('change', function () {
            const isDark = this.value === 'dark';
            document.body.classList.toggle('dark-theme', isDark);
            localStorage.setItem('theme', this.value);
        });
    });

    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Education data
    const educationData = [
        {
            institution: "NATIONAL TECHNICAL UNIVERSITY \"KHARKIV POLYTECHNIC INSTITUTE\"",
            degree: "Specialist's Degree",
            field: "Specialized Computer Systems",
            startDate: "September 2011",
            endDate: "January 2017",
            description: "Graduate Diploma specialist with honors in 2017, specialty \"Specialized Computer Systems\" professional qualification \"computer systems analyst\""
        },
        {
            institution: "English сourses",
            degree: "",
            field: "",
            startDate: "2014",
            endDate: "2015",
            description: "English courses \"American English Center\""
        },
        {
            institution: "Programming сourses",
            degree: "",
            field: "",
            startDate: "2016",
            endDate: "2017",
            description: "Programming courses in Ukrainian IT School - PHP"
        }
    ];

    // Experience data
    const experienceData = [
        {
            company: "Tocan Solutions",
            position: "Full Stack Web Developer",
            startDate: "July 2017",
            endDate: "Present",
            responsibilities: [
                "Develop and maintain complex enterprise logistics web applications used for transportation management and operational planning",
                "Design and implement backend services and custom REST APIs for internal modules and third-party integrations",
                "Build rich client-side interfaces using Ext JS for large-scale business applications",
                "Integrate external services including postal providers, SMS, electronic document signing systems",
                "Work with geospatial data and implement map-based functionality using Google Maps and OpenStreetMap (routing, geolocation, route visualization)",
                "Develop complex analytical and operational reports, dashboards, and data visualizations (charts and tables) for logistics and transportation workflows",
                "Integrate and consume external APIs from partners and logistics service providers",
                "Optimize application performance and maintain high reliability of production systems",
                "Participate in system architecture discussions and improve existing legacy modules",
                "Conduct code reviews and support knowledge sharing within the development team"
            ],
            technologies: ["PHP", "JavaScript", "HTML5/CSS3", "MySQL/MariaDB/PostgreSQL", "Ext JS", "Bootstrap/jQuery/VisJS", "Slim", "Docker", "Kubernetes", "GitLab/GitHub", "CI/CD", "Swagger", "RabbitMQ", "Postman", "Figma", "Elasticsearch", "Rancher", "XML/JSON", "Google Maps/OpenStreetMap", "Azure Blob storage/Single sign on/Active Directory"]
        },
        {
            company: "Incube LLC",
            position: "Web Developer",
            startDate: "March 2017",
            endDate: "May 2017",
            responsibilities: [
                "Development and support of online stores based on CMS Webasyst, OpenCart, WordPress, Bitrix.",
                "Writing a plug-in for an online store.",
            ],
            technologies: ["Webasyst", "OpenCart", "Wordpress", "Bitrix", "JavaScript", "PHP", "HTML5", "CSS3", "MySQL"]
        }
    ];

    // Skills data with updated categories
    const skillsData = [
        { name: "PHP", category: "core" },
        { name: "Slim Framework", category: "core" },
        { name: "HTML5/CSS3/SCSS3", category: "core" },
        { name: "JavaScript", category: "core" },
        { name: "Ext JS", category: "core" },
        { name: "REST API", category: "core" },
        { name: "MySQL", category: "core" },
        { name: "Redis", category: "core" },
        { name: "Docker", category: "core" },

        { name: "HTML5/CSS3", category: "frontend" },
        { name: "JavaScript", category: "frontend" },
        { name: "Ext JS", category: "frontend" },
        { name: "Bootstrap", category: "frontend" },
        { name: "jQuery", category: "frontend" },
        { name: "VisJS", category: "frontend" },
        { name: "FusionCharts", category: "frontend" },

        { name: "PHP", category: "backend" },
        { name: "Slim Framework", category: "backend" },
        { name: "RabbitMQ", category: "backend" },
        { name: "REST API Integrations", category: "backend" },
        { name: "External Services Integration", category: "backend" },
        { name: "XML/JSON", category: "backend" },

        { name: "MySQL", category: "database" },
        { name: "MariaDB", category: "database" },
        { name: "PostgreSQL", category: "database" },
        { name: "Redis", category: "database" },

        { name: "Elasticsearch", category: "search" },
        { name: "Kibana", category: "search" },

        { name: "Docker", category: "cloud" },
        { name: "Kubernetes", category: "cloud" },
        { name: "Rancher", category: "cloud" },
        { name: "Azure Blob Storage", category: "cloud" },
        { name: "Active Directory", category: "cloud" },
        { name: "Single Sign-On (SSO)", category: "cloud" },
        { name: "S3-compatible storage (S3Client)", category: "cloud" },

        { name: "GitLab/GitHub", category: "tools" },
        { name: "CI/CD", category: "tools" },
        { name: "Swagger", category: "tools" },
        { name: "Postman", category: "tools" },
        { name: "Figma", category: "tools" },

        { name: "Google Maps API", category: "maps" },
        { name: "OpenStreetMap", category: "maps" },

        { name: "Generation and processing of business documents", category: "documents" },
        { name: "XLSX", category: "documents" },
        { name: "DOCX", category: "documents" },
        { name: "CSV", category: "documents" },
        { name: "PDF", category: "documents" }
    ];

    // Portfolio data
    const portfolioData = [
        {
            title: "Personal Portfolio & Resume Website",
            description: "A modern responsive developer portfolio built with HTML, CSS, and JavaScript. The website presents my projects, technical stack, and professional experience with optimized performance and clean UI design.",
            image: "./assets/img/site1.png",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            liveLink: "https://oleksandrteslenko.github.io/resume/",
            repoLink: "https://github.com/oleksandrteslenko/resume"
        },
        {
            title: "Valentine's Day Interactive Love Page",
            description: "A creative single-page website built as a digital Valentine’s card. The project includes animated UI effects, smooth transitions, and interactive elements implemented with vanilla JavaScript, showcasing front-end creativity and clean responsive layout.",
            image: "./assets/img/site2.png",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            liveLink: "https://oleksandrteslenko.github.io/my-valentine/",
            repoLink: "https://github.com/oleksandrteslenko/my-valentine"
        },
        {
            title: "One-page platform designed",
            description: "FirstJobStep is a modern one-page platform designed to help students and young professionals find their first job, internship, or part-time opportunity. The platform aggregates job listings and useful resources from trusted employers and popular platforms, making it easier to start a career without prior experience.",
            image: "./assets/img/site7.png",
            technologies: ["JavaScript", "HTML5", "CSS3"],
            liveLink: "https://oleksandrteslenko.github.io/lending/",
            repoLink: "https://github.com/oleksandrteslenko/lending"
        },
        {
            title: "Active Directory Password Reset Web Interface",
            description: "A web-based interface that allows users to securely reset or change their Active Directory passwords. The application provides a simple authentication form for entering user credentials and updating passwords through integration with Active Directory services. The project demonstrates implementation of secure authentication workflows and enterprise directory integration.",
            image: "./assets/img/site6.png",
            technologies: ["PHP", "JavaScript", "HTML5", "CSS3"],
            liveLink: "https://oleksandrteslenko.github.io/AD_change_pswrd/",
            repoLink: "https://github.com/oleksandrteslenko/AD_change_pswrd"
        },
        {
            title: "Genius Fullstack Course Projects",
            description: "A set of practice projects developed during a full-stack web development course. The project focuses on building responsive web interfaces using HTML, CSS, and JavaScript, implementing interactive UI components, and applying modern web development practices. The work is still in progress as part of the ongoing learning program.",
            image: "./assets/img/site4.png",
            technologies: ["JavaScript", "HTML5", "CSS3", "SCSS3"],
            liveLink: "https://oleksandrteslenko.github.io/genius-fullstack-course/",
            repoLink: "https://github.com/oleksandrteslenko/genius-fullstack-course"
        },
        {
            title: "Employee Task & Workflow Management Internal System",
            description: "The project is based on everyday work processes. Namely, it displays a list of company employees, their data, a list of current tasks assigned to each of them. Each task has its own name, description, link to the resources page, priority, status, change history, responsible for execution and verification.",
            image: "./assets/img/site5.png",
            technologies: ["PHP", "MySQL", "JavaScript", "HTML5", "CSS3"],
            liveLink: "https://oleksandrteslenko.github.io/meeting-tasks/",
            repoLink: "https://github.com/oleksandrteslenko/meeting-tasks"
        },
        {
            title: "Two-Factor Authentication (2FA) demo with Microsoft Authenticator",
            description: "A demonstration project implementing secure Two-Factor Authentication (2FA) using Microsoft Authenticator and the TOTP standard. The application includes QR code generation, secret key provisioning, and one-time password verification. This project showcases integration of modern authentication mechanisms to enhance security in web applications.",
            image: "./assets/img/site3.png",
            technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "GuzzleHttp"],
            liveLink: "https://oleksandrteslenko.github.io/2fa/",
            repoLink: "https://github.com/oleksandrteslenko/2fa"
        }
    ];

    // Render education section
    const educationList = document.querySelector('.education-list');
    educationData.forEach(edu => {
        const educationItem = document.createElement('div');
        educationItem.classList.add('education-item', 'fade-in');
        var education = `
            <div class="education-header">
                <span class="education-institution">${edu.institution}</span>
                <span class="education-dates">${edu.startDate} — ${edu.endDate}</span>
            </div>
            <div class="education-content">`;
        if (edu.degree != '') {
            education += `<p class="education-degree"> ${edu.degree} in ${edu.field}</p>`;
        }
        education += `<p class="education-description">${edu.description}</p>
            </div>`;

        educationItem.innerHTML = education;
        educationList.appendChild(educationItem);
    });

    // Render experience section
    const experienceList = document.querySelector('.experience-list');
    experienceData.forEach(exp => {
        const expItem = document.createElement('div');
        expItem.classList.add('experience-item', 'fade-in');

        const responsibilitiesHTML = exp.responsibilities.map(resp =>
            `<li>${resp}</li>`
        ).join('');

        const technologiesHTML = exp.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        expItem.innerHTML = `
        <div class="experience-header">
            <div class="experience-title-row">
                <span class="experience-position">${exp.position}</span>
                <span class="experience-dates">
                    <i class="fas fa-calendar"></i>
                    ${exp.startDate} — ${exp.endDate}
                </span>
            </div>
            <p class="experience-company">${exp.company}</p>
        </div>
        <div class="experience-content">
            <div class="experience-section">
                <h4>Responsibilities</h4>
                <ul class="experience-responsibilities">${responsibilitiesHTML}</ul>
            </div>
            <div class="experience-section">
                <h4>Technologies</h4>
                <div class="experience-technologies">${technologiesHTML}</div>
            </div>
        </div>`;

        experienceList.appendChild(expItem);
    });

    // Render skills section with updated categories
    const frontendSkills = skillsData.filter(skill => skill.category === "frontend");
    const backendSkills = skillsData.filter(skill => skill.category === "backend");
    const cloudSkills = skillsData.filter(skill => skill.category === "cloud");
    const toolsSkills = skillsData.filter(skill => skill.category === "tools");
    const coreSkills = skillsData.filter(skill => skill.category === "core");
    const databaseSkills = skillsData.filter(skill => skill.category === "database");
    const searchSkills = skillsData.filter(skill => skill.category === "search");
    const mapsSkills = skillsData.filter(skill => skill.category === "maps");
    const documentsSkills = skillsData.filter(skill => skill.category === "documents");

    const skillsContainer = document.querySelector('.skills-container');
    skillsContainer.innerHTML = '';

    const frontendCard = createSkillsCard('Frontend Development', 'fas fa-code', frontendSkills);
    const backendCard = createSkillsCard('Backend Development', 'fas fa-server', backendSkills);
    const cloudCard = createSkillsCard('Cloud & Infrastructure', 'fas fa-cloud', cloudSkills);
    const toolsCard = createSkillsCard('DevOps & Tools', 'fas fa-tools', toolsSkills);
    const coreCard = createSkillsCard('Core Stack', 'fas fa-laptop', coreSkills);
    const databaseCard = createSkillsCard('Databases & Caching', 'fas fa-database', databaseSkills);
    const searchCard = createSkillsCard('Search & Analytics', 'fas fa-search', searchSkills);
    const mapsCard = createSkillsCard('Maps & Geospatial Services', 'fas fa-map', mapsSkills);
    const documentsCard = createSkillsCard('Document & File Processing', 'fas fa-file', documentsSkills);

    skillsContainer.appendChild(coreCard);
    skillsContainer.appendChild(frontendCard);
    skillsContainer.appendChild(backendCard);
    skillsContainer.appendChild(databaseCard);
    skillsContainer.appendChild(cloudCard);
    skillsContainer.appendChild(searchCard);
    skillsContainer.appendChild(toolsCard);
    skillsContainer.appendChild(mapsCard);
    skillsContainer.appendChild(documentsCard);

    function createSkillsCard(title, iconClass, skills) {
        const card = document.createElement('div');
        card.classList.add('skills-card', 'fade-in');

        let cardContent = `<h3><i class="${iconClass}"></i> ${title}</h3><div class="skills-list">`;

        skills.forEach(skill => {
            cardContent += `<span class="skill ${skill.category}-skill">${skill.name}</span>`;
        });

        cardContent += '</div>';
        card.innerHTML = cardContent;
        return card;
    }

    // Render portfolio section
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioData.forEach(project => {
        const portfolioItem = document.createElement('div');
        portfolioItem.classList.add('portfolio-item', 'fade-in');

        const technologiesHTML = project.technologies.map(tech =>
            `<span class="tech-tag">${tech}</span>`
        ).join('');

        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${project.image}" alt="${project.title}">
            </div>
            <div class="portfolio-content">
                <h3 class="portfolio-title">${project.title}</h3>
                <p class="portfolio-description">${project.description}</p>
                <div class="portfolio-technologies">${technologiesHTML}</div>
                <div class="portfolio-links">
                    ${project.liveLink ?
                `<a href="${project.liveLink}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
                        <i class="fas fa-external-link-alt"></i> Live Demo
                    </a>` : ''}
                    ${project.repoLink ?
                `<a href="${project.repoLink}" target="_blank" rel="noopener noreferrer" class="portfolio-link">
                        <i class="fab fa-github"></i> Code
                    </a>` : ''}
                </div>
            </div>`;

        portfolioGrid.appendChild(portfolioItem);
    });

    // Simple scroll animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(10px)';
    });

    // Function to check if an element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0);
    }

    // Function to handle scroll animation
    function handleScrollAnimation() {
        fadeElements.forEach(element => {
            if (isInViewport(element) && element.style.opacity === '0') {
                setTimeout(() => {
                    element.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, 100);
            }
        });
    }

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();
});