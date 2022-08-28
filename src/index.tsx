import "./styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./Routes";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
