/*
API Calls related for user interaction on trip pages. 
*/

import axios from 'axios';
import { url } from '../App';

export const getTrip = (ID) => {
  return axios
    .get(`${url}/trips/${ID}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error.response);

      throw new Error('Error fetching trip information');
    });
};
