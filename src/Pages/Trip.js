import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Itinerary from '../Components/TripPage/Itinerary';
import PlaceForm from '../Components/TripPage/PlaceForm';
import DraftList from '../Components/TripPage/DraftList';
import Map from '../Components/TripPage/Map';
import Popup from '../Components/Popup';
import UserList from '../Components/TripPage/UserList';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import axios from 'axios';
import { url } from '../App';
import { getTrip } from '../api/TripAPI';
import '../styles/TripPage.css';

const Trip = () => {
  let { tripID } = useParams();
  const [tripDetails, setTripDetails] = useState({});
  const [scheduledPlaces, setScheduledPlaces] = useState([]);
  const [unscheduledPlaces, setUnscheduledPlaces] = useState([]);
  const [toggleForm, setToggleForm] = useState(false);
  const [placeToEdit, setPlaceToEdit] = useState(null);

  const updateTripState = (data) => {
    setTripDetails(data);
    setScheduledPlaces(
      data.places.filter((place) => {
        return place.date !== null;
      })
    );
    setUnscheduledPlaces(
      data.places.filter((place) => {
        return place.date === null;
      })
    );
  };

  const getTripDetails = (ID) => {
    getTrip(ID)
      .then((tripData) => {
        updateTripState(tripData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const createPlace = (placeInfo) => {
    axios
      .post(`${url}/trips/${tripID}/places/`, placeInfo)
      .then((response) => {
        updateTripState(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editPlace = (placeID, placeInfo) => {
    axios
      .patch(`${url}/places/${placeID}/`, placeInfo)
      .then((response) => {
        console.log(response);
        getTripDetails(tripID);
      })
      .catch((error) => console.log(error.response));
  };

  const deletePlace = (placeID) => {
    axios
      .delete(`${url}/places/${placeID}/`)
      .then((response) => {
        console.log(response);
        getTripDetails(tripID);
      })
      .catch((error) => console.log(error.response));
  };

  useEffect(() => getTripDetails(tripID), []);

  const openPlaceInPopup = (place) => {
    setPlaceToEdit(place);
    setToggleForm(true);
  };

  if (!Object.keys(tripDetails).length) {
    return <></>;
  }

  return (
    <>
      <Typography variant="h3" mt={3} gutterBottom className="title">
        Trip to {tripDetails.city}, {tripDetails.country}
      </Typography>
      <Typography variant="h4" gutterBottom className="title">
        {tripDetails['start_date']} - {tripDetails['end_date']}
      </Typography>
      <div className="trip-page-container">
        <Container className="itinerary-container">
          {tripDetails.users.length > 1 ? (
            <>
              <Typography variant="h4">Travel Buddies</Typography>
              <UserList users={tripDetails.users} />
            </>
          ) : (
            <></>
          )}
          <Typography variant="h4">Itinerary</Typography>
          <Itinerary
            places={scheduledPlaces}
            deletePlace={deletePlace}
            setOpenPopup={openPlaceInPopup}
          />
        </Container>
        <Container className="draft-conatiner">
          <div className="draft-title-container">
            <Typography variant="h4">Places to Visit</Typography>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              startIcon={<AddLocationAltIcon />}
              onClick={() => setToggleForm(true)}
            >
              Add Place
            </Button>
          </div>
          <DraftList
            places={unscheduledPlaces}
            deletePlace={deletePlace}
            setOpenPopup={openPlaceInPopup}
          />
        </Container>
        <Container className="map-container">
          <Typography variant="h4" mt={2} mb={2}>
            Map
          </Typography>
          <Map
            cityLat={tripDetails.latitude}
            cityLng={tripDetails.longitude}
            places={tripDetails.places}
          />
        </Container>
      </div>
      <Popup
        title="Add Place"
        openPopup={toggleForm}
        setOpenPopup={setToggleForm}
        setPlaceToEdit={setPlaceToEdit}
        children={
          <PlaceForm
            createPlace={createPlace}
            editPlace={editPlace}
            setOpenPopup={setToggleForm}
            placeToEdit={placeToEdit}
            setPlaceToEdit={setPlaceToEdit}
          />
        }
      />
    </>
  );
};

export default Trip;
