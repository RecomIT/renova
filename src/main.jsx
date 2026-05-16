import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RenovaLabsDashboard from "./RenovaLabsDashboard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RenovaLabsDashboard />
  </StrictMode>,
);
