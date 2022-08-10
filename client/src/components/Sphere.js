import React from 'react';
// import map from '/Users/lawrence/MVP/client/dist/assets/globe1.jpeg';
const Sphere = () => {
  return (
  <>
  {/* ambientLight adds color to the rendered shapes */}
  <ambientLight intensity={0.5}/>
  <mesh>
    <sphereBufferGeometry args={[1, 50, 50]} attach='geometry'></sphereBufferGeometry>
    <meshPhongMaterial color='blue'/>
  </mesh>
  </>
  );
}

export default Sphere;