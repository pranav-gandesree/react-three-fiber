import { Canvas, useFrame } from '@react-three/fiber';
import React, {useRef, useState} from 'react'

const Sphere = ({position, color, size}) =>{
    const ref = useRef(); 
    const [isHovered, setIsHovered] = useState(false)
    const [isClicked, setIsClicked] = useState(false)
  
    useFrame((state, delta)=>{
      const speed = isHovered? 1: 0.2
      ref.current.rotation.y += delta * speed; 
      // ref.current.rotation.x += delta 
      // ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
    })

  return (
    <mesh position={position} 
    ref={ref} 
    onPointerEnter={(e)=> (e.stopPropagation(), setIsHovered(true))}
    onPointerLeave={()=> setIsHovered(false) }
    onClick={()=> setIsClicked(!isClicked)}
    scale={isClicked? 1.5: 1}
    >
      <sphereGeometry args={size} />
      <meshStandardMaterial color= {isHovered? "orange": "blue"} wireframe/>
  </mesh>
  )
}

const Torus = ({position, color, size}) =>{
    const ref = useRef();
  
    useFrame((state, delta)=>{
      ref.current.rotation.y += delta * 2.0; 
      ref.current.rotation.x += delta 
      ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
    })

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size}/>
      <meshStandardMaterial color= {color} wireframe/>
  </mesh>
  )
}
const TorusKnot = ({position, color, size}) =>{
    const ref = useRef();
  
    useFrame((state, delta)=>{
      ref.current.rotation.y += delta * 2.0; 
      ref.current.rotation.x += delta * 2.0; 
      ref.current.position.z = Math.sin(state.clock.elapsedTime)* 3 
    })
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={size}/>
      <meshStandardMaterial color= {color} wireframe/>
  </mesh>
  )
}

const SphereComponent = () => {
  return (  
    <Canvas>
    <directionalLight position={[0,0,2]} intensity={0.5}/>  
    <ambientLight intensity={0.1}/> 

      <Sphere position={[0,0,0]} size={[1, 30, 30]} color={"orange"} />
      {/* <Torus position={[2,0,0]} size={[0.8, 0.1, 30, 30]} color={"blue"}/> */}
      {/* <TorusKnot position={[-2,0,0]} size={[0.5, 0.1, 1000, 50]} color={"blue"}/> */}
    </Canvas>
  )
}

export default SphereComponent
