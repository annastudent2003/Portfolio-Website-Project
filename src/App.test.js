import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the main App component', () => {
  render(<App />);
  const bannerText = screen.getByText(/welcome to my portfolio/i);
  expect(bannerText).toBeInTheDocument();
});
