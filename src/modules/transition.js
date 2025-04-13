export function slideInHome() {
  const home = document.querySelector(".home");
  home.classList.remove("home-out");
}

export function slideOutHome() {
  const home = document.querySelector(".home");
  const input = document.querySelector("#location");
  home.classList.add("home-out");
  setTimeout(() => {
    input.value = "";
  }, 500);
}

export function slideInMainContent() {
  const body = document.querySelector("body");
  const mainContent = document.querySelector(".main-content");
  mainContent.style.display = "flex";
  setTimeout(() => {
    mainContent.classList.remove("main-content-hidden");
  }, 10);
  setTimeout(() => {
    body.style.overflow = "visible";
  }, 500);
}

export function slideOutMainContent() {
  const body = document.querySelector("body");
  const mainContent = document.querySelector(".main-content");
  body.style.overflow = "hidden";
  mainContent.classList.add("main-content-hidden");
  setTimeout(() => {
    mainContent.style.display = "none";
  }, 500);
}
