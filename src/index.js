import { fetchData } from "./modules/api";
import "./style.css";

const country = "sydney";
fetchData(country).then((response) => {
  console.log(response);
});
