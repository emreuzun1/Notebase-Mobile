import {LoginInterface, RegisterInterface} from '../Interfaces/Student';
import axios from 'axios';

export const register = (values: RegisterInterface) => {
  return axios({
    method: 'POST',
    url: 'https://notebase-api.herokuapp.com/api/student/register/',
    data: {
      username: values.username,
      email: values.email,
      password: values.password,
    },
  });
};

export const loginApi = (values: LoginInterface) => {
  return axios({
    method: 'POST',
    url: 'https://notebase-api.herokuapp.com/api/student/login/',
    data: {
      username: values.username,
      password: values.password,
    },
  });
};
