import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TesApp } from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <TesApp />
  </StrictMode>
);
