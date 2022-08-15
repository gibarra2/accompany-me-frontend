/*
API Calls necessary for user homepage. 
*/

import axios from 'axios';
import { url } from '../App';

export const getTrips = (userID) => {
  return axios
    .get(`${url}/users/${userID}/trips/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);

      throw new Error('Error fetching user trips');
    });
};

export const submitTrip = (userID, tripData) => {
  return axios
    .post(`${url}/users/${userID}/trips/`, tripData)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);

      throw new Error('Error submiting new trip');
    });
};

export const deleteTrip = (tripID) => {
  return axios
    .delete(`${url}/trips/${tripID}/`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error.response);

      throw new Error('Error deleting trip');
    });
};
