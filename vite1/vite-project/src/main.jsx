import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Usestate from "./Usestate.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Usestate />
  </StrictMode>
);
