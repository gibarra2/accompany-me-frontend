/*
API Calls necessary for user sign in. 
*/

import axios from 'axios';
import { url } from '../App';

export const getUserInfo = (email) => {
  return axios
    .get(`${url}/users/${email}/`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      if (error.response.status === 404) {
        throw new Error('User does not exist');
      }
      console.log(error.response);
    });
};
