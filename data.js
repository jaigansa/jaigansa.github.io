/**
 * PORTFOLIO CONFIGURATION
 *
 * Update this file to customize your profile details, links, skills, and widgets.
 */

const portfolioConfig = {
    // Top Profile Header configuration
    profile: {
        name: "Jai Ganesh",
        bio: "Designer & maker. I turn ideas into 3D models, real fabricated products, and AI-assisted apps.",
        image: "./assets/images/profile.jpg",
        email: "mailto:jaigansa+talk@gmail.com",
        socials: [
            { icon: "git-compare", label: "GitHub", url: "https://github.com/jaigansa" },
            { icon: "x", label: "X (Twitter)", url: "https://x.com/jaigansa" },
            { icon: "message-circle", label: "Signal", url: "https://signal.me/#u/jaiganesh.94" }
        ],
        footerText: "Thank you for visiting my portfolio."
    },

    // Vertical Stack components & links
    links: [
        {
            type: "project",
            title: "Design",
            description: "Mechanical design with FreeCAD — from concept to detailed 3D models.",
            image: "./assets/images/photos/sji.webp",
            url: "https://share.google/tXY59hX5FcVRGci2A",
            images: [
                "./assets/images/photos/sji.webp",
                "./assets/images/photos/jsr.webp",
                "./assets/images/photos/apps.webp"
            ]
        },
        {
            type: "project",
            title: "Real Product",
            description: "Metal fabrication and truck body work, built to last.",
            image: "./assets/images/photos/jsr.webp",
            url: "https://share.google/ipbDv87v8gRQrU5AV",
            images: [
                "./assets/images/photos/jsr.webp",
                "./assets/images/photos/sji.webp",
                "./assets/images/photos/games.webp"
            ]
        },
        {
            type: "project",
            title: "Applications",
            description: "Small, useful apps built with AI assistance.",
            image: "./assets/images/photos/apps.webp",
            url: "https://jaigansa.github.io/apps",
            images: [
                "./assets/images/photos/apps.webp",
                "./assets/images/photos/games.webp",
                "./assets/images/photos/jsr.webp"
            ]
        },
        {
            type: "project",
            title: "Games",
            description: "A few quick, playable games I built for fun.",
            image: "./assets/images/photos/games.webp",
            url: "https://jaigansa.github.io/games"
        },
        {
            type: "skills",
            title: "Expertise",
            tags: ["Inkscape", "FreeCAD", "Blender", "GIMP", "Krita", "Linux"]
        },
        {
            type: "qrcode",
            title: "Contact",
            description: "Scan this code to reach me.",
            url: "mailto:jaigansa+talk@gmail.com"
        },
        {
            type: "quote",
            title: "Thirukkural",
            text: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.",
            url: "https://en.wikipedia.org/wiki/Tirukkural"
        }
    ]
};
