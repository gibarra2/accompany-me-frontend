import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const PlaceForm = () => {
  const defaultState = {
    name: '',
    address: '',
    date: '',
    note: '',
    cateogry: '',
  };
  const [formFields, setFormFields] = useState(defaultState);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };

  return (
    <>
      <form>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          value={formFields.name}
          onChange={handleChange}
          required
        />
      </form>
      <p>This is the Place form.</p>
      {/* name - Text input */}
      {/* address - Text input */}
      {/* Date - DateTimePicker */}
      {/* Note - Large Text input? */}
      {/* Category - Dropdown */}
    </>
  );
};

export default PlaceForm;
