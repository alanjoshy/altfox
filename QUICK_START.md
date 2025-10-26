# Quick Start Guide

## 📁 New File Structure

```
AloftX/
├── assets/                  # Static files
├── components/              # Reusable components
├── pages/                   # Main pages
│   └── products/           # Individual product pages
├── sections/               # Section components
├── index.html              # Homepage
└── pages/products.html     # Products listing
```

## 🚀 Key Changes Made

### 1. Products Organization
- ✅ Moved `products.html` → `pages/products.html`
- ✅ Moved `products/` → `pages/products/`
- ✅ Created clear folder structure

### 2. Updated Links
- ✅ Fixed all relative paths in navigation
- ✅ Updated product detail page links
- ✅ Fixed asset references (CSS, JS, images)

### 3. Documentation
- ✅ Created `STRUCTURE.md` - Complete structure guide
- ✅ Created `QUICK_START.md` - This file

## 📝 Adding a New Product

### Quick Steps:
1. Create file: `pages/products/your-product.html`
2. Copy structure from: `pages/products/smap-counterlens.html`
3. Add to listing: Edit `pages/products.html`
4. Update nav: Edit `components/navigation.html`

### Example:
```html
<!-- In pages/products/your-product.html -->
<a href="your-product.html">Your Product</a>

<!-- In pages/products.html -->
<div class="...">
    <h3>Your Product</h3>
    <a href="products/your-product.html">Learn More →</a>
</div>

<!-- In components/navigation.html -->
<a href="pages/products/your-product.html">Your Product</a>
```

## 🎯 File Locations

| What | Where |
|------|-------|
| **All Products** | `pages/products.html` |
| **SMAP Product** | `pages/products/smap-counterlens.html` |
| **Navigation** | `components/navigation.html` |
| **Homepage** | `index.html` |
| **Styles** | `styles.css` |
| **Scripts** | `script.js` |

## 🔍 Testing

Test the new structure:
1. Open `index.html` in browser
2. Click "Products" in navigation
3. Click on SMAP Counterlens product
4. Verify all links work

## 💡 Tips

- All paths are relative to keep structure flexible
- Use `../` to go up one directory level
- Keep product pages in `pages/products/` folder
- Update `STRUCTURE.md` when adding new sections

## 📚 Learn More

See `STRUCTURE.md` for complete documentation.
