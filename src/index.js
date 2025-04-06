import { fetchData } from "./modules/api";
import {
  slideInHome,
  slideInMainContent,
  slideOutHome,
  slideOutMainContent,
} from "./modules/transition";
import "./style.css";

async function handleFormSubmit(e) {
  e.preventDefault();
  const country = e.target.querySelector("input").value;

  // Just comment this to save our api calls :,)
  const response = await fetchData(country);
  slideOutHome();
  slideInMainContent();
  console.log(response);
}

function handleLogoClick() {
  slideInHome();
  slideOutMainContent();
}

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);

const logo = document.querySelector(".logo");
logo.addEventListener("click", handleLogoClick);

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
