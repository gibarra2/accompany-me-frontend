import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = () => {
  const defaultProps = {
    center: {
      lat: 35.676192,
      lng: 139.650311,
    },
    zoom: 11,
  };
  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;
