# Level3AI - Landing Page

A modern, responsive landing page for Level3AI - a conversational AI platform for customer experience in APAC enterprises.

---

## 📁 Project Structure

```
Page-Creator/
├── index.html                    # Main HTML file
├── README.md                     # Project documentation
└── assets/
    ├── css/
    │   └── style.css             # Main stylesheet
    ├── images/
    │   ├── logos/                # Company logos for carousel
    │   └── services/             # Service-related images
    └── vid/
        └── services/             # Service-related videos
```

---

## 🎨 Page Sections

### 1. Top Banner
- Announcement banner with gradient background
- Closeable notification for funding news

### 2. Navigation
- Responsive navbar with Bootstrap
- Logo, navigation links, and CTA button
- Mobile hamburger menu support

### 3. Hero Section
- Main headline and value proposition
- Hero video with autoplay
- Primary call-to-action button

### 4. Logo Carousel
- Trusted companies showcase
- Auto-scrolling infinite carousel
- Fade gradient effects on edges
- Pause on hover functionality

### 5. Our Solution (What We Do)
- Bento box card layout (2x2 grid)
- Video backgrounds for each feature
- Features highlighted:
  - **Localised** - 16+ countries, 95+ languages
  - **Configurable** - Policy-driven AI playbooks
  - **Compatible** - Legacy & modern system integration
  - **Connected** - Multi-modal app integration

### 6. Our Process
- 3-step implementation flow
- Visual timeline with arrows
- Steps: Scope → Build → Deploy
- Time estimates for each phase

### 7. Testimonials
- Customer review carousel
- Horizontal scroll with navigation buttons
- Customer photos, logos, and quotes
- Mask effects for smooth edges

### 8. Case Studies
- Real-world success stories
- Company cards with statistics
- Alternating layout (normal/reversed)
- Featured companies: GetGo, Neuron, Carousell

### 9. CTA Section
- Call-to-action with background image
- Pricing alignment messaging
- Demo booking button

### 10. Footer
- Company description and logo
- Section links and contact info
- Compliance badges (ISO 27001, ISO 42001, GDPR)
- Legal links (Terms, Privacy, Trust Center)
- Cookie consent toggle button

---

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with CSS variables
- **Bootstrap 5.3.3** - Responsive grid and components
- **Google Fonts** - Instrument Sans font family
- **Vanilla JavaScript** - Carousel navigation

---

## 🎯 CSS Architecture

The stylesheet is organized into clearly labeled sections:

```css
/* ======================================== */
/*   SECTION NAME                           */
/* ======================================== */
```

### Section Order:
1. Root Variables & Global Settings
2. Top Banner Section
3. Navigation Section
4. Button Styles
5. Hero Section
6. Logo Carousel Section
7. Our Solution Section (Bento Boxes)
8. Process Section
9. Testimonials Section
10. Case Studies Section
11. CTA Section
12. Footer Section
13. Responsive Media Queries

---

## 📱 Responsive Breakpoints

| Breakpoint | Target Devices |
|------------|----------------|
| `1200px`   | Large desktops |
| `991px`    | Tablets / Small laptops |
| `768px`    | Tablets (portrait) |
| `576px`    | Mobile devices |

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for video playback)

---

## 📦 Dependencies

| Dependency | Version | CDN |
|------------|---------|-----|
| Bootstrap CSS | 5.3.3 | cdn.jsdelivr.net |
| Bootstrap JS | 5.3.3 | cdn.jsdelivr.net |
| Instrument Sans | - | Google Fonts |

---

## 🎨 Color Palette

| Color | Variable | Hex/Value |
|-------|----------|-----------|
| Primary Blue | `--primary-blue` | `#396dff` |
| Demo Button BG | `--demo-button-bg` | `rgb(29, 87, 245)` |
| Demo Button Border | `--demo-button-border` | `#396bf6` |
| Text Dark | `--text-dark` | `#000000` |
| Text Muted | `--text-muted` | `#666666` |
| Background Gradient | `--bg-gradient` | Cyan → Blue → Purple |

---

