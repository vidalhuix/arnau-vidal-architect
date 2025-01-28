import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
import { App } from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => i18n.changeLanguage("en"),
  },
  {
    path: "/sv",
    element: <App />,
    loader: () => i18n.changeLanguage("sv"),
  },
  {
    path: "/cat",
    element: <App />,
    loader: () => i18n.changeLanguage("cat"),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);
