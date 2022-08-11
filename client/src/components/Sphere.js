import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import Earth1map from './../../dist/assets/globe1.jpg';
const Sphere = () => {
  // overlays the 2D map over the 3D sphere
  const mesh = useRef();
  const[normalMap] = useLoader(TextureLoader, [Earth1map]);
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
  <>
  {/* ambientLight adds color to the rendered shapes */}
  <ambientLight intensity={1}/>
  <mesh ref={mesh}>
    <sphereBufferGeometry args={[1, 50, 50]} attach='geometry'></sphereBufferGeometry>
    <meshPhongMaterial color='blue'/>
    <meshStandardMaterial map={normalMap}/>
  </mesh>
  </>
  );
}

export default Sphere;