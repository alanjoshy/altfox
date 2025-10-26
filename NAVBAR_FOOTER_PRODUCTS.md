# Navbar and Footer for All Product Pages

## Problem
Product-related pages needed consistent navbar and footer components across different directory levels.

## Solution
Updated `load-sections.js` to automatically detect directory depth and adjust component paths accordingly.

## Implementation

### Dynamic Path Detection
```javascript
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
```

## Files Affected

### Pages with Navbar & Footer:
1. **pages/products.html** ✓
   - One level deep
   - Uses `../` prefix
   - Has header and footer placeholders

2. **pages/products/smap-counterlens.html** ✓
   - Two levels deep
   - Uses `../../` prefix
   - Has header and footer placeholders

3. **index.html** ✓
   - Root level
   - No prefix needed
   - Has header and footer placeholders

## How It Works

1. **Detect Directory Level**: Check current file path
2. **Set Path Prefix**: Determine relative path prefix needed
   - Root: No prefix
   - `/pages/`: `../` prefix
   - `/pages/products/`: `../../` prefix
3. **Load Components**: Use prefix to correctly load navigation.html and footer.html

## Benefits

✅ **Consistent UI**: All pages have the same navbar and footer
✅ **Automatic**: No manual path adjustments needed
✅ **Flexible**: Handles any directory depth
✅ **Maintainable**: Single point of configuration

## Testing

### Test Cases:
1. ✅ Index page (root) - navbar/footer load correctly
2. ✅ Products page (pages/) - navbar/footer load correctly
3. ✅ Product detail page (pages/products/) - navbar/footer load correctly

## Result
All product-related pages now have consistent navbar and footer components automatically loaded.
