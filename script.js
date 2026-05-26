// ================================================================================
// MODULE SPECIFICATION (RULE[user_global]): Interactive Logic & Funnel Wiring
// 1. Implementation Code: c:/xampp/htdocs/profile/script.js
// 2. Folder Structure:
//    c:/xampp/htdocs/profile/
//      - script.js
//      - index.html
//      - styles.css
// 3. API Routes: N/A (Client-side interactive scripts)
// 4. Browser Testing Instructions:
//    - Load http://localhost/profile/index.html.
//    - Scroll down past 300px and verify that the floating CTA `#floating-strategy-cta` appears.
//    - Click on the floating CTA and confirm that it launches the AI Consulting Suite modal.
//    - Scroll to the "Enterprise Automation Impact" metrics section and check if counters animate up.
//    - Navigate to the "Interactive Architecture Explorer" and click on nodes to verify details panel updates.
// 5. Expected Output: Flawless front-end interactive behaviors: count-ups, architectural details updating on node click, and floating CTA scroll toggle.
// ================================================================================

// Enhanced Portfolio Interactive Features with FIXED Mobile Navigation
class EnhancedAccessiblePortfolioApp {
  constructor() {
    this.isMobile = window.innerWidth <= 768;
    this.isTablet = window.innerWidth <= 1024 && window.innerWidth > 768;
    this.mobileMenuOpen = false;
    this.lastScroll = 0;
    this.typingAnimationCompleted = false;
    this.currentSection = "home";
    this.scrollDirection = "up";
    this.sectionObserver = null;
    this.isUpdatingFromObserver = true;
    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupIntersectionObservers();
    this.initAnimations();
    this.updateExperience();
    this.showWelcomeMessage();
    this.setupMobileMenu(); // FIXED: Properly setup mobile menu
    this.setupStickyHeader();
    this.setupScrollIndicator();
    this.setupActiveNavigation();
    this.handleResize();
    this.measurePerformance();
    this.setupLazyLoading();
    this.initBasicFeatures();
    this.setupFullWidthOptimizations();
    this.setupFooterAnimations();
    this.setupAccessibilityFeatures();
    this.setupSmoothScrolling();
    this.setupROICalculator(); // NEW: ROI Calculator
    // Initialize Review Toaster
    this.initReviewToaster();
    this.setupScrollToTop(); // Add this line
    this.setupMetricsDashboard();
    this.setupArchitectureExplorer();
    this.setupEcosystemWidget(); // NEW: Salesforce AI Ecosystem widget
    // Debug section positions
    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "D") {
        e.preventDefault();
        this.debugSectionPositions();
      }
    });
  }

  // ========================================
  // REVIEW TOASTER FUNCTIONALITY
  // ========================================

  initReviewToaster() {
    this.currentReviewIndex = 0;
    
    // Dynamically pull reviews from project-data.js if available
    if (window.projectData && window.projectData.length > 0) {
      this.reviews = window.projectData
        .filter(p => p.feedback)
        .map(p => ({
          id: p.id,
          project: p.title,
          review: p.feedback
        }));
    } else {
      // Fallback reviews if data not loaded yet or missing
      this.reviews = [
        {
          id: 1,
          project: "Salesforce SMS Automation",
          review: "Amazing experience with Natvarlal. He completed the tasks in a timely manner without any carry-over. He understood the requirements very well.",
        },
        {
          id: 2,
          project: "Enterprise Gemini AI Research",
          review: "Natavar was one of the best contractors I have hired. He was quick to respond and very knowledgeable when it came to Salesforce.",
        },
        {
          id: 3,
          project: "Enterprise Automation Framework",
          review: "Committed and Quick Response on Issues addressed. Will definitely hire Natavar again for all requirements of salesforce.",
        },
        {
          id: 4,
          project: "LMS Experience Platform",
          review: "Natvar is a very experienced Salesforce developer and did a great job in my Production org and Partner Community.",
        },
        {
          id: 5,
          project: "Document Orchestration Platform",
          review: "Greatly helped me out with this, really knows a lot when it comes to Salesforce. I will be contacting him in the future.",
        },
        {
          id: 6,
          project: "Real Estate CRM Ecosystem",
          review: "Natavar is easy to work with and has good critical thinking skills. He will think about what is good for the client.",
        },
        {
          id: 7,
          project: "Healthcare Order Automation",
          review: "He was really helpful and really knowledgeable, a great communicator, and was able to provide helpful documentation.",
        },
        {
          id: 8,
          project: "Licensing & Permit Modernization",
          review: "Natavar was very quick with his experience and helped me out to fix the issue in no time. I recommend him to everyone.",
        },
      ];
    }

    // Start showing toasters after a delay
    setTimeout(() => {
      this.showReviewToaster();
      // Show new toaster every 12 seconds (slightly longer for better readability)
      this.toasterInterval = setInterval(() => {
        this.showReviewToaster();
      }, 12000);
    }, 4000); // Initial delay
  }

  showReviewToaster() {
    const toasterContainer = document.getElementById("review-toaster");
    if (!toasterContainer || this.reviews.length === 0) return;

    // Get current review
    const review = this.reviews[this.currentReviewIndex];

    // Create toaster element
    const toaster = document.createElement("div");
    toaster.className = "toaster-notification";
    toaster.innerHTML = `
            <div class="toaster-icon">⭐</div>
            <div class="toaster-content">
                <div class="toaster-title">Just in: Client Feedback</div>
                <div class="toaster-message">"${review.review}"</div>
                <div class="toaster-project">Project: ${review.project}</div>
            </div>
            <button class="toaster-close" aria-label="Close notification">×</button>
        `;

    // Add close functionality
    const closeBtn = toaster.querySelector(".toaster-close");
    closeBtn.addEventListener("click", () => {
      this.hideToaster(toaster);
    });

    // Click to view more
    toaster.addEventListener("click", (e) => {
      if (!e.target.classList.contains("toaster-close")) {
        window.location.href = `project-detail.html?id=${review.id}`;
      }
    });

    // Add to container
    toasterContainer.appendChild(toaster);

    // Trigger animation
    setTimeout(() => {
      toaster.classList.add("show");
    }, 100);

    // Auto hide after 6 seconds
    this.toasterTimeout = setTimeout(() => {
      this.hideToaster(toaster);
    }, 6000);

    // Move to next review
    this.currentReviewIndex =
      (this.currentReviewIndex + 1) % this.reviews.length;
  }

  hideToaster(toaster) {
    if (!toaster) return;

    toaster.classList.remove("show");
    toaster.classList.add("hide");

    setTimeout(() => {
      if (toaster.parentNode) {
        toaster.parentNode.removeChild(toaster);
      }
    }, 300);
  }

  truncateText(text, maxLength) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
  }

  stopReviewToaster() {
    if (this.toasterInterval) {
      clearInterval(this.toasterInterval);
      this.toasterInterval = null;
    }
    if (this.toasterTimeout) {
      clearTimeout(this.toasterTimeout);
      this.toasterTimeout = null;
    }
  }

  // FIXED: Enhanced Mobile Menu Setup with Correct Element References
  setupMobileMenu() {
    // Get the actual elements that exist in HTML
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-navigation");
    const overlay = document.getElementById("mobile-nav-overlay");

    if (!mobileToggle || !mobileNav) {
      console.error("❌ Mobile menu elements not found!");
      return;
    }

    // Setup click handlers for toggle button
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      this.toggleMobileMenu();
    });

    // Close menu when clicking overlay
    if (overlay) {
      overlay.addEventListener("click", (e) => {
        e.stopPropagation();
        this.closeMobileMenu();
      });
    }

    // Close menu when clicking nav links
    const navLinks = mobileNav.querySelectorAll(".mobile-nav-link");
    navLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const targetId = href.substring(1);
          this.navigateToSection(targetId);
          this.closeMobileMenu();
        }
      });
    });

    // Handle outside clicks to close menu
    document.addEventListener("click", (e) => {
      if (
        this.mobileMenuOpen &&
        !mobileNav.contains(e.target) &&
        !mobileToggle.contains(e.target)
      ) {
        this.closeMobileMenu();
      }
    });

    // Handle window resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768 && this.mobileMenuOpen) {
        this.closeMobileMenu();
      }
    });

    // Handle escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.mobileMenuOpen) {
        this.closeMobileMenu();
        mobileToggle.focus();
      }
    });
  }

  // FIXED: Toggle Mobile Menu Function
  toggleMobileMenu() {
    if (this.mobileMenuOpen) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  // FIXED: Open Mobile Menu Function
  openMobileMenu() {
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-navigation");
    const overlay = document.getElementById("mobile-nav-overlay");

    if (!mobileToggle || !mobileNav) {
      console.error("❌ Cannot open mobile menu - elements not found");
      return;
    }

    this.mobileMenuOpen = true;

    // Update UI classes
    mobileToggle.classList.add("active");
    mobileNav.classList.add("active");
    if (overlay) overlay.classList.add("active");

    // Prevent body scroll
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    // Update ARIA attributes
    mobileToggle.setAttribute("aria-expanded", "true");
    mobileNav.style.visibility = "visible";
    mobileNav.setAttribute("aria-hidden", "false");
    if (overlay) overlay.setAttribute("aria-hidden", "false");

    // Update tabindex for menu items
    const menuItems = mobileNav.querySelectorAll(".mobile-nav-link");
    menuItems.forEach((item) => {
      item.setAttribute("tabindex", "0");
    });

    // Focus first menu item
    setTimeout(() => {
      const firstMenuItem = mobileNav.querySelector(".mobile-nav-link");
      if (firstMenuItem) {
        firstMenuItem.focus();
      }
    }, 300);
  }

  // FIXED: Close Mobile Menu Function
  closeMobileMenu() {
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-navigation");
    const overlay = document.getElementById("mobile-nav-overlay");

    if (!mobileToggle || !mobileNav) {
      console.error("❌ Cannot close mobile menu - elements not found");
      return;
    }

    this.mobileMenuOpen = false;

    // Update UI classes
    mobileToggle.classList.remove("active");
    mobileNav.classList.remove("active");
    if (overlay) overlay.classList.remove("active");

    // Restore body scroll
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

    // Update ARIA attributes
    mobileToggle.setAttribute("aria-expanded", "false");
    mobileNav.setAttribute("aria-hidden", "true");
    if (overlay) overlay.setAttribute("aria-hidden", "true");

    // Hide from visibility after transition to prevent focusable descendants issues
    setTimeout(() => {
      if (!this.mobileMenuOpen) {
        mobileNav.style.visibility = "hidden";
      }
    }, 300);

    // Update tabindex for menu items
    const menuItems = mobileNav.querySelectorAll(".mobile-nav-link");
    menuItems.forEach((item) => {
      item.setAttribute("tabindex", "-1");
    });
  }

  // Enhanced Accessibility Features
  setupAccessibilityFeatures() {
    this.setupFocusTrap();
    this.setupKeyboardNavigation();
    this.setupARIAManagement();
    this.setupReducedMotionSupport();
    this.setupScreenReaderSupport();
  }

  setupFocusTrap() {
    // Focus trap for mobile menu
    document.addEventListener("keydown", (e) => {
      if (!this.mobileMenuOpen || e.key !== "Tab") return;

      const mobileNav = document.getElementById("mobile-navigation");
      if (!mobileNav) return;

      const focusableElements = mobileNav.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    });
  }

  setupKeyboardNavigation() {
    document.addEventListener("keydown", (e) => {
      // Navigation shortcuts
      if (e.ctrlKey || e.metaKey) {
        const sectionMap = {
          1: "home",
          2: "experience",
          3: "certifications",
          4: "skills",
          5: "portfolio",
          6: "contact",
        };

        if (sectionMap[e.key]) {
          e.preventDefault();
          this.navigateToSection(sectionMap[e.key]);
        }
      }
    });
  }

  setupARIAManagement() {
    // Initial ARIA setup
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const mobileNav = document.getElementById("mobile-navigation");
    const overlay = document.getElementById("mobile-nav-overlay");

    if (mobileToggle && mobileNav) {
      mobileToggle.setAttribute("aria-expanded", "false");
      mobileNav.setAttribute("aria-hidden", "true");

      if (overlay) {
        overlay.setAttribute("aria-hidden", "true");
      }

      // Set initial tabindex for menu items
      const menuItems = mobileNav.querySelectorAll(".mobile-nav-link");
      menuItems.forEach((item) => {
        item.setAttribute("tabindex", "-1");
      });
    }
  }

  setupReducedMotionSupport() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty(
        "--animation-duration",
        "0.01s"
      );
      document.documentElement.style.setProperty(
        "--transition-duration",
        "0.01s"
      );
    }

    // Listen for changes in motion preferences
    window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .addEventListener("change", (e) => {
        const duration = e.matches ? "0.01s" : "0.3s";
        document.documentElement.style.setProperty(
          "--animation-duration",
          duration
        );
        document.documentElement.style.setProperty(
          "--transition-duration",
          duration
        );
      });
  }

  setupScreenReaderSupport() {
    // Announce navigation changes to screen readers
    this.announceNavigation = (sectionName) => {
      const announcement = document.createElement("div");
      announcement.setAttribute("aria-live", "polite");
      announcement.setAttribute("aria-atomic", "true");
      announcement.className = "sr-only";
      announcement.textContent = `Navigated to ${sectionName} section`;

      document.body.appendChild(announcement);

      setTimeout(() => {
        if (document.body.contains(announcement)) {
          document.body.removeChild(announcement);
        }
      }, 1000);
    };
  }

  // Enhanced Smooth Scrolling
  setupSmoothScrolling() {
    // Handle all navigation links (both desktop and mobile)
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const href = anchor.getAttribute("href");
        if (href === "#") return;

        e.preventDefault();
        const targetId = href.substring(1);
        this.navigateToSection(targetId);
      });
    });
  }

  // Enhanced Navigation with Accessibility
  navigateToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const header = document.querySelector(".header");

    if (section && header) {
      const headerHeight = header.offsetHeight;
      const targetPosition = section.offsetTop - headerHeight - 20;

      // Disable observer during programmatic scroll
      this.isUpdatingFromObserver = false;

      // Immediately update active navigation
      this.updateActiveNavigation(sectionId);

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      // Announce to screen readers
      if (this.announceNavigation) {
        this.announceNavigation(sectionId);
      }

      // Close mobile menu if open
      if (this.mobileMenuOpen) {
        this.closeMobileMenu();
      }

      // Re-enable observer after scroll
      setTimeout(() => {
        this.isUpdatingFromObserver = true;
      }, 1000);
    }
  }

  // Footer animations and interactions
  setupFooterAnimations() {
    this.setupFooterIntersectionObserver();
    this.setupFooterHoverEffects();
    this.setupFooterButtonAnimations();
  }

  setupFooterIntersectionObserver() {
    const footerObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const footerColumns =
              entry.target.querySelectorAll(".footer-column");
            footerColumns.forEach((column, index) => {
              setTimeout(() => {
                column.classList.add("animate-fade-in");
              }, index * 200);
            });

            const footerContactItems = entry.target.querySelectorAll(
              ".footer-contact-item"
            );
            footerContactItems.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add("animate-fade-in");
              }, 500 + index * 100);
            });

            footerObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const footerSection = document.querySelector(".footer-section");
    if (footerSection) {
      footerObserver.observe(footerSection);
    }
  }

  setupFooterHoverEffects() {
    const footerContactItems = document.querySelectorAll(
      ".footer-contact-item"
    );
    footerContactItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const icon = this.querySelector(".footer-contact-icon");
        if (icon) {
          icon.style.transform = "scale(1.1) rotate(5deg)";
          icon.style.transition = "transform 0.3s ease";
        }
      });

      item.addEventListener("mouseleave", function () {
        const icon = this.querySelector(".footer-contact-icon");
        if (icon) {
          icon.style.transform = "scale(1) rotate(0deg)";
        }
      });
    });

    // Footer social links hover effects
    const socialLinks = document.querySelectorAll(".footer-social-link");
    socialLinks.forEach((link) => {
      link.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-3px) scale(1.1) rotate(5deg)";
      });

      link.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1) rotate(0deg)";
      });
    });
  }

  setupFooterButtonAnimations() {
    const footerButtons = document.querySelectorAll(".footer-demo-btn");
    footerButtons.forEach((button) => {
      button.addEventListener("mouseenter", function () {
        this.style.transform = "translateY(-2px) scale(1.02)";
      });

      button.addEventListener("mouseleave", function () {
        this.style.transform = "translateY(0) scale(1)";
      });

      button.addEventListener("mousedown", function () {
        this.style.transform = "translateY(0) scale(0.98)";
      });

      button.addEventListener("mouseup", function () {
        this.style.transform = "translateY(-2px) scale(1.02)";
      });
    });
  }

  // Initialize basic features
  initBasicFeatures() {
    this.setupBasicAnimationObserver();
    this.setupBasicTypingEffect();
    this.setupBasicLoadingState();
    this.setupBasicStatsAnimation();
    this.setupROICalculator();
  }

  // NEW: ROI Savings Calculator Logic
  setupROICalculator() {
    const teamSizeInput = document.getElementById('team-size');
    const hoursManualInput = document.getElementById('hours-manual');
    const hourlyRateInput = document.getElementById('hourly-rate');
    
    if (!teamSizeInput || !hoursManualInput || !hourlyRateInput) return;

    const updateROI = () => {
      const teamSize = parseFloat(teamSizeInput.value) || 0;
      const hoursManual = parseFloat(hoursManualInput.value) || 0;
      const hourlyRate = parseFloat(hourlyRateInput.value) || 0;
      
      const weeklyHoursSaved = teamSize * hoursManual;
      const annualHoursSaved = weeklyHoursSaved * 52;
      const annualCostSaved = annualHoursSaved * hourlyRate;
      
      const hoursSavedEl = document.getElementById('hours-saved');
      const costSavedEl = document.getElementById('cost-saved');
      const hoursSavedTextEl = document.getElementById('hours-saved-text');
      
      if (hoursSavedEl) hoursSavedEl.innerText = annualHoursSaved.toLocaleString();
      if (costSavedEl) costSavedEl.innerText = `$${annualCostSaved.toLocaleString()}`;
      if (hoursSavedTextEl) hoursSavedTextEl.innerText = annualHoursSaved.toLocaleString();
    };

    [teamSizeInput, hoursManualInput, hourlyRateInput].forEach(input => {
      input.addEventListener('input', updateROI);
    });
    
    // Initial calculation
    updateROI();
  }

  // Debug function to check section positions
  debugSectionPositions() {
    const sections = [
      "home",
      "experience",
      "certifications",
      "skills",
      "portfolio",
      "contact",
    ];
    const headerHeight = this.getHeaderHeight();
    const scrollY = window.scrollY;
    sections.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        const rect = section.getBoundingClientRect();
        const offsetTop = section.offsetTop;
        const offsetHeight = section.offsetHeight;
        const sectionCenter = offsetTop + offsetHeight / 2;
        const viewportCenter = scrollY + window.innerHeight / 2;
      }
    });
  }

  setupBasicAnimationObserver() {
    const observerOptions = {
      threshold: this.isMobile ? 0.05 : 0.1,
      rootMargin: this.isMobile ? "0px 0px -20px 0px" : "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(
        ".metric-item, .stat-item, .cert-card, .skill-item, .portfolio-item, .summary-item"
      )
      .forEach((el) => {
        observer.observe(el);
      });
  }

  setupBasicStatsAnimation() {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll(
              ".metric-number, .stat-number"
            );
            statNumbers.forEach((stat) => {
              const text = stat.textContent.replace(/[+,X]/g, "");
              let targetValue;
              let suffix = "+";

              if (text === "11") targetValue = 11;
              else if (text === "30") targetValue = 30;
              else if (text === "6") {
                targetValue = 6;
                suffix = "X";
              } else if (text === "20") targetValue = 20;

              if (targetValue) {
                this.animateCounter(stat, 0, targetValue, 2000, suffix);
              }
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    const trustSection =
      document.querySelector(".trust-section") ||
      document.querySelector(".stats-integrated");
    if (trustSection) {
      statsObserver.observe(trustSection);
    }
  }

  setupBasicTypingEffect() {
    const typedElement = document.querySelector(".typed-text");
    if (typedElement && !this.typingAnimationCompleted) {
      const text = typedElement.textContent;
      typedElement.textContent = "";
      let index = 0;

      const typeText = () => {
        if (index < text.length) {
          typedElement.textContent += text.charAt(index);
          index++;
          setTimeout(typeText, this.isMobile ? 50 : 100);
        } else {
          const cursor = document.querySelector(".typed-cursor");
          if (cursor) {
            cursor.style.display = "inline";
            cursor.style.animation = "typewriterCursor 1s infinite";
          }
          this.typingAnimationCompleted = true;
        }
      };

      setTimeout(typeText, 1000);
    }
  }

  setupBasicLoadingState() {
    const addLoadedClass = () => {
      document.body.classList.add("loaded");
    };

    if (document.readyState === "complete") {
      addLoadedClass();
    } else {
      window.addEventListener("load", addLoadedClass);
    }
  }

  // Enhanced Sticky Header Setup
  setupStickyHeader() {
    const header = document.querySelector(".header");
    if (!header) return;

    header.classList.add("sticky-header");

    window.addEventListener(
      "scroll",
      this.debounce(() => {
        this.handleStickyHeaderScroll();
      }, 10),
      { passive: true }
    );
  }

  handleStickyHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    const scrollY = window.scrollY;
    const scrollDelta = scrollY - this.lastScroll;

    this.scrollDirection = scrollDelta > 0 ? "down" : "up";

    if (scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    if (this.isMobile && !this.mobileMenuOpen) {
      if (this.scrollDirection === "down" && scrollY > 100) {
        header.classList.add("hidden");
      } else if (this.scrollDirection === "up") {
        header.classList.remove("hidden");
      }
    } else {
      header.classList.remove("hidden");
    }

    this.updateScrollIndicator();
    this.lastScroll = scrollY;
  }

  setupScrollIndicator() {
    const indicator = document.createElement("div");
    indicator.className = "scroll-indicator";
    indicator.setAttribute("aria-hidden", "true");
    document.body.appendChild(indicator);
  }

  updateScrollIndicator() {
    const indicator = document.querySelector(".scroll-indicator");
    if (!indicator) return;

    const scrollTop = window.pageYOffset;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;

    indicator.style.width = `${Math.min(scrollPercent, 100)}%`;
  }

  // Enhanced Active Navigation Management
  setupActiveNavigation() {
    // Enhanced intersection observer for better section detection
    this.sectionObserver = new IntersectionObserver(
      (entries) => {
        try {
          if (this.isUpdatingFromObserver === false) return;

          // Get all currently intersecting sections
          const intersectingEntries = entries.filter(
            (entry) => entry.isIntersecting
          );

          if (intersectingEntries.length === 0) return;

          // Find the section that is most prominently in view
          let mostVisibleEntry = intersectingEntries[0];
          let maxVisibleArea = 0;

          intersectingEntries.forEach((entry) => {
            if (!entry.boundingClientRect) {
              console.warn("⚠️ Missing boundingClientRect for entry:", entry);
              return;
            }

            const rect = entry.boundingClientRect;
            const headerHeight = this.getHeaderHeight();
            const viewportHeight = window.innerHeight;

            // Calculate visible area of the section
            const visibleTop = Math.max(rect.top, headerHeight);
            const visibleBottom = Math.min(rect.bottom, viewportHeight);
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleArea = visibleHeight * entry.intersectionRatio;

            if (visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              mostVisibleEntry = entry;
            }
          });

          const sectionId = mostVisibleEntry.target.id;
          if (sectionId && sectionId !== this.currentSection) {
            this.updateActiveNavigation(sectionId);
          }
        } catch (error) {
          console.error("⌐ Error in intersection observer:", error);
          // Fallback to manual detection
          this.manualSectionDetection();
        }
      },
      {
        // Multiple thresholds for better detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        // Adjusted root margin to account for header
        // Adjusted root margin for better detection - trigger when section is in top half
        rootMargin: "-100px 0px -50% 0px",
      }
    );

    // Observe all main sections
    const sectionsToObserve = [
      "home",
      "experience",
      "certifications",
      "skills",
      "framework",
      "security",
      "trust",
      "roi-calculator",
      "portfolio",
      "contact",
    ];

    sectionsToObserve.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        this.sectionObserver.observe(section);
      }
      // Silently ignore missing sections to support sub-pages
    });

    // Enhanced manual scroll detection as primary method
    let scrollTimeout;
    window.addEventListener(
      "scroll",
      () => {
        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Set flag to allow observer updates
        this.isUpdatingFromObserver = true;

        // Run manual detection immediately for responsiveness
        this.manualSectionDetection();

        // Set timeout to run manual detection after scroll stops
        scrollTimeout = setTimeout(() => {
          this.manualSectionDetection();
          // Keep observer enabled for continuous updates
        }, 150);
      },
      { passive: true }
    );
  }

  // Helper method to get cached header height
  getHeaderHeight() {
    if (this._cachedHeaderHeight) return this._cachedHeaderHeight;
    const header = document.querySelector(".header");
    this._cachedHeaderHeight = header ? header.offsetHeight : 80;
    return this._cachedHeaderHeight;
  }

  // Improved manual section detection
  manualSectionDetection() {
    try {
      const sections = [
        "home",
        "experience",
        "certifications",
        "skills",
        "framework",
        "security",
        "trust",
        "roi-calculator",
        "architecture-explorer",
        "portfolio",
        "methodology",
        "why-work-with-me",
        "contact",
      ];
      const headerHeight = this.getHeaderHeight();
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const viewportCenter = scrollPosition + viewportHeight / 2;

      let activeSection = "home";
      let minDistance = Infinity;

      // Find the section whose center is closest to the viewport center
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionCenter = sectionTop + sectionHeight / 2;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if section is significantly in view
        const visibleTop = Math.max(sectionTop, scrollPosition + headerHeight);
        const visibleBottom = Math.min(
          sectionBottom,
          scrollPosition + viewportHeight
        );
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibilityRatio = visibleHeight / sectionHeight;

        // Prefer sections that are more than 30% visible
        if (visibilityRatio > 0.3) {
          const distanceFromCenter = Math.abs(sectionCenter - viewportCenter);

          if (distanceFromCenter < minDistance) {
            minDistance = distanceFromCenter;
            activeSection = sectionId;
          }
        }
      }

      // Fallback: if no section is 30% visible, use the one with the most visibility
      if (minDistance === Infinity) {
        let maxVisibility = 0;

        for (const sectionId of sections) {
          const section = document.getElementById(sectionId);
          if (!section) continue;

          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          const sectionBottom = sectionTop + sectionHeight;

          const visibleTop = Math.max(
            sectionTop,
            scrollPosition + headerHeight
          );
          const visibleBottom = Math.min(
            sectionBottom,
            scrollPosition + viewportHeight
          );
          const visibleHeight = Math.max(0, visibleBottom - visibleTop);
          const visibilityRatio = visibleHeight / sectionHeight;

          if (visibilityRatio > maxVisibility) {
            maxVisibility = visibilityRatio;
            activeSection = sectionId;
          }
        }
      }

      // Only update if different from current
      if (activeSection !== this.currentSection) {
        this.updateActiveNavigation(activeSection);
      }
    } catch (error) {
      console.error("⌐ Error in manual section detection:", error);
    }
  }

  // FIXED: Enhanced updateActiveNavigation method
  updateActiveNavigation(activeSection) {
    // Map sub-sections to their primary navigation parent
    const sectionAliases = {
      "trust": "security",
      "roi-calculator": "security",
      "architecture-explorer": "security",
      "methodology": "portfolio",
      "why-work-with-me": "portfolio"
    };
    
    const primarySection = sectionAliases[activeSection] || activeSection;
    
    if (this.currentSection === primarySection) return;
    this.currentSection = primarySection;

    // Update desktop navigation links
    const desktopNavLinks = document.querySelectorAll(".nav-menu .nav-link");
    desktopNavLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${primarySection}`) {
        link.classList.add("active");
      }
    });

    // Update mobile navigation links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${primarySection}`) {
        link.classList.add("active");
      }
    });

    // Update URL hash without triggering scroll
    if (history.replaceState) {
      const newUrl = `${window.location.pathname}${window.location.search}#${primarySection}`;
      history.replaceState(null, null, newUrl);
    }
  }

  setupEventListeners() {
    window.addEventListener(
      "scroll",
      this.debounce(this.handleHeaderScroll.bind(this), 10)
    );

    if (!this.isMobile) {
      window.addEventListener(
        "scroll",
        this.debounce(this.handleParallax.bind(this), 16)
      );
    }

    window.addEventListener(
      "resize",
      this.debounce(this.handleResize.bind(this), 250)
    );

    this.setupButtonInteractions();

    if (!("ontouchstart" in window)) {
      this.setupProfileImageHover();
    }

    this.setupCertificationInteractions();
    this.setupPortfolioTracking();
    this.setupSummaryHoverEffects();

    this.setupTouchEvents();
    this.setupFullWidthEvents();
  }

  setupFullWidthEvents() {
    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        this.handleResize();
        this.optimizeFullWidthSections();
        this.setupStickyHeader();
      }, 100);
    });

    window.addEventListener("focus", () => {
      this.optimizeFullWidthSections();
    });

    document.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        this.optimizeFullWidthSections();
      }
    });
  }

  handleResize() {
    const newIsMobile = window.innerWidth <= 768;
    const newIsTablet = window.innerWidth <= 1024 && window.innerWidth > 768;

    const wasMobile = this.isMobile;
    this.isMobile = newIsMobile;
    this.isTablet = newIsTablet;

    if (!this.isMobile && this.mobileMenuOpen) {
      this.closeMobileMenu();
    }

    if (this.isMobile && !wasMobile) {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        heroSection.style.transform = "";
      }
    }

    this.updateStatsLayout();
    this.updateHeroLayout();
    this.optimizeFullWidthSections();
    if (this.drawEcosystemConnections) {
      this.drawEcosystemConnections();
    }

    // Invalidate cached measurements
    this._cachedHeaderHeight = null;
    this._cachedDocHeight = null;

    if (this.isMobile && !wasMobile) {
      this.optimizeForMobile();
    }

    // Recreate section observer with updated settings
    if (this.sectionObserver) {
      this.sectionObserver.disconnect();
      this.setupActiveNavigation();
    }
  }

  updateStatsLayout() {
    const statsGrids = document.querySelectorAll(".stats-grid, .metrics-grid");
    if (!statsGrids.length) return;

    statsGrids.forEach((statsGrid) => {
      if (this.isMobile) {
        statsGrid.style.gridTemplateColumns = "1fr";
      } else if (this.isTablet) {
        statsGrid.style.gridTemplateColumns = "repeat(2, 1fr)";
      } else {
        statsGrid.style.gridTemplateColumns = "repeat(4, 1fr)";
      }
    });
  }

  updateHeroLayout() {
    const heroMain = document.querySelector(".hero-main-grid");
    if (!heroMain) return;

    if (this.isMobile || this.isTablet) {
      heroMain.style.gridTemplateColumns = "1fr";
      heroMain.style.textAlign = "center";
    } else {
      heroMain.style.gridTemplateColumns = "450px 1fr";
      heroMain.style.textAlign = "";
    }
  }

  setupTouchEvents() {
    // Enhanced touch events with proper tap target sizes (≥44px)
    document
      .querySelectorAll(
        ".cert-card, .portfolio-item, .summary-item, .footer-contact-item, .footer-demo-btn, .nav-link, .mobile-nav-link"
      )
      .forEach((item) => {
        const minSize = 44; // Define minSize
        // Apply minimum tap target size via CSS for better performance
        item.style.minHeight = `${minSize}px`;
        item.style.display = "flex";
        item.style.alignItems = "center";
        item.style.justifyContent = "center";

        item.addEventListener(
          "touchstart",
          function (e) {
            this.style.transform = "scale(0.98)";
            this.style.transition = "transform 0.1s ease";
          },
          { passive: true }
        );

        item.addEventListener(
          "touchend",
          function (e) {
            this.style.transform = "";
            this.style.transition = "transform 0.2s ease";
          },
          { passive: true }
        );

        item.addEventListener(
          "touchcancel",
          function (e) {
            this.style.transform = "";
          },
          { passive: true }
        );
      });

    if (this.isMobile) {
      document.body.style.webkitOverflowScrolling = "touch";
      document.body.style.overflowX = "hidden";
    }
  }

  // Continue with remaining methods...
  setupIntersectionObservers() {
    this.setupStatsObserver();
    this.setupFadeObserver();
    this.setupSkillRatingObserver();
    this.setupFullWidthObserver();

    if (this.isMobile) {
      this.setupReducedMotionObserver();
    }

    this.setupHeroVisibilityObserver();
  }

  // New method to track hero visibility for UI adjustments (like hiding the toaster)
  setupHeroVisibilityObserver() {
    const heroSection = document.getElementById("home");
    const toasterContainer = document.getElementById("review-toaster");

    if (!heroSection || !toasterContainer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            toasterContainer.classList.add("hero-visible");
          } else {
            toasterContainer.classList.remove("hero-visible");
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of hero is visible
      }
    );

    observer.observe(heroSection);
  }

  setupFullWidthObserver() {
    const fullWidthObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = entry.target;
            section.classList.add("in-view");

            const elements = section.querySelectorAll(".animate-on-scroll");
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add("animated");
              }, index * 100);
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    document
      .querySelectorAll(".section-full, .footer-section")
      .forEach((section) => {
        fullWidthObserver.observe(section);
      });
  }

  setupReducedMotionObserver() {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0s");
    }
  }

  handleHeaderScroll() {
    const header = document.querySelector(".header");
    if (!header) return;

    const scrollY = window.scrollY;

    if (scrollY > 0) {
      header.style.boxShadow = "0 10px 20px rgba(64,62,41,.15)";
      header.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
      header.style.backdropFilter = "blur(10px)";
    } else {
      header.style.boxShadow = "0 5px 10px rgba(64,62,41,.1)";
      header.style.backgroundColor = "#ffffff";
      header.style.backdropFilter = "blur(5px)";
    }
  }

  handleParallax() {
    if (this.isMobile) return;

    const scrolled = window.pageYOffset;
    const rate = scrolled * -0.2;

    const heroSection = document.querySelector(".hero-section");
    if (heroSection && scrolled < heroSection.offsetHeight) {
      heroSection.style.transform = `translateY(${rate}px)`;
    }
  }

  setupButtonInteractions() {
    document
      .querySelectorAll(
        ".btn-primary, .btn-secondary, .btn-tertiary, .footer-demo-btn"
      )
      .forEach((button) => {
        const addHoverEffect = () => {
          if (!("ontouchstart" in window)) {
            button.style.transform = "translateY(-2px) scale(1.02)";
            button.style.transition = "transform 0.2s ease";
          }
        };

        const removeHoverEffect = () => {
          if (!("ontouchstart" in window)) {
            button.style.transform = "translateY(0) scale(1)";
          }
        };

        const addActiveEffect = () => {
          button.style.transform = "translateY(0) scale(0.98)";
          button.style.transition = "transform 0.1s ease";
        };

        const removeActiveEffect = () => {
          if (!("ontouchstart" in window)) {
            button.style.transform = "translateY(-2px) scale(1.02)";
          } else {
            button.style.transform = "translateY(0) scale(1)";
          }
          button.style.transition = "transform 0.2s ease";
        };

        button.addEventListener("mouseenter", addHoverEffect);
        button.addEventListener("mouseleave", removeHoverEffect);
        button.addEventListener("mousedown", addActiveEffect);
        button.addEventListener("mouseup", removeActiveEffect);

        button.addEventListener("touchstart", addActiveEffect, {
          passive: true,
        });
        button.addEventListener("touchend", removeActiveEffect, {
          passive: true,
        });

        button.addEventListener("focus", addHoverEffect);
        button.addEventListener("blur", removeHoverEffect);
      });
  }

  setupProfileImageHover() {
    const profileImg = document.querySelector(".profile-img");
    if (profileImg && !("ontouchstart" in window)) {
      profileImg.addEventListener("mouseenter", function () {
        this.style.transform = "scale(1.05)";
        this.style.transition = "transform 0.3s ease";
      });

      profileImg.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    }
  }

  setupCertificationInteractions() {
    document.querySelectorAll(".cert-card").forEach((card) => {
      const handleInteraction = function () {
        const img = this.querySelector("img");
        if (img) {
          img.style.transform = "scale(1.1)";
          img.style.transition = "transform 0.3s ease";
        }
      };

      const handleInteractionEnd = function () {
        const img = this.querySelector("img");
        if (img) {
          img.style.transform = "scale(1)";
        }
      };

      if ("ontouchstart" in window) {
        card.addEventListener("touchstart", handleInteraction, {
          passive: true,
        });
        card.addEventListener("touchend", handleInteractionEnd, {
          passive: true,
        });
        card.addEventListener("touchcancel", handleInteractionEnd, {
          passive: true,
        });
      } else {
        card.addEventListener("mouseenter", handleInteraction);
        card.addEventListener("mouseleave", handleInteractionEnd);
      }

      card.addEventListener("focusin", handleInteraction);
      card.addEventListener("focusout", handleInteractionEnd);
    });
  }

  setupPortfolioTracking() {
    document
      .querySelectorAll(".portfolio-link, .footer-demo-btn")
      .forEach((link) => {
        link.addEventListener("click", function (e) {
          const platform =
            this.closest(".portfolio-item")?.querySelector("h3")?.textContent ||
            "Footer Demo";

          this.style.transform = "scale(0.95)";
          this.style.transition = "transform 0.1s ease";

          setTimeout(() => {
            this.style.transform = "scale(1)";
            this.style.transition = "transform 0.2s ease";
          }, 150);

          if (window.gtag) {
            window.gtag("event", "link_click", {
              platform: platform,
              device_type: this.isMobile ? "mobile" : "desktop",
              layout_type: "full_width_accessible",
            });
          }
        });
      });
  }

  setupSummaryHoverEffects() {
    document.querySelectorAll(".summary-item").forEach((item) => {
      if ("ontouchstart" in window) {
        item.addEventListener(
          "touchstart",
          function () {
            this.style.transform = "translateX(10px) scale(0.98)";
            this.style.transition = "transform 0.2s ease";
            this.style.boxShadow = "0 10px 25px rgba(64,62,41,.15)";
          },
          { passive: true }
        );

        item.addEventListener(
          "touchend",
          function () {
            this.style.transform = "translateX(0) scale(1)";
            this.style.boxShadow = "none";
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
          },
          { passive: true }
        );

        item.addEventListener(
          "touchcancel",
          function () {
            this.style.transform = "translateX(0) scale(1)";
            this.style.boxShadow = "none";
          },
          { passive: true }
        );
      } else {
        item.addEventListener("mouseenter", function () {
          this.style.transform = "translateX(15px)";
          this.style.transition = "transform 0.3s ease";
          this.style.boxShadow = "0 10px 25px rgba(64,62,41,.15)";
        });

        item.addEventListener("mouseleave", function () {
          this.style.transform = "translateX(0)";
          this.style.boxShadow = "none";
        });
      }
    });
  }

  setupStatsObserver() {
    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const statNumbers = entry.target.querySelectorAll(
              ".stat-number, .metric-number"
            );
            statNumbers.forEach((stat) => {
              const text = stat.textContent.replace(/[+,X]/g, "");
              let targetValue;

              if (text === "11") targetValue = 11;
              else if (text === "30") targetValue = 30;
              else if (text === "6") {
                this.animateCounter(stat, 0, 6, 1500, "X");
                return;
              } else if (text === "20") targetValue = 20;

              if (targetValue) {
                this.animateCounter(stat, 0, targetValue, 2000, "+");
              }
            });
            statsObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.isMobile ? 0.1 : 0.3,
        rootMargin: this.isMobile ? "0px 0px -50px 0px" : "0px",
      }
    );

    const statsSection =
      document.querySelector(".stats-integrated") ||
      document.querySelector(".trust-section");
    if (statsSection) {
      statsObserver.observe(statsSection);
    }
  }

  setupFadeObserver() {
    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = this.isMobile ? 0 : Math.random() * 0.3;
            entry.target.style.animationDelay = delay + "s";
            entry.target.classList.add("animate-fade-in");
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.isMobile ? 0.05 : 0.1,
        rootMargin: this.isMobile ? "0px 0px -20px 0px" : "0px",
      }
    );

    document
      .querySelectorAll(
        ".cert-card, .portfolio-item, .summary-item, .skills-category, .stat-item, .metric-item, .footer-contact-item"
      )
      .forEach((card) => {
        fadeObserver.observe(card);
      });
  }

  setupSkillRatingObserver() {
    const skillRatingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stars = entry.target.querySelectorAll(".star");
            stars.forEach((star, index) => {
              const delay = this.isMobile ? index * 50 : index * 100;
              setTimeout(() => {
                star.style.transform = "scale(1.2)";
                star.style.transition = "transform 0.2s ease";
                setTimeout(() => {
                  star.style.transform = "scale(1)";
                }, 200);
              }, delay);
            });
            skillRatingObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: this.isMobile ? 0.2 : 0.3,
        rootMargin: this.isMobile ? "0px 0px -30px 0px" : "0px",
      }
    );

    document.querySelectorAll(".skill-item").forEach((skill) => {
      skillRatingObserver.observe(skill);
    });
  }

  animateCounter(element, start, end, duration, suffix = "+") {
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
    this.addStaggeredAnimations();

    if (this.isMobile) {
      this.optimizeForMobile();
    }
  }

  optimizeForMobile() {
    document.documentElement.style.setProperty(
      "--animation-complexity",
      "reduced"
    );

    if (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2) {
      document.documentElement.style.setProperty("--disable-blur", "none");
    }

    const fullWidthSections = document.querySelectorAll(
      ".section-full, .hero-section, .footer-section"
    );
    fullWidthSections.forEach((section) => {
      section.style.willChange = "auto";
      section.style.transform = "translateZ(0)";
    });
  }

  addStaggeredAnimations() {
    const statItems = document.querySelectorAll(".stat-item, .metric-item");
    statItems.forEach((item, index) => {
      const delay = this.isMobile ? index * 0.05 : index * 0.1;
      item.style.animationDelay = `${delay}s`;
    });
  }

  updateExperience() {
    const startYear = 2014;
    const startMonth = 4; // May (0-indexed)
    const now = new Date();
    let experience = now.getFullYear() - startYear;

    // Adjust if current month is before the start month
    if (now.getMonth() < startMonth) {
      experience--;
    }

    const experienceElements = document.querySelectorAll(
      ".stat-number, .metric-number"
    );
    experienceElements.forEach((element) => {
      // Check if it's the experience stat by looking at its content or context
      // The current check element.textContent.includes("11") is brittle if we change it.
      // Better to check if it's within a stat item labeled "Years Experience"
      const parent = element.closest(".stat-item, .metric-item");
      const label = parent ? parent.querySelector(".stat-label, .metric-label") : null;

      if (label && label.textContent.toLowerCase().includes("experience")) {
        element.textContent = experience + "+";
      }
    });

    const profileExperience = document.querySelector(".profile-experience p");
    if (profileExperience) {
      profileExperience.textContent = `${experience}+ Years of total experience on force.com platform & salesforce CRM`;
    }
  }

  showWelcomeMessage() {
    const deviceInfo = this.isMobile
      ? "Mobile"
      : this.isTablet
        ? "Tablet"
        : "Desktop";
  }

  setupFullWidthOptimizations() {
    this.optimizeFullWidthSections();
    this.setupFullWidthScrollEffects();
    this.optimizeFullWidthImages();
    this.ensureStatsVisibility();
  }

  ensureStatsVisibility() {
    const statsSelectors = [
      ".trust-section",
      ".stats-integrated",
      ".metrics-grid",
      ".stats-grid",
    ];

    statsSelectors.forEach((selector) => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element) => {
        element.style.display = "block";
        element.style.visibility = "visible";
        element.style.opacity = "1";
      });
    });

    const metricItems = document.querySelectorAll(".metric-item, .stat-item");
    metricItems.forEach((item) => {
      item.style.display = "block";
      item.style.visibility = "visible";
      item.style.opacity = "1";
    });
  }

  optimizeFullWidthSections() {
    const fullWidthSections = document.querySelectorAll(
      ".section-full, .hero-section, .footer-section"
    );
    fullWidthSections.forEach((section) => {
      section.style.width = "100vw";
      section.style.position = "relative";
    });

    document.body.style.overflowX = "hidden";
    document.documentElement.style.overflowX = "hidden";
  }

  setupFullWidthScrollEffects() {
    let ticking = false;

    const updateScrollEffects = () => {
      this.handleStickyHeaderScroll();
      if (!this.isMobile) {
        this.handleParallax();
      }
      ticking = false;
    };

    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollEffects);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  optimizeFullWidthImages() {
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      if (!img.loading) {
        img.loading = "lazy";
      }

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
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

  measurePerformance() {
    if ("performance" in window) {
      window.addEventListener("load", () => {
        setTimeout(() => {
          const perfData = performance.getEntriesByType("navigation")[0];
          if (perfData) {
          }
        }, 0);
      });
    }
  }

  setupLazyLoading() {
    if ("IntersectionObserver" in window) {
      const imageObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              if (img.dataset.src) {
                img.src = img.dataset.src;
                img.classList.remove("lazy");
                imageObserver.unobserve(img);
              }
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "50px",
        }
      );

      document.querySelectorAll("img[data-src]").forEach((img) => {
        imageObserver.observe(img);
      });
    }
  }

  handleError(error, context) {
    console.error(`Error in ${context}:`, error);

    if (window.gtag) {
      window.gtag("event", "exception", {
        description: `${context}: ${error.message}`,
        fatal: false,
      });
    }
  }

  // Public API methods
  getCurrentSection() {
    return this.currentSection;
  }

  isMobileMenuOpen() {
    return this.mobileMenuOpen;
  }

  setupScrollToTop() {
    const scrollBtn = document.getElementById("scroll-to-top");

    if (!scrollBtn) return;

    const toggleScrollButton = () => {
      const scrollY = window.pageYOffset;
      const currentDocHeight = document.documentElement.scrollHeight;
      const docHeight = currentDocHeight - window.innerHeight;
      const scrollProgress = docHeight > 0 ? scrollY / docHeight : 0;

      if (scrollY > 300) {
        scrollBtn.classList.add("visible");
        scrollBtn.style.setProperty("--scroll-progress", scrollProgress);
      } else {
        scrollBtn.classList.remove("visible");
      }
    };

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      setTimeout(() => {
        const firstFocusable =
          document.querySelector(".skip-to-main") ||
          document.querySelector(".logo");
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }, 500);
    };

    window.addEventListener("scroll", toggleScrollButton, { passive: true });
    scrollBtn.addEventListener("click", scrollToTop);

    scrollBtn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        scrollToTop();
      }
    });

    toggleScrollButton();
  }

  setupMetricsDashboard() {
    const metricsSection = document.getElementById("metrics-dashboard");
    if (!metricsSection) return;

    const cards = metricsSection.querySelectorAll(".metric-dashboard-card");
    const observerOptions = {
      threshold: this.isMobile ? 0.1 : 0.3,
      rootMargin: this.isMobile ? "0px 0px -50px 0px" : "0px",
    };

    const metricsObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const valEl = entry.target.querySelector(".metric-val");
          const targetValStr = entry.target.getAttribute("data-target");
          if (valEl && targetValStr) {
            const targetVal = parseInt(targetValStr, 10);
            this.animateCounter(valEl, 0, targetVal, 2000, "");
          }
          metricsObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    cards.forEach((card) => {
      metricsObserver.observe(card);
    });
  }

  setupArchitectureExplorer() {
    const explorerSection = document.getElementById("architecture-explorer");
    if (!explorerSection) return;

    const nodes = explorerSection.querySelectorAll(".arch-node");
    const specPattern = document.getElementById("spec-pattern");
    const specGuardrail = document.getElementById("spec-guardrail");
    const specValue = document.getElementById("spec-value");
    const detailsTitle = explorerSection.querySelector(".arch-details-title");
    const detailsSubtitle = explorerSection.querySelector(".arch-details-subtitle");

    if (!nodes.length || !specPattern || !specGuardrail || !specValue) return;

    const nodeData = {
      salesforce: {
        title: "Salesforce CRM Engine",
        subtitle: "The centralized hub orchestrating automated client metadata and business databases.",
        pattern: "Apex Triggers, LWC Controllers, custom REST endpoints, asynchronous processing (Queueable & Batchable Apex).",
        guardrail: "Bulkified trigger designs, governor limit checks (SOQL query & DML limits), automated unit test coverage.",
        value: "Centralized database, automated lead and ticket routing pipelines, absolute data integrity across operations."
      },
      gemini: {
        title: "Google Gemini AI",
        subtitle: "The intelligent processing layer evaluating customer intent and system options dynamically.",
        pattern: "REST integration using structured JSON payloads, API key rotation, structured response parsing.",
        guardrail: "Rate-limiting, token tracking, token budget management, secure credential storage via Named Credentials.",
        value: "Conversational triage, automated context-aware options generator, next best action prediction."
      },
      apis: {
        title: "REST & ERP APIs",
        subtitle: "The pipeline framework connecting external services and legacy tools synchronously.",
        pattern: "Synchronous/Asynchronous callouts, payload encryption/decryption, error retry mechanisms.",
        guardrail: "120-second timeout enforcement, transaction boundary limits, OAuth 2.0 flow validation.",
        value: "Real-time sync of Salesforce data with external ERP, databases, and third-party SaaS platforms."
      },
      messaging: {
        title: "Twilio & Slack Hub",
        subtitle: "The instant feedback channel broadcasting notifications and system alerts.",
        pattern: "Webhook listeners, event-driven messaging, push notifications.",
        guardrail: "Reconnection policies, platform event stream tracking, deduplication of incoming events.",
        value: "Immediate customer/developer notifications, channel routing, automatic ticket alerts."
      }
    };

    const updateDetails = (nodeKey) => {
      const data = nodeData[nodeKey];
      if (!data) return;

      // Add a fade effect to details content
      const contentBox = document.getElementById("arch-details-content");
      if (contentBox) {
        contentBox.style.opacity = "0.3";
        contentBox.style.transition = "opacity 0.2s ease";
      }

      setTimeout(() => {
        if (detailsTitle) detailsTitle.textContent = data.title;
        if (detailsSubtitle) detailsSubtitle.textContent = data.subtitle;
        specPattern.textContent = data.pattern;
        specGuardrail.textContent = data.guardrail;
        specValue.textContent = data.value;

        if (contentBox) {
          contentBox.style.opacity = "1";
        }
      }, 200);
    };

    const activateNode = (node) => {
      nodes.forEach((n) => n.classList.remove("active"));
      node.classList.add("active");
      const key = node.getAttribute("data-node");
      updateDetails(key);
    };

    nodes.forEach((node) => {
      node.addEventListener("click", () => activateNode(node));
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          activateNode(node);
        }
      });
    });

    // Initialize with first active node
    const activeNode = explorerSection.querySelector(".arch-node.active");
    if (activeNode) {
      const key = activeNode.getAttribute("data-node");
      updateDetails(key);
    }
  }

  // ========================================
  // SALESFORCE REVENUE ECOSYSTEM WIDGET
  // ========================================
  setupEcosystemWidget() {
    const card = document.querySelector(".ecosystem-card");
    if (!card) return;

    const nodes = card.querySelectorAll(".ecosystem-node");
    const consoleOutput = document.getElementById("ecosystem-console-output");
    const timelineSteps = card.querySelectorAll(".journey-step");
    const mobileTabs = card.querySelectorAll(".mobile-tab-btn");
    const columns = card.querySelectorAll(".ecosystem-column");
    const conversionVal = document.getElementById("analytics-conversion-rate");
    const progressBar = card.querySelector(".conversions-widget .progress-bar");
    const tickerItems = card.querySelectorAll(".ticker-item");

    // Node descriptions
    const nodeDescriptions = {
      "website-forms": "STAGE: [Lead Capture]\nFUNCTION: Capture contact details from websites. Automatically routes entries to Salesforce Lead queues via secure Web-to-Lead protocol, triggering immediate email notifications.",
      "facebook-ads": "STAGE: [Lead Capture]\nFUNCTION: Lead Ad payloads are synced via Webhooks. Triggers Campaign Member mapping in Salesforce, tracking direct cost-per-lead (CPL) metrics.",
      "linkedin-ads": "STAGE: [Lead Capture]\nFUNCTION: Direct API synchronization of LinkedIn Lead Gen Forms. Matches company profiles instantly against Salesforce Accounts for targeted ABM campaigns.",
      "google-ads": "STAGE: [Lead Capture]\nFUNCTION: Capture keyword UTMs and GCLID markers. Tracks ROI from click to Opportunity Closed Won, calculating customer acquisition cost (CAC).",
      "whatsapp": "STAGE: [Lead Capture]\nFUNCTION: Twilio API for WhatsApp conversational triage. Chat transcripts are automatically recorded in Salesforce Activity logs to build continuous customer history.",
      "twilio-sms": "STAGE: [Lead Capture]\nFUNCTION: Direct SMS integration via Twilio REST API. Outbound status updates and inbound SMS replies auto-update Salesforce Lead states.",
      "email-campaigns": "STAGE: [Lead Capture]\nFUNCTION: Track email delivery, open rates, and click engagement. Auto-scores engagement metrics and pushes data to Marketing Cloud journeys.",
      "landing-pages": "STAGE: [Lead Capture]\nFUNCTION: Forms on high-conversion landing pages submit lead data directly. Automatically tags campaigns and records referral parameters.",
      "sales-cloud": "STAGE: [Salesforce Core]\nFUNCTION: The global standard CRM engine. Tracks account portfolios, contacts, lead status, and pipeline stages with automated task creation and dashboard reporting.",
      "service-cloud": "STAGE: [Salesforce Core]\nFUNCTION: Comprehensive Case Management. Supports email-to-case, case queues, milestone SLA timers, and escalation routing rule flows.",
      "experience-cloud": "STAGE: [Salesforce Core]\nFUNCTION: Dynamic client and partner portals. Enables direct case submission, order tracking, and knowledge base search via a responsive, authenticated portal.",
      "cpq": "STAGE: [Salesforce Core]\nFUNCTION: Configure, Price, Quote engine. Custom quoting layouts enforcing product dependency rules, multi-tier discounts, and automated contract document creation.",
      "agentforce": "STAGE: [Salesforce Core]\nFUNCTION: Salesforce Agentforce Autonomous AI Agents. Accesses real-time Data Cloud feeds to automatically resolve customer cases and schedules meetings.",
      "data-cloud": "STAGE: [Salesforce Core]\nFUNCTION: Real-time data harmonization. Unifies telemetry, database, and marketing streams into a single Unified Profile for immediate AI access.",
      "marketing-cloud": "STAGE: [Salesforce Core]\nFUNCTION: High-volume customer journey personalization. Orchestrates email marketing, SMS, and WhatsApp alerts triggered by Salesforce status changes.",
      "ai-lead-qual": "STAGE: [AI Automation]\nFUNCTION: Einstein AI lead scoring. Evaluates prospective buyer fields, filtering spam and assigning qualified sales leads directly to executive reps.",
      "predictive-scoring": "STAGE: [AI Automation]\nFUNCTION: Opportunity scoring machine. Evaluates historical win metrics to calculate win likelihood (1-99), prioritizing focus for pipeline velocity.",
      "ai-voice": "STAGE: [AI Automation]\nFUNCTION: Einstein Voice Assistant. Sales reps dictate meeting summaries; natural language processing auto-updates Salesforce fields and schedules follow-up tasks.",
      "sms-automation": "STAGE: [AI Automation]\nFUNCTION: Outbound SMS sequences. Apex classes trigger Twilio SMS automatically when opportunity stages advance or reminders are needed.",
      "workflow-automation": "STAGE: [AI Automation]\nFUNCTION: Core engine workflows using Flow Builder, Orchestrators, and Apex Triggers. Automates business approvals, calculations, and data transfers.",
      "einstein-ai": "STAGE: [AI Automation]\nFUNCTION: Native Salesforce AI engine. Infuses predictions, analytics, and intelligent warnings into standard page layouts.",
      "recommendation-engine": "STAGE: [AI Automation]\nFUNCTION: Next Best Action. Recommends up-sell products and loyalty discounts dynamically based on current customer history and profile metrics.",
      "rest-apis": "STAGE: [Integration Layer]\nFUNCTION: Custom web services. Enables high-performance JSON/XML communication, supporting API key rotations and OAuth 2.0 validation.",
      "erp-systems": "STAGE: [Integration Layer]\nFUNCTION: Bidirectional sync with inventory databases. Ensures Salesforce product and order quantities match warehouse ERP figures.",
      "quickbooks": "STAGE: [Integration Layer]\nFUNCTION: Automatically pushes invoice data and customer details to QuickBooks when opportunity flags hit 'Closed Won', updating bill status in Salesforce.",
      "xero": "STAGE: [Integration Layer]\nFUNCTION: Direct billing sync with Xero. Triggers real-time invoice matching, updating accounts receivable metrics directly inside sales dashboards.",
      "google-calendar": "STAGE: [Integration Layer]\nFUNCTION: Bidirectional calendar sync. Schedules booked through Calendly auto-log as Tasks and Events on corresponding CRM record timelines.",
      "slack-notifications": "STAGE: [Integration Layer]\nFUNCTION: Instant messaging webhook sync. Pushes alerts to sales and support Slack channels on important milestones (e.g. high-value deals won, urgent SLA flags).",
      "sharepoint": "STAGE: [Integration Layer]\nFUNCTION: File Connect integration. Offloads heavy contract PDFs and media files to SharePoint document folders to avoid Salesforce storage overages.",
      "docusign": "STAGE: [Integration Layer]\nFUNCTION: DocuSign envelope status tracking. Triggers signature requests upon contract generation, auto-attaching signed PDFs to Salesforce records."
    };

    const journeyStepDescriptions = {
      "lead-capture": "JOURNEY STAGE: [Lead Capture]\nPROCESS: Prospects engage through Ads, Web Forms, or SMS. Salesforce captures metadata and initiates campaign attribution.",
      "qualification": "JOURNEY STAGE: [Qualification]\nPROCESS: Einstein AI and Agentforce evaluate lead fields and conversation intent. Scores opportunities, filtering unqualified requests.",
      "nurturing": "JOURNEY STAGE: [Nurturing]\nPROCESS: Marketing Cloud launches customized multi-channel journeys (email, SMS, WhatsApp) based on user interaction trends.",
      "opportunity": "JOURNEY STAGE: [Opportunity]\nPROCESS: Qualified leads convert to Contacts and Accounts. Sales reps track pipeline stages in Sales Cloud with real-time analytics.",
      "proposal": "JOURNEY STAGE: [Proposal]\nPROCESS: Salesforce CPQ configures product bundles, applies discounts, and auto-generates custom quotation PDFs for review.",
      "closed-won": "JOURNEY STAGE: [Closed Won]\nPROCESS: DocuSign API logs signed approvals. Integrations trigger QuickBooks/Xero invoicing and sync warehouse inventory status.",
      "support": "JOURNEY STAGE: [Support]\nPROCESS: Case creation in Service Cloud triggers automated routing. Experience Cloud portal allows self-service client help.",
      "retention": "JOURNEY STAGE: [Retention]\nPROCESS: Service SLAs are tracked. Einstein Recommendation Engine presents loyalty incentives on customer health indicators.",
      "upsell": "JOURNEY STAGE: [Upsell]\nPROCESS: Real-time profiles in Data Cloud identify cross-sell thresholds, launching targeted expansion flows automatically."
    };

    // Update Detail Console
    const updateConsole = (text) => {
      if (!consoleOutput) return;
      consoleOutput.style.opacity = "0.2";
      consoleOutput.style.transition = "opacity 0.15s ease";
      setTimeout(() => {
        consoleOutput.textContent = text;
        consoleOutput.style.opacity = "1";
      }, 150);
    };

    // Dynamic Connections Drawing
    this.drawEcosystemConnections = () => {
      if (window.innerWidth <= 768) return; // Hidden on mobile

      const svg = card.querySelector(".ecosystem-connections-svg");
      if (!svg) return;

      const svgRect = svg.getBoundingClientRect();

      // Find active nodes or default to first/middle nodes
      const getActiveOrMiddleNode = (columnStage) => {
        const col = card.querySelector(`.ecosystem-column[data-stage="${columnStage}"]`);
        if (!col) return null;
        let node = col.querySelector(".ecosystem-node.active");
        if (!node) {
          const allColNodes = col.querySelectorAll(".ecosystem-node");
          node = allColNodes[Math.floor(allColNodes.length / 2)];
        }
        return node;
      };

      const n1 = getActiveOrMiddleNode("lead-sources");
      const n2 = getActiveOrMiddleNode("salesforce-core");
      const n3 = getActiveOrMiddleNode("ai-automation");
      const n4 = getActiveOrMiddleNode("integrations");

      const drawPathBetween = (pathId, elStart, elEnd) => {
        const path = svg.getElementById(pathId);
        if (!path || !elStart || !elEnd) return;

        const startRect = elStart.getBoundingClientRect();
        const endRect = elEnd.getBoundingClientRect();

        // Calculate relative coordinates in SVG space
        const x1 = startRect.right - svgRect.left;
        const y1 = startRect.top + startRect.height / 2 - svgRect.top;
        const x2 = endRect.left - svgRect.left;
        const y2 = endRect.top + endRect.height / 2 - svgRect.top;

        // Smooth Bezier curve control points
        const dx = (x2 - x1) * 0.45;
        const dStr = `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
        path.setAttribute("d", dStr);

        // Highlight active connections
        const isStartActive = elStart.classList.contains("active");
        const isEndActive = elEnd.classList.contains("active");
        if (isStartActive || isEndActive) {
          path.classList.add("active");
        } else {
          path.classList.remove("active");
        }
      };

      drawPathBetween("flow-path-1", n1, n2);
      drawPathBetween("flow-path-2", n2, n3);
      drawPathBetween("flow-path-3", n3, n4);
      // Extra path from core direct to integrations (e.g. Salesforce -> Slack/QuickBooks bypassing AI)
      drawPathBetween("flow-path-4", n2, n4);
    };

    // Autoplay configuration
    let isAutoplayActive = true;
    let autoplayInterval = null;
    const stepsArray = ["lead-capture", "qualification", "nurturing", "opportunity", "proposal", "closed-won", "support", "retention", "upsell"];
    const toggleBtn = card.querySelector("#autoplay-toggle");

    const updateAutoplayUI = () => {
      if (!toggleBtn) return;
      const icon = toggleBtn.querySelector("i");
      if (isAutoplayActive) {
        toggleBtn.classList.add("active");
        if (icon) {
          icon.className = "ph-fill ph-pause";
        }
      } else {
        toggleBtn.classList.remove("active");
        if (icon) {
          icon.className = "ph-fill ph-play";
        }
      }
    };

    const startAutoplay = () => {
      stopAutoplay();
      isAutoplayActive = true;
      updateAutoplayUI();
      autoplayInterval = setInterval(() => {
        let activeIndex = -1;
        const currentActive = card.querySelector(".journey-step.active");
        if (currentActive) {
          const stepKey = currentActive.getAttribute("data-step");
          activeIndex = stepsArray.indexOf(stepKey);
        }
        const nextIndex = (activeIndex + 1) % stepsArray.length;
        const nextStepEl = card.querySelector(`.journey-step[data-step="${stepsArray[nextIndex]}"]`);
        if (nextStepEl) {
          selectStep(nextStepEl, false);
        }
      }, 5000);
    };

    const stopAutoplay = () => {
      if (autoplayInterval) {
        clearInterval(autoplayInterval);
        autoplayInterval = null;
      }
      isAutoplayActive = false;
      updateAutoplayUI();
    };

    if (toggleBtn) {
      toggleBtn.addEventListener("click", () => {
        if (isAutoplayActive) {
          stopAutoplay();
        } else {
          startAutoplay();
        }
      });
    }

    const selectStep = (stepEl, isManual = true) => {
      if (isManual) {
        stopAutoplay();
      }

      timelineSteps.forEach((s) => s.classList.remove("active"));
      stepEl.classList.add("active");

      // Auto-scroll the timeline steps horizontally inside their container to keep them in view on mobile
      const scrollContainer = card.querySelector(".journey-scroll-container");
      if (scrollContainer) {
        const containerRect = scrollContainer.getBoundingClientRect();
        const stepRect = stepEl.getBoundingClientRect();
        const scrollLeft = scrollContainer.scrollLeft + (stepRect.left - containerRect.left) - (containerRect.width / 2) + (stepRect.width / 2);
        scrollContainer.scrollTo({ left: scrollLeft, behavior: "smooth" });
      }

      const stepKey = stepEl.getAttribute("data-step");
      const desc = journeyStepDescriptions[stepKey] || "Journey step description not found.";
      updateConsole(desc);

      // Pulse the related columns/nodes based on journey step
      nodes.forEach((n) => n.classList.remove("active"));
      let targetColStage = "";
      let targetNodeKey = "";

      if (stepKey === "lead-capture") {
        targetColStage = "lead-sources";
        targetNodeKey = "website-forms";
      } else if (stepKey === "qualification") {
        targetColStage = "ai-automation";
        targetNodeKey = "ai-lead-qual";
      } else if (stepKey === "nurturing") {
        targetColStage = "salesforce-core";
        targetNodeKey = "marketing-cloud";
      } else if (stepKey === "opportunity") {
        targetColStage = "salesforce-core";
        targetNodeKey = "sales-cloud";
      } else if (stepKey === "proposal") {
        targetColStage = "salesforce-core";
        targetNodeKey = "cpq";
      } else if (stepKey === "closed-won") {
        targetColStage = "integrations";
        targetNodeKey = "quickbooks";
      } else if (stepKey === "support") {
        targetColStage = "salesforce-core";
        targetNodeKey = "service-cloud";
      } else if (stepKey === "retention") {
        targetColStage = "ai-automation";
        targetNodeKey = "recommendation-engine";
      } else if (stepKey === "upsell") {
        targetColStage = "salesforce-core";
        targetNodeKey = "agentforce";
      }

      if (targetColStage) {
        if (window.innerWidth <= 768) {
          const targetBtn = card.querySelector(`.mobile-tab-btn[data-target="${targetColStage}"]`);
          if (targetBtn) targetBtn.click();
        }
        const targetNode = card.querySelector(`.ecosystem-node[data-node="${targetNodeKey}"]`);
        if (targetNode) {
          targetNode.classList.add("active");
        }
      }

      requestAnimationFrame(this.drawEcosystemConnections);
    };

    // Node Interaction
    nodes.forEach((node) => {
      const handleNodeClick = () => {
        stopAutoplay();
        nodes.forEach((n) => n.classList.remove("active"));
        node.classList.add("active");

        const nodeKey = node.getAttribute("data-node");
        const desc = nodeDescriptions[nodeKey] || "Node description not found.";
        updateConsole(desc);

        requestAnimationFrame(this.drawEcosystemConnections);
      };

      node.addEventListener("click", handleNodeClick);
      node.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleNodeClick();
        }
      });
    });

    // Timeline Interaction
    timelineSteps.forEach((step) => {
      step.addEventListener("click", () => {
        selectStep(step, true);
      });
    });

    // Mobile Tabs Interaction
    mobileTabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        stopAutoplay(); // Manual tab switching pauses autoplay
        mobileTabs.forEach((t) => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");

        const targetStage = tab.getAttribute("data-target");
        columns.forEach((col) => {
          if (col.getAttribute("data-stage") === targetStage) {
            col.classList.add("active");
          } else {
            col.classList.remove("active");
          }
        });

        requestAnimationFrame(this.drawEcosystemConnections);
      });
    });

    // Simulated Analytics KPI Ticker
    let conversionRate = 42.8;
    setInterval(() => {
      const delta = (Math.random() - 0.5) * 0.15;
      conversionRate = Math.max(42.0, Math.min(44.5, conversionRate + delta));
      if (conversionVal) {
        conversionVal.textContent = `${conversionRate.toFixed(1)}%`;
      }
      if (progressBar) {
        progressBar.style.width = `${conversionRate.toFixed(1)}%`;
      }
    }, 4000);

    // Insights Live Ticker Cycle
    let tickerIndex = 0;
    setInterval(() => {
      if (tickerItems.length === 0) return;
      tickerItems.forEach((item) => item.classList.remove("active"));
      tickerIndex = (tickerIndex + 1) % tickerItems.length;
      tickerItems[tickerIndex].classList.add("active");
    }, 3000);

    // Initial Connections Drawing after render
    setTimeout(() => {
      requestAnimationFrame(this.drawEcosystemConnections);
    }, 500);

    // Redraw connections on window resize to maintain coordinate alignment
    window.addEventListener("resize", () => {
      requestAnimationFrame(this.drawEcosystemConnections);
    });

    // Start Autoplay loop on load
    setTimeout(() => {
      startAutoplay();
    }, 1000);
  }
}

// Initialize the FIXED accessible portfolio app when DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
  try {
    const app = new EnhancedAccessiblePortfolioApp();

    // Make app globally accessible for debugging
    window.accessiblePortfolioApp = app;
    // Ensure stats visibility after initialization
    setTimeout(() => {
      const statsSelectors = [
        ".trust-section",
        ".stats-integrated",
        ".metrics-grid",
        ".stats-grid",
        ".metric-item",
        ".stat-item",
      ];

      statsSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
          element.style.display = "block !important";
          element.style.visibility = "visible !important";
          element.style.opacity = "1 !important";
        });

        if (elements.length > 0) {
        }
      });
    }, 100);
  } catch (error) {
    console.error("⌐ Error initializing portfolio app:", error);
  }
});

// Enhanced utility functions
window.navigationUtils = {
  scrollToSection: function (sectionId) {
    if (window.accessiblePortfolioApp) {
      window.accessiblePortfolioApp.navigateToSection(sectionId);
    }
  },

  toggleMobileMenu: function () {
    if (window.accessiblePortfolioApp) {
      window.accessiblePortfolioApp.toggleMobileMenu();
    }
  },

  closeMobileMenu: function () {
    if (window.accessiblePortfolioApp) {
      window.accessiblePortfolioApp.closeMobileMenu();
    }
  },

  getCurrentSection: function () {
    return window.accessiblePortfolioApp
      ? window.accessiblePortfolioApp.getCurrentSection()
      : null;
  },

  isMobileMenuOpen: function () {
    return window.accessiblePortfolioApp
      ? window.accessiblePortfolioApp.isMobileMenuOpen()
      : false;
  },

  debugNavigation: function () {
    if (window.accessiblePortfolioApp) {
      window.accessiblePortfolioApp.debugSectionPositions();
    }
  },
};
