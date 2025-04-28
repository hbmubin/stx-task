import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import DragDrop from "./DragDrop";
import CanvasProvider from "./CanvasProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CanvasProvider>
      <DragDrop />
    </CanvasProvider>
  </StrictMode>
);
