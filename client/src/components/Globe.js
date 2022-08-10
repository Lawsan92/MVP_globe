import React, { Suspense } from 'react';
import styled , { css }from 'styled-components';
import {Scene, PerspectiveCamera, WebGLRenderer, Mesh} from 'three';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere.js';
const Globe = () => {

  const Container = styled.div`
    width: 100%;
    height: 100%;
  `;
  return (
    <Container>
      <Canvas>
        <Suspense fallback={null}>
          <Sphere/>
        </Suspense>
      </Canvas>
    </Container>
  )
}

export default Globe;
