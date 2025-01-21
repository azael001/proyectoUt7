import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


function XrAza() {

    const gltf = useLoader(GLTFLoader, '/model.gltf')
   

useFrame((state, delta) => {
    gltf.current.rotation.y += delta;
});
return (<>
    <OrbitControls />
    <ambientLight />
    <mesh ref={gltf} position={[0, 0, -5]}>
        <primitive object={gltf.scene} scale={[3,3,3]} />
    </mesh>
    </>

)
}

export default XrAza;
