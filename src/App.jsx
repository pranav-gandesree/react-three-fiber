import React from 'react'
import { Canvas } from "@react-three/fiber"
import './App.css'


const Cube = ({position, color, size}) =>{
  return (
    <mesh position={position}>
    <boxGeometry args={size}/>
    <meshStandardMaterial color= {color}/>
  </mesh>
  )
}
const App = () => {
  return (
    <Canvas>
      <directionalLight position={[1,2,4]}/>
      
     <Cube position={[1,0,0]} color={"greeb"}/>
      <mesh position={[-1,0,0]}>
        <boxGeometry/>
        <meshStandardMaterial color={"orange"}/>
      </mesh>
      <mesh position={[-1,2,0]}>
        <boxGeometry/>
        <meshStandardMaterial color={"orange"}/>
      </mesh>
      <mesh position={[1,2,0]}>
        <boxGeometry/>
        <meshStandardMaterial color={"orange"}/>
      </mesh>
    </Canvas>
  )
}

export default App
