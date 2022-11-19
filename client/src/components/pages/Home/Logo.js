import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';

export default function Logo () {

  const meshRef = useRef();

  useFrame(() => {
    meshRef.current.rotation.y += 0.03;
  });

  const logoTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1668828424/icons/Screen_Shot_2022-11-18_at_21.26.52_llemgz.jpg');
  const metalTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1668795151/samples/planet_thumbnails/textures/metalblock_u0yooh');
  const rockTexture = new TextureLoader().load('https://res.cloudinary.com/darp0mj9i/image/upload/v1668797452/icons/textures/detailNormal_yybnnr.jpg');

  return (
    <mesh ref={meshRef} >
    <pointLight position={[5, 5, 5]} intensity={1} />
    <ambientLight />
    <sphereGeometry args={ [2, 32, 32] } color={0xffffff} />
    <meshStandardMaterial normalMap={rockTexture} map={logoTexture} />
    <OrbitControls enableZoom={true} enablePan={true}/>
    </mesh>
  );
}
