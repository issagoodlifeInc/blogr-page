const btnOpen = document.getElementById("btn-hamburger");
const btnClose = document.getElementById("btn-close");

const navbar = document.querySelector("nav");

const mainLinks = document.querySelectorAll(".nav-link_main");
// eslint-disable-next-line no-unused-vars
const secondaryLinks = document.querySelectorAll(".nav-list--secondary");

btnOpen.addEventListener("click", () => {
  navbar.classList.toggle("open");
  btnClose.style.display = "block";
  btnOpen.style.display = "none";
});

btnClose.addEventListener("click", () => {
  navbar.classList.remove("open");
  btnOpen.style.display = "block";
  btnClose.style.display = "none";
});

mainLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.target.children[0].classList.toggle("point-up");

    if (e.target.children[0].classList.contains("point-up")) {
      e.target.nextElementSibling.style.display = "block";
    } else {
      e.target.nextElementSibling.style.display = "none";
    }
  });
});
