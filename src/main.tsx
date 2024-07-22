import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App/App";
import { MainLayout } from "./components/MainLayout";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import "./main.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <MainLayout>
        <Header />
        <App />
        <Footer />
      </MainLayout>
    </BrowserRouter>
  </React.StrictMode>
);
