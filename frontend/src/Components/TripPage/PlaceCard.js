import React, { useState } from 'react';
import Card from '@mui/material/Card';
import { styled } from '@mui/material/styles';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const PlaceCard = ({ id, name, address, note, deletePlace }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => deletePlace(id)}>
          <DeleteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="subtitle2">Address</Typography>
          <Typography paragraph>{address}</Typography>
          {note && (
            <>
              <Typography variant="subtitle2">Note</Typography>
              <Typography paragraph>{note}</Typography>{' '}
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default PlaceCard;
