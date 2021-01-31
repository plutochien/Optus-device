import { cleanup, render, waitFor, prettyDOM } from '@testing-library/react';
import { mount, shallow } from 'enzyme';
import DeviceItem from './DeviceItem';

jest.mock('axios');
// mock data
const mobileData = {
  name: 'Iphone-x',
  photo: 'https://picsum.photos/id/0/200',
  deviceType: 'PHONE',
  imei: '122334',
  is5gReady: true,
};

const tabletData = {
  name: 'Ipad',
  photo: 'https://picsum.photos/id/200/200',
  deviceType: 'TABLET',
  supportedGagdets: ['a', 'b', 'c'],
  gamingMode: true,
};

const modemData = {
  name: 'Modem',
  photo: 'https://picsum.photos/id/500/200',
  deviceType: 'MODEM',
  wifiSpeed: 'fast',
  maxClients: 5,
};

describe('DeviceItem', () => {
  afterEach(() => {
    cleanup();
  });
  it('should render a mobile related information if device is mobile', () => {
    const { getByText } = render(<DeviceItem device={mobileData} />);
    expect(getByText(/Iphone-x/i)).toBeInTheDocument();
    expect(getByText(/imei:122334/i)).toBeInTheDocument();
    expect(getByText(/is5gReady:true/i)).toBeInTheDocument();
  });

  it('should render a tablet related information if device is tablet', () => {
    const { getByText } = render(<DeviceItem device={tabletData} />);
    expect(getByText(/supportedGagdets/i)).toBeInTheDocument();
    expect(getByText(/gamingMode:true/i)).toBeInTheDocument();
  });

  it('should render a modem related information if device is modem', () => {
    const { getByText } = render(<DeviceItem device={modemData} />);
    expect(getByText(/maxClients:5/i)).toBeInTheDocument();
    expect(getByText(/wifiSpeed:fast/i)).toBeInTheDocument();
  });
});
