const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");

/*
  Replace this with your real Google Play Store URL later.
  Example:
  const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=com.example.merasunaar";
*/
const PLAY_STORE_URL = "#";

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.querySelectorAll(".download-link").forEach((link) => {
  link.setAttribute("href", PLAY_STORE_URL);

  if (PLAY_STORE_URL !== "#") {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  }
});
