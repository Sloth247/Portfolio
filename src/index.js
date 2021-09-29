import Splide from "@splidejs/splide";

new Splide(".splide", {
  type: "loop",
  perPage: 2,
  pagination: false,
  gap: "1rem",
  height: "25rem",

  breakpoints: {
    640: {
      perPage: 1,
      height: "15rem",
      padding: {
        right: "3rem",
        left: "3rem",
      },
    },

    1000: {
      perPage: 1,
      height: "20rem",
      padding: {
        right: "8rem",
        left: "8rem",
      },
    },
  },
}).mount();

// Mobile Menu

const mobileMenuBtn = document.querySelector(".hamburger-mobile-icon");
const mobileMenuModal = document.querySelector(".header__nav--menus");
const overlay = document.querySelector(".nav-overlay");
const nav = document.querySelector(".header__nav");
const menuLinks = document.querySelectorAll(".header__nav--link");

// toggle modal and the button with A11y

mobileMenuBtn.addEventListener("click", () => {
  const mobileMenuExpanded =
    mobileMenuBtn.getAttribute("aria-expanded") == "true";
  openModal();

  if (mobileMenuExpanded) {
    closeModal();
  }
});

function openModal() {
  mobileMenuModal.classList.add("nav-show");
  mobileMenuBtn.setAttribute("aria-expanded", "true");
  overlay.classList.add("overlay-open");
  mobileMenuBtn.classList.add("menu-close");
}

function closeModal() {
  mobileMenuModal.classList.remove("nav-show");
  mobileMenuBtn.setAttribute("aria-expanded", "false");
  overlay.classList.remove("overlay-open");
  mobileMenuBtn.classList.remove("menu-close");
}

// close modal when clicking menulinks

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeModal();
  });
});

// Trap tab inside nav when open
nav.addEventListener("keydown", (e) => {
  const mobileMenuExpanded =
    mobileMenuBtn.getAttribute("aria-expanded") == "true";
  if (!mobileMenuExpanded || e.ctrlKey || e.metaKey || e.altKey) {
    return;
  }
  // listen for tab press and move focus
  // if we're on either end of the navigation

  if (e.keyCode == 9) {
    if (e.keyCode == 16) {
      if (document.activeElement === menuLinks[0]) {
        mobileMenuBtn.focus();
        e.preventDefault();
      }
    } else if (document.activeElement == mobileMenuBtn) {
      menuLinks[0].focus();
      e.preventDefault();
    }
  }
});

// Language Menu
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
