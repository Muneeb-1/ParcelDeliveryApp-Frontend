import axios from 'axios';
import {BaseUrl} from './baseurl';

export const verifyEmail = async email => {
  try {
    console.log(email);
    const response = await axios.post(`${BaseUrl}/user/verifyEmail`, {
      email: email,
    });
    return response.data.udata;
  } catch (error) {
    console.log(error);
  }
};

export const Signup = async email => {
  try {
    console.log(email);
    const response = await axios.post(`${BaseUrl}/user/registerUser`, {
      email: email,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const verifyToken = async token => {
  try {
    console.log(token);
    const response = await axios.post(`${BaseUrl}/user/verifyToken`, {
      token: token,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
