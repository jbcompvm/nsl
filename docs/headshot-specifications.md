# Professional Headshot Specifications

## Purpose
Professional headshot for Neural Studio Lab About page to establish credibility and trust with prospective clients.

## Technical Requirements

### Image Specifications
- **Format**: JPEG or WebP (preferred for web optimization)
- **Dimensions**: Minimum 400×400px (square aspect ratio)
  - Recommended: 600×600px or 800×800px for high-DPI displays
- **File size**: Maximum 200KB (optimized for web)
- **Color space**: sRGB
- **Quality**: 85-90% JPEG quality or WebP equivalent

### Visual Requirements

#### Composition
- **Framing**: Head and shoulders, professional business portrait style
- **Background**: Clean, solid neutral color or subtle gradient
  - Preferred: Light gray, white, or soft blue tones
  - Avoid: Busy patterns, cluttered environments
- **Lighting**: Even, professional lighting
  - No harsh shadows on face
  - Consistent lighting temperature

#### Subject Presentation
- **Attire**: Professional business casual or business formal
  - Collared shirt, blazer, or professional sweater
  - Solid colors or subtle patterns preferred
  - Avoid: Busy patterns, logos, casual wear
- **Expression**: Approachable and professional
  - Natural smile or confident neutral expression
- **Eye contact**: Direct to camera
- **Posture**: Confident, upright, slight angle acceptable

### Brand Alignment
- Should convey: Competence, approachability, trustworthiness
- Tone: Professional but not corporate, approachable consultant
- Consistent with Neural Studio Lab brand: Technical expertise with human-centered service

## Current Implementation

### Placeholder
- Location: `web/assets/images/headshot-placeholder.svg`
- A professional SVG placeholder is currently in place
- Shows circular frame with silhouette figure

### Integration
- Location: `web/about.html` (line 89-105)
- Size: 200×200px display (responsive)
- Circular crop with teal accent border
- Positioned left of bio text on desktop, centered on mobile

## Replacement Instructions

### File Naming
Replace the placeholder with the optimized headshot:
- Filename: `headshot.jpg` or `headshot.webp`
- Location: `web/assets/images/`

### HTML Update
Update the image source in `web/about.html`:
```html
<img src="assets/images/headshot.webp"
     alt="Professional headshot of [Full Name], Neural Studio Lab founder"
     class="profile-image"
     width="200"
     height="200">
```

### Optimization Commands
```bash
# For JPEG (with ImageMagick)
convert original.jpg -resize 800x800^ -gravity center -extent 800x800 -quality 85 web/assets/images/headshot.jpg

# For WebP (with cwebp)
cwebp -q 85 -resize 800 800 original.jpg -o web/assets/images/headshot.webp
```

## Accessibility
- **Alt text**: Must include person's name and role
  - Example: "Professional headshot of James [Surname], Founder and Principal Consultant at Neural Studio Lab"
- **Color contrast**: Image border (teal #14b8a6) meets WCAG AA against dark background

## Quality Checklist
- [ ] Image meets minimum 400×400px dimensions
- [ ] File size under 200KB
- [ ] Clean, professional background
- [ ] Professional attire visible
- [ ] Even, flattering lighting
- [ ] Sharp focus on face
- [ ] Natural, approachable expression
- [ ] File properly named and located
- [ ] HTML alt text updated with actual name
- [ ] Image displays correctly on desktop and mobile

## Notes
- Current placeholder name in bio: "James [Surname]" - update with actual name
- Profile role: "Founder & Principal Consultant" - verify this is correct title
- Consider taking 2-3 headshot options and selecting the best for brand alignment
