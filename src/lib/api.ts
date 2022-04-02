import {LoginInterface, RegisterInterface} from '../Interfaces/Student';
import axios from 'axios';
import {Document} from '../Interfaces/Document';

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
  return axios.get(`https://notebase-api.herokuapp.com/api/download/get/`, {
    params: {
      user: id,
    },
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const createDocumentApi = async (
  document: Document,
  token: string,
  pdf: any,
) => {
  const {user, title, description, university, course, file, date} = document;
  const formdata = new FormData();
  formdata.append('user', user);
  formdata.append('title', title);
  formdata.append('file', file);
  formdata.append('course', course);
  formdata.append('description', description);
  formdata.append('university', university);
  formdata.append('date', date);
  await fetch('https://notebase-api.herokuapp.com/api/document/create/', {
    method: 'POST',
    body: formdata,
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  }).then(res => console.log(res));
};
