import React, { Suspense } from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")).render(
  <ParallaxProvider>
    <BrowserRouter>
      <React.StrictMode>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </React.StrictMode>
    </BrowserRouter>
  </ParallaxProvider>
);
