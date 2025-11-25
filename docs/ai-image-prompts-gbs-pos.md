# AI Image Generation Prompts - GBS POS Missing Images

## Overview
These prompts are optimized for AI image generators like Midjourney, DALL-E, Stable Diffusion, or similar tools to create the missing images for the GBS POS product page.

**Required Files**: 3 images  
**Product**: GBS Intelligent Surveillance-Enabled POS System  
**Theme**: Navy blue accents, modern retail technology, professional atmosphere

---

## Image 1: Cashier Using POS Interface

**Filename**: `gbs-pos-gallery-cashier-interface.jpg`  
**Dimensions**: **900 x 600 pixels** (3:2 aspect ratio)  
**Location**: `assets/images/products/gbs/`  
**File Size Target**: < 200KB (compressed JPG)

### AI Generation Prompt:
```
Professional photograph of a friendly female cashier using a modern touchscreen POS (point of sale) system at a retail checkout counter. The POS display shows a clean, intuitive navy blue-themed interface with product items, pricing, and transaction details clearly visible on the screen. Bright, well-lit retail environment with a warm, welcoming atmosphere. The cashier is smiling and confidently interacting with the touchscreen. Modern minimalist design, shallow depth of field focusing on the POS screen and cashier's hands. Natural lighting from above, high quality commercial photography, professional retail setting. Clean white counter surface, organized checkout area.

Style: Corporate photography, modern retail aesthetic, professional lighting, photorealistic
Colors: Navy blue (#1E3A8A) accents on POS interface, clean white counter, bright retail environment, neutral tones
Mood: Professional, friendly, efficient, trustworthy, approachable
Technical: 4K resolution, commercial photography quality, landscape orientation (3:2 ratio)
```

### Alternative Short Prompt:
```
professional retail cashier using modern touchscreen POS system, navy blue interface, bright store, friendly atmosphere, commercial photography, 4k --ar 3:2
```

---

## Image 2: Store Manager Reviewing Analytics

**Filename**: `gbs-pos-gallery-manager-analytics.jpg`  
**Dimensions**: **900 x 600 pixels** (3:2 aspect ratio)  
**Location**: `assets/images/products/gbs/`  
**File Size Target**: < 200KB (compressed JPG)

### AI Generation Prompt:
```
Professional photograph of a confident male store manager in business casual attire reviewing POS analytics and sales data on a modern tablet computer in a retail back office or sales floor. The tablet screen displays colorful charts, graphs, sales metrics, and navy blue-themed dashboard with real-time business insights. The manager is focused and engaged, holding the tablet at an angle where the screen is partially visible. Modern office/retail environment with clean aesthetic. Natural window lighting creating a professional atmosphere. Data visualization elements visible on screen including bar charts, line graphs, and key performance indicators.

Style: Corporate business photography, professional setting, executive portrait style
Colors: Navy blue dashboard accents, white/gray tablet, business casual clothing, well-lit office
Mood: Analytical, confident, data-driven, professional, strategic
Technical: 4K resolution, commercial quality, shallow depth of field, landscape (3:2 ratio)
```

### Alternative Short Prompt:
```
store manager analyzing POS data on tablet, navy blue analytics dashboard with charts and graphs, modern retail office, professional business photography, 4k --ar 3:2
```

---

## Image 3: Retail Operations Team

**Filename**: `gbs-pos-gallery-operations-team.jpg`  
**Dimensions**: **1200 x 800 pixels** (3:2 aspect ratio)  
**Location**: `assets/images/products/gbs/`  
**File Size Target**: < 250KB (compressed JPG)

### AI Generation Prompt:
```
Wide professional photograph of a diverse retail operations team (3-4 people) collaborating around connected POS devices and tablets in a modern retail environment or training room. Team members of different ethnicities are engaged in discussion, pointing at screens showing navy blue-themed POS interfaces and operational dashboards. Multiple POS terminals and tablets visible showing synchronized data. Modern, well-lit space with clean design aesthetic. Team wearing business casual attire or retail uniforms. Collaborative, energetic atmosphere. Technology-forward retail setting with organized workspace. Natural lighting from windows combined with warm interior lighting.

Style: Corporate team photography, collaborative workspace, professional setting, wide angle
Colors: Navy blue POS interfaces, white/modern retail environment, diverse team clothing
Mood: Collaborative, innovative, teamwork, modern, efficient, connected
Technical: 4K resolution, commercial photography, wide shot, landscape orientation (3:2 ratio)
```

### Alternative Short Prompt:
```
diverse retail team collaborating with multiple POS devices, navy blue interfaces, modern store environment, teamwork, professional photography, wide angle, 4k --ar 3:2
```

---

## Technical Specifications Summary

| Image | Filename | Dimensions | Aspect Ratio | File Format | Max Size |
|-------|----------|------------|--------------|-------------|----------|
| 1 | `gbs-pos-gallery-cashier-interface.jpg` | 900 x 600 | 3:2 | JPG | 200KB |
| 2 | `gbs-pos-gallery-manager-analytics.jpg` | 900 x 600 | 3:2 | JPG | 200KB |
| 3 | `gbs-pos-gallery-operations-team.jpg` | 1200 x 800 | 3:2 | JPG | 250KB |

---

## Generation Tips

### For Midjourney:
- Add `--ar 3:2` to maintain aspect ratio
- Use `--q 2` for highest quality
- Add `--style raw` for photorealistic results
- Example: `[prompt] --ar 3:2 --q 2 --style raw`

### For DALL-E 3:
- Request "photorealistic commercial photography"
- Specify exact dimensions in prompt
- Request horizontal/landscape orientation
- Mention "high resolution 4K quality"

### For Stable Diffusion:
- Use models trained on professional photography (e.g., Realistic Vision, DreamShaper)
- Set dimensions to exactly 900x600 or 1200x800
- Use sampling steps: 30-50 for quality
- CFG Scale: 7-9 for balanced results

### Color Consistency:
- **Primary Brand Color**: Navy Blue (#1E3A8A / RGB: 30, 58, 138)
- Request "navy blue (#1E3A8A) interface accents" in all prompts
- Maintain consistent lighting and color temperature across all three images

### Post-Processing:
1. Resize to exact dimensions if needed
2. Compress to JPG with 85-90% quality
3. Optimize for web using tools like TinyPNG or ImageOptim
4. Verify file size is under target
5. Test images in the actual webpage

---

## Installation Instructions

Once you have generated the images:

1. Save each image with the exact filename specified above
2. Place all three images in: `/Users/alan/works/AloftX/assets/images/products/gbs/`
3. Verify the images load correctly by opening: `http://localhost:8000/pages/products/gbs-pos.html`
4. Check that all three gallery images display properly in the "POS In Action" section

---

**Created**: 2025-11-25  
**Purpose**: Generate missing product gallery images for GBS POS page  
**Status**: Ready for AI generation
