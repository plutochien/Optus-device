import { render, screen } from '@testing-library/react';
import { shallow } from 'enzyme';
import App from './App';
import Device from './Device';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
describe('App', () => {
  let container;
  beforeEach(() => {
    container = shallow(<App />);
  });

  it('should render a <div />', () => {
    expect(container.find('div').length).toEqual(1);
    expect(container.find('div').hasClass('app-device')).toEqual(true);
  });

  it('should render a Device Component', () => {
    expect(container.containsMatchingElement(<Device />)).toEqual(true);
  });
});
