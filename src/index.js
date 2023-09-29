import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);