const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

reveals.forEach((el) => observer.observe(el));

const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const icon = toggle.querySelector("i");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

root.setAttribute("data-theme", initialTheme);
icon.className = initialTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";

toggle.addEventListener("click", () => {
  const nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  icon.className = nextTheme === "dark" ? "fa-solid fa-sun" : "fa-solid fa-moon";
});

document.getElementById("year").textContent = new Date().getFullYear();
