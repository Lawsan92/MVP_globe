import React, { useRef, useState, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
import MercuryMap from './../../dist/assets/Mercury/8k_mercury.jpg';
const CustomPlanet = ({size, color, texture, rings, ringColor}) => {
  // <meshPhongMaterial  specularMap={specularMap} transparent opacity={0.7} color='#D4DBE6'/>

  const mesh = useRef();
  const[colorMap] = useLoader(TextureLoader, [texture]);

  if (rings !== '') {
    const mesh = useRef();
    const[colorMap] = useLoader(TextureLoader, [texture]);
    const ringMesh = useRef();
    useFrame((state, delta) => (ringMesh.current.rotation.x += 0.01)); // vertical
    // useFrame((state, delta) => (mesh.current.rotation.y += 0.01)); // horizontal
    const [ringMap] = useLoader(TextureLoader,[rings]);
    return(<>
     <mesh ref={ringMesh} position={[0, 0, 0]}>
    <ringBufferGeometry args={[5, 7, 32]} ref={mesh}/>
    <meshPhongMaterial
    color={ringColor}
    map={ringMap}
    opacity={1}
    depthWrite={true}
    transparent={true}
    side={THREE.DoubleSide}/>
  </mesh>
  <ambientLight intensity={1.4}/>
    <Stars
    radius={300}
    depth={60}
    count={20000}
    factor={7}
    fade={true}
    />
    <mesh ref={mesh}>
      <sphereBufferGeometry args={size} attach='geometry'></sphereBufferGeometry>
      <meshPhongMaterial/>
      <meshStandardMaterial map={colorMap} color={color}/>
      <OrbitControls
      enableZoom={true}
      enablePan={true}
      zoomSpeed={0.6}
      panSpeed={0.5}
      rotateSpeed={0.4}
      />
    </mesh>
    </>)
  }
  return (
  <>
    <ambientLight intensity={1.4}/>
    <Stars
    radius={300}
    depth={60}
    count={20000}
    factor={7}
    fade={true}
    />
    <mesh ref={mesh}>
      <sphereBufferGeometry args={size} attach='geometry'></sphereBufferGeometry>
      <meshPhongMaterial/>
      <meshStandardMaterial map={colorMap} color={color}/>
      <OrbitControls
      enableZoom={true}
      enablePan={true}
      zoomSpeed={0.6}
      panSpeed={0.5}
      rotateSpeed={0.4}
      />
    </mesh>
    </>
    );

}

export default CustomPlanet;