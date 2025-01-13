// import { Canvas, useFrame } from '@react-three/fiber';
// import React, {useRef, useState} from 'react'
// import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei"
// import { DirectionalLightHelper } from 'three';
// import {useControls} from "leva"

// const Sphere = ({position, color, size}) =>{
//     const ref = useRef(); 
//     const [isHovered, setIsHovered] = useState(false)
//     const [isClicked, setIsClicked] = useState(false)
  
//     useFrame((state, delta)=>{
//       const speed = isHovered? 1: 0.2
//       ref.current.rotation.y += delta * speed; 
//       // ref.current.rotation.x += delta 
//       // ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
//     })

//   return (
//     <mesh position={position} 
//     ref={ref} 
//     onPointerEnter={(e)=> (e.stopPropagation(), setIsHovered(true))}
//     onPointerLeave={()=> setIsHovered(false) }
//     onClick={()=> setIsClicked(!isClicked)}
//     scale={isClicked? 1.5: 1}
//     >
//       <sphereGeometry args={size} />
//       <meshStandardMaterial color= {isHovered? "orange": "blue"} wireframe/>
//   </mesh>
//   )
// }

// const Torus = ({position, color, size}) =>{
//     const ref = useRef();
  
//     useFrame((state, delta)=>{
//       ref.current.rotation.y += delta * 2.0; 
//       ref.current.rotation.x += delta 
//       ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
//     })

//   return (
//     <mesh position={position} ref={ref}>
//       <torusGeometry args={size}/>
//       <meshStandardMaterial color= {color} wireframe/>
      
//   </mesh>
//   )
// }
// const TorusKnot = ({position, color, size}) =>{
//     const ref = useRef();
  
//     // useFrame((state, delta)=>{
//     //   ref.current.rotation.y += delta * 2.0; 
//     //   ref.current.rotation.x += delta * 2.0; 
//     //   ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
//     // })

//   return (
//     <mesh position={position} ref={ref}>
//       <torusKnotGeometry args={size}/>
//       {/* <meshStandardMaterial color= {color} wireframe/> */}
//       <MeshWobbleMaterial factor={3} speed={2}/>
//   </mesh>
//   )
// }


// const Scene = ()=>{
//   const directionalLightRef = useRef()

//   const {lightColor, lightIntensity} = useControls({
//     lightColor: "white",

//   })

//   useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white")//it helps to know the direction of the light

//   return(
//     <>
//       <directionalLight position={[0,1,2]}
//        intensity={0.5} 
//       ref={directionalLightRef}
//       color={lightColor}
//       />  
//       <ambientLight intensity={0.1}/> 

//         {/* <Sphere position={[0,0,0]} size={[1, 30, 30]} color={"orange"} /> */}
//         {/* <Torus position={[2,0,0]} size={[0.8, 0.1, 30, 30]} color={"blue"}/> */}
//         <TorusKnot position={[-2,0,0]} size={[1, 0.1, 1000, 50]} color={"blue"}/>
//         <OrbitControls enableZoom={false} />
//     </>
//   )
// }
// const SphereComponent = () => {
//   return (  
//     <Canvas>
//         <Scene/>
//     </Canvas>
//   )
// }

// export default SphereComponent




























import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshWobbleMaterial, OrbitControls, useHelper } from "@react-three/drei";
import { DirectionalLightHelper } from 'three';
import { Leva, useControls } from "leva";

const Sphere = ({ position, color, size }) => {
  const ref = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))}
      onPointerLeave={() => setIsHovered(false)}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color={isHovered ? "orange" : color} wireframe />
    </mesh>
  );
};

const Torus = ({ position, color, size }) => {
  const ref = useRef();

  useFrame((state, delta) => {
    ref.current.rotation.y += delta * 2.0;
    ref.current.rotation.x += delta;
    ref.current.position.z = Math.sin(state.clock.elapsedTime) * 3;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const TorusKnot = ({ position, color, size }) => {
  const ref = useRef();

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size} />
      <MeshWobbleMaterial factor={3} speed={2} color={color} />
    </mesh>
  );
};

const Scene = () => {
  const directionalLightRef = useRef();
  const controls = useControls({
    lightColor: "white",
    lightIntensity: { value: 0.5, min: 0, max: 2, step: 0.1 },
    showShapes: { value: true }
  });

  useHelper(directionalLightRef, DirectionalLightHelper, 0.5, "white");

  return (
    <>
      <directionalLight
        position={[0, 1, 2]}
        intensity={controls.lightIntensity}
        ref={directionalLightRef}
        color= {controls.lightColor}
      />
      <ambientLight intensity={0.1} />

      {controls.showShapes && (
        <>
          {/* <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color="blue" /> */}
          {/* <Torus position={[2, 0, 0]} size={[0.8, 0.1, 30, 30]} color="blue" /> */}
          <TorusKnot position={[-2, 0, 0]} size={[1, 0.1, 1000, 50]} color="white" />
        </>
      )}
      <OrbitControls enableZoom={false} />
    </>
  );
};

const SphereComponent = () => {
  return (
    <>
      {/* <Leva oneLineLabels /> */}
      <div className="w-full h-screen">
        <Canvas>
          <Scene />
        </Canvas>
      </div>
    </>
  );
};

export default SphereComponent;