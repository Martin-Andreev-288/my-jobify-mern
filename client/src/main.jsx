import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import axios from "axios";
// Info for axios. THIS CODE HERE WILL BE DELETED AFTER THIS SCREENSHOT
const resp = await axios.get("/api/v1/test");
console.log(resp);
// On the place of:
// fetch("/api/v1/test")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
