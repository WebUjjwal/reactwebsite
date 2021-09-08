import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./About_index.css";
import './Given_index.css';
import './Contact_index.css';
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
  document.getElementById("root")
);
