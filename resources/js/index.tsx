// import "./App.css";
import "../css/style.scss";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./i18n";

const container = document.getElementById("app") as HTMLElement;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <React.Suspense fallback="">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
