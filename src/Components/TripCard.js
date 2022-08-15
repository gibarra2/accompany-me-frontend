import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const TripCard = ({ location, dates, tripID, country }) => {
  const navigate = useNavigate();
  return (
    <>
      <Card sx={{ maxWidth: 400 }} onClick={() => navigate(`trip/${tripID}`)}>
        <CardActionArea>
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
      </Card>
    </>
  );
};

export default TripCard;
