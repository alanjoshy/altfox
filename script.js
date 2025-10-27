// JavaScript for Area website - Modern Minimal Design

document.addEventListener('DOMContentLoaded', function() {
    // Fix navigation paths based on current page location
    function fixNavigationPaths() {
        const isPagesDirectory = window.location.pathname.includes('/pages/');
        const navLogo = document.getElementById('nav-logo');
        const navLogoLink = document.getElementById('nav-logo-link');
        
        if (navLogo && isPagesDirectory) {
            navLogo.src = navLogo.src.replace('assets/', '../assets/');
        }
        
        if (navLogoLink && isPagesDirectory) {
            navLogoLink.href = '../index.html';
        }
        
        // Fix all relative links in navigation
        const navLinks = document.querySelectorAll('nav a[href^="#"]');
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (isPagesDirectory && href.startsWith('#')) {
                link.href = '../index.html' + href;
            }
        });
    }
    
    // Call immediately
    fixNavigationPaths();
    
    // Ensure scroll container starts at the correct position (between left and center)
    function resetScrollPosition() {
        const scrollContainer = document.getElementById('scroll-container');
        if (scrollContainer) {
            // Start at position 0 to show the first card with its left margin
            scrollContainer.scrollLeft = 0;
        }
    }
    
    // Reset scroll position when page loads
    resetScrollPosition();
    
    // Also reset when the visualization section is loaded
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.querySelector && node.querySelector('#scroll-container')) {
                            setTimeout(() => {
                                resetScrollPosition();
                            }, 100);
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    // Horizontal scroll functionality for solutions section (mobile only)
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'scroll-left') {
            e.preventDefault();
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) {
                const currentScroll = scrollContainer.scrollLeft;
                const scrollAmount = 400;
                const newScroll = Math.max(0, currentScroll - scrollAmount);
                scrollContainer.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            }
        }
        
        if (e.target && e.target.id === 'scroll-right') {
            e.preventDefault();
            const scrollContainer = document.getElementById('scroll-container');
            if (scrollContainer) {
                const currentScroll = scrollContainer.scrollLeft;
                const scrollAmount = 400;
                const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                const newScroll = Math.min(maxScroll, currentScroll + scrollAmount);
                scrollContainer.scrollTo({
                    left: newScroll,
                    behavior: 'smooth'
                });
            }
        }
    });
    // Mobile menu toggle - Use event delegation to handle dynamically loaded content
    function setupMobileMenu() {
        const mobileMenuButton = document.querySelector('.mobile-menu-button');
        
        if (!mobileMenuButton) {
            return; // Button not loaded yet
        }
        
        // Check if mobile menu already exists
        let mobileMenu = document.querySelector('.mobile-menu');

        let overlay = document.querySelector('.mobile-menu-overlay');
        
        if (!mobileMenu || !overlay) {
            // Determine the correct paths based on current page
            const pathname = window.location.pathname;
            const isInPages = pathname.includes('/pages/');
            
            // Calculate correct prefix based on directory depth
            let pathPrefix = '';
            if (pathname.includes('/pages/products/')) {
                // Two levels deep (pages/products/*)
                pathPrefix = '../../';
            } else if (pathname.includes('/pages/')) {
                // One level deep (pages/*)
                pathPrefix = '../';
            }
            
            const indexPath = pathPrefix + 'index.html';
            const productsPage = pathPrefix + 'pages/products.html';
            
            // Create overlay
            overlay = document.createElement('div');
            overlay.className = 'mobile-menu-overlay';
            
            // Create mobile menu
            mobileMenu = document.createElement('div');
            mobileMenu.className = 'mobile-menu';
            mobileMenu.innerHTML = `
                <div class="mobile-menu-header">
                    <h3 class="text-lg font-semibold text-gray-900">Menu</h3>
                    <button class="mobile-menu-close">✕</button>
                </div>
                <div class="mobile-menu-content">
                    <a href="${isInPages ? indexPath + '#about' : '#about'}" class="nav-link">About Us</a>
                    
                    <!-- Products with subcategories -->
                    <div class="mobile-menu-section">
                        <div class="mobile-menu-section-header" onclick="toggleMobileSection(this)">
                            <a href="${productsPage}" class="nav-link mobile-menu-main-link">Products</a>
                        </div>
                        <div class="mobile-menu-submenu">
                            <a href="${pathPrefix}pages/products/smap-counterlens.html" class="mobile-menu-sublink">SMAP Counterlens</a>
                            <a href="${pathPrefix}pages/products/gbs-pos.html" class="mobile-menu-sublink">GBS POS</a>
                            <a href="${productsPage}" class="mobile-menu-view-all">View All Products →</a>
                        </div>
                    </div>
                    
                    <a href="${isInPages ? indexPath + '#industries' : '#industries'}" class="nav-link">Industries</a>
                    <a href="${isInPages ? indexPath + '#specifications' : '#specifications'}" class="nav-link">Solutions</a>
                    <a href="${isInPages ? indexPath + '#journey' : '#journey'}" class="nav-link">Our Journey</a>
                    <a href="${isInPages ? indexPath + '#contact' : '#contact'}" class="nav-link">Contact Us</a>
                </div>
            `;
            
            // Add to body
            document.body.appendChild(overlay);
            document.body.appendChild(mobileMenu);
        }
        
        // Get existing menu and overlay if they exist
        mobileMenu = document.querySelector('.mobile-menu');
        overlay = document.querySelector('.mobile-menu-overlay');
        
        // Remove existing listeners and add new ones
        mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
        const newButton = document.querySelector('.mobile-menu-button');
        
        // Function to open menu
        function openMobileMenu() {
            if (overlay) overlay.classList.add('active');
            if (mobileMenu) mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
        
        // Function to close menu
        function closeMobileMenu() {
            if (overlay) overlay.classList.remove('active');
            if (mobileMenu) mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Button click handler
        newButton.addEventListener('click', openMobileMenu);
        
        // Close button handler
        const closeButton = mobileMenu.querySelector('.mobile-menu-close');
        if (closeButton) {
            closeButton.addEventListener('click', closeMobileMenu);
        }
        
        // Overlay click handler
        if (overlay) {
            overlay.addEventListener('click', closeMobileMenu);
        }
        
        // Close mobile menu when clicking on a link
        const menuLinks = mobileMenu.querySelectorAll('.mobile-menu-content a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                // Delay closing to allow navigation
                setTimeout(closeMobileMenu, 100);
            });
        });
        
        // Close on Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // Toggle mobile menu section (for expandable menus like Products)
    window.toggleMobileSection = function(header) {
        const section = header.closest('.mobile-menu-section');
        const submenu = section.querySelector('.mobile-menu-submenu');
        
        if (submenu.style.display === 'block') {
            submenu.style.display = 'none';
            section.classList.remove('expanded');
        } else {
            submenu.style.display = 'block';
            section.classList.add('expanded');
        }
    };
    
    // Try to setup mobile menu immediately
    setupMobileMenu();
    
    // Also setup after a short delay to handle async component loading
    setTimeout(setupMobileMenu, 500);
    
    // Also fix paths after navigation loads
    setTimeout(fixNavigationPaths, 600);
    
    // Enhanced smooth scrolling for navigation links with transition effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            // Check if we're on the homepage or another page
            const isHomepage = window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/');
            
            if (!isHomepage && href.startsWith('#')) {
                // Redirect to homepage with hash
                window.location.href = '../index.html' + href;
                return;
            }
            
            const target = document.querySelector(href);
            if (target) {
                // Add loading effect to clicked link
                this.style.opacity = '0.7';
                this.style.transform = 'scale(0.95)';
                
                const offsetTop = target.offsetTop - 100; // Account for fixed header
                
                // Smooth scroll with enhanced easing
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Reset link appearance after scroll
                setTimeout(() => {
                    this.style.opacity = '1';
                    this.style.transform = 'scale(1)';
                }, 800);
                
                // Add section highlight effect
                setTimeout(() => {
                    target.style.transform = 'scale(1.02)';
                    target.style.transition = 'transform 0.3s ease-out';
                    
                    setTimeout(() => {
                        target.style.transform = 'scale(1)';
                    }, 300);
                }, 500);
            }
        });
    });
    
    // Add scroll effect to navigation
    window.addEventListener('scroll', function() {
        const nav = document.getElementById('navbar');
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    });
    
    // Enhanced Intersection Observer for section transitions and active nav link highlighting
    const observerOptions = {
        threshold: 0.1,  // Reduced from 0.3 to trigger earlier
        rootMargin: '0px 0px -100px 0px'  // Increased visibility area
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Only add revealed class once to prevent double animation
                if (!section.classList.contains('revealed')) {
                    // Add section-reveal animation class if not already present
                    section.classList.add('section-reveal');
                    
                    // Trigger reveal animation faster for quicker visibility
                    setTimeout(() => {
                        section.classList.add('revealed');
                    }, 50);
                    
                    // Add section-specific animations for children
                    const children = section.querySelectorAll('.group, .milestone-card, .bg-gradient-to-r, .product-card');
                    children.forEach((child, index) => {
                        setTimeout(() => {
                            child.style.opacity = '0';
                            child.style.transform = 'translateY(20px)';
                            child.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                            
                            setTimeout(() => {
                                child.style.opacity = '1';
                                child.style.transform = 'translateY(0)';
                            }, 100);
                        }, index * 100);
                    });
                }
                
                // Update active navigation link (this happens every time section is visible)
                const sectionId = section.id;
                if (sectionId) {
                    updateActiveNavLink(sectionId);
                }
            }
        });
    }, observerOptions);
    
    // Function to update active navigation link
    function updateActiveNavLink(activeSectionId) {
        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to the corresponding nav link
        const activeLink = document.querySelector(`a[href="#${activeSectionId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Observe all sections for animation and active link highlighting
    function observeAllSections() {
        document.querySelectorAll('section[id]').forEach(section => {
            // Add section-reveal class to make sections invisible initially
            section.classList.add('section-reveal');
            sectionObserver.observe(section);
        });
        
        // Also observe sections that are loaded dynamically
        setTimeout(() => {
            document.querySelectorAll('section[id]').forEach(section => {
                // Add section-reveal class to dynamically loaded sections
                section.classList.add('section-reveal');
                if (!sectionObserver.observedSections || !sectionObserver.observedSections.has(section)) {
                    sectionObserver.observe(section);
                }
            });
        }, 1000);
    }
    
    // Start observing immediately
    observeAllSections();
    
    // Re-observe after dynamic content loads
    setTimeout(observeAllSections, 1500);
    
    // Set initial active link based on scroll position
    setTimeout(() => {
        const sections = document.querySelectorAll('section[id]');
        const scrollPosition = window.scrollY + 150;
        
        for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            const sectionTop = section.offsetTop;
            
            if (scrollPosition >= sectionTop) {
                updateActiveNavLink(section.id);
                break;
            }
        }
    }, 2000);
    
    // Add scroll progress indicator
    function updateScrollProgress() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        
        // Create progress bar if it doesn't exist
        let progressBar = document.getElementById('scroll-progress');
        if (!progressBar) {
            progressBar = document.createElement('div');
            progressBar.id = 'scroll-progress';
            progressBar.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 0%;
                height: 3px;
                background: linear-gradient(90deg, #16A34A, #059669);
                z-index: 9999;
                transition: width 0.1s ease-out;
            `;
            document.body.appendChild(progressBar);
        }
        
        progressBar.style.width = scrollPercent + '%';
    }
    
    // Update scroll progress on scroll
    window.addEventListener('scroll', updateScrollProgress);
    
    // Add hover effects to buttons
    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(-1px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.disabled) {
                this.style.transform = 'translateY(0)';
            }
        });
        
        button.addEventListener('click', function() {
            if (!this.disabled) {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
        });
    });
    
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const mobileMenu = document.querySelector('.mobile-menu');
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
        }
    });
    
    // Add focus management for accessibility
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #465C33';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
    
    // Add smooth reveal animation for hero elements
    const heroTitle = document.querySelector('.hero-title');
    const tabletMockup = document.querySelector('.tablet-mockup');
    
    if (heroTitle) {
        setTimeout(() => {
            heroTitle.classList.add('fade-in-up');
        }, 300);
    }
    
    if (tabletMockup) {
        setTimeout(() => {
            tabletMockup.classList.add('fade-in-up');
        }, 600);
    }
    
    // Add parallax effect to background blocks (subtle)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const backgroundBlocks = document.querySelectorAll('.bg-block-left, .bg-block-right');
        
        backgroundBlocks.forEach((block, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            block.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Add loading animation for Learn More buttons
    const learnMoreBtns = document.querySelectorAll('.learn-more-btn');
    learnMoreBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const originalText = this.textContent;
            this.innerHTML = '<span class="loading"></span> Loading...';
            this.disabled = true;
            
            // Simulate loading
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
                // Scroll to connect section or benefits section
                const connectSection = document.querySelector('section:nth-of-type(2)');
                if (connectSection) {
                    connectSection.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }, 1500);
        });
    });

    // Journey timeline animation
    function animateJourneyMilestones() {
        const milestones = document.querySelectorAll('.journey-milestone');
        
        // Make first milestone visible immediately
        if (milestones.length > 0) {
            milestones[0].classList.add('visible');
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        milestones.forEach(milestone => {
            observer.observe(milestone);
        });
    }

    // Initialize journey animation after components are loaded
    setTimeout(() => {
        animateJourneyMilestones();
    }, 1000);

    // Contact Modal Functionality - Event Delegation Approach
    document.addEventListener('click', function(e) {
        // Open modal
        if (e.target && e.target.id === 'get-in-touch-btn') {
            const contactModal = document.getElementById('contact-modal');
            if (contactModal) {
                // Show modal with animation
                contactModal.classList.remove('hidden');
                document.body.style.overflow = 'hidden';
                
                // Trigger animation after a brief delay
                setTimeout(() => {
                    contactModal.classList.remove('bg-opacity-0');
                    contactModal.classList.add('bg-opacity-50');
                    
                    const modalContent = contactModal.querySelector('div');
                    if (modalContent) {
                        modalContent.classList.remove('scale-95', 'opacity-0');
                        modalContent.classList.add('scale-100', 'opacity-100');
                    }
                }, 10);
            }
        }
        
        // Close modal buttons
        if (e.target && (e.target.id === 'close-modal' || e.target.id === 'cancel-btn')) {
            closeModal();
        }
        
        // Close modal when clicking outside
        if (e.target && e.target.id === 'contact-modal') {
            closeModal();
        }
    });

    // Function to close modal with animation
    function closeModal() {
        const contactModal = document.getElementById('contact-modal');
        if (contactModal) {
            // Start closing animation
            contactModal.classList.remove('bg-opacity-50');
            contactModal.classList.add('bg-opacity-0');
            
            const modalContent = contactModal.querySelector('div');
            if (modalContent) {
                modalContent.classList.remove('scale-100', 'opacity-100');
                modalContent.classList.add('scale-95', 'opacity-0');
            }
            
            // Hide modal after animation completes
            setTimeout(() => {
                contactModal.classList.add('hidden');
                document.body.style.overflow = 'auto';
                
                // Reset form
                const contactForm = document.getElementById('contact-form');
                if (contactForm) {
                    contactForm.reset();
                }
                
                // Reset modal classes for next opening
                contactModal.classList.remove('bg-opacity-0');
                contactModal.classList.add('bg-opacity-0');
                if (modalContent) {
                    modalContent.classList.remove('scale-100', 'opacity-100');
                    modalContent.classList.add('scale-95', 'opacity-0');
                }
            }, 300);
        }
    }

    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            const contactModal = document.getElementById('contact-modal');
            if (contactModal && !contactModal.classList.contains('hidden')) {
                closeModal();
            }
        }
    });

    // Handle form submission with Web3Forms
    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'contact-form') {
            e.preventDefault();
            
            const form = e.target;
            const formData = new FormData(form);
            const submitBtn = document.getElementById('submit-btn');
            
            if (submitBtn) {
                const originalContent = submitBtn.innerHTML;
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;
                
                // Submit to Web3Forms
                fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    body: formData
                })
                .then(response => response.json())
                .then(data => {
                    if (data.success) {
                        // Success message
                        alert('Thank you! Your message has been sent successfully. We\'ll get back to you soon.');
                        
                        // Close modal with animation
                        closeModal();
                        
                        // Reset form
                        form.reset();
                    } else {
                        throw new Error(data.message || 'Form submission failed');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                    alert('Sorry, there was an error sending your message. Please try again or email us directly at info@aloftx.com');
                })
                .finally(() => {
                    // Reset button
                    submitBtn.innerHTML = originalContent;
                    submitBtn.disabled = false;
                });
            }
        }
    });

    // Copy functionality for email and website
    document.addEventListener('click', function(e) {
        if (e.target && e.target.id === 'copy-email') {
            copyToClipboard('info@aloftx.com', e.target);
        }
        
        if (e.target && e.target.id === 'copy-website') {
            copyToClipboard('https://www.aloftx.com', e.target);
        }
    });

    // Function to copy text to clipboard with visual feedback
    function copyToClipboard(text, button) {
        // Create a temporary textarea element
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        
        // Select and copy the text
        textarea.select();
        textarea.setSelectionRange(0, 99999); // For mobile devices
        
        try {
            const successful = document.execCommand('copy');
            if (successful) {
                // Visual feedback - change icon temporarily
                const originalIcon = button.innerHTML;
                button.innerHTML = `
                    <svg class="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                `;
                button.classList.add('text-green-600');
                
                // Show "Copied!!" message under the button
                showCopiedMessage(button);
                
                // Reset icon after 2 seconds
                setTimeout(() => {
                    button.innerHTML = originalIcon;
                    button.classList.remove('text-green-600');
                }, 2000);
            } else {
                throw new Error('Copy command failed');
            }
        } catch (err) {
            console.error('Failed to copy text: ', err);
            showCopiedMessage(button, 'error');
        }
        
        // Clean up
        document.body.removeChild(textarea);
    }

    // Function to show "Copied!!" message under the clicked button
    function showCopiedMessage(button, type = 'success') {
        // Remove any existing copied message
        const existingMessage = document.querySelector('.copied-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Get button position
        const buttonRect = button.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Create message element
        const message = document.createElement('div');
        message.className = 'copied-message';
        message.style.cssText = `
            position: absolute;
            left: ${buttonRect.left + (buttonRect.width / 2)}px;
            top: ${buttonRect.bottom + scrollTop + 8}px;
            transform: translateX(-50%);
            background: ${type === 'success' ? '#10B981' : '#EF4444'};
            color: white;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease-out;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            white-space: nowrap;
        `;
        message.textContent = type === 'success' ? 'Copied!!' : 'Failed!';
        
        // Add to page
        document.body.appendChild(message);
        
        // Animate in
        setTimeout(() => {
            message.style.opacity = '1';
        }, 50);
        
        // Remove after 2 seconds
        setTimeout(() => {
            message.style.opacity = '0';
            setTimeout(() => {
                if (message.parentNode) {
                    message.parentNode.removeChild(message);
                }
            }, 300);
        }, 2000);
    }

    // Function to show copy notification (kept for other uses)
    function showCopyNotification(message, type = 'success') {
        // Remove existing notification if any
        const existingNotification = document.getElementById('copy-notification');
        if (existingNotification) {
            existingNotification.remove();
        }
        
        // Create notification element
        const notification = document.createElement('div');
        notification.id = 'copy-notification';
        notification.className = `fixed top-20 right-4 z-50 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 transform translate-x-full ${
            type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`;
        notification.textContent = message;
        
        // Add to page
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);
        
        // Remove after 3 seconds
        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.parentNode.removeChild(notification);
                }
            }, 300);
        }, 3000);
    }

    // Carousel functionality - moved inside main DOMContentLoaded
    function initCarousel() {
        const slides = document.querySelectorAll('.carousel-slide');
        const totalSlides = slides.length;
        
        if (totalSlides === 0) return;
        
        let currentSlide = 0;
        
        // Show specific slide
        function showSlide(n) {
            // Handle wrap-around
            if (n >= totalSlides) {
                currentSlide = 0;
            } else if (n < 0) {
                currentSlide = totalSlides - 1;
            } else {
                currentSlide = n;
            }
            
            // Hide all slides
            slides.forEach(slide => slide.classList.remove('active'));
            
            // Show current slide
            if (slides[currentSlide]) {
                slides[currentSlide].classList.add('active');
            }
        }
        
        // Next slide function
        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            showSlide(currentSlide);
        }
        
        // Start auto-play
        setInterval(() => {
            if (document.visibilityState === 'visible') {
                nextSlide();
            }
        }, 4000); // Change slide every 4 seconds
    }
    
    // Initialize carousel after a short delay to ensure DOM is ready
    setTimeout(() => {
        initCarousel();
    }, 500);
    
}); // End of main DOMContentLoaded
