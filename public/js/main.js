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
    initCounterAnimation();
    initSmoothScrolling();
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
        // Keyboard navigation support and ARIA pressed state
        let currentIndex = 0;
        const updatePressed = (targetBtn) => {
            document.querySelectorAll('.filter-btn').forEach(btn => btn.setAttribute('aria-pressed', 'false'));
            targetBtn.setAttribute('aria-pressed', 'true');
        };
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Update active filter button
                document.querySelector('.filter-btn.active').classList.remove('active');
                this.classList.add('active');
                updatePressed(this);
                
                // Filter projects
                filterProjects(this.getAttribute('data-filter'));
            });
            button.addEventListener('keydown', (e) => {
                const keys = ['ArrowRight','ArrowLeft'];
                if (!keys.includes(e.key)) return;
                e.preventDefault();
                const buttons = Array.from(document.querySelectorAll('.filter-btn'));
                currentIndex = buttons.indexOf(document.activeElement);
                if (e.key === 'ArrowRight') currentIndex = (currentIndex + 1) % buttons.length;
                if (e.key === 'ArrowLeft') currentIndex = (currentIndex - 1 + buttons.length) % buttons.length;
                buttons[currentIndex].focus();
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
            } else if (filter === 'featured') {
                // Show only featured projects
                const featuredBadge = card.querySelector('.featured-badge');
                if (featuredBadge) {
                    card.style.display = 'flex';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
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
        // Reveal on scroll animation
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        projectsGrid.querySelectorAll('.project-card.reveal').forEach(card => revealObserver.observe(card));
    }
}

// Create a project card element
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card reveal';
    card.setAttribute('data-id', project.id);
    
    // Determine badge type
    let badgeHtml = '';
    if (project.isNew && project.status === 'In Development') {
        badgeHtml = '<div class="featured-badge new-project">🚧 In Development</div>';
    } else if (project.featured) {
        badgeHtml = '<div class="featured-badge">⭐ Featured</div>';
    }
    
    const imageHtml = project.image ? `
        <div class="project-image">
            <img src="${project.image}" alt="${project.title}" loading="lazy" class="lazy" />
            ${badgeHtml}
        </div>
    ` : `
        <div class="project-image placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ${badgeHtml}
        </div>
    `;
    
    const techTags = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    const linksHtml = `
        <div class="project-links">
            ${project.github ? `
                <a href="${project.github}" target="_blank" class="project-link" aria-label="View ${project.title} on GitHub">
                    <i class="fab fa-github"></i> GitHub
                </a>
            ` : ''}
            ${project.demo ? `
                <a href="${project.demo}" target="_blank" class="project-link" aria-label="Open live demo for ${project.title}">
                    <i class="fas fa-external-link-alt"></i> Live Demo
                </a>
            ` : ''}
        </div>
    `;
    const highlights = Array.isArray(project.highlights) && project.highlights.length
        ? `<ul class="project-highlights">${project.highlights.map(h=>`<li><i class=\"fas fa-check\"></i>${h}</li>`).join('')}</ul>`
        : '';
    
    card.innerHTML = `
        ${imageHtml}
        <div class="project-content">
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">${techTags}</div>
            ${highlights}
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
    card.className = cert.isNew ? 'cert-card new-cert' : 'cert-card';
    card.setAttribute('data-id', cert.id);
    
    let iconElement;
    let iconPath;
    
    // Map certification issuers to their respective image files
    switch (cert.issuer) {
        case 'Coursera':
            iconPath = 'images/coursera.svg';
            break;
        case 'DataCamp':
            iconPath = 'images/datacamp.svg';
            break;
        case 'DeepLearning.AI':
            iconPath = 'images/deeplearningai.png';
            break;
        case 'Udemy':
            iconPath = 'images/udemy.svg';
            break;
        case 'IBM':
            iconPath = 'images/IBM.png';
            break;
        default:
            // Fallback to Font Awesome icons for other issuers
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
            iconElement = `<i class="${iconClass}"></i>`;
    }
    
    // Create the icon element - either image or font awesome icon
    if (iconPath) {
        iconElement = `<img src="${iconPath}" alt="${cert.issuer}" class="cert-logo">`;
    }
    
    card.innerHTML = `
        ${cert.isNew ? '<div class="new-badge">NEW</div>' : ''}
        <div class="cert-header">
            <div class="cert-icon ${cert.colorClass}">
                ${iconElement}
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
                // Add loading state
                loadMoreProjectsBtn.classList.add('loading');
                loadMoreProjectsBtn.innerHTML = 'Loading... <i class="fas fa-spinner"></i>';
                
                // Simulate loading delay for better UX
                setTimeout(() => {
                    // Get next batch of projects
                    const nextProjects = projects.slice(currentCount, currentCount + 3);
                    
                    // Add new project cards
                    nextProjects.forEach(project => {
                        const projectCard = createProjectCard(project);
                        projectsGrid.appendChild(projectCard);
                    });
                    // Observe new cards for reveal animation
                    const revealObserver = new IntersectionObserver((entries) => {
                        entries.forEach(entry => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add('revealed');
                                revealObserver.unobserve(entry.target);
                            }
                        });
                    }, { threshold: 0.15 });
                    projectsGrid.querySelectorAll('.project-card.reveal:not(.revealed)').forEach(card => revealObserver.observe(card));
                    
                    // Remove loading state
                    loadMoreProjectsBtn.classList.remove('loading');
                    
                    // Check if more projects available
                    if (projectsGrid.children.length >= projects.length) {
                        loadMoreProjectsBtn.style.display = 'none';
                    } else {
                        loadMoreProjectsBtn.innerHTML = 'Load More <i class="fas fa-chevron-down"></i>';
                    }
                }, 800);
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
                // Add loading state
                loadMoreCertsBtn.classList.add('loading');
                loadMoreCertsBtn.innerHTML = 'Loading... <i class="fas fa-spinner"></i>';
                
                // Simulate loading delay for better UX
                setTimeout(() => {
                    // Get next batch of certifications
                    const nextCerts = certifications.slice(currentCount, currentCount + 6);
                    
                    // Add new certification cards
                    nextCerts.forEach(cert => {
                        const certCard = createCertificationCard(cert);
                        certificationsGrid.appendChild(certCard);
                    });
                    
                    // Remove loading state
                    loadMoreCertsBtn.classList.remove('loading');
                    
                    // Check if more certifications available
                    if (certificationsGrid.children.length >= certifications.length) {
                        loadMoreCertsBtn.style.display = 'none';
                    } else {
                        loadMoreCertsBtn.innerHTML = 'Load More <i class="fas fa-chevron-down"></i>';
                    }
                }, 800);
            }
        });
    }
}

// Download resume functionality
document.getElementById("download-resume").addEventListener("click", function(e) {
    e.preventDefault();
    const link = document.createElement("a");
    link.href = "Moussaab_Boutelis_AI_ML_CV.pdf"; // Path to your PDF file
    link.download = "Moussaab_Boutelis_AI_ML_CV.pdf";
    link.click();
});

// Counter Animation for Statistics
function initCounterAnimation() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 200; // Adjust animation speed

    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'));
        const current = parseInt(counter.textContent);
        const increment = target / speed;

        if (current < target) {
            counter.textContent = Math.ceil(current + increment);
            setTimeout(() => animateCounter(counter), 1);
        } else {
            counter.textContent = target;
        }
    };

    // Intersection Observer for triggering animation when section is visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counters = entry.target.querySelectorAll('.stat-number');
                counters.forEach(counter => {
                    counter.textContent = '0';
                    animateCounter(counter);
                });
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.statistics-section');
    if (statsSection) {
        observer.observe(statsSection);
    }
}

// Smooth Scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Enhanced typing effect with multiple phrases
function initTypingEffect() {
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    const phrases = [
        'AI Engineer',
        'Deep Learning Specialist', 
        'Generative AI Enthusiast'
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeEffect() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingText.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }

        setTimeout(typeEffect, typingSpeed);
    }

    typeEffect();
}

// Enhanced form validation and submission
function initContactForm() {
    const form = document.querySelector('.pageclip-form');
    if (!form) return;

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');
    const submitText = document.getElementById('submit-text');

    // Real-time validation
    function validateField(field, errorElement, validationFn) {
        field.addEventListener('blur', () => {
            const error = validationFn(field.value);
            if (error) {
                field.classList.add('error');
                errorElement.textContent = error;
            } else {
                field.classList.remove('error');
                errorElement.textContent = '';
            }
        });
    }

    // Validation functions
    const validateName = (value) => {
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return null;
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value.trim()) return 'Email is required';
        if (!emailRegex.test(value)) return 'Please enter a valid email address';
        return null;
    };

    const validateMessage = (value) => {
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        return null;
    };

    // Apply validation
    validateField(nameInput, document.getElementById('name-error'), validateName);
    validateField(emailInput, document.getElementById('email-error'), validateEmail);
    validateField(messageInput, document.getElementById('message-error'), validateMessage);

    // Form submission with enhanced UX
    form.addEventListener('submit', (e) => {
        // Validate all fields before submission
        const nameError = validateName(nameInput.value);
        const emailError = validateEmail(emailInput.value);
        const messageError = validateMessage(messageInput.value);

        if (nameError || emailError || messageError) {
            e.preventDefault();
            // Show errors
            document.getElementById('name-error').textContent = nameError || '';
            document.getElementById('email-error').textContent = emailError || '';
            document.getElementById('message-error').textContent = messageError || '';
            return;
        }

        // Show loading state
        submitBtn.disabled = true;
        submitText.textContent = 'Sending...';
        submitBtn.classList.add('loading');
    });

    // Handle successful submission (if using Pageclip)
    form.addEventListener('pageclip-success', () => {
        showToast('Message sent successfully!', 'success');
        form.reset();
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        submitBtn.classList.remove('loading');
    });

    // Handle submission error
    form.addEventListener('pageclip-error', () => {
        showToast('Failed to send message. Please try again.', 'error');
        submitBtn.disabled = false;
        submitText.textContent = 'Send Message';
        submitBtn.classList.remove('loading');
    });
}

// Enhanced toast notification system
function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.querySelector('.toast-message');
    const toastIcon = document.querySelector('.toast-icon');
    
    if (!toast) return;

    toastMessage.textContent = message;
    
    // Update icon based on type
    if (type === 'success') {
        toastIcon.className = 'fas fa-check-circle toast-icon';
        toast.className = 'toast show success';
    } else if (type === 'error') {
        toastIcon.className = 'fas fa-exclamation-circle toast-icon';
        toast.className = 'toast show error';
    }

    // Auto hide after 5 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 5000);
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const particles = document.getElementById('particles-js');
    if (particles) {
        particles.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Progressive loading for images
function initProgressiveImageLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}
