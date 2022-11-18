import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, PerspectiveCamera } from '@react-three/drei';
import { TextureLoader } from 'three';
import Logo from './Logo.js'

export default function Landing () {
  return (
    <div id='canvas-container'>
      <Canvas>
        <PerspectiveCamera makedefault={true} fov={75} position={ [0, 0, 5] }/>
        <Stars radius={300} depth={60} count={2000} factor={7} fade={true}/>
        <Logo/>
      </Canvas>
    </div>
  )
}