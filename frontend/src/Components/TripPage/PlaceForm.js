import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  LocalizationProvider,
  DatePicker,
  TimePicker,
} from '@mui/x-date-pickers';
import format from 'date-fns/format';

const PlaceForm = ({
  createPlace,
  editPlace,
  setOpenPopup,
  placeToEdit,
  setPlaceToEdit,
}) => {
  const defaultState = {
    name: '',
    address: '',
    date: null,
    time: null,
    note: '',
    category: '',
  };
  const [formFields, setFormFields] = useState(defaultState);

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.id]: e.target.value });
  };

  const submitPlaceData = (event) => {
    event.preventDefault();
    const requestBody = {
      ...formFields,
    };

    if (formFields.date !== null) {
      requestBody.date = format(formFields.date, 'MM-dd-yyyy');
    }
    if (formFields.time !== null) {
      requestBody.time = format(formFields.time, 'HH:mm');
    }

    if (!formFields.id) {
      createPlace(requestBody);
    } else {
      delete requestBody.id;
      editPlace(placeToEdit.id, requestBody);
    }
    setFormFields(defaultState);
    setOpenPopup(false);
    setPlaceToEdit(null);
  };

  useEffect(() => {
    if (placeToEdit !== null) {
      setFormFields({ ...placeToEdit });
    }
  }, [placeToEdit]);

  return (
    <>
      <form className="new-place-form" onSubmit={submitPlaceData}>
        <TextField
          id="name"
          label="Name"
          variant="filled"
          value={formFields.name}
          onChange={handleChange}
          required
        />
        <TextField
          id="address"
          label="Address"
          variant="filled"
          value={formFields.address}
          onChange={handleChange}
          required
        />
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="Date"
            value={formFields.date}
            onChange={(newValue) => {
              setFormFields({ ...formFields, date: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
          <TimePicker
            label="Time"
            value={formFields.time}
            onChange={(newValue) => {
              setFormFields({ ...formFields, time: newValue });
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <TextField
          id="note"
          label="Note"
          variant="filled"
          value={formFields.note}
          onChange={handleChange}
          multiline
          rows={2}
        />
        <FormControl variant="filled" required>
          <InputLabel id="category-label">Category</InputLabel>
          <Select
            labelId="category-label"
            id="category"
            value={formFields.category}
            label="Category"
            onChange={(e) =>
              setFormFields({ ...formFields, category: e.target.value })
            }
          >
            <MenuItem value={'DINE'}>Dining</MenuItem>
            <MenuItem value={'SHOP'}>Shopping</MenuItem>
            <MenuItem value={'ATTR'}>Attraction</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </form>

      {/* Category - Dropdown */}
    </>
  );
};

export default PlaceForm;
