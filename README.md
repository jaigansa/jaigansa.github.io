# Jai Ganesh — Portfolio

A minimal, professional single-page portfolio. Zero build step, zero external CDNs — just static HTML, CSS, and JavaScript, all content driven from one config file.

## Features

- **Single page, no framework** — pure HTML5 + CSS3 + vanilla JS
- **Data-driven** — all content lives in [data.js](data.js)
- **Fully local** — Inter font and Lucide icons bundled in `assets/`
- **Light & dark mode** — follows the system `prefers-color-scheme`
- **Photo lightbox** — project galleries with keyboard navigation

## Sections

- **Hero** — avatar, socials, role, tagline, and CTAs
- **Selected Work** — grid of projects; click the image for a gallery lightbox, the title for the project link
- **Expertise** — skill tags
- **Contact** — email form (opens a prefilled mail)
- **Quote** — Thirukkural verse with explanation

## Content Management

Edit [data.js](data.js):

```js
const portfolioConfig = {
    // Paste your Formspree form ID here to receive form submissions
    // directly in your inbox. Leave "" to fall back to a mailto: link.
    contact: { formspreeId: "" },
    profile: {
        name: "Jai Ganesh",
        role: "Designer & Fabricator",
        bio: "...",
        image: "./assets/images/profile.jpg",
        resume: { label: "Download CV", url: "./assets/resume/resume.pdf" },
        socials: [
            { icon: "git-compare", label: "GitHub", url: "https://github.com/..." }
        ]
    },
    links: [
        { type: "project", title: "...", description: "...",
          image: "./assets/images/projects/....webp",
          url: "https://...", images: ["./assets/images/projects/a.webp", "..."] },
        { type: "skills", title: "Expertise", skills: [{ name: "FreeCAD", level: 90 }] },
        { type: "email", url: "mailto:you@example.com" },
        { type: "quote", title: "Thirukkural", text: "...", explanation: "...", url: "https://..." }
    ]
};
```

Drop your resume PDF at `assets/resume/resume.pdf` (or change the `url` in `profile.resume`).
Add `robots.txt` and `sitemap.xml` if you host under the default `https://jaigansa.github.io` URL.

## File Structure

```
├── index.html            # page, inline styles & scripts
├── data.js               # all content & config
├── robots.txt
├── sitemap.xml
└── assets/
    ├── fonts/inter/      # self-hosted typefaces
    ├── images/
    │   ├── profile.jpg
    │   └── projects/     # project cover photos & gallery images
    ├── lib/              # third-party libraries (lucide, qrcode)
    └── resume/           # downloadable CV
```

## Run Locally

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.
