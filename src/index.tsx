import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { PrismicProvider } from "@prismicio/react";
import { client } from "./services/prismic";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PrismicProvider client={client}>
        <App />
      </PrismicProvider>
    </BrowserRouter>
  </React.StrictMode>
);
