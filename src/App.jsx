import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage.jsx";

const router = createBrowserRouter([{ path: "/", element: <LoginPage /> }]);

export default function App() {
  return <RouterProvider router={router} />;
}
