// Component Loader - Loads HTML components dynamically

class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
    }

    async loadComponent(componentPath, targetElement, pathPrefix = '') {
        try {
            if (this.loadedComponents.has(componentPath)) {
                return;
            }

            const response = await fetch(componentPath);
            if (!response.ok) {
                throw new Error(`Failed to load component: ${componentPath} - Status: ${response.status}`);
            }

            const html = await response.text();
            
            const target = document.querySelector(targetElement);
            
            if (target) {
                target.innerHTML = html;
                this.loadedComponents.add(componentPath);
                
                // Fix paths in loaded content based on current location
                this.fixAssetPaths(target, pathPrefix);
            } else {
                console.error(`Target element not found: ${targetElement}`);
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    fixAssetPaths(element, pathPrefix) {
        // Fix image sources
        const images = element.querySelectorAll('img[src^="assets/"]');
        images.forEach(img => {
            const originalSrc = img.getAttribute('src');
            if (originalSrc && pathPrefix) {
                img.src = pathPrefix + originalSrc;
            }
        });
        
        // Fix links
        const links = element.querySelectorAll('a[href^="#"], a[href*="index.html"], a[href*="pages/products"]');
        links.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                // Hash links should redirect to homepage with hash
                link.href = (pathPrefix || './') + 'index.html' + href;
            } else if (href && href.includes('pages/products')) {
                // Fix products page links
                if (href === 'pages/products.html') {
                    link.href = pathPrefix + 'pages/products.html';
                } else if (href.startsWith('pages/products/')) {
                    link.href = pathPrefix + href;
                }
            }
        });
    }

    async loadAllComponents() {
        // Detect current directory level to adjust paths
        const pathname = window.location.pathname;
        let pathPrefix = '';
        
        if (pathname.includes('/pages/products/')) {
            // Two levels deep (pages/products/file.html)
            pathPrefix = '../../';
        } else if (pathname.includes('/pages/')) {
            // One level deep (pages/file.html)
            pathPrefix = '../';
        }
        // If at root, pathPrefix remains empty string
        
        const components = [
            { path: pathPrefix + 'components/navigation.html', target: '#header-placeholder' },
            { path: pathPrefix + 'components/footer.html', target: '#footer-placeholder' }
        ];

        for (const component of components) {
            await this.loadComponent(component.path, component.target, pathPrefix);
        }
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    const loader = new ComponentLoader();
    
    // Load header and footer
    await loader.loadAllComponents();
    
    // Load all sections for homepage
    if (document.body.id === 'homepage') {
        const sections = [
            { path: 'sections/hero-section.html', target: '#about-us-placeholder' },
            // Products section removed - users will be redirected to products page instead
            // { path: 'sections/products-section.html', target: '#products-section-placeholder' },
            { path: 'sections/industries-section.html', target: '#benefits-grid-placeholder' },
            { path: 'sections/solutions-section.html', target: '#big-picture-placeholder' },
            { path: 'sections/journey-timeline.html', target: '#journey-timeline-placeholder' },
            { path: 'sections/banner-section.html', target: '#scenic-banner-placeholder' },
            { path: 'sections/contact-section.html', target: '#connect-us-placeholder' }
        ];

        for (const section of sections) {
            await loader.loadComponent(section.path, section.target, '');
        }
    }
});
