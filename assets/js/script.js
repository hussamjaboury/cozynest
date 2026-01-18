// add event on multiple elements
const addEventOnElem = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, (_) => {
      callback;
    });
  }
};

// element toggle function
function toggleElem(elem) {
  elem.classList.toggle("active");
}

// dropdown show/hide logic
const dropdownToggler = document.querySelector("[data-dropdown-toggler]");
const dropdown = document.querySelector("[data-dropdown]");

dropdownToggler.addEventListener("click", () => {
  toggleElem(dropdown);
});

// navbar show/hide logic
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbar = document.querySelector("[data-navbar");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector(".nav-close-btn");

addEventOnElem(navTogglers, "click", toggleNavbar);

function toggleNavbar() {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

// cart show/hide logic
const cartToggler = document.querySelector("[data-cart-toggler]");
const cart = document.querySelector("[data-cart-modal]");
cartToggler.addEventListener("click", () => {
  toggleElem(cart);
});

// header active when windows scrollY 50px
const $header = document.querySelector("[data-header]");
const activeHeader = function () {
  window.scrollY > 50
    ? $header.classList.add("active")
    : $header.classList.remove("active");
};

window.addEventListener("scroll", activeHeader);
