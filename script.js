const TABS = ["welcome", "engineering", "mobility", "sustainability", "activities", "career"];
const DEFAULT_SUB = { engineering: "overview", mobility: "pce", career: "project" };

const navLinks = document.querySelectorAll("nav a[data-tab]");
const tabs = document.querySelectorAll(".tab");

function show() {
  // hash format: #tab or #tab/sub
  const [rawTab, rawSub] = location.hash.replace("#", "").split("/");
  const tab = TABS.includes(rawTab) ? rawTab : "welcome";

  tabs.forEach(t => t.classList.toggle("active", t.id === tab));
  navLinks.forEach(a => a.classList.toggle("active", a.dataset.tab === tab));

  const section = document.getElementById(tab);
  const subs = section.querySelectorAll(".subtab");
  if (subs.length) {
    const names = [...subs].map(s => s.dataset.sub);
    const sub = names.includes(rawSub) ? rawSub : DEFAULT_SUB[tab];
    subs.forEach(s => s.classList.toggle("active", s.dataset.sub === sub));
    section.querySelectorAll(".subbtn").forEach(b =>
      b.classList.toggle("active", b.dataset.sub === sub)
    );
  }
  document.getElementById("nav").classList.remove("open");
  window.scrollTo({ top: 0 });
}

// Sub-tab buttons update the hash (so every sub-tab has its own shareable link)
document.querySelectorAll(".subbtn").forEach(btn =>
  btn.addEventListener("click", () => {
    const tab = btn.closest(".tab").id;
    location.hash = `${tab}/${btn.dataset.sub}`;
  })
);

window.addEventListener("hashchange", show);
show();

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const menuBtn = document.querySelector(".menu-toggle");
menuBtn.addEventListener("click", () => {
  const open = document.getElementById("nav").classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", open);
});

// Light / dark theme (remembered locally in the browser only)
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.setAttribute("data-theme", saved);
  else if (matchMedia("(prefers-color-scheme: dark)").matches) root.setAttribute("data-theme", "dark");
} catch (e) {}
document.getElementById("theme-toggle").addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  try { localStorage.setItem("theme", next); } catch (e) {}
});
