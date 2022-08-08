import React from 'react';
import PlaceCard from './PlaceCard';
import Grid from '@mui/material/Grid';

const DraftList = ({ places, deletePlace, setOpenPopup }) => {
  const placeList = places.map((place) => {
    return (
      <Grid item xs={6}>
        <PlaceCard
          id={place.id}
          name={place.name}
          address={place.address}
          note={place.note}
          deletePlace={deletePlace}
          setOpenPopup={setOpenPopup}
          place={place}
        />
      </Grid>
    );
  });

  return (
    <Grid mt={2} spacing={2} container>
      {placeList}
    </Grid>
  );
};

export default DraftList;
