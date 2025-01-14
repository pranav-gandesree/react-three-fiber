import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const Sun = () => {
  return (
    <mesh>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="red" />
    </mesh>
  );
};

const Earth = () => {
  const earthRef = useRef();
  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.01;
      earthRef.current.position.x = Math.cos(Date.now() * 0.001) * 3;
      earthRef.current.position.z = Math.sin(Date.now() * 0.001) * 3;
    }
  });
  return (
    <mesh ref={earthRef}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
};

const BouncingBall = () => {
  return (
    <Canvas>
      <ambientLight />
      {/* <BounceBall/> */}
      <Sun />
      <Earth />
      <OrbitControls />
    </Canvas>
  );
};

export default BouncingBall;





// import React, { useRef } from 'react';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';

// const SolarSystem = () => {
//   return (
//     <Canvas shadows>
//       {/* Add Lighting */}
//       <ambientLight intensity={0.3} />
//       <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

//       {/* Sun and Earth */}
//       <Sun />
//       <Earth />

//       {/* Orbit Controls */}
//       <OrbitControls />
//     </Canvas>
//   );
// };

// const Sun = () => {
//   return (
//     <mesh castShadow>
//       <sphereGeometry args={[0.5, 32, 32]} />
//       <meshStandardMaterial color="yellow" emissive="yellow" emissiveIntensity={1} />
//     </mesh>
//   );
// };

// const Earth = () => {
//   const earthRef = useRef();
//   const timeRef = useRef(0);

//   useFrame(({ clock }) => {
//     timeRef.current += clock.getDelta(); // Smooth animation using frame deltas
//     if (earthRef.current) {
//       earthRef.current.position.x = Math.cos(timeRef.current) * 3;
//       earthRef.current.position.z = Math.sin(timeRef.current) * 3;
//       earthRef.current.rotation.y += 0.02; // Rotate Earth on its axis
//     }
//   });

//   return (
//     <mesh ref={earthRef} castShadow receiveShadow>
//       <sphereGeometry args={[0.2, 32, 32]} />
//       <meshStandardMaterial color="blue" />
//     </mesh>
//   );
// };

// const BouncingBall = () => {
//   return (
//     <div style={{ height: '100vh', width: '100vw' }}>
//       <SolarSystem />
//     </div>
//   );
// };

// export default BouncingBall;
