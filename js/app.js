const burger = document.querySelector(".navigation-toggle");
const navContainer2 = document.querySelector(".nav-container2");
const navContainer = document.querySelector(".nav-container");
const year = document.querySelector(".year");

window.addEventListener("load", function () {
  const loader = document.querySelector(".loader");
  loader.classList.add("loader-finish");
});

burger.addEventListener("click", function () {
  const navContainer2Height = navContainer2.getBoundingClientRect().height;
  const navContainerHeight = navContainer.getBoundingClientRect().height;
  if (navContainerHeight === 0) {
    navContainer.style.height = `${navContainer2Height}px`;
    burger.classList.add("line-animation");
  } else {
    navContainer.style.height = 0;
    burger.classList.remove("line-animation");
  }
});

let date = new Date();
let Year = date.getFullYear();
year.innerHTML = `${Year}`;
