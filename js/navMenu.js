// Animação de Fade-in da navbar
const home = document.querySelector(".site-nav li:nth-child(1)");
const about = document.querySelector(".site-nav li:nth-child(2)");
const brands = document.querySelector(".site-nav li:nth-child(3)");
const influences = document.querySelector(".site-nav li:nth-child(4)");

setTimeout(() => {
  home.classList.add = "visible";
}, 1000);

setTimeout(() => {
  about.classList.add = "visible";
}, 1200);

setTimeout(() => {
  brands.classList.add = "visible";
}, 1400);

setTimeout(() => {
  influences.classList.add = "visible";
}, 1600);

// Navbar Responsiva
const menuButton = document.querySelector(".mobile-menu");
const navList = document.querySelector(".site-nav");
const mainTag = document.querySelector("main");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("active");
  document.body.classList.toggle("hidden");
  mainTag.classList.toggle("blurred");
});
