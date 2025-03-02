import React from "react";
import ReactDOM from "react-dom/client";
import Routers from "./router";
import "./index.css";

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
  <React.StrictMode>
    <Routers/>
  </React.StrictMode>
);