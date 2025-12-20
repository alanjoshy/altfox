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
├── index.html                 # Main homepage
├── styles.css                 # Custom styles and animations
├── script.js                  # JavaScript functionality
├── components/                # Reusable components
│   ├── navigation.html        # Header navigation with mobile menu
│   └── footer.html           # Footer component
├── sections/                  # Page sections (modular, dynamically loaded)
│   ├── hero-section.html      # Hero carousel, About & Mission/Vision
│   ├── solutions-section.html  # Technology Portfolio
│   ├── industries-section.html # Industries We Serve
│   ├── journey-timeline.html   # Company Journey/Timeline
│   ├── banner-section.html    # Banner section
│   ├── products-section.html  # Products showcase (optional)
│   └── contact-section.html   # Contact form & info with modal
├── pages/                     # Additional pages
│   ├── products.html          # Products listing page
│   └── products/              # Individual product pages
│       ├── smap-counterlens.html
│       ├── gbs-pos.html
│       └── gbs-intelligent-surveillance.html
├── assets/                    # Static assets
│   ├── icons/                 # Logo files
│   ├── images/                # Images organized by section
│   └── js/
│       └── load-sections.js  # Component loader
└── docs/                      # Documentation
    ├── site-documentation.md
    ├── image-requirements.md
    └── ai-image-prompts-gbs-pos.md
```

## 🎯 Features

- **Responsive Design**: Mobile-first approach with breakpoints
- **Modern UI**: Clean typography, smooth animations, and transitions
- **Component-Based**: Modular HTML sections loaded dynamically
- **Dynamic Loading**: JavaScript component loader with path resolution
- **Navy Blue Theme**: Professional color scheme with consistent branding
- **Interactive**: Hover effects, modal forms, carousel, scroll animations
- **Accessible**: Keyboard navigation, focus management, ARIA support
- **Form Integration**: Web3Forms contact form with validation

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
- **Primary/Navy Blue**: #1E3A8A
- **Navy Blue Dark**: #1E40AF
- **Primary Text**: #111827 (Dark Gray)
- **Secondary Text**: #6B7280 (Medium Gray)
- **Background**: #FFFFFF (White)
- **Accent**: #1E3A8A (Navy Blue)

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
- Mobile menu toggle with animations
- Smooth scrolling with offset
- Scroll effects and progress indicator
- Section reveal animations (Intersection Observer)
- Active navigation link highlighting
- Modal functionality with animations
- Form validation and Web3Forms integration
- Journey timeline animations
- Carousel auto-play functionality
- Copy-to-clipboard functionality
- Path resolution for multi-level navigation

## 📋 Sections Overview

1. **Hero Section**: Auto-scrolling carousel with business imagery
2. **About Us**: Company mission, vision, and values
3. **Solutions/Technology Portfolio**: POS, Cloud & AI, Enterprise offerings
4. **Industries**: Retail, Healthcare, Hospitality, Startups & Enterprises
5. **Journey Timeline**: Company timeline with animated road map design
6. **Banner Section**: Scenic banner with call-to-action
7. **Contact**: Contact form with modal popup and Web3Forms integration

## 📦 Product Pages

- **SMAP Counterlens**: Intelligent surveillance system
- **GBS POS**: Transaction monitoring and POS system
- **GBS Intelligent Surveillance**: AI-driven surveillance suite

## 🚀 Deployment

The website is static and can be deployed to any web server:
- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web hosting service

**Note**: Ensure all asset paths are correctly resolved for your deployment environment. The component loader handles path resolution automatically based on directory depth.

## 🔍 Code Quality

- ✅ No linter errors
- ✅ Consistent file naming
- ✅ All CSS variables defined
- ✅ No duplicate code
- ✅ Proper font references
- ✅ Defensive JavaScript with null checks

## 📝 Recent Updates

- Fixed file naming inconsistencies
- Added missing CSS variables
- Removed duplicate CSS definitions
- Updated font references
- Cleaned up unused functions
- Improved code organization

## 📞 Support

For technical support or modifications, contact the development team.

**Contact**: info@aloftx.com  
**Website**: https://www.aloftx.com

---
**AloftX** - The Journey Onward and Upward