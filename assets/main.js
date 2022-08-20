const btnOpen = document.getElementById("btn-hamburger");
const btnClose = document.getElementById("btn-close");

const navbar = document.querySelector("nav");

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
