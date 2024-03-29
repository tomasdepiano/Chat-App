import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import React, { useEffect } from 'react';
import LoginPage from './pages/LoginPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import SettingsPageResponsive from './pages/Responsive/SettingsPageResponsive.jsx';
import { setUser } from './redux/actions/userActions.js';
const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage />,
  },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  {
    path: '/welcome',
    element: <WelcomePage />,
  },
  {
    path: '/settings2',
    element: <SettingsPageResponsive />,
  },
]);

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    async function checkUser() {
      const res = await axios.post('/api/checkUser');
      if (res.data.success) {
        dispatch(setUser(res.data));
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
