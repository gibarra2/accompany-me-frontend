import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';

const SignUpForm = () => {
  const [formFields, setFormFields] = useState({ email: '', password: '' });
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    setFormFields({ email: '', password: '' });
  };
  return (
    <>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="First Name"
          name="firstName"
          autoFocus
          value={formFields.email}
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="Last Name"
          name="lastName"
          autoFocus
          value={formFields.email}
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
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
          onChange={(e) =>
            setFormFields({ ...formFields, email: e.target.value })
          }
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          value={formFields.password}
          onChange={(e) =>
            setFormFields({ ...formFields, password: e.target.value })
          }
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
