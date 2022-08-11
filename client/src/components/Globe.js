import React, { Suspense } from 'react';
import styled , { css }from 'styled-components';
import {Scene, PerspectiveCamera, WebGLRenderer, Mesh} from 'three';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere.js';
const Globe = ({planetName, getData}) => {
  return (
    <Canvas id='canvas'>
      <Suspense fallback={null}>
        <Sphere planetName={planetName}/>
      </Suspense>
    </Canvas>
  )
}

export default Globe;
