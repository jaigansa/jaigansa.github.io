/**
 * PORTFOLIO CONFIGURATION
 * 
 * Update this file to customize your profile details, links, skills, and widgets.
 */

const portfolioConfig = {
    // Top Profile Header configuration
    profile: {
        name: "J A I G A N E S H",
        bio: "WELCOME TO THE MY WORLD",
        image: "./assets/images/profile.jpg",
        email: "mailto:jaigansa+talk@gmail.com",
        socials: [
            { icon: "git-compare", url: "https://github.com/jaigansa" },
            { icon: "x", url: "https://x.com/jaigansa" },
            { icon: "message-circle", url: "https://signal.me/#u/jaiganesh.94" }
        ],
        footerText: "Thank you for visiting my portfolio."
    },

    // Custom configuration parameters
    settings: {
        showScanlines: true,
        vibrantMode: true
    },

    // Vertical Stack components & links
    links: [
        {
            type: "project",
            title: "DESIGN",
            description: "Design using FreeCAD.",
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
            title: "REAL PRODUCT",
            description: "Metal Fabrication & Truck body works.",
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
            title: "APPLICATIONS",
            description: "Using AI.",
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
            title: "GAMES",
            description: "Try it.",
            image: "./assets/images/photos/games.webp",
            url: "https://jaigansa.github.io/games"
        },
        {
            type: "skills",
            title: "Expertise",
            tags: ["INKSCAPE", "FREECAD", "BELNDER", "GIMP", "KRITA", "LINUX"]
        },
        {
            type: "qrcode",
            title: "Contact",
            description: "Scan this code.",
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
