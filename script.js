const tabButtons = document.querySelectorAll(".tab-btn");
const panels = document.querySelectorAll(".tab-panel");
const menuToggle = document.querySelector(".menu-toggle");
const tabs = document.querySelector(".tabs");

function activateTab(name) {
  tabButtons.forEach(btn => btn.classList.toggle("active", btn.dataset.tab === name));
  panels.forEach(panel => panel.classList.toggle("active", panel.id === name));
  tabs.classList.remove("open");
}

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => activateTab(btn.dataset.tab));
});

menuToggle.addEventListener("click", () => {
  tabs.classList.toggle("open");
});

const initialTab = window.location.hash.replace("#", "");
if (["bio", "projects", "bundles", "contact"].includes(initialTab)) {
  activateTab(initialTab);
}
