import { Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/LoginPage.jsx';
import SettingsPage from './pages/SettingsPage.jsx';
import WelcomePage from './pages/WelcomePage.jsx';
import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';

import { loadSlim } from '@tsparticles/slim';
// import ParticlesBackground from './components/ParticlesBackground.jsx';

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
]);

export default function App() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: 0,
              },
              // opacity: 1,
            },
            // clear: true,
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 1.4,
                },
              },
            },
            particles: {
              color: {
                value: '#ffffff',
              },
              links: {
                // color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 1.5,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      )}
      {/* need to check <ParticlesBackground /> component later */}
      {/* <ParticlesBackground /> */}

      <RouterProvider router={router} />
    </>
  );
}
