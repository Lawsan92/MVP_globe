import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import Globe from './components/Globe.js';

test('should load and display 3D globe', async () => {
  render(<Globe/>)
  await userEvent.click(screen.getByText('Load Globe'));
});