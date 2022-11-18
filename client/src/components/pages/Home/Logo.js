import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';


export default function Logo () {

  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.02;
    meshRef.current.rotation.x += 0.02;
  });

  const logoTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1668106566/icons/Screen_Shot_2022-11-10_at_12.55.28_otnqpi.jpg');
  const metalTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1668795151/samples/planet_thumbnails/textures/metalblock_u0yooh');

  return (
    <mesh ref={meshRef} >
    <pointLight position={[5, 5, 5]} intensity={2} />
    <ambientLight />
    <boxGeometry args={ [1, 1, 1] } color={0xffffff} />
    <meshStandardMaterial normalMap={metalTexture} map={logoTexture}/>
    <OrbitControls enableZoom={true} enablePan={true}/>
    </mesh>
  );
}
