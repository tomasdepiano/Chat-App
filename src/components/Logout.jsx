import React from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };
  return (
    <button
      className="hidden lg:inline-block lg:mr-10 lg:border-2 lg:border-red-400 lg:rounded-lg lg:p-2 lg:m-2 lg:bg-gray-100 lg:hover:bg-gray-400 lg:text-xl"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;
