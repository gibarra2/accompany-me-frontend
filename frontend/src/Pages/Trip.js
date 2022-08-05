import React, { useState, useEffect } from 'react';
import Itinerary from '../Components/Trip Page Components/Itinerary';
import { useParams } from 'react-router-dom';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
import '../styles/TripPage.css';
import axios from 'axios';
import { url } from '../App';

const Trip = () => {
  let { tripID } = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const [scheduledPlaces, setScheduledPlaces] = useState([]);
  const [unschedulePlaces, setUnscheduledPlaces] = useState([]);

  const getTripDetails = (ID) => {
    axios
      .get(`${url}/trips/${ID}/`)
      .then((response) => {
        setTripDetails(response.data);
        setScheduledPlaces(
          response.data.places.filter((place) => {
            return place.date !== null;
          })
        );
        setUnscheduledPlaces(
          response.data.places.filter((place) => {
            return place.date === null;
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => getTripDetails(tripID), []);

  return (
    <>
      <Typography variant="h3">
        Trip to {tripDetails.city}, {tripDetails.country}
      </Typography>
      <div className="trip-page-container">
        <Container className="itinerary-container">
          <Typography variant="h4">Itinerary</Typography>
          <Itinerary
            startDate={tripDetails['start_date']}
            endDate={tripDetails['end_date']}
            places={scheduledPlaces}
          />
        </Container>
        <Container clasName="draft-conatiner">
          <Typography variant="h4">Places to Visit</Typography>
        </Container>
        <Container className="map-container">
          <Typography variant="h4">Map</Typography>
        </Container>
      </div>
    </>
  );
};

export default Trip;
