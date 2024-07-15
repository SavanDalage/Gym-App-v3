const nav = document.getElementById("nav-bar");
// const fifth = document.getElementsByClassName("50");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  if (
    !nav.classList.contains("dont") &&
    window.scrollY > 200 &&
    window.scrollY < 1000 &&
    lastScrollY < window.scrollY
  ) {
    nav.classList.add("nav-50");
  } else if (window.scrollY > 999 && lastScrollY < window.scrollY) {
    nav.classList.remove("nav-50");
    nav.classList.add("nav-hidden");
  } else {
    nav.classList.remove("nav-hidden");
    nav.classList.remove("nav-50");
  }

  lastScrollY = window.scrollY;
});

function createObservers() {
  if (matchMedia("only screen and (max-width: 600px)").matches) {
    nav.classList.add("dont");
  } else {
    nav.classList.remove("dont");
  }
}

// Initial observer creation
createObservers();
// sprawdzanie zmiany wysokości strony
window.addEventListener("resize", createObservers);
