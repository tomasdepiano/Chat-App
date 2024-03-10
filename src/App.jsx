import { Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import SettingsButton from "./pages/Responsive/SettingsButton.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/settings",
    element: <SettingsPage />,
  },
  {
    path: "/welcome",
    element: <WelcomePage />,
  },
  {
    path: "/settings2",
    element: <SettingsButton />,
  },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function MakeASync() {
      const res = await axios.post("/api/checkUser");
      console.log(res);
      if (res.data.success) {
        console.log(res.data);
        dispatch({
          type: "USER_LOG_IN",
          payload: { username: res.data.username, email: res.data.email },
        });
      }

      console.log(res);
    }
    MakeASync();
  }, []);
  return (
    <>
      <ParticlesBackground />

      <RouterProvider router={router} />
    </>
  );
}
