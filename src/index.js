import { fetchData } from "./modules/api";
import "./style.css";

function handleFormSubmit(e) {
  e.preventDefault();
  const country = e.target.querySelector("input").value;
  fetchData(country).then((response) => {
    console.log(response);
  });
}

const form = document.querySelector("form");
form.addEventListener("submit", handleFormSubmit);
