///////////////////////////////////////////////////////////
// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const navLinkEls = document.querySelectorAll(".nav-item");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

navLinkEls.forEach(function (elem) {
    elem.addEventListener("click", function () {
        headerEl.classList.toggle("nav-open");
    });
});
