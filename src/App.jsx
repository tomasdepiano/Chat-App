import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React, { useEffect } from "react";
import LoginPage from "./pages/LoginPage.jsx";
import SettingsPage from "./pages/SettingsPage.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import axios from "axios";
import { useDispatch } from "react-redux";
import SettingsPageResponsive from "./pages/Responsive/SettingsPageResponsive.jsx";
import ChatPageResponsive from "./pages/Responsive/ChatPageResponsive.jsx";
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
    element: <SettingsPageResponsive />,
  },
  {
    path: "/welcome2",
    element: <ChatPageResponsive />,
  },
]);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function checkUser() {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          const res = await axios.post("/api/checkUser", {
            headers: { authorization: token },
          });
          if (res.data.success) {
            dispatch({
              type: "USER_LOGIN",
              payload: {
                username: res.data.username,
                email: res.data.email,
                id: res.data.userId,
              },
            });
          }
        } catch (error) {
          console.error("Error checking user:", error);
        }
      }
    }
    checkUser();
  }, [dispatch]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
