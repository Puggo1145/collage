import React from "react";
import { createRoot } from "react-dom/client";
import MainWindow from "./pages/main/page";

import "@/main.css";

const container = document.body
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <MainWindow />
  </React.StrictMode>
);
