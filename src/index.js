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
    const response = await fetchData(country);
    slideOutHome();
    slideInMainContent();
    displayApiContent(response);
  } catch (error) {
    console.log(error);
  }
}

function handleLogoClick() {
  slideInHome();
  slideOutMainContent();
}

async function handleFormSubmitMain(e) {
  e.preventDefault();
  const country = e.target.querySelector("input").value;
  const input = document.querySelector("#location-main");
  try {
    const response = await fetchData(country);
    displayApiContent(response);
    input.value = "";
  } catch (error) {
    console.log(error);
  }
}

const form = document.querySelector(".form-home");
form.addEventListener("submit", handleFormSubmit);

const logo = document.querySelector(".logo");
logo.addEventListener("click", handleLogoClick);

const formMain = document.querySelector(".form-main");
formMain.addEventListener("submit", handleFormSubmitMain);

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});
