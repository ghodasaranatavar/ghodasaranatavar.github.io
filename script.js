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
    // Initialize Review Toaster
    this.initReviewToaster();
    this.setupCalendlyModal();
     this.setupScrollToTop(); // Add this line
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
    // Extract reviews from your review.html data
    this.currentReviewIndex = 0; // ADD THIS LINE
    this.reviews = [
      {
        project: "Salesforce Dev",
        review:
          "Greatly helped me out with this, really knows a lot when it comes to Salesforce. I will be contacting him in the future if I need help",
      },
      {
        project: "Salesforce Development work",
        review:
          "Amazing experience with Natvarlal. He completed the tasks in a timely manner without any carry-over. He understood the requirements very well.",
      },
      {
        project: "B2C Commerce Cloud (SFCC) Sandbox",
        review:
          "He was really helpful and really knowledgeable, a great communicator, and was able to provide helpful documentation. Will hire again!!",
      },
      {
        project: "SalesForce Community Developer",
        review:
          "Natvarlal is a great fit. We had a few issues on our end and he was flexible in his response allowing us to get moving on the project faster/sooner.",
      },
      {
        project: "Salesforce Developer",
        review:
          "Committed and Quick Response on Issues addressed. Will definitely hire Natavar again for all requirements of salesforce. Good understanding on scope and Quality of work is very good.",
      },
      {
        project: "Salesforce Community License",
        review:
          "Natavar was very quick with his experience and helped me out to fix the issue in no time. I recommend him to everyone.",
      },
      {
        project: "SalesForce Communities",
        review:
          "Natavar is easy to work with and has good critical thinking skills. He will think about what is good for the client, beyond just the exact project scope.",
      },
      {
        project: "Einstein Analytics",
        review:
          "Natavar was one of the best contractors I have hired. He was quick to respond and very knowledgeable when it came to Salesforce. I would recommend him to anyone.",
      },
      {
        project: "Salesforce Developer and Partner Community",
        review:
          "Natvar is a very experienced Salesforce developer and did a great job in my Production org and Partner Community. I will be hiring him again when another project comes up",
      },
    ];

    // Start showing toasters after a delay
    setTimeout(() => {
      this.showReviewToaster();
      // Show new toaster every 8 seconds
      this.toasterInterval = setInterval(() => {
        this.showReviewToaster();
      }, 8000);
    }, 3000); // Initial delay of 3 seconds
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
                <div class="toaster-title">Just in: Client Review</div>
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
        window.location.href = "review.html";
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

    console.log("📢 Showing review toaster:", review.project);
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

    console.log("🔍 Mobile Menu Elements Found:", {
      toggle: !!mobileToggle,
      nav: !!mobileNav,
      overlay: !!overlay,
    });

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
        rootMargin: `-${this.getHeaderHeight()}px 0px -20% 0px`,
      }
    );

    // Observe all main sections
    const sectionsToObserve = [
      "home",
      "experience",
      "certifications",
      "skills",
      "portfolio",
      "contact",
    ];

    sectionsToObserve.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        this.sectionObserver.observe(section);
      } else {
        console.warn(`⚠️ Section not found: ${sectionId}`);
      }
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

  // Helper method to get current header height
  getHeaderHeight() {
    const header = document.querySelector(".header");
    return header ? header.offsetHeight : 80;
  }

  // Improved manual section detection
  manualSectionDetection() {
    try {
      const sections = [
        "home",
        "experience",
        "certifications",
        "skills",
        "portfolio",
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
    if (this.currentSection === activeSection) return;

    const previousSection = this.currentSection;
    this.currentSection = activeSection;

    // Update desktop navigation links
    const desktopNavLinks = document.querySelectorAll(".nav-menu .nav-link");
    desktopNavLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${activeSection}`) {
        link.classList.add("active");
      }
    });

    // Update mobile navigation links
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    mobileNavLinks.forEach((link) => {
      link.classList.remove("active");
      const href = link.getAttribute("href");
      if (href === `#${activeSection}`) {
        link.classList.add("active");
      }
    });

    // Update URL hash without triggering scroll
    if (history.replaceState) {
      const newUrl = `${window.location.pathname}${window.location.search}#${activeSection}`;
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
        // Ensure minimum tap target size
        const computedStyle = window.getComputedStyle(item);
        const minSize = 44; // 44px minimum

        if (parseInt(computedStyle.height) < minSize) {
          item.style.minHeight = `${minSize}px`;
          item.style.display = "flex";
          item.style.alignItems = "center";
          item.style.justifyContent = "center";
        }

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
    } else {
      console.warn("⚠️ Stats section not found!");
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
    const currentYear = new Date().getFullYear();
    const experience = currentYear - startYear;

    const experienceElements = document.querySelectorAll(
      ".stat-number, .metric-number"
    );
    experienceElements.forEach((element) => {
      if (element.textContent.includes("11")) {
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

  // ========================================
  // CALENDLY MODAL FUNCTIONALITY
  // ========================================

  setupCalendlyModal() {
    const bookDemoBtn = document.getElementById("book-demo-btn");
    const footerDemoBtn = document.getElementById("footer-demo-btn"); // ADD THIS LINE
    const calendlyModal = document.getElementById("calendly-modal");
    const calendlyModalClose = document.getElementById("calendly-modal-close");
    const calendlyModalOverlay = document.getElementById(
      "calendly-modal-overlay"
    );
    const calendlyEmbed = document.getElementById("calendly-embed");

    if (!calendlyModal) {
      console.warn("⚠️ Calendly elements not found");
      return;
    }

    // Open Calendly Modal function (same as before)
    const openCalendlyModal = () => {
      if (window.Calendly) {
        window.Calendly.initInlineWidget({
          url: "https://calendly.com/ghodasaranatavar2011/15min",
          parentElement: calendlyEmbed,
          prefill: {},
          utm: {},
        });
      }

      calendlyModal.classList.add("active");
      calendlyModal.setAttribute("aria-hidden", "false");
      document.body.classList.add("calendly-modal-open");

      setTimeout(() => {
        if (calendlyModalClose) {
          calendlyModalClose.focus();
        }
      }, 300);

      console.log("📅 Calendly modal opened");
    };

    // Close Calendly Modal function (same as before)
    const closeCalendlyModal = () => {
      calendlyModal.classList.remove("active");
      calendlyModal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("calendly-modal-open");

      if (calendlyEmbed) {
        calendlyEmbed.innerHTML = "";
      }

      console.log("📅 Calendly modal closed");
    };

    // Event Listeners for header button
    if (bookDemoBtn) {
      bookDemoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openCalendlyModal();
      });
    }

    // ADD THIS: Event Listeners for footer button
    if (footerDemoBtn) {
      footerDemoBtn.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        openCalendlyModal();
      });
    }

    // Close button listener (same as before)
    if (calendlyModalClose) {
      calendlyModalClose.addEventListener("click", closeCalendlyModal);
    }

    // Overlay click listener (same as before)
    if (calendlyModalOverlay) {
      calendlyModalOverlay.addEventListener("click", closeCalendlyModal);
    }

    // Escape key listener (same as before)
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && calendlyModal.classList.contains("active")) {
        closeCalendlyModal();
      }
    });

    console.log("✅ Calendly modal setup complete");
  }
  setupScrollToTop() {
    const scrollBtn = document.getElementById("scroll-to-top");

    if (!scrollBtn) return;

    const toggleScrollButton = () => {
      const scrollY = window.pageYOffset;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / docHeight;

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
