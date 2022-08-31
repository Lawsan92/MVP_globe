import React, { useRef, useState, Suspense } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

const CustomPlanet = ({size, color}) => {
  // <meshPhongMaterial  specularMap={specularMap} transparent opacity={0.7} color='#D4DBE6'/>

  const mesh = useRef();
  // useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
    <Canvas>
      <Suspense fallback={null}>
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
      <meshPhongMaterial color={color}/>
      <OrbitControls
      enableZoom={true}
      enablePan={true}
      zoomSpeed={0.6}
      panSpeed={0.5}
      rotateSpeed={0.4}
      />
    </mesh>
    </>
    </Suspense>
    </Canvas>
    );
}

export default CustomPlanet;