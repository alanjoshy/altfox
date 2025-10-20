// JavaScript for Area website - Modern Minimal Design

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.createElement('div');
    mobileMenu.className = 'mobile-menu md:hidden bg-white shadow-lg absolute top-20 left-0 right-0 z-40';
    mobileMenu.innerHTML = `
        <div class="px-8 py-4 space-y-2">
            <a href="#benefits" class="block px-3 py-2 text-gray-600 hover:text-sage-green hover:bg-gray-50 rounded-md nav-link">Benefits</a>
            <a href="#specifications" class="block px-3 py-2 text-gray-600 hover:text-sage-green hover:bg-gray-50 rounded-md nav-link">Specifications</a>
            <a href="#how-to" class="block px-3 py-2 text-gray-600 hover:text-sage-green hover:bg-gray-50 rounded-md nav-link">How-to</a>
            <a href="#contact" class="block px-3 py-2 text-gray-600 hover:text-sage-green hover:bg-gray-50 rounded-md nav-link">Contact Us</a>
        </div>
    `;
    
    // Insert mobile menu after navigation
    const nav = document.querySelector('nav');
    if (nav && nav.parentNode) {
        nav.parentNode.insertBefore(mobileMenu, nav.nextSibling);
    }
    
    // Toggle mobile menu
    if (mobileMenuButton) {
        mobileMenuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    mobileMenu.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Enhanced smooth scrolling for navigation links with transition effects
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
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
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
    
    // Enhanced Intersection Observer for section transitions
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add fade-in animation
                entry.target.classList.add('fade-in-up');
                
                // Add section-specific animations
                const sectionId = entry.target.id;
                if (sectionId) {
                    // Add staggered animation for child elements
                    const children = entry.target.querySelectorAll('.group, .milestone-card, .bg-gradient-to-r');
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
            }
        });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
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
            mobileMenu.classList.remove('active');
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

    // Handle form submission
    document.addEventListener('submit', function(e) {
        if (e.target && e.target.id === 'contact-form') {
            e.preventDefault();
            
            const formData = new FormData(e.target);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            const submitBtn = document.getElementById('submit-btn');
            if (submitBtn) {
                submitBtn.innerHTML = '<span class="loading"></span> Sending...';
                submitBtn.disabled = true;
                
                        // Simulate form submission
                        setTimeout(() => {
                            alert(`Thank you, ${name}! Your message has been sent successfully. We'll get back to you soon at ${email}.`);
                            
                            // Close modal with animation
                            closeModal();
                            
                            submitBtn.innerHTML = 'Send Message';
                            submitBtn.disabled = false;
                        }, 2000);
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
});
