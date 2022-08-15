import React from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceMarker from './PlaceMarker';

const getMax = (arr, property) => {
  // Get the max value for a specific property of objects in an array
  return Math.max(...arr.map((item) => Number(item[property])));
};

const getMin = (arr, property) => {
  // Get the max value for a specific property of objects in an array
  return Math.min(...arr.map((item) => Number(item[property])));
};

const getCenter = (placesArr) => {
  /*
  Finds midpoint of long and lat. 
  */
  const centerCoord = {};
  centerCoord.lat =
    (getMax(placesArr, 'latitude') + getMin(placesArr, 'latitude')) / 2;
  centerCoord.lng =
    (getMax(placesArr, 'longitude') + getMin(placesArr, 'longitude')) / 2;
  return centerCoord;
};

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

  const newCenter = places.length ? getCenter(places) : defaultProps.center;

  const allPlaceMarkers = (placesArr) => {
    return placesArr?.map((place) => {
      return (
        <PlaceMarker
          key={place.id}
          lat={place.latitude}
          lng={place.longitude}
          name={place.name}
          address={place.address}
        />
      );
    });
  };

  if (!places || !cityLat) {
    return <></>;
  }

  return (
    <div style={{ height: '45vh', width: '100%', marginTop: '24px' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_G_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        center={newCenter}
        margin={[50, 50, 50, 50]}
      >
        {allPlaceMarkers(places)}
      </GoogleMapReact>
    </div>
  );
};

export default Map;
