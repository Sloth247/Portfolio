const mobileMenuBtn = document.querySelector(".hamburger-mobile-icon");
const mobileMenuModal = document.querySelector(".header__nav--menus");
const overlay = document.querySelector(".nav-overlay");

mobileMenuBtn.addEventListener("click", () => {
  const mobileMenuExpanded =
    mobileMenuBtn.getAttribute("aria-expanded") == "true";
  mobileMenuModal.classList.toggle("nav-show");
  mobileMenuBtn.classList.toggle("menu-close");
  mobileMenuBtn.setAttribute("aria-expanded", "true");
  overlay.classList.toggle("overlay-open");

  if (mobileMenuExpanded) {
    mobileMenuBtn.setAttribute("aria-expanded", "false");
  }
});

const languageMenuBtn = document.querySelector(".header__nav--language-icon");
const languageMenuModal = document.querySelector(
  ".header__nav--language-modal"
);

languageMenuBtn.addEventListener("click", () => {
  const languageMenuExpanded =
    languageMenuBtn.getAttribute("aria-expanded") == "true";
  languageMenuModal.classList.toggle("language-show");
  languageMenuBtn.setAttribute("aria-expanded", "true");

  if (languageMenuExpanded) {
    languageMenuBtn.setAttribute("aria-expanded", "false");
  }
});
