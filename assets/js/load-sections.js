// Component Loader - Loads HTML components dynamically

class ComponentLoader {
    constructor() {
        this.loadedComponents = new Set();
    }

    async loadComponent(componentPath, targetElement) {
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
            } else {
                console.error(`Target element not found: ${targetElement}`);
            }
        } catch (error) {
            console.error('Error loading component:', error);
        }
    }

    async loadAllComponents() {
        const components = [
            { path: 'components/navigation.html', target: '#header-placeholder' },
            { path: 'components/footer.html', target: '#footer-placeholder' }
        ];

        for (const component of components) {
            await this.loadComponent(component.path, component.target);
        }
    }
}

// Initialize component loader when DOM is ready
document.addEventListener('DOMContentLoaded', async function() {
    const loader = new ComponentLoader();
    
    // Load header and footer
    await loader.loadAllComponents();
    
    // Load all sections for homepage.html
    if (document.body.id === 'homepage') {
        const sections = [
            { path: 'sections/about-us-section.html', target: '#about-us-placeholder' },
            { path: 'sections/features-grid.html', target: '#benefits-grid-placeholder' },
            { path: 'sections/visualization-features.html', target: '#big-picture-placeholder' },
            { path: 'sections/journey-timeline.html', target: '#journey-timeline-placeholder' },
            { path: 'sections/mountain-banner.html', target: '#scenic-banner-placeholder' },
            { path: 'sections/contact-section.html', target: '#connect-us-placeholder' }
        ];

        for (const section of sections) {
            await loader.loadComponent(section.path, section.target);
        }
    }
});
