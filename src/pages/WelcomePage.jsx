import React from "react";
import { useNavigate } from "react-router-dom";

export default function WelcomePage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <>
      <div>Hello World</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
