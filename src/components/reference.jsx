

const BounceBall = ()=>{
    const ballRef = useRef();
    let speed = 0.05;

    useFrame(()=>{
        if (ballRef.current) {
            ballRef.current.position.y += speed;
            if (ballRef.current.position.y > 2 || ballRef.current.position.y < -2) {
              speed = -speed;
            }
          }
    })
    return(
        <mesh ref={ballRef}>
        <sphereGeometry args={[0.5, 32, 32]}/>
        <meshStandardMaterial color="red"/>
    </mesh>
    )
}
