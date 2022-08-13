import React from 'react';
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#373f51',
    },
    secondary: {
      main: '#487281',
    },
    info: {
      main: '#58a4b0',
    },
    success: {
      main: '#0c7c59',
    },
  },
  typography: {
    fontFamily: 'Figtree',
  },
});
