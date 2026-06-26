import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
/* để bật hệ thống chuyển trang trong react */
import App from "./App.jsx";
import "./styles/global.css";

createRoot(document.getElementById("root")).render(
  /* 
  main.jsx lấy website React
gắn vào div id="root" trong index.html
rồi bật hệ thống chuyển trang cho web
  */
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);