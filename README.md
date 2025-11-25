# AloftX Website

A modern, responsive website for AloftX built with HTML, Tailwind CSS, and vanilla JavaScript.

## 🚀 Quick Start

```bash
# Start local development server
python3 -m http.server 8000

# Open in browser
open http://localhost:8000/index.html
```

## 📁 Project Structure

```
AloftX/
├── index.html                 # Main page
├── styles.css                 # Custom styles
├── script.js                  # JavaScript functionality
├── components/                # Reusable components
│   ├── navigation.html        # Header navigation
│   └── footer.html           # Footer
├── sections/                  # Page sections (modular)
│   ├── hero-section.html      # Hero, About & Mission/Vision
│   ├── solutions-section.html  # Technology Portfolio
│   ├── industries-section.html # Industries We Serve
│   ├── journey-timeline.html   # Company Journey/Timeline
│   ├── banner-section.html    # Banner section
│   └── contact-section.html   # Contact form & info
├── products/                   # Product pages
│   └── smap-counterlens.html  # SMAP product details
└── assets/                    # Static assets
    ├── icons/                 # Logo and favicon files
    └── js/
        └── load-sections.js  # Component loader
```

## 🎯 Features

- **Responsive Design**: Mobile-first approach
- **Modern UI**: Clean typography, smooth animations
- **Component-Based**: Modular HTML sections
- **Dynamic Loading**: JavaScript component loader
- **Green Theme**: Professional color scheme
- **Interactive**: Hover effects, modal forms
- **Accessible**: Keyboard navigation, ARIA labels

## 🛠️ Technologies

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first styling
- **Vanilla JavaScript**: No frameworks
- **Google Fonts**: Inter, Playfair Display
- **Heroicons**: SVG icons

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors
- **Primary**: Green (#16A34A)
- **Text**: Gray (#111827)
- **Background**: White (#FFFFFF)
- **Accent**: Sage Green (#6B705E)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Sizes**: Responsive scaling

## 🔧 Development

### Component Loading
The website uses a dynamic component loader (`assets/js/load-sections.js`) that:
- Fetches HTML sections asynchronously
- Loads components into placeholders
- Handles errors gracefully
- Caches loaded components

### Custom CSS
`styles.css` contains:
- Custom color variables
- Animation keyframes
- Responsive utilities
- Component-specific styles

### JavaScript Features
`script.js` handles:
- Mobile menu toggle
- Smooth scrolling
- Scroll effects
- Modal functionality
- Form validation
- Journey timeline animations

## 📋 Sections Overview

1. **About Us**: Company mission, vision, values
2. **Solutions**: POS, Cloud & AI, Enterprise offerings
3. **Industries**: Retail, Healthcare, Hospitality services
4. **Journey**: Company timeline with road map design
5. **Contact**: Form with modal popup

## 🚀 Deployment

The website is static and can be deployed to any web server:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web hosting service

## 📞 Support

For technical support or modifications, contact the development team.

---
**AloftX** - The Journey Onward and Upward