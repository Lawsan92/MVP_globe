import React from 'react';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Earth1map from './../../dist/assets/globe1.jpg';
const Sphere = () => {
  const[normalMap] = useLoader(TextureLoader, [Earth1map]);
  return (
  <>
  {/* ambientLight adds color to the rendered shapes */}
  <ambientLight intensity={1}/>
  <mesh>
    <sphereBufferGeometry args={[1, 50, 50]} attach='geometry'></sphereBufferGeometry>
    <meshPhongMaterial color='blue'/>
    <meshStandardMaterial map={normalMap}/>
  </mesh>
  </>
  );
}

export default Sphere;