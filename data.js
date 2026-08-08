/**
 * PORTFOLIO CONFIGURATION
 *
 * Update this file to customize your profile details, links, skills, and widgets.
 */

const portfolioConfig = {

    // Contact form delivery: paste your Formspree form ID here (e.g. "abcdwxyz")
    // to send messages to your inbox. Leave empty to fall back to a mailto: link.
    contact: {
        formspreeId: ""
    },

    // Top Profile Header configuration
    profile: {
        name: "Jai Ganesh",
        role: "Designer & Fabricator",
        bio: "I turn ideas into 3D models, real fabricated products, and AI-assisted apps.",
        image: "./assets/images/profile.jpg",
        resume: { label: "Download CV", url: "./assets/resume/resume.pdf" },
        email: "mailto:jaigansa+talk@gmail.com",
        socials: [
            { icon: "git-compare", label: "GitHub", url: "https://github.com/jaigansa" },
            { icon: "x", label: "X (Twitter)", url: "https://x.com/jaigansa" },
            { icon: "message-circle", label: "Signal", url: "https://signal.me/#u/jaiganesh.94" }
        ]
    },

    // Vertical Stack components & links
    links: [
        {
            type: "project",
            title: "Design",
            description: "Mechanical design with FreeCAD — from concept to detailed 3D models.",
            image: "./assets/images/projects/design.webp",
            url: "https://share.google/tXY59hX5FcVRGci2A",
            images: [
                "./assets/images/projects/design.webp",
                "./assets/images/projects/fabrication.webp",
                "./assets/images/projects/apps.webp"
            ]
        },
        {
            type: "project",
            title: "Real Product",
            description: "Metal fabrication and truck body work, built to last.",
            image: "./assets/images/projects/fabrication.webp",
            url: "https://share.google/ipbDv87v8gRQrU5AV",
            images: [
                "./assets/images/projects/fabrication.webp",
                "./assets/images/projects/design.webp",
                "./assets/images/projects/games.webp"
            ]
        },
        {
            type: "project",
            title: "Applications",
            description: "Small, useful apps built with AI assistance.",
            image: "./assets/images/projects/apps.webp",
            url: "https://jaigansa.github.io/apps",
            images: [
                "./assets/images/projects/apps.webp",
                "./assets/images/projects/games.webp",
                "./assets/images/projects/fabrication.webp"
            ]
        },
        {
            type: "project",
            title: "Games",
            description: "A few quick, playable games I built for fun.",
            image: "./assets/images/projects/games.webp",
            url: "https://jaigansa.github.io/games"
        },
        {
            type: "skills",
            title: "Expertise",
            skills: [
                { name: "FreeCAD", level: 90 },
                { name: "Inkscape", level: 85 },
                { name: "Blender", level: 80 },
                { name: "GIMP", level: 85 },
                { name: "Krita", level: 80 },
                { name: "Linux", level: 90 }
            ]
        },
        {
            type: "email",
            title: "Contact",
            description: "Reach me via email.",
            url: "mailto:jaigansa+talk@gmail.com"
        },
        {
            type: "quote",
            title: "Thirukkural",
            text: "அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.",
            explanation: "எழுத்துக்கள் அனைத்தும் 'அ' என்ற எழுத்தை அடிப்படையாகக் கொண்டு தொடங்குகின்றன. அதுபோல இந்த உலகம் கடவுளை அடிப்படையாகக் கொண்டு இயங்குகின்றது.",
            url: "https://en.wikipedia.org/wiki/Tirukkural"
        }
    ]
};
