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

export const getDocumentsApi = (token: string) => {
  return axios({
    method: 'GET',
    url: 'https://notebase-api.herokuapp.com/api/document/get/',
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const getStudentApi = (id: string) => {
  return axios.get(`https://notebase-api.herokuapp.com/api/student/get/${id}`);
};

export const getStudentDownloadsApi = (id: string, token: string) => {
  return axios.get(
    `https://notebase-api.herokuapp.com/api/download/get/${id}`,
    {
      headers: {
        Authorization: `Token ${token}`,
      },
    },
  );
};
