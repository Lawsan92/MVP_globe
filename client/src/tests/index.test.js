/**
 * @jest-environment jsdom
 */

import renderer from 'react-test-renderer';

import { App, Login, Footer, NavBar } from '../components/testExports.js';


test('use jsdom in this test file', () => {
  const element = document.createElement('div');
  expect(element).not.toBeNull();
});


it('renders <Footer> correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders <App> correctly', () => {
  const tree= renderer
    .create(<App/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
})

// it('renders <NavBar> correctly', () => {
//   const tree = renderer
//     .create(<NavBar/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });


// it('renders <Login> correctly', () => {
//   const tree = renderer
//     .create(<Login/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

