import renderer from 'react-test-renderer';
import Globe from '../components/solarSystem/Globe.js';
import Footer from '../components/Footer.js';


it('renders <Footerr> correctly', () => {
  const tree = renderer
    .create(<Footer/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});


it('renders <Globe> correctly', () => {
  const tree = renderer
    .create(<Globe/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
