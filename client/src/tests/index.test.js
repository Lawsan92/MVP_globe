import renderer from 'react-test-renderer';
import Login from '../components/pages/Login.js';
import Footer from '../components/Footer.js';
import NavBar from '../components/NavBar.js';

it('renders <Footer> correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders <NavBar> correctly', () => {
  const tree = renderer
    .create(<NavBar/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


// it('renders <Login> correctly', () => {
//   const tree = renderer
//     .create(<Login/>)
//     .toJSON();
//   expect(tree).toMatchSnapshot();
// });

