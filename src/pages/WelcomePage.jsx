import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function WelcomePage() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <div>Hello World</div>
      <button onClick={handleLogout}>Logout</button>
    </>
  );
}
