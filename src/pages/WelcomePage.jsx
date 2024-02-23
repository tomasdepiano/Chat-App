import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const SettingsPage = () => {
    navigate("/Settings");
  };

  return (
    <>
      <div>Hello World</div>
      <button
        className="mr-10 border-2 border-red-400 rounded-lg p-2 m-2 bg-gray-100 hover:bg-gray-400 text-xl"
        onClick={handleLogout}
      >
        Logout
      </button>
      <button
        className="mr-10 border-2 border-red-400 rounded-lg p-2 m-2 bg-gray-100 hover:bg-gray-400 text-xl"
        onClick={SettingsPage}
      >
        Go To Settings Page
      </button>
    </>
  );
}
