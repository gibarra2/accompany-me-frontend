import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box } from '@mui/material';
import { makeNewUser } from '../api/SignInAPI';

const SignUpForm = ({ setUserData, setSignUpError }) => {
  const defaultFormFields = { first_name: '', last_name: '', email: '' };
  const [formFields, setFormFields] = useState(defaultFormFields);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    makeNewUser(formFields)
      .then((userData) => {
        setUserData(userData);
        navigate(`../user/${userData.id}`);
      })
      .catch((error) => {
        console.log(error);
        setSignUpError(true);
      });

    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="first_name"
          label="First Name"
          name="firstName"
          autoFocus
          value={formFields['first_name']}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="last_name"
          label="Last Name"
          name="lastName"
          autoFocus
          value={formFields['last_name']}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoFocus
          value={formFields.email}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign Up
        </Button>
      </Box>
    </>
  );
};

export default SignUpForm;
