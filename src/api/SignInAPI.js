/*
API Calls necessary for user sign in and sign up. 
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

export const makeNewUser = (userInfo) => {
  return axios
    .post(`${url}/users/`, userInfo)
    .then((response) => response.data)
    .catch((error) => {
      console.log(error);
      throw new Error('Error making new user account.');
    });
};
