import React from 'react';
import PlaceTwoToneIcon from '@mui/icons-material/PlaceTwoTone';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const StyledToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#C0AAA3',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: '1px solid #dadde9',
  },
}));

const PlaceMarker = ({ name, address }) => {
  return (
    <div>
      <StyledToolTip
        title={
          <>
            <Typography color="inherit">{name}</Typography>
            <Typography color="inherit" variant="subtitle2">
              {address}
            </Typography>
          </>
        }
      >
        <PlaceTwoToneIcon fontSize={'large'} />
      </StyledToolTip>
    </div>
  );
};

export default PlaceMarker;
