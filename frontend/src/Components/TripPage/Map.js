import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceMarker from './PlaceMarker';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';

const Map = ({ cityLat, cityLng, places }) => {
  if (!places || !cityLat) {
    return <></>;
  }

  const defaultProps = {
    center: {
      lat: !cityLat ? 0.0 : Number(cityLat),
      lng: !cityLng ? 0.0 : Number(cityLng),
    },
    zoom: 11,
  };

  const allPlaceMarkers = (placesArr) => {
    return placesArr.map((place) => {
      return (
        <PlaceTwoToneIcon
          key={place.id}
          lat={place.latitude}
          lng={place.longitude}
          fontSize={'large'}
          onClick={() => console.log('I clicked this icon')}
        />
      );
    });
  };

  if (!places || !cityLat) {
    return <></>;
  }

  return (
    <div style={{ height: '60vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {allPlaceMarkers(places)}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
