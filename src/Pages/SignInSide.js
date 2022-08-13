import React, { useState } from 'react';
import {
  Avatar,
  CssBaseline,
  Link,
  Paper,
  Box,
  Grid,
  Typography,
} from '@mui/material';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { useLocation } from 'react-router';
import { Link as RouterLink } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      Acompáñame {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const theme = createTheme();

const SignInSide = ({ setUserData }) => {
  const location = useLocation();
  const [loginError, setLoginError] = useState(false);
  const [signUpError, setSignUpError] = useState(false);

  return (
    // <ThemeProvider theme={theme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random/?travel)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light'
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h4" gutterBottom>
            Acompáñame
          </Typography>
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <FlightTakeoffOutlinedIcon />
          </Avatar>
          {location.pathname !== '/signup' && (
            <>
              <Typography component="h2" variant="h5">
                Sign in
              </Typography>
              <SignInForm
                setUserData={setUserData}
                setLoginError={setLoginError}
              />
            </>
          )}
          {location.pathname !== '/' && (
            <>
              {' '}
              <Typography component="h2" variant="h5">
                Sign Up
              </Typography>
              <SignUpForm
                setUserData={setUserData}
                setSignUpError={setSignUpError}
              />{' '}
            </>
          )}
          {loginError && location.pathname === '/' && (
            <Typography
              variant="body1"
              display="block"
              gutterBottom
              sx={{ textAlign: 'center' }}
            >
              User not found. Verify you are using the correct email or sign up.
            </Typography>
          )}
          {signUpError && location.pathname === '/signup' && (
            <Typography
              variant="body1"
              display="block"
              gutterBottom
              sx={{ textAlign: 'center' }}
            >
              Error signing up. Please provide an email in the appropriate
              format: 'email@domain.com'
            </Typography>
          )}
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              {location.pathname !== '/signup' && (
                <Link variant="body2" component={RouterLink} to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              )}
              {location.pathname !== '/' && (
                <Link variant="body2" component={RouterLink} to="/">
                  {'Sign In'}
                </Link>
              )}
            </Grid>
          </Grid>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Grid>
    </Grid>
    // </ThemeProvider>
  );
};

export default SignInSide;
