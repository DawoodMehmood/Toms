import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { IconContext } from "react-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <IconContext.Provider value={{ className: "small-size" }}>
      <App />
    </IconContext.Provider>
    ;
  </React.StrictMode>
);
