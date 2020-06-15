import React from 'react';

export const GoogleMap: React.FC = () => {
  return (
    <iframe
      width="100%"
      height="100%"
      style={{border: 0, minHeight: '50vh'}}
      src="https://www.google.com/maps/embed/v1/place?q=%E0%B8%A3%E0%B8%A7%E0%B8%A1%E0%B8%A3%E0%B8%B1%E0%B8%95%E0%B8%99%E0%B9%8C%20%E0%B8%81%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%81%20%E0%B8%AD%E0%B8%A5%E0%B8%B9%E0%B8%A1%E0%B8%B4%E0%B9%80%E0%B8%99%E0%B8%B5%E0%B8%A2%E0%B8%A1&key=AIzaSyAYab3OC3_JJKPLfPIucdbzsA2qKn5ZpOI"
    ></iframe>
  );
};
