import React from 'react';
import TripCard from './TripCard';
import Grid from '@mui/material/Grid';

const TripList = ({ tripList }) => {
  // Make TripCards for each of the user's trips
  const cards = (tripList) => {
    return tripList.map((trip) => {
      let location = `${trip.city}, ${trip.country}`;
      let dates = `${trip.start_date} - ${trip.end_date}`;
      return (
        <Grid item xs={12} sm={6} md={4} lg={3} key={trip.id}>
          <TripCard
            location={location}
            dates={dates}
            tripID={trip.id}
            key={trip.id}
          />
        </Grid>
      );
    });
  };

  return (
    <Grid container spacing={3} px={3} py={2} justifyContent="flex-start">
      {cards(tripList)}
    </Grid>
  );
};

export default TripList;
