// src/main.jsx (or index.js)
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Wrap the App component with BrowserRouter */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
);
