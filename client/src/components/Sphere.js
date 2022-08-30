import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import * as THREE from 'three';

import EarthMap from './../../dist/assets/8k_earth_daymap.jpg';
import EarthNormalMap from './../../dist/assets/8k_earth_normal_map.jpg';
import EarthSpecularMap from './../../dist/assets/8k_earth_specular_map.jpg';
import EarthCloudsMap from './../../dist/assets/8k_earth_clouds.jpg';
import EarthNightMap from './../../dist/assets/8k_earth_nightmap.jpg';

import MercuryMap from './../../dist/assets/Mercury/8k_mercury.jpg';
import NeptuneMap from './../../dist/assets/Neptune/2k_neptune.jpg';
import UranusMap from './../../dist/assets/Uranus/2k_uranus.jpg';
import MarsMap from './../../dist/assets/Mars/8k_mars.jpg';
import JupiterMap from './../../dist/assets/Jupiter/8k_jupiter.jpg';
import SaturnMap from './../../dist/assets/Saturn/8k_saturn.jpg';
import VenusMap from './../../dist/assets/Venus/8k_venus_surface.jpg';
import Rings from './../../dist/assets/Saturn/8k_saturn_ring_alpha.jpg';

const Sphere = ({planetName}) => {

  const mesh = useRef();
  useFrame((state, delta) => (mesh.current.rotation.y += 0.01));

  const planetSize = {
    earth: {args: [.5, 32, 32]},
    mercury: {args: [.17, 32, 32]},
    neptune: {args:[2, 32, 32]},
    uranus: {args:[1.97, 32, 32]},
    saturn: {args:[4.5, 32, 32]},
    jupiter: {args:[5.5, 32, 32]},
    mars: {args:[.22, 32, 32]},
    venus: {args:[.45, 32, 32]},
  }


var planetMesh;
  const choosePlanetSize = () => {
    if (planetName === 'Mercury') {
      return planetSize.mercury.args;
    } else if (planetName === 'Neptune') {
      return planetSize.neptune.args;
    } else if (planetName === 'Uranus') {
      return planetSize.uranus.args;
    } else if (planetName === 'Saturn') {
      return planetSize.saturn.args;
    } else if (planetName === 'Jupiter') {
      return planetSize.jupiter.args;
    } else if (planetName === 'Venus') {
      return planetSize.venus.args;
    } else if (planetName === 'Mars') {
      return planetSize.mars.args;
    } else {
      return planetSize.earth.args;
    }
  };


  if (planetName === 'Mercury') {
    var [colorMap] = useLoader(TextureLoader, [MercuryMap]);
  } else if (planetName === 'Neptune') {
    var [colorMap] = useLoader(TextureLoader, [NeptuneMap]);
  } else if (planetName === 'Uranus') {
    var [colorMap] = useLoader(TextureLoader, [UranusMap]);
  } else if (planetName === 'Saturn') {
    var [colorMap] = useLoader(TextureLoader, [SaturnMap]);
  } else if (planetName === 'Jupiter') {
    var [colorMap] = useLoader(TextureLoader, [JupiterMap]);
  } else if (planetName === 'Venus') {
    var [colorMap] = useLoader(TextureLoader, [VenusMap]);
  } else if (planetName === 'Mars') {
    var [colorMap] = useLoader(TextureLoader, [MarsMap]);
  } else {
    var [colorMap] = useLoader(TextureLoader, [EarthMap]);
  }

  const[normalMap, specularMap, cloudsMap] = useLoader(TextureLoader, [EarthNormalMap, EarthSpecularMap, EarthCloudsMap]);

  const [ringMap] = useLoader(TextureLoader,[Rings]);

if (planetName !== 'Saturn') {
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
    <sphereBufferGeometry args={choosePlanetSize()} attach='geometry'></sphereBufferGeometry>
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
} else {
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
    <ringBufferGeometry args={[5, 7, 32]}/>
    <meshPhongMaterial
    map={ringMap}
    opacity={0.8}
    depthWrite={true}
    transparent={true}
    side={THREE.DoubleSide}/>
  </mesh>
    <mesh ref={mesh}>
      <sphereBufferGeometry args={choosePlanetSize()} attach='geometry'></sphereBufferGeometry>
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
}

export default Sphere;