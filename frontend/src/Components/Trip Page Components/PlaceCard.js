import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const PlaceCard = ({ name }) => {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Typography variant="h6">{name}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default PlaceCard;
