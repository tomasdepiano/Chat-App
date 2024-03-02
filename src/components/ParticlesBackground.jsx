// // import React from 'react';
// import particlesConfig from '../../config/particles.config';
// import { useCallback, useEffect, useState } from 'react';
// import Particles, { initParticlesEngine } from '@tsparticles/react';

// import { loadSlim } from '@tsparticles/slim';
// const ParticlesBackground = () => {
//   const [init, setInit] = useState(false);
//   useEffect(() => {
//     initParticlesEngine(async (engine) => {
//       await loadSlim(engine);
//     }).then(() => {
//       setInit(true);
//     });
//   }, []);
//   const particlesLoaded = (container) => {
//     console.log(container);
//   };

//   return (
//     <div>
//       <Particles
//         id="tsparticles"
//         particlesLoaded={particlesLoaded}
//         options={particlesConfig}
//       />
//     </div>
//   );
// };

// export default ParticlesBackground;
