import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import { getUserInfo } from '../api/SignInAPI';

const SignInForm = ({ setUserData, setLoginError }) => {
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserInfo(formFields.email)
      .then((userData) => {
        setUserData(userData);
        setLoginError(false);
        navigate(`user/${userData.id}`);
      })
      .catch((error) => {
        console.log(error);
        setLoginError(true);
      });

    setFormFields({ email: '', password: '' });
  };
  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required={true}
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
          value={formFields.email}
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
        />
        <TextField
          margin="normal"
          required={true}
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
          value={formFields.password}
          onChange={(e) =>
            setFormFields({ ...formFields, password: e.target.value })
          }
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </>
  );
};

export default SignInForm;
