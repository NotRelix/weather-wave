export function slideInHome() {
  const home = document.querySelector(".home");
  home.classList.remove("home-out");
}

export function slideOutHome() {
  const home = document.querySelector(".home");
  home.classList.add("home-out");
}

export function slideInMainContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.classList.remove("main-content-hidden");
}

export function slideOutMainContent() {
  const mainContent = document.querySelector(".main-content");
  mainContent.classList.add("main-content-hidden");
}
