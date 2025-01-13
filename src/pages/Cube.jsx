import React, { useRef } from 'react'
import { Canvas, useFrame } from "@react-three/fiber"


const Cube = ({position, color, size}) =>{
  const ref = useRef();

  useFrame((state, delta)=>{
    ref.current.rotation.y += delta;
    ref.current.rotation.x += delta * 2.0; // delta only increases the value
    ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 // see sin graph it fluctuates
  })

  return (
    <mesh position={position} ref={ref}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color= {color}/>
  </mesh>
  )
}
const CubePage = () => {
  return (
    <Canvas>
      <directionalLight position={[1,2,4]} intensity={0.8}/>
      {/* ambient light doesnt put shodows, it emits light equally to all scenes, it dont have direction */}
      <ambientLight intensity={0.1}/> 

    {/* <group position={[3,0,0]}>
     <Cube position={[1,0,0]} color={"blue"}/>
     <Cube position={[-1,0,0]} color={"violet"}/>
     <Cube position={[-1,2,0]} color={"red"}/>
     <Cube position={[1,2,0]} color={"orange"}/>
    </group> */}

      <Cube position={[0,0,0]} size={[1, 1, 1]} color={"orange"}/>

    </Canvas>
  )
}

export default CubePage
