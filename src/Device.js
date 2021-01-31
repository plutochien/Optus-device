import React, { useEffect, useState } from 'react';
import DeviceItem from './DeviceItem';
import axios from 'axios';
//
function Device() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get('https://run.mocky.io/v3/15f306d0-2e7c-49a7-aa54-c7a5aa15f281')
      .then((response) => {
        setData(response.data);
      });
    return () => {};
  }, []);

  return (
    <>
      <h1>Device List</h1>
      <ul>
        {data.map((device, index) => (
          <DeviceItem key={index} device={device} />
        ))}
      </ul>
    </>
  );
}

export default Device;
