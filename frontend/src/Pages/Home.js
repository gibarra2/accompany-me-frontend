import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TripList from '../Components/TripList';
import Popup from '../Components/Popup';
import Typography from '@mui/material/Typography';
import TripForm from '../Components/TripForm';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { getTrips } from '../api/HomeAPI';

const Home = ({ submitTrip }) => {
  let { userID } = useParams();
  const [toggleForm, setToggleForm] = useState(false);
  const [tripList, setTripList] = useState([]);

  useEffect(() => {
    getTrips(userID)
      .then((data) => setTripList(data.trips))
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
        mb={2}
      >
        <Typography variant="h4">Where I'm Going</Typography>
        <Button
          variant="contained"
          size="large"
          startIcon={<AddIcon />}
          onClick={() => setToggleForm(true)}
        >
          Add Trip
        </Button>
      </Stack>
      <TripList tripList={tripList} />
      <Popup
        title="Add Trip"
        openPopup={toggleForm}
        setOpenPopup={setToggleForm}
        children={
          <TripForm
            userID={userID}
            setTripList={setTripList}
            setOpenPopup={setToggleForm}
          />
        }
      />
    </>
  );
};

export default Home;
