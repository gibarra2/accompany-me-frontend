import React from 'react';
import GoogleMapReact from 'google-map-react';

const Map = ({ lat, lng }) => {
  const defaultProps = {
    center: {
      lat: !lat ? 0.0 : Number(lat),
      lng: !lng ? 0.0 : Number(lng),
    },
    zoom: 11,
  };

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      {lat && (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_API_KEY }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        ></GoogleMapReact>
      )}
    </div>
  );
};

export default Map;
