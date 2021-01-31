import React from 'react';

const renderDeviceMobile = ({ name, photo, imei, is5gReady }) => {
  return (
    <li>
      <div>name:{name}</div>
      <img src={photo} />
      <div>imei:{imei}</div>
      <div>is5gReady:{`${is5gReady}`}</div>
    </li>
  );
};

const renderDeviceTablet = ({ name, photo, supportedGagdets, gamingMode }) => {
  return (
    <li>
      <div>name:{name}</div>
      <img src={photo} />
      <div>supportedGagdets:{supportedGagdets.join(' ')}</div>
      <div>gamingMode:{`${gamingMode}`}</div>
    </li>
  );
};

const renderDeviceModem = ({ name, photo, wifiSpeed, maxClients }) => {
  return (
    <li>
      <div>name:{name}</div>
      <img src={photo} />
      <div>wifiSpeed:{wifiSpeed}</div>
      <div>maxClients:{`${maxClients}`}</div>
    </li>
  );
};

function DeviceItem({ device }) {
  return (
    <>
      {device.deviceType === 'PHONE' && renderDeviceMobile(device)}
      {device.deviceType === 'TABLET' && renderDeviceTablet(device)}
      {device.deviceType === 'MODEM' && renderDeviceModem(device)}
    </>
  );
}

export default DeviceItem;
