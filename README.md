# JAI Portfolio 2026

A high-performance, minimalist, and ultra-lightweight static portfolio site inspired by Linktree. Designed for speed, responsiveness, and a premium editorial visual design. Powered dynamically by a single content file.

## 🚀 Key Features

- **Self-Contained Core:** All page structure, styles, animations, and scripts are combined into a single, optimized [index.html](file:///c:/Users/Jaiga/Projects/github/jaigansa.github.io/index.html) file.
- **Clean Content Separation:** The entire portfolio content is decoupled and loaded dynamically from [data.js](file:///c:/Users/Jaiga/Projects/github/jaigansa.github.io/data.js).
- **Ultra-Lightweight & Local:** Zero external CDNs or network requests at runtime. All typography assets (Inter, Plus Jakarta Sans) and helper scripts (Lucide Icons, QR Code Generator) are hosted locally within the `assets/` directory.
- **Premium Glassmorphic UX:** Sleek frosted-glass list widgets with subtle borders, hover-state reflections, and floating mesh radial blobs that dynamically transition colors based on user hover states.
- **Interactive Widgets:** Includes collapsible QR code generation drawer, list badge widgets for tech skills, quote panels, and profile link headers.

---

## 🛠️ Technology Stack

- **HTML5 & Vanilla CSS3:** Dynamic variables, custom font faces, responsive flexbox/grid layout structures, and backdrop filters.
- **Vanilla JavaScript:** Clean DOM parsing, event listeners, and configuration mappings.
- **Lucide Icons:** Standardized, localized vector icons.
- **QRCode.js:** Local client-side vector QR code rendering.

---

## 📂 Content Management & Configuration

To update details on the page (links, tags, socials, descriptions), simply edit the `cards` configuration array inside [data.js](file:///c:/Users/Jaiga/Projects/github/jaigansa.github.io/data.js).

### Card Types Available:
1. `avatar`: Renders the top profile introducing you (social buttons, bio description, name, profile image).
2. `project`: Renders standard wide link cards containing a project visual thumbnail on the left and chevron buttons.
3. `skills`: Lists tag arrays as chip badges.
4. `qrcode`: Client-side generated QR code drawer.
5. `quote`: Beautiful editorial quotation block.

### Example Card configuration inside `data.js`:
```javascript
{
    id: "project-1",
    type: "project",
    isVisible: true,
    title: "PROJECT TITLE",
    description: "Detailed description of your build here...",
    image: "./assets/images/photos/your-image.webp",
    link: "https://your-external-link.com"
}
```

---

## 🎨 Local Verification

To run the site locally:
1. Open the repository directory.
2. Spin up a local static server (e.g. `python -m http.server 8080`).
3. Navigate to `http://localhost:8080` in your web browser.
