import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./context/CreateContext.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>,
);
