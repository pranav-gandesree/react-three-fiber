import React, {useRef, useState} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { RenderTexture, OrbitControls, PerspectiveCamera, Text, ContactShadows } from '@react-three/drei'
import { suspend } from 'suspend-react'

function Cube(){
    const textRef = useRef();
    useFrame((state) => (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2))

    return(
        <mesh>
            <boxGeometry args={[2,2,2]}/>
            <meshStandardMaterial>
                    <RenderTexture attach="map" anisotropy={16}>
                <PerspectiveCamera makeDefault manual aspect={1 / 1} position={[0, 0, 5]} />
                <color attach="background" args={['orange']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} />
                <Text ref={textRef} fontSize={4} color="#555">
                    pranav
                </Text>
                {/* <Dodecahedron /> */}
                </RenderTexture>
            </meshStandardMaterial>
        </mesh>
    )
}  

const RenderCube = () => {
  return (
    <Canvas>
    <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} />
      <Cube />
      <OrbitControls minPolarAngle={0} maxPolarAngle={Math.PI / 2.1} />
    </Canvas>
  )
}

export default RenderCube
