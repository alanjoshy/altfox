# File Structure Documentation

## Overview
This document explains the file structure for the AloftX website, making it easy for developers to understand and navigate the project.

## Directory Structure

```
AloftX/
├── assets/                    # Static assets (images, icons, JS files)
│   ├── js/
│   │   └── load-sections.js   # Component loader for dynamic HTML
│   └── logo.ico               # Site favicon
│
├── components/                # Reusable HTML components
│   ├── footer.html            # Footer component
│   └── navigation.html        # Navigation bar component
│
├── pages/                     # Main website pages
│   └── products/              # Product-related pages
│       ├── smap-counterlens.html  # Individual product detail page
│       └── [product-name].html    # Other products (add as needed)
│
├── sections/                  # Section components loaded into pages
│   ├── banner-section.html
│   ├── contact-section.html
│   ├── hero-section.html
│   ├── industries-section.html
│   ├── journey-timeline.html
│   └── solutions-section.html
│
├── index.html                 # Homepage
├── pages/products.html        # Products listing page
├── script.js                  # Main JavaScript file
└── styles.css                 # Global stylesheet

```

## Key File Locations

### Product Pages
- **Products Listing**: `pages/products.html`
  - Main page showing all available products
  - Links to individual product detail pages
  
- **Product Details**: `pages/products/[product-name].html`
  - Individual product detail pages
  - Example: `pages/products/smap-counterlens.html`
  - Each product has its own dedicated page

### Components
- **Navigation**: `components/navigation.html`
  - Header/navigation bar used across all pages
  - Contains links to products page
  
- **Footer**: `components/footer.html`
  - Footer component used across all pages

### Sections
- **Section Components**: `sections/`
  - Reusable HTML sections loaded into pages dynamically
  - Used for modular page building

## Adding New Products

### Step 1: Create Product Detail Page
Create a new file in `pages/products/`:
```bash
pages/products/[product-name].html
```

### Step 2: Update Products Listing
Add the product to `pages/products.html`:
```html
<div class="max-w-md w-full">
    <div class="bg-white rounded-2xl shadow-lg hover:shadow-xl...">
        <!-- Product card content -->
        <a href="products/[product-name].html">Learn More →</a>
    </div>
</div>
```

### Step 3: Update Navigation Dropdown
Add product to `components/navigation.html` dropdown:
```html
<a href="pages/products/[product-name].html" class="...">Product Name</a>
```

## File Naming Conventions

- **Products**: Use lowercase with hyphens
  - ✅ `smap-counterlens.html`
  - ❌ `SMAP_Counterlens.html`
  
- **Pages**: Use kebab-case
  - ✅ `products.html`
  - ✅ `about-us.html`
  
- **Components**: Use descriptive names
  - ✅ `navigation.html`
  - ✅ `footer.html`

## Path References

### From Root (index.html)
- Components: `components/navigation.html`
- Styles: `styles.css`
- Scripts: `script.js`
- Assets: `assets/logo.ico`

### From pages/products.html
- Components: `../components/navigation.html`
- Styles: `../styles.css`
- Scripts: `../script.js`
- Assets: `../assets/logo.ico`
- Products: `products/smap-counterlens.html`

### From pages/products/product.html
- Components: `../../components/navigation.html`
- Styles: `../../styles.css`
- Scripts: `../../script.js`
- Assets: `../../assets/logo.ico`

## Quick Reference

| What You Need | File Location |
|---------------|--------------|
| View all products | `pages/products.html` |
| Product details | `pages/products/[name].html` |
| Update navigation | `components/navigation.html` |
| Update styles | `styles.css` |
| Add JavaScript | `script.js` |
| Homepage | `index.html` |

## Best Practices

1. **Keep product pages consistent** - Use the same layout structure
2. **Use relative paths** - Always use relative paths for internal links
3. **Naming consistency** - Follow naming conventions for easier navigation
4. **Update navigation** - Always update nav dropdown when adding products
5. **Test paths** - Verify all links work after creating new pages

## Questions?

If you need to add a new product or modify the structure, refer to this documentation or ask the project maintainer.
