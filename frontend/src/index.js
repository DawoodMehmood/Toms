import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <IconContext.Provider value={{ className: "small-size" }}>
        <App />
      </IconContext.Provider>
    </BrowserRouter>
  </React.StrictMode>
);
