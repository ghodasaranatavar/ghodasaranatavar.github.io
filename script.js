// Enhanced Portfolio Interactive Features with Sticky Menu
class EnhancedStickyPortfolioApp {
    constructor() {
        this.isMobile = window.innerWidth <= 768;
        this.isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
        this.mobileMenuOpen = false;
        this.lastScroll = 0;
        this.typingAnimationCompleted = false;
        this.currentSection = 'home';
        this.scrollDirection = 'up';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.setupIntersectionObservers();
        this.initAnimations();
        this.updateExperience();
        this.showWelcomeMessage();
        this.setupMobileMenu();
        this.setupStickyHeader();
        this.setupScrollIndicator();
        this.setupActiveNavigation();
        this.handleResize();
        this.measurePerformance();
        this.setupLazyLoading();
        this.initBasicFeatures();
        this.setupFullWidthOptimizations();
    }

    // Initialize basic features
    initBasicFeatures() {
        this.setupBasicSmoothScrolling();
        this.setupBasicAnimationObserver();
        this.setupBasicTypingEffect();
        this.setupBasicLoadingState();
        this.setupBasicStatsAnimation();
    }

    setupBasicSmoothScrolling() {
        // Enhanced smooth scrolling with sticky header offset
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.removeEventListener('click', this.handleSmoothScroll);
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = anchor.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                
                if (target) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update active navigation
                    this.updateActiveNavigation(targetId);
                    
                    // Close mobile menu after navigation
                    if (this.mobileMenuOpen) {
                        this.toggleMobileMenu();
                    }
                }
            });
        });
    }

    setupBasicAnimationObserver() {
        // Enhanced animation observer
        const observerOptions = {
            threshold: this.isMobile ? 0.05 : 0.1,
            rootMargin: this.isMobile ? '0px 0px -20px 0px' : '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fade-in');
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.metric-item, .stat-item, .cert-card, .skill-item, .portfolio-item, .summary-item').forEach(el => {
            observer.observe(el);
        });
    }

    setupBasicStatsAnimation() {
        // Stats counter animation
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const statNumbers = entry.target.querySelectorAll('.metric-number, .stat-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent.replace(/[+,X]/g, '');
                        let targetValue;
                        let suffix = '+';
                        
                        if (text === '11') targetValue = 11;
                        else if (text === '30') targetValue = 30;
                        else if (text === '6') {
                            targetValue = 6;
                            suffix = 'X';
                        }
                        else if (text === '20') targetValue = 20;
                        
                        if (targetValue) {
                            this.animateCounter(stat, 0, targetValue, 2000, suffix);
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        const trustSection = document.querySelector('.trust-section') || document.querySelector('.stats-integrated');
        if (trustSection) {
            statsObserver.observe(trustSection);
        }
    }

    setupBasicTypingEffect() {
        // Typing effect for hero
        const typedElement = document.querySelector('.typed-text');
        if (typedElement && !this.typingAnimationCompleted) {
            const text = typedElement.textContent;
            typedElement.textContent = '';
            let index = 0;
            
            const typeText = () => {
                if (index < text.length) {
                    typedElement.textContent += text.charAt(index);
                    index++;
                    setTimeout(typeText, this.isMobile ? 50 : 100);
                } else {
                    const cursor = document.querySelector('.typed-cursor');
                    if (cursor) {
                        cursor.style.display = 'inline';
                        cursor.style.animation = 'typewriterCursor 1s infinite';
                    }
                    this.typingAnimationCompleted = true;
                }
            };
            
            setTimeout(typeText, 1000);
        }
    }

    setupBasicLoadingState() {
        // Loading state management
        const addLoadedClass = () => {
            document.body.classList.add('loaded');
            console.log('✅ Page loading completed with sticky header');
        };

        if (document.readyState === 'complete') {
            addLoadedClass();
        } else {
            window.addEventListener('load', addLoadedClass);
        }
    }

    // Enhanced Sticky Header Setup
    setupStickyHeader() {
        const header = document.querySelector('.header');
        if (!header) return;

        // Add sticky header class
        header.classList.add('sticky-header');

        // Setup scroll behavior
        window.addEventListener('scroll', this.debounce(() => {
            this.handleStickyHeaderScroll();
        }, 10), { passive: true });

        console.log('🔒 Sticky header initialized');
    }

    handleStickyHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;

        const scrollY = window.scrollY;
        const scrollDelta = scrollY - this.lastScroll;
        
        // Determine scroll direction
        this.scrollDirection = scrollDelta > 0 ? 'down' : 'up';

        // Add scrolled class for styling
        if (scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Hide/show header on mobile based on scroll direction
        if (this.isMobile && !this.mobileMenuOpen) {
            if (this.scrollDirection === 'down' && scrollY > 100) {
                header.classList.add('hidden');
            } else if (this.scrollDirection === 'up') {
                header.classList.remove('hidden');
            }
        } else {
            header.classList.remove('hidden');
        }

        // Update scroll indicator
        this.updateScrollIndicator();

        this.lastScroll = scrollY;
    }

    // Scroll Progress Indicator
    setupScrollIndicator() {
        // Create scroll indicator element
        const indicator = document.createElement('div');
        indicator.className = 'scroll-indicator';
        document.body.appendChild(indicator);

        console.log('📊 Scroll indicator added');
    }

    updateScrollIndicator() {
        const indicator = document.querySelector('.scroll-indicator');
        if (!indicator) return;

        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;

        indicator.style.width = `${Math.min(scrollPercent, 100)}%`;
    }

    // Active Navigation Management
    setupActiveNavigation() {
        // Setup intersection observer for sections
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                    const sectionId = entry.target.id;
                    if (sectionId) {
                        this.updateActiveNavigation(sectionId);
                    }
                }
            });
        }, {
            threshold: [0.1, 0.3, 0.5],
            rootMargin: '-80px 0px -50% 0px'
        });

        // Observe all sections
        document.querySelectorAll('section[id]').forEach(section => {
            sectionObserver.observe(section);
        });

        console.log('🎯 Active navigation tracking initialized');
    }

    updateActiveNavigation(activeSection) {
        if (this.currentSection === activeSection) return;
        
        this.currentSection = activeSection;

        // Update navigation links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
            
            const href = link.getAttribute('href');
            if (href === `#${activeSection}`) {
                link.classList.add('active');
            }
        });

        console.log(`🔍 Active section: ${activeSection}`);
    }

    setupEventListeners() {
        // Enhanced event listeners
        window.addEventListener('scroll', this.debounce(this.handleHeaderScroll.bind(this), 10));

        // Parallax effect (disabled on mobile for performance)
        if (!this.isMobile) {
            window.addEventListener('scroll', this.debounce(this.handleParallax.bind(this), 16));
        }

        // Enhanced responsive resize handler
        window.addEventListener('resize', this.debounce(this.handleResize.bind(this), 250));

        // Button interactions
        this.setupButtonInteractions();

        // Profile image hover (disabled on touch devices)
        if (!('ontouchstart' in window)) {
            this.setupProfileImageHover();
        }

        // Certification card interactions
        this.setupCertificationInteractions();

        // Portfolio link tracking
        this.setupPortfolioTracking();

        // Summary item hover effects
        this.setupSummaryHoverEffects();

        // Keyboard navigation
        document.addEventListener('keydown', this.handleKeyboardNavigation.bind(this));

        // Touch events for mobile
        this.setupTouchEvents();

        // Full-width specific events
        this.setupFullWidthEvents();
    }

    setupFullWidthEvents() {
        // Handle viewport changes for full-width
        window.addEventListener('orientationchange', () => {
            setTimeout(() => {
                this.handleResize();
                this.optimizeFullWidthSections();
                this.setupStickyHeader();
            }, 100);
        });

        // Handle window focus for performance optimization
        window.addEventListener('focus', () => {
            this.optimizeFullWidthSections();
        });

        // Handle visibility change
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                this.optimizeFullWidthSections();
            }
        });
    }

    setupMobileMenu() {
        // Enhanced mobile menu for sticky header
        let mobileToggle = document.querySelector('.mobile-menu-toggle') || document.getElementById('mobile-menu-toggle');
        const navCenter = document.querySelector('.nav-center') || document.getElementById('nav-center');
        
        if (!mobileToggle) {
            mobileToggle = document.createElement('button');
            mobileToggle.className = 'mobile-menu-toggle';
            mobileToggle.id = 'mobile-menu-toggle';
            mobileToggle.innerHTML = '<span></span><span></span><span></span>';
            mobileToggle.setAttribute('aria-label', 'Toggle mobile menu');
            mobileToggle.setAttribute('aria-expanded', 'false');
            
            const nav = document.querySelector('.nav');
            const logo = document.querySelector('.logo');
            if (nav && logo) {
                nav.insertBefore(mobileToggle, logo.nextSibling);
            }
        }

        if (navCenter && !navCenter.id) {
            navCenter.id = 'nav-center';
        }

        // Enhanced mobile menu toggle functionality
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            this.toggleMobileMenu();
        });

        // Close mobile menu when clicking nav links
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                if (this.mobileMenuOpen) {
                    this.toggleMobileMenu();
                }
            });
        });

        // Enhanced outside click handling
        document.addEventListener('click', (e) => {
            if (this.mobileMenuOpen && 
                !e.target.closest('.nav-center') && 
                !e.target.closest('#nav-center') &&
                !e.target.closest('.mobile-menu-toggle') &&
                !e.target.closest('#mobile-menu-toggle')) {
                this.toggleMobileMenu();
            }
        });

        // Handle escape key to close menu
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.mobileMenuOpen) {
                this.toggleMobileMenu();
            }
        });
    }

    toggleMobileMenu() {
        const mobileToggle = document.querySelector('.mobile-menu-toggle') || document.getElementById('mobile-menu-toggle');
        const navCenter = document.querySelector('.nav-center') || document.getElementById('nav-center');
        const header = document.querySelector('.header');
        
        if (!mobileToggle || !navCenter) return;
        
        this.mobileMenuOpen = !this.mobileMenuOpen;
        
        mobileToggle.classList.toggle('active', this.mobileMenuOpen);
        navCenter.classList.toggle('active', this.mobileMenuOpen);
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
        document.documentElement.style.overflow = this.mobileMenuOpen ? 'hidden' : '';
        
        // Ensure header is visible when menu is open
        if (this.mobileMenuOpen && header) {
            header.classList.remove('hidden');
        }
        
        // Update ARIA attributes
        mobileToggle.setAttribute('aria-expanded', this.mobileMenuOpen);
        navCenter.setAttribute('aria-hidden', !this.mobileMenuOpen);
        
        // Add focus management
        if (this.mobileMenuOpen) {
            const firstMenuItem = navCenter.querySelector('a');
            if (firstMenuItem) {
                setTimeout(() => firstMenuItem.focus(), 100);
            }
        } else {
            mobileToggle.focus();
        }

        console.log(`📱 Mobile menu ${this.mobileMenuOpen ? 'opened' : 'closed'}`);
    }

    handleResize() {
        const newIsMobile = window.innerWidth <= 768;
        const newIsTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
        
        // Update device type flags
        const wasMobile = this.isMobile;
        this.isMobile = newIsMobile;
        this.isTablet = newIsTablet;
        
        // Close mobile menu if resizing to desktop
        if (!this.isMobile && this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
        
        // Reset parallax on mobile
        if (this.isMobile && !wasMobile) {
            const heroSection = document.querySelector('.hero-section');
            if (heroSection) {
                heroSection.style.transform = '';
            }
        }
        
        // Update layouts
        this.updateStatsLayout();
        this.updateHeroLayout();
        this.optimizeFullWidthSections();
        
        // Re-initialize optimizations if switching to mobile
        if (this.isMobile && !wasMobile) {
            this.optimizeForMobile();
        }
        
        console.log(`🔄 Resized to: ${window.innerWidth}px, Mobile: ${this.isMobile}, Tablet: ${this.isTablet}`);
    }

    updateStatsLayout() {
        const statsGrids = document.querySelectorAll('.stats-grid, .metrics-grid');
        if (!statsGrids.length) return;
        
        statsGrids.forEach(statsGrid => {
            if (this.isMobile) {
                statsGrid.style.gridTemplateColumns = '1fr';
            } else if (this.isTablet) {
                statsGrid.style.gridTemplateColumns = 'repeat(2, 1fr)';
            } else {
                statsGrid.style.gridTemplateColumns = 'repeat(4, 1fr)';
            }
        });
    }

    updateHeroLayout() {
        const heroMain = document.querySelector('.hero-main-grid');
        if (!heroMain) return;
        
        if (this.isMobile || this.isTablet) {
            heroMain.style.gridTemplateColumns = '1fr';
            heroMain.style.textAlign = 'center';
        } else {
            heroMain.style.gridTemplateColumns = '450px 1fr';
            heroMain.style.textAlign = '';
        }
    }

    setupTouchEvents() {
        // Enhanced touch support
        document.querySelectorAll('.cert-card, .portfolio-item, .summary-item').forEach(item => {
            item.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.98)';
                this.style.transition = 'transform 0.1s ease';
            }, { passive: true });
            
            item.addEventListener('touchend', function() {
                this.style.transform = '';
                this.style.transition = 'transform 0.2s ease';
            }, { passive: true });
            
            item.addEventListener('touchcancel', function() {
                this.style.transform = '';
            }, { passive: true });
        });

        // Improved scroll behavior on mobile
        if (this.isMobile) {
            document.body.style.webkitOverflowScrolling = 'touch';
            document.body.style.overflowX = 'hidden';
        }
    }

    setupIntersectionObservers() {
        // Enhanced intersection observers
        this.setupStatsObserver();
        this.setupFadeObserver();
        this.setupSkillRatingObserver();
        this.setupFullWidthObserver();
        
        // Reduced motion for mobile devices
        if (this.isMobile) {
            this.setupReducedMotionObserver();
        }
    }

    setupFullWidthObserver() {
        // Observer specifically for full-width sections
        const fullWidthObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const section = entry.target;
                    section.classList.add('in-view');
                    
                    // Trigger any section-specific animations
                    const elements = section.querySelectorAll('.animate-on-scroll');
                    elements.forEach((el, index) => {
                        setTimeout(() => {
                            el.classList.add('animated');
                        }, index * 100);
                    });
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -10% 0px'
        });

        document.querySelectorAll('.section-full').forEach(section => {
            fullWidthObserver.observe(section);
        });
    }

    setupReducedMotionObserver() {
        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Disable animations for users who prefer reduced motion
            document.documentElement.style.setProperty('--animation-duration', '0s');
            console.log('🔇 Reduced motion detected - animations disabled');
        }
    }

    handleHeaderScroll() {
        const header = document.querySelector('.header');
        if (!header) return;
        
        const scrollY = window.scrollY;
        
        if (scrollY > 0) {
            header.style.boxShadow = '0 10px 20px rgba(64,62,41,.15)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.boxShadow = '0 5px 10px rgba(64,62,41,.1)';
            header.style.backgroundColor = '#ffffff';
            header.style.backdropFilter = 'blur(5px)';
        }
    }

    handleParallax() {
        if (this.isMobile) return; // Disable parallax on mobile for performance
        
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        const heroSection = document.querySelector('.hero-section');
        if (heroSection && scrolled < heroSection.offsetHeight) {
            heroSection.style.transform = `translateY(${rate}px)`;
        }
    }

    setupButtonInteractions() {
        document.querySelectorAll('.btn-primary, .btn-secondary, .btn-tertiary').forEach(button => {
            // Enhanced button interactions
            const addHoverEffect = () => {
                if (!('ontouchstart' in window)) {
                    button.style.transform = 'translateY(-2px) scale(1.02)';
                    button.style.transition = 'transform 0.2s ease';
                }
            };
            
            const removeHoverEffect = () => {
                if (!('ontouchstart' in window)) {
                    button.style.transform = 'translateY(0) scale(1)';
                }
            };
            
            const addActiveEffect = () => {
                button.style.transform = 'translateY(0) scale(0.98)';
                button.style.transition = 'transform 0.1s ease';
            };
            
            const removeActiveEffect = () => {
                if (!('ontouchstart' in window)) {
                    button.style.transform = 'translateY(-2px) scale(1.02)';
                } else {
                    button.style.transform = 'translateY(0) scale(1)';
                }
                button.style.transition = 'transform 0.2s ease';
            };
            
            button.addEventListener('mouseenter', addHoverEffect);
            button.addEventListener('mouseleave', removeHoverEffect);
            button.addEventListener('mousedown', addActiveEffect);
            button.addEventListener('mouseup', removeActiveEffect);
            
            // Touch events
            button.addEventListener('touchstart', addActiveEffect, { passive: true });
            button.addEventListener('touchend', removeActiveEffect, { passive: true });
            
            // Focus events for accessibility
            button.addEventListener('focus', addHoverEffect);
            button.addEventListener('blur', removeHoverEffect);
        });
    }

    setupProfileImageHover() {
        const profileImg = document.querySelector('.profile-img');
        if (profileImg && !('ontouchstart' in window)) {
            profileImg.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.05)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            profileImg.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });
        }
    }

    setupCertificationInteractions() {
        document.querySelectorAll('.cert-card').forEach(card => {
            const handleInteraction = function() {
                const img = this.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1.1)';
                    img.style.transition = 'transform 0.3s ease';
                }
            };
            
            const handleInteractionEnd = function() {
                const img = this.querySelector('img');
                if (img) {
                    img.style.transform = 'scale(1)';
                }
            };
            
            if ('ontouchstart' in window) {
                card.addEventListener('touchstart', handleInteraction, { passive: true });
                card.addEventListener('touchend', handleInteractionEnd, { passive: true });
                card.addEventListener('touchcancel', handleInteractionEnd, { passive: true });
            } else {
                card.addEventListener('mouseenter', handleInteraction);
                card.addEventListener('mouseleave', handleInteractionEnd);
            }
            
            // Focus events for accessibility
            card.addEventListener('focusin', handleInteraction);
            card.addEventListener('focusout', handleInteractionEnd);
        });
    }

    setupPortfolioTracking() {
        document.querySelectorAll('.portfolio-link').forEach(link => {
            link.addEventListener('click', function(e) {
                const platform = this.closest('.portfolio-item').querySelector('h3').textContent;
                console.log(`🔗 Portfolio link clicked: ${platform}`);
                
                // Add click animation
                this.style.transform = 'scale(0.95)';
                this.style.transition = 'transform 0.1s ease';
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                    this.style.transition = 'transform 0.2s ease';
                }, 150);
                
                // Analytics tracking could be added here
                if (window.gtag) {
                    window.gtag('event', 'portfolio_link_click', {
                        platform: platform,
                        device_type: this.isMobile ? 'mobile' : 'desktop',
                        layout_type: 'full_width'
                    });
                }
            });
        });
    }

    setupSummaryHoverEffects() {
        document.querySelectorAll('.summary-item').forEach(item => {
            if ('ontouchstart' in window) {
                // Touch devices - enhanced tap effect
                item.addEventListener('touchstart', function() {
                    this.style.transform = 'translateX(10px) scale(0.98)';
                    this.style.transition = 'transform 0.2s ease';
                    this.style.boxShadow = '0 10px 25px rgba(64,62,41,.15)';
                }, { passive: true });
                
                item.addEventListener('touchend', function() {
                    this.style.transform = 'translateX(0) scale(1)';
                    this.style.boxShadow = 'none';
                    this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
                }, { passive: true });
                
                item.addEventListener('touchcancel', function() {
                    this.style.transform = 'translateX(0) scale(1)';
                    this.style.boxShadow = 'none';
                }, { passive: true });
            } else {
                // Desktop - enhanced hover effect
                item.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateX(15px)';
                    this.style.transition = 'transform 0.3s ease';
                    this.style.boxShadow = '0 10px 25px rgba(64,62,41,.15)';
                });
                
                item.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateX(0)';
                    this.style.boxShadow = 'none';
                });
            }
        });
    }

    handleKeyboardNavigation(e) {
        if (e.ctrlKey || e.metaKey) {
            const sectionMap = {
                '1': 'home',
                '2': 'experience',
                '3': 'certifications',
                '4': 'skills',
                '5': 'portfolio',
                '6': 'contact'
            };

            if (sectionMap[e.key]) {
                e.preventDefault();
                const section = document.getElementById(sectionMap[e.key]);
                if (section) {
                    const headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    const targetPosition = section.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    this.updateActiveNavigation(sectionMap[e.key]);
                }
            }
        }
        
        // Escape key closes mobile menu
        if (e.key === 'Escape' && this.mobileMenuOpen) {
            this.toggleMobileMenu();
        }
    }

    setupStatsObserver() {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    console.log('📊 Stats section is visible, animating counters...');
                    const statNumbers = entry.target.querySelectorAll('.stat-number, .metric-number');
                    statNumbers.forEach(stat => {
                        const text = stat.textContent.replace(/[+,X]/g, '');
                        let targetValue;
                        
                        if (text === '11') targetValue = 11;
                        else if (text === '30') targetValue = 30;
                        else if (text === '6') {
                            this.animateCounter(stat, 0, 6, 1500, 'X');
                            return;
                        }
                        else if (text === '20') targetValue = 20;
                        
                        if (targetValue) {
                            this.animateCounter(stat, 0, targetValue, 2000, '+');
                        }
                    });
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: this.isMobile ? 0.1 : 0.3,
            rootMargin: this.isMobile ? '0px 0px -50px 0px' : '0px'
        });

        const statsSection = document.querySelector('.stats-integrated') || document.querySelector('.trust-section');
        if (statsSection) {
            console.log('📊 Stats section found, setting up observer');
            statsObserver.observe(statsSection);
        } else {
            console.warn('⚠️ Stats section not found!');
        }
    }

    setupFadeObserver() {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = this.isMobile ? 0 : Math.random() * 0.3;
                    entry.target.style.animationDelay = delay + 's';
                    entry.target.classList.add('animate-fade-in');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: this.isMobile ? 0.05 : 0.1,
            rootMargin: this.isMobile ? '0px 0px -20px 0px' : '0px'
        });

        document.querySelectorAll('.cert-card, .portfolio-item, .summary-item, .skills-category, .stat-item, .metric-item').forEach(card => {
            fadeObserver.observe(card);
        });
    }

    setupSkillRatingObserver() {
        const skillRatingObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const stars = entry.target.querySelectorAll('.star');
                    stars.forEach((star, index) => {
                        const delay = this.isMobile ? index * 50 : index * 100;
                        setTimeout(() => {
                            star.style.transform = 'scale(1.2)';
                            star.style.transition = 'transform 0.2s ease';
                            setTimeout(() => {
                                star.style.transform = 'scale(1)';
                            }, 200);
                        }, delay);
                    });
                    skillRatingObserver.unobserve(entry.target);
                }
            });
        }, { 
            threshold: this.isMobile ? 0.2 : 0.3,
            rootMargin: this.isMobile ? '0px 0px -30px 0px' : '0px'
        });

        document.querySelectorAll('.skill-item').forEach(skill => {
            skillRatingObserver.observe(skill);
        });
    }

    animateCounter(element, start, end, duration, suffix = '+') {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const currentValue = Math.floor(progress * (end - start) + start);
            
            element.textContent = currentValue + suffix;
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    initAnimations() {
        // Add staggered animation
        this.addStaggeredAnimations();
        
        // Optimize animations for mobile
        if (this.isMobile) {
            this.optimizeForMobile();
        }
    }

    optimizeForMobile() {
        // Reduce animation complexity on mobile
        document.documentElement.style.setProperty('--animation-complexity', 'reduced');
        
        // Disable GPU-intensive effects on low-end devices
        if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
            document.documentElement.style.setProperty('--disable-blur', 'none');
            console.log('📱 Low-end device detected - GPU effects disabled');
        }

        // Optimize sections for mobile
        const fullWidthSections = document.querySelectorAll('.section-full, .hero-section');
        fullWidthSections.forEach(section => {
            section.style.willChange = 'auto';
            section.style.transform = 'translateZ(0)';
        });
    }

    addStaggeredAnimations() {
        const statItems = document.querySelectorAll('.stat-item, .metric-item');
        statItems.forEach((item, index) => {
            const delay = this.isMobile ? index * 0.05 : index * 0.1;
            item.style.animationDelay = `${delay}s`;
        });
    }

    updateExperience() {
        const startYear = 2014;
        const currentYear = new Date().getFullYear();
        const experience = currentYear - startYear;
        
        // Update experience in stats and profile
        const experienceElements = document.querySelectorAll('.stat-number, .metric-number');
        experienceElements.forEach(element => {
            if (element.textContent.includes('11')) {
                element.textContent = experience + '+';
            }
        });

        // Update profile experience text
        const profileExperience = document.querySelector('.profile-experience p');
        if (profileExperience) {
            profileExperience.textContent = `${experience}+ Years of total experience on force.com platform & salesforce CRM`;
        }

        console.log(`📈 Experience updated to ${experience}+ years`);
    }

    showWelcomeMessage() {
        const deviceInfo = this.isMobile ? 'Mobile' : this.isTablet ? 'Tablet' : 'Desktop';
        console.log(`
🚀 Welcome to Natavar Ghodasara's Enhanced Sticky Portfolio!
📱 Device: ${deviceInfo} (${window.innerWidth}px)
🔒 Sticky Header: Active
📊 Scroll Indicator: Active
🎯 Active Navigation: Enabled
📧 Contact: ghodasaranatavar2011@gmail.com
📱 Phone: +91 89808 05269
🌟 6X Salesforce Certified Professional

✨ Enhanced sticky menu features:
• Fixed header with scroll-based styling
• Mobile-friendly hide/show on scroll
• Active section highlighting
• Scroll progress indicator
• Smooth scroll with proper offsets
• Mobile menu with backdrop blur
• Keyboard navigation support

Keyboard shortcuts (Desktop):
• Ctrl/Cmd + 1-6: Navigate to different sections
• Use Tab to navigate through interactive elements
• Escape: Close mobile menu

Mobile features:
• Touch-friendly sticky navigation
• Auto-hiding header on scroll down
• Swipe-friendly menu interactions
• Optimized touch targets

Built with modern sticky navigation and full responsive design.
        `);
    }

    setupFullWidthOptimizations() {
        // Specific optimizations for full-width layout
        this.optimizeFullWidthSections();
        this.setupFullWidthScrollEffects();
        this.optimizeFullWidthImages();
        this.ensureStatsVisibility();
    }

    ensureStatsVisibility() {
        // Force stats section visibility
        const statsSelectors = [
            '.trust-section',
            '.stats-integrated', 
            '.metrics-grid',
            '.stats-grid'
        ];

        statsSelectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.display = 'block';
                element.style.visibility = 'visible';
                element.style.opacity = '1';
            });
        });

        // Ensure metric items are visible
        const metricItems = document.querySelectorAll('.metric-item, .stat-item');
        metricItems.forEach(item => {
            item.style.display = 'block';
            item.style.visibility = 'visible';
            item.style.opacity = '1';
        });

        console.log(`📊 Enhanced visibility for ${metricItems.length} metric items`);
    }

    optimizeFullWidthSections() {
        // Ensure full-width sections are properly sized
        const fullWidthSections = document.querySelectorAll('.section-full, .hero-section, .contact-section');
        fullWidthSections.forEach(section => {
            section.style.width = '100vw';
            section.style.position = 'relative';
        });

        // Handle horizontal scrollbar prevention
        document.body.style.overflowX = 'hidden';
        document.documentElement.style.overflowX = 'hidden';
    }

    setupFullWidthScrollEffects() {
        // Enhanced scroll effects for full-width layout
        let ticking = false;
        
        const updateScrollEffects = () => {
            this.handleStickyHeaderScroll();
            if (!this.isMobile) {
                this.handleParallax();
            }
            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        }, { passive: true });
    }

    optimizeFullWidthImages() {
        // Optimize images for full-width viewport
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            if (!img.loading) {
                img.loading = 'lazy';
            }
            
            // Add intersection observer for image optimization
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                        }
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            imageObserver.observe(img);
        });
    }

    // Utility function for debouncing events
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Performance monitoring
    measurePerformance() {
        if ('performance' in window) {
            window.addEventListener('load', () => {
                setTimeout(() => {
                    const perfData = performance.getEntriesByType('navigation')[0];
                    if (perfData) {
                        console.log(`🚀 Sticky Portfolio Performance:
• DOM Content Loaded: ${Math.round(perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart)}ms
• Page Load Complete: ${Math.round(perfData.loadEventEnd - perfData.loadEventStart)}ms
• Device: ${this.isMobile ? 'Mobile' : this.isTablet ? 'Tablet' : 'Desktop'}
• Sticky Header: Active`);
                    }
                }, 0);
            });
        }
    }

    // Enhanced lazy loading
    setupLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.classList.remove('lazy');
                            imageObserver.unobserve(img);
                        }
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '50px'
            });

            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });
        }
    }

    // Error handling
    handleError(error, context) {
        console.error(`Error in sticky ${context}:`, error);
        
        // Send to analytics if available
        if (window.gtag) {
            window.gtag('event', 'exception', {
                description: `sticky-${context}: ${error.message}`,
                fatal: false
            });
        }
    }
}

// Initialize the enhanced sticky portfolio app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        const app = new EnhancedStickyPortfolioApp();
        
        // Make app globally available for debugging
        window.stickyPortfolioApp = app;
        
        console.log('✅ Enhanced Sticky Portfolio loaded successfully! 🎉');
        
        // Force stats visibility - Enhanced to support both class names
        setTimeout(() => {
            const statsSelectors = [
                '.trust-section',
                '.stats-integrated', 
                '.metrics-grid',
                '.stats-grid',
                '.metric-item',
                '.stat-item'
            ];

            statsSelectors.forEach(selector => {
                const elements = document.querySelectorAll(selector);
                elements.forEach(element => {
                    element.style.display = 'block !important';
                    element.style.visibility = 'visible !important';
                    element.style.opacity = '1 !important';
                });
                
                if (elements.length > 0) {
                    console.log(`✅ Enhanced visibility for ${elements.length} elements with selector: ${selector}`);
                }
            });
        }, 100);
    } catch (error) {
        console.error('❌ Error initializing sticky portfolio app:', error);
    }
});

// Enhanced page visibility handling
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        // Pause animations when page is not visible
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            if (el.style.animationPlayState !== undefined) {
                el.style.animationPlayState = 'paused';
            }
        });
        
        // Pause video/audio if any
        document.querySelectorAll('video, audio').forEach(media => {
            if (!media.paused) {
                media.pause();
                media.dataset.wasPlaying = 'true';
            }
        });
    } else {
        // Resume animations when page becomes visible
        document.querySelectorAll('[class*="animate"]').forEach(el => {
            if (el.style.animationPlayState !== undefined) {
                el.style.animationPlayState = 'running';
            }
        });
        
        // Resume media playback if it was playing
        document.querySelectorAll('video, audio').forEach(media => {
            if (media.dataset.wasPlaying === 'true') {
                media.play().catch(console.error);
                delete media.dataset.wasPlaying;
            }
        });
    }
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = EnhancedStickyPortfolioApp;
}

// Expose to global scope for debugging
window.EnhancedStickyPortfolioApp = EnhancedStickyPortfolioApp;

// Additional utility functions for sticky behavior
window.stickyUtils = {
    // Scroll to section with proper offset
    scrollToSection: function(sectionId) {
        const section = document.getElementById(sectionId);
        const header = document.querySelector('.header');
        
        if (section && header) {
            const headerHeight = header.offsetHeight;
            const targetPosition = section.offsetTop - headerHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active navigation if app is available
            if (window.stickyPortfolioApp) {
                window.stickyPortfolioApp.updateActiveNavigation(sectionId);
            }
        }
    },
    
    // Get current active section
    getCurrentSection: function() {
        return window.stickyPortfolioApp ? window.stickyPortfolioApp.currentSection : null;
    },
    
    // Toggle mobile menu programmatically
    toggleMobileMenu: function() {
        if (window.stickyPortfolioApp) {
            window.stickyPortfolioApp.toggleMobileMenu();
        }
    },
    
    // Check if mobile menu is open
    isMobileMenuOpen: function() {
        return window.stickyPortfolioApp ? window.stickyPortfolioApp.mobileMenuOpen : false;
    },
    
    // Force header visibility
    showHeader: function() {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.remove('hidden');
            header.style.transform = 'translateY(0)';
        }
    },
    
    // Hide header
    hideHeader: function() {
        const header = document.querySelector('.header');
        if (header) {
            header.classList.add('hidden');
            header.style.transform = 'translateY(-100%)';
        }
    }
};

// Keyboard shortcuts for power users
document.addEventListener('keydown', function(e) {
    // Alt + H: Toggle header visibility
    if (e.altKey && e.key === 'h') {
        e.preventDefault();
        const header = document.querySelector('.header');
        if (header) {
            if (header.classList.contains('hidden')) {
                window.stickyUtils.showHeader();
            } else {
                window.stickyUtils.hideHeader();
            }
        }
    }
    
    // Alt + M: Toggle mobile menu (works on all devices)
    if (e.altKey && e.key === 'm') {
        e.preventDefault();
        window.stickyUtils.toggleMobileMenu();
    }
    
    // Alt + T: Scroll to top
    if (e.altKey && e.key === 't') {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
});

// Enhanced smooth scrolling for hash links in URL
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        setTimeout(() => {
            window.stickyUtils.scrollToSection(hash);
        }, 100);
    }
});

// Handle initial hash on page load
window.addEventListener('load', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        setTimeout(() => {
            window.stickyUtils.scrollToSection(hash);
        }, 500);
    }
});

// Performance monitoring for sticky header
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'navigation') {
                console.log(`🔍 Navigation Performance:
• DNS Lookup: ${Math.round(entry.domainLookupEnd - entry.domainLookupStart)}ms
• Connection: ${Math.round(entry.connectEnd - entry.connectStart)}ms
• Response: ${Math.round(entry.responseEnd - entry.responseStart)}ms
• DOM Processing: ${Math.round(entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart)}ms
• Load Complete: ${Math.round(entry.loadEventEnd - entry.loadEventStart)}ms`);
            }
        }
    });
    
    observer.observe({ entryTypes: ['navigation'] });
}

// Service Worker registration for better performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Uncomment the following lines if you have a service worker
        /*
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('🔧 ServiceWorker registration successful');
            })
            .catch(function(error) {
                console.log('❌ ServiceWorker registration failed');
            });
        */
    });
}

// Console styling for better debugging
const styles = {
    header: 'color: #3360ad; font-weight: bold; font-size: 16px;',
    success: 'color: #208c72; font-weight: bold;',
    warning: 'color: #f28520; font-weight: bold;',
    error: 'color: #ea1763; font-weight: bold;',
    info: 'color: #5a6372; font-weight: normal;'
};

console.log('%c🚀 Natavar Ghodasara - Sticky Portfolio Loaded', styles.header);
console.log('%c✅ Sticky Navigation Active', styles.success);
console.log('%c📱 Mobile Responsive Ready', styles.success);
console.log('%c🎯 Performance Optimized', styles.success);
console.log('%cℹ️  Use Alt+H to toggle header, Alt+M for menu, Alt+T to scroll to top', styles.info);