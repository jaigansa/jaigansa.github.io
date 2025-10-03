  
  console.log("Mainjs Working");
  
  const themeToggle = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Load saved theme
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    if (html.classList.contains("dark")) {
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    }
  });

// Mobile menu
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-x-full");
  mobileMenu.classList.add("translate-x-0");
});

menuClose.addEventListener("click", () => {
  mobileMenu.classList.remove("translate-x-0");
  mobileMenu.classList.add("-translate-x-full");
});