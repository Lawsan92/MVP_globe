/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';
import { Suspense } from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import {
  App,
  Login,
  Footer,
  NavBar,
  Home,
  Globe,
  Sphere,
} from '../components/testExports.js';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});

// it('renders <App> correctly', () => {
//   const tree = renderer
//     .create(
//     <MemoryRouter>
//       <App/>
//     </MemoryRouter>
//     )
//     .toJSON();
//     expect(tree).toMatchSnapshot();
// })

it('renders <NavBar> correctly', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
      <NavBar/>
    </MemoryRouter>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <Globe> correctly', () => {
  const tree = renderer
  .create(
    <Canvas>
      <Globe/>
    </Canvas>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
})


it('renders <Login> correctly', () => {
  const tree = renderer
    .create(
    <MemoryRouter>
      <Login/>
    </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders <Footer> correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});



