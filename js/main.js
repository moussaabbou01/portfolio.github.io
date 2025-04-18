document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio application
    initApp();
});

// Main initialization function
function initApp() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // Initialize components
    initMobileMenu();
    initThemeToggle();
    initScrollSpy();
    initBackToTop();
    initProjectFilters();
    initProjectsGrid();
    initCertificationsGrid();
    initTimelineItems();
    initContactForm();
    initTypingEffect();
    initLoadMoreButtons();
}

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
        
        // Close mobile menu when clicking on a link
        mobileMenuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.remove('active');
            });
        });
    }
}

// Theme Toggle
function initThemeToggle() {
    const themeToggle = document.querySelector('.theme-toggle');
    const themeToggleMobile = document.querySelector('.theme-toggle-mobile');
    const themeIcon = document.querySelector('.theme-toggle i');
    const themeIconMobile = document.querySelector('.theme-toggle-mobile i');
    const storedTheme = localStorage.getItem('theme');
    
    // Apply stored theme or use system preference
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.body.classList.add('dark-theme');
        updateThemeIcons(true);
    }
    
    function toggleTheme() {
        const isDarkTheme = document.body.classList.toggle('dark-theme');
        updateThemeIcons(isDarkTheme);
        localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    }
    
    function updateThemeIcons(isDarkTheme) {
        if (themeIcon) {
            themeIcon.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
        }
        if (themeIconMobile) {
            themeIconMobile.className = isDarkTheme ? 'fas fa-sun' : 'fas fa-moon';
        }
    }
    
    // Add event listeners for theme toggles
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }
}

// Scrollspy for navigation
function initScrollSpy() {
    const navLinks = document.querySelectorAll('.nav-menu a, .mobile-menu a');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
    
    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Update URL hash
                history.pushState(null, null, targetId);
            }
        });
    });
}

// Back to top button
function initBackToTop() {
    const backToTopBtn = document.getElementById('back-to-top');
    
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('active');
            } else {
                backToTopBtn.classList.remove('active');
            }
        });
        
        backToTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// Project Filters
function initProjectFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active filter button
                document.querySelector('.filter-btn.active').classList.remove('active');
                this.classList.add('active');
                
                // Filter projects
                filterProjects(this.getAttribute('data-filter'));
            });
        });
    }
}

// Filter projects based on selected technology
function filterProjects(filter) {
    const projectCards = document.querySelectorAll('.project-card');
    let visibleCount = 0;
    
    if (projectCards.length > 0) {
        projectCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'flex';
                visibleCount++;
            } else {
                const techTags = card.querySelectorAll('.tech-tag');
                let hasTag = false;
                
                techTags.forEach(tag => {
                    if (tag.textContent === filter) {
                        hasTag = true;
                    }
                });
                
                if (hasTag) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            }
        });
        
        // Show/hide load more button based on visible projects
        const loadMoreBtn = document.getElementById('load-more-projects');
        if (loadMoreBtn) {
            loadMoreBtn.style.display = visibleCount <= 3 ? 'none' : 'inline-flex';
        }
    }
}

// Initialize Projects Grid
function initProjectsGrid() {
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectsGrid && projects) {
        // Initially show only 3 projects
        const initialProjects = projects.slice(0, 3);
        
        // Create project cards
        initialProjects.forEach(project => {
            const projectCard = createProjectCard(project);
            projectsGrid.appendChild(projectCard);
        });
    }
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';
    card.setAttribute('data-id', project.id);
    
    const imageHtml = `
        <div class="project-image">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${project.featured ? '<div class="featured-badge">Featured</div>' : ''}
        </div>
    `;
    
    const techTags = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    const linksHtml = `
        <div class="project-links">
            ${project.github ? `
                <a href="${project.github}" target="_blank" class="project-link">
                    <i class="fab fa-github"></i> GitHub
                </a>
            ` : ''}
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            ` : ''}
        </div>
    `;
    
    card.innerHTML = `
        ${imageHtml}
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            ${linksHtml}
        </div>
    `;
    
    return card;
}

// Initialize Certifications Grid
function initCertificationsGrid() {
    const certificationsGrid = document.querySelector('.certifications-grid');
    
    if (certificationsGrid && certifications) {
        // Initially show only 3 certifications
        const initialCerts = certifications.slice(0, 3);
        
        // Create certification cards
        initialCerts.forEach(cert => {
            const certCard = createCertificationCard(cert);
            certificationsGrid.appendChild(certCard);
        });
    }
}

// Create a certification card element
function createCertificationCard(cert) {
    const card = document.createElement('div');
    card.className = 'cert-card';
    card.setAttribute('data-id', cert.id);
    
    let iconClass;
    switch (cert.iconName) {
        case 'award':
            iconClass = 'fas fa-award';
            break;
        case 'microchip':
            iconClass = 'fas fa-microchip';
            break;
        case 'cloud':
            iconClass = 'fas fa-cloud';
            break;
        case 'laptop-code':
            iconClass = 'fas fa-laptop-code';
            break;
        case 'bolt':
            iconClass = 'fas fa-bolt';
            break;
        case 'network-wired':
            iconClass = 'fas fa-network-wired';
            break;
        default:
            iconClass = 'fas fa-certificate';
    }
    
    card.innerHTML = `
        <div class="cert-header">
            <div class="cert-icon ${cert.colorClass}">
                <i class="${iconClass}"></i>
            </div>
            <div>
                <h3 class="cert-title">${cert.title}</h3>
                <p class="cert-issuer">${cert.issuer}</p>
            </div>
        </div>
        <p class="cert-description">${cert.description}</p>
        <div class="cert-footer">
            <span class="cert-date">
                <i class="far fa-calendar"></i> ${cert.date}
            </span>
            ${cert.credentialUrl ? `
                <a href="${cert.credentialUrl}" target="_blank" class="cert-link">
                    View Certificate <i class="fas fa-external-link-alt"></i>
                </a>
            ` : ''}
        </div>
    `;
    
    return card;
}

// Initialize Timeline Items
function initTimelineItems() {
    const timeline = document.querySelector('.timeline');
    
    if (timeline && experiences) {
        experiences.forEach((experience, index) => {
            const timelineItem = createTimelineItem(experience);
            timeline.appendChild(timelineItem);
            
            // Add staggered animation with increasing delay
            setTimeout(() => {
                timelineItem.classList.add('animate');
            }, 300 * (index + 1));
        });
        
        // Setup intersection observer for animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If timeline is visible, ensure all items eventually animate
                    const items = timeline.querySelectorAll('.timeline-item:not(.animate)');
                    items.forEach((item, idx) => {
                        setTimeout(() => {
                            item.classList.add('animate');
                        }, 200 * idx);
                    });
                    
                    // Unobserve once triggered
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 }); // Trigger when 20% of the timeline is visible
        
        // Start observing the timeline
        observer.observe(timeline);
    }
}

// Create a timeline item element
function createTimelineItem(experience) {
    const item = document.createElement('div');
    item.className = 'timeline-item';
    
    const tagsHtml = experience.tags.map(tag => `<span class="timeline-tag">${tag}</span>`).join('');
    
    // Create element with enhanced animation and styling 
    item.innerHTML = `
        <div class="timeline-content">
            <span class="timeline-badge">${experience.year}</span>
            <h3 class="timeline-title">${experience.title}</h3>
            <p class="timeline-organization">${experience.organization}</p>
            <p class="timeline-description">${experience.description}</p>
            <div class="timeline-tags">${tagsHtml}</div>
        </div>
    `;
    
    // Add animation delay based on index
    setTimeout(() => {
        item.classList.add('animate');
    }, 200);
    
    return item;
}

// Initialize Contact Form
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Basic validation
            let isValid = true;
            
            // Name validation
            if (name.length < 2) {
                showError('name-error', 'Name must be at least 2 characters');
                isValid = false;
            } else {
                hideError('name-error');
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showError('email-error', 'Please enter a valid email address');
                isValid = false;
            } else {
                hideError('email-error');
            }
            
            // Message validation
            if (message.length < 10) {
                showError('message-error', 'Message must be at least 10 characters');
                isValid = false;
            } else {
                hideError('message-error');
            }
            
            if (isValid) {
                // Form is valid, simulate form submission
                const submitBtn = contactForm.querySelector('.submit-btn');
                const submitText = document.getElementById('submit-text');
                
                // Update button text and disable it
                submitText.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate API call
                setTimeout(() => {
                    // Reset form
                    contactForm.reset();
                    
                    // Update button text and enable it
                    submitText.textContent = 'Send Message';
                    submitBtn.disabled = false;
                    
                    // Show success toast
                    showToast('Message sent successfully!', 'success');
                }, 1500);
            }
        });
    }
}

// Show error message
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

// Hide error message
function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.style.display = 'none';
    }
}

// Show toast notification
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.querySelector('.toast-message');
    const toastIcon = document.querySelector('.toast-icon');
    
    if (toast && toastMessage) {
        toastMessage.textContent = message;
        
        // Update toast type
        if (type === 'error') {
            toast.classList.add('error');
            if (toastIcon) {
                toastIcon.className = 'fas fa-times-circle toast-icon';
            }
        } else {
            toast.classList.remove('error');
            if (toastIcon) {
                toastIcon.className = 'fas fa-check-circle toast-icon';
            }
        }
        
        // Show toast
        toast.classList.add('show');
        
        // Hide toast after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize typing effect
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    const text = "AI & IoT Engineer";
    let index = 0;
    
    if (typingText) {
        typingText.textContent = '';
        
        function typeText() {
            if (index < text.length) {
                typingText.textContent += text.charAt(index);
                index++;
                setTimeout(typeText, 100);
            }
        }
        
        // Start typing after a small delay
        setTimeout(typeText, 1000);
    }
}

// Initialize Load More Buttons
function initLoadMoreButtons() {
    // Load more projects
    const loadMoreProjectsBtn = document.getElementById('load-more-projects');
    if (loadMoreProjectsBtn && projects) {
        loadMoreProjectsBtn.addEventListener('click', function() {
            const projectsGrid = document.querySelector('.projects-grid');
            const currentCount = projectsGrid.children.length;
            
            if (currentCount < projects.length) {
                // Get next batch of projects
                const nextProjects = projects.slice(currentCount, currentCount + 3);
                
                // Add new project cards
                nextProjects.forEach(project => {
                    const projectCard = createProjectCard(project);
                    projectsGrid.appendChild(projectCard);
                });
                
                // Hide button if all projects are loaded
                if (projectsGrid.children.length >= projects.length) {
                    loadMoreProjectsBtn.style.display = 'none';
                }
            }
        });
    }
    
    // Load more certifications
    const loadMoreCertsBtn = document.getElementById('load-more-certs');
    if (loadMoreCertsBtn && certifications) {
        loadMoreCertsBtn.addEventListener('click', function() {
            const certificationsGrid = document.querySelector('.certifications-grid');
            const currentCount = certificationsGrid.children.length;
            
            if (currentCount < certifications.length) {
                // Get next batch of certifications
                const nextCerts = certifications.slice(currentCount, currentCount + 3);
                
                // Add new certification cards
                nextCerts.forEach(cert => {
                    const certCard = createCertificationCard(cert);
                    certificationsGrid.appendChild(certCard);
                });
                
                // Hide button if all certifications are loaded
                if (certificationsGrid.children.length >= certifications.length) {
                    loadMoreCertsBtn.style.display = 'none';
                }
            }
        });
    }
}

// Download resume functionality
document.getElementById("download-resume").addEventListener("click", function(e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "https://drive.google.com/file/d/1kmUcuLVltbeWdufDXPfFYSaeecdDvug6/view?usp=sharing"; // Path to your PDF file
    link.click();
});
