import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader, PointLight } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';
// Media/planet skins
import {
  EarthMap,
  EarthNormalMap,
  EarthSpecularMap,
  EarthCloudsMap,
  EarthNightMap,
  MercuryMap,
  NeptuneMap,
  UranusMap,
  MarsMap,
  JupiterMap,
  SaturnMap,
  VenusMap,
  Rings
} from './../../../dist/mediaExports.js';

const Sphere = ({ planetName }) => {

  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  const planetSize = {
    Earth: {args: [.5, 32, 32]},
    Mercury: {args: [.17, 32, 32]},
    Neptune: {args:[2, 32, 32]},
    Uranus: {args:[1.97, 32, 32]},
    Saturn: {args:[4.5, 32, 32]},
    Jupiter: {args:[5.5, 32, 32]},
    Mars: {args:[.22, 32, 32]},
    Venus: {args:[.45, 32, 32]},
  }

  // picks the planet's size
  const choosePlanetSize = () => {
    if (!planetName) {
      return planetSize.Earth.args;
    } else {
      return planetSize[planetName].args;
    }
  };

  // picks the planet's skin
  const planetMap = {
    Earth: EarthMap,
    Mercury: MercuryMap,
    Neptune: NeptuneMap,
    Uranus: UranusMap,
    Saturn: SaturnMap,
    Jupiter: JupiterMap,
    Mars: MarsMap,
    Venus: VenusMap
  }

  const choosePlanetMap = () => {
    if (!planetName) {
      let [colorMap] = useLoader(TextureLoader, [EarthMap]);
      return colorMap;
    } else {
      let [colorMap] = useLoader(TextureLoader, [planetMap[planetName]]);
      return colorMap;
    }
  }

  const[normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  const [ringMap] = useLoader(TextureLoader,['https://res.cloudinary.com/darp0mj9i/image/upload/v1661964645/samples/planet_thumbnails/textures/saturn_rings_cjduey.jpg']);

if (planetName !== 'Saturn') { // renders planets that don't have rings
  return (
  <>
  {/* <ambientLight intensity={1.4}/> */}
  <pointLight position={[10, 10, 10]} />
  <Stars
  radius={300}
  depth={60}
  count={20000}
  factor={7}
  fade={true}
  />
  <mesh ref={mesh}>
    <sphereBufferGeometry args={choosePlanetSize()} attach='geometry'></sphereBufferGeometry>
    <meshPhongMaterial  specularMap={specularMap}/>
    <meshStandardMaterial map={choosePlanetMap()} normalMap={normalMap}/>
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
} else { // renders planets with rings
 var xRot = 1.34;
 var yRot = 1;
 var zRot = 1;
  return (
    <>
    {/* <ambientLight intensity={1.4}/> */}
    <pointLight position={[10, 10, 10]} />
    <Stars
    radius={300}
    depth={60}
    count={20000}
    factor={7}
    fade={true}
    />

  <mesh
  ref={mesh}
  // position={[xPos, yPos, zPos]}
  // scale={[xScale, yScale, zScale]}
  rotation={[xRot * Math.PI, yRot * Math.PI, zRot * Math.PI]}
  >
    <ringBufferGeometry args={[5.5, 7.5, 32]}/>
    <meshPhongMaterial
    rotate={[50]}
    map={ringMap}
    opacity={1}
    depthWrite={true}
    transparent={true}
    side={THREE.DoubleSide}/>
  </mesh>
    <mesh ref={mesh}>
      <sphereBufferGeometry args={choosePlanetSize()} attach='geometry'></sphereBufferGeometry>
      <meshPhongMaterial  specularMap={specularMap}/>
      <meshStandardMaterial map={choosePlanetMap()} normalMap={normalMap}/>
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
}

export default Sphere;