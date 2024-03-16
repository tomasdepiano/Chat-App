import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {
  const navigate = useNavigate();
  const SettingsPage = () => {
    navigate("/Settings");
  };
  return (
    <button
      className="hidden lg:inline-block lg:border-2 lg:border-red-400 lg:rounded-lg lg:p-2  lg:bg-gray-100 lg:hover:bg-gray-400 lg:text-xl "
      onClick={SettingsPage}
    >
      Settings
    </button>
  );
};

export default Settings;
