import React, { Suspense } from 'react';
import styled , { css }from 'styled-components';
import {Scene, PerspectiveCamera, WebGLRenderer, Mesh} from 'three';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere.js';
import CustomPlanet from  './CustomPlanet.js';
const CustomGlobe = ({name, size, color, texture}) => {
  return (
    <Canvas id='canvas'>
      <Suspense fallback={null}>
        <CustomPlanet name={name} size={size} color={color} texture={texture}/>
      </Suspense>
    </Canvas>
  )
}

export default CustomGlobe;
