// Année dans le pied de page
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});
nav.querySelectorAll("a").forEach(a =>
  a.addEventListener("click", () => nav.classList.remove("open"))
);

// Thème clair / sombre (mémorisé dans le navigateur)
const root = document.documentElement;
const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  root.setAttribute("data-theme", "dark");
}
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
});

// Filtres de projets
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");
filters.forEach(btn => {
  btn.addEventListener("click", () => {
    filters.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.dataset.filter;
    projects.forEach(p =>
      p.classList.toggle("hidden", cat !== "all" && p.dataset.cat !== cat)
    );
  });
});
