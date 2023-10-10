import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
// Initialization for ES Users
import { Collapse, Dropdown, Ripple, Carousel, initTE } from "tw-elements";
initTE({ Collapse, Dropdown, Ripple, Carousel });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
