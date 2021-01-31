import { cleanup, render, waitFor, prettyDOM } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import axios from 'axios';
import Device from './Device';
jest.mock('axios');
// mock data
const data = [
  {
    name: 'Iphone',
    photo: 'https://picsum.photos/id/0/200',
    deviceType: 'PHONE',
    imei: '122334',
    is5gReady: true,
  },
  {
    name: 'Nokia',
    photo: 'https://picsum.photos/id/10/200',
    deviceType: 'PHONE',
    imei: '122335',
    is5gReady: false,
  },
];

describe('Device', () => {
  let container;
  beforeEach(() => {
    cleanup();
    container = shallow(<Device />);
  });

  afterEach(() => {
    cleanup();
  });

  it('should render a device header', () => {
    expect(container.find('h1').length).toEqual(1);
    expect(container.find('h1').text()).toEqual('Device List');
  });

  it('should show a list of devices', async () => {
    axios.get.mockResolvedValueOnce({ data });
    const { getByTestId, getAllByRole, getByText } = render(<Device />);
    const deviceItems = await waitFor(() => getAllByRole('listitem'));
    expect(getByText(/Device List/i)).toBeInTheDocument();
    expect(deviceItems).toHaveLength(2);
    expect(axios.get).toHaveBeenCalledWith(
      "https://run.mocky.io/v3/15f306d0-2e7c-49a7-aa54-c7a5aa15f281"
    );
  });
});
