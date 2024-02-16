import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./app/theme/ThemeProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
