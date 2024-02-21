import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Settings",
    element: <SettingsPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
