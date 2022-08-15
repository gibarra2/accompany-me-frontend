import React from 'react';
import DayTimeline from './DayTimeline';
import Typography from '@mui/material/Typography';

const Itinerary = ({ places, deletePlace, setOpenPopup }) => {
  if ((places === undefined) | (places === [])) {
    return <></>;
  }

  // Make an array of unique dates from the places array
  const uniqueDates = [...new Set(places.map((place) => place.date))];

  const timelines = [];

  // Go through each date in array, create subarrays of places for that date, which gets passed to DayTimeline
  for (let date of uniqueDates) {
    let placesForDate = places.filter((place) => {
      return place.date === date;
    });
    timelines.push(
      <>
        <Typography
          variant="h5"
          sx={{
            backgroundColor: '#487281',
            color: '#fff',
            display: 'inline',
            borderRadius: '15px',
          }}
          px={2}
        >
          {date}
        </Typography>
        <DayTimeline
          places={placesForDate}
          deletePlace={deletePlace}
          setOpenPopup={setOpenPopup}
        />
      </>
    );
  }

  return <>{timelines}</>;
};

export default Itinerary;
