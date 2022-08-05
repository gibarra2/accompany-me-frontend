import React from 'react';
import DayTimeline from './DayTimeline';
import Typography from '@mui/material/Typography';

const Itinerary = ({ startDate, endDate, places }) => {
  if ((places === undefined) | (places === [])) {
    return <></>;
  }

  // Make a list of dates? For each date in the list make a timeline w/ the corresponding places
  const uniqueDates = [...new Set(places.map((place) => place.date))];
  console.log(uniqueDates);

  const timelines = [];

  for (let date of uniqueDates) {
    let placesForDate = places.filter((place) => {
      return place.date === date;
    });
    timelines.push(
      <>
        <Typography variant="h6">{date}</Typography>
        <DayTimeline places={placesForDate} />
      </>
    );
  }

  return <>{timelines}</>;
};

export default Itinerary;
