import { fetchData } from "./modules/api";
import { displayApiContent } from "./modules/display";
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

  try {
    // Just comment this to save our api calls :,)
    const response = await fetchData(country);
    slideOutHome();
    slideInMainContent();
    displayApiContent(response);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
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
