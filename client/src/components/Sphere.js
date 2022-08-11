import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls } from '@react-three/drei';
import EarthDayMap from './../../dist/assets/8k_earth_daymap.jpg';
import EarthNormalMap from './../../dist/assets/8k_earth_normal_map.jpg';
import EarthSpecularMap from './../../dist/assets/8k_earth_specular_map.jpg';
import EarthCloudsMap from './../../dist/assets/8k_earth_clouds.jpg';

const Sphere = () => {
  // overlays the 2D map over the 3D sphere
  const mesh = useRef();
  const[colorMap, normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));
  return (
  <>
  {/* ambientLight adds color to the rendered shapes */}
  <ambientLight intensity={1}/>
  <mesh ref={mesh}>
    <sphereBufferGeometry args={[1, 50, 50]} attach='geometry'></sphereBufferGeometry>
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