"use strict";

const themeButton = document.querySelector("[data-theme-btn]");
const root = document.documentElement;
const yearElement = document.querySelector("[data-year]");

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const storedTheme = localStorage.getItem("theme");
const initialTheme = storedTheme || (prefersDark ? "dark" : "light");

const updateThemeButton = (theme) => {
  if (!themeButton) {
    return;
  }

  const label = themeButton.querySelector(".theme-label");
  themeButton.setAttribute("aria-pressed", theme === "dark");

  if (label) {
    label.textContent = theme === "dark" ? "Dark" : "Light";
  }
};

root.dataset.theme = initialTheme;
updateThemeButton(initialTheme);

if (themeButton) {
  themeButton.addEventListener("click", () => {
    const nextTheme = root.dataset.theme === "dark" ? "light" : "dark";
    root.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    updateThemeButton(nextTheme);
  });
}

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealTargets = document.querySelectorAll(
  ".work-card, .timeline-item, .skill-card, .cert-card, .skill-category, .about-panel, .contact-panel, .contact-form"
);

if (!prefersReducedMotion && "IntersectionObserver" in window) {
  revealTargets.forEach((el) => el.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealTargets.forEach((el) => observer.observe(el));
}
