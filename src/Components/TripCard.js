import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { deleteTrip } from '../api/HomeAPI';

const TripCard = ({ location, dates, tripID, country, setTripList }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 400 }}>
        <CardActionArea onClick={() => navigate(`trip/${tripID}`)}>
          <CardMedia
            component="img"
            height="160"
            image={`https://source.unsplash.com/random/400x300/?${country}`}
            alt={`Stock image representing ${location}`}
          />
          <CardContent>
            <Typography variant="h5">{location}</Typography>
            <Typography variant="h6" color="text.secondary">
              {dates}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button
            size="small"
            onClick={(event) => {
              console.log(typeof tripID);
              deleteTrip(tripID)
                .then((response) => {
                  setTripList((oldTripList) => {
                    return oldTripList.filter(
                      (trip) => trip.id !== parseInt(tripID)
                    );
                  });
                })
                .catch((error) => console.log(error));
            }}
          >
            Delete Trip
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default TripCard;
