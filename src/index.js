import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { StateContext } from "./context/StateContext";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StateContext>
  </React.StrictMode>
);
