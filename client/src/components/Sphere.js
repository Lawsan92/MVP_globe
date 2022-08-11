import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import EarthDayMap from './../../dist/assets/8k_earth_daymap.jpg';
import EarthNormalMap from './../../dist/assets/8k_earth_normal_map.jpg';
import EarthSpecularMap from './../../dist/assets/8k_earth_specular_map.jpg';
import EarthCloudsMap from './../../dist/assets/8k_earth_clouds.jpg';
import EarthNightMap from './../../dist/assets/8k_earth_nightmap.jpg';
const Sphere = () => {
  // overlays the 2D map over the 3D sphere
  const mesh = useRef();
  const[colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  // useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
  <>
  <ambientLight intensity={1}/>
  <mesh>
    <sphereBufferGeometry args={[1.005, 32, 32]}/>
    <meshPhongMaterial
    map={cloudsMap}
    opacity={0.4}
    depthWrite={true}
    transparent={true}
    side={THREE.DoubleSide}/>

  </mesh>
  <mesh ref={mesh}>
    <sphereBufferGeometry args={[1, 32, 32]} attach='geometry'></sphereBufferGeometry>
    <meshPhongMaterial  specularMap={specularMap}/>
    <meshStandardMaterial map={colorMap} normalMap={normalMap}/>
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

export default Sphere;