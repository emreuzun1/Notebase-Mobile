import {LoginInterface, RegisterValues, Student} from '../Interfaces/Student';
import axios from 'axios';
import {Document} from '../Interfaces/Document';

export const register = (values: RegisterValues) => {
  const {
    email,
    username,
    password,
    first_name,
    last_name,
    department,
    faculty,
    university,
  } = values;
  const formdata = new FormData();
  formdata.append('email', email);
  formdata.append('username', username);
  formdata.append('password', password);
  formdata.append('first_name', first_name);
  formdata.append('last_name', last_name);
  formdata.append('university', university);
  formdata.append('department', department);
  formdata.append('faculty', faculty);
  return fetch('https://notebase-api.herokuapp.com/api/student/register/', {
    method: 'POST',
    body: formdata,
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

export const getStudentApi = (id: string | Student) => {
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

export const createDocumentApi = async (document: Document, token: string) => {
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

export const getStudentDocuments = (id: string, token: string) => {
  return axios.get(`https://notebase-api.herokuapp.com/api/document/${id}`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const createDownloadApi = (
  userId: string,
  token: string,
  documentId: string,
) => {
  return axios({
    method: 'POST',
    url: 'https://notebase-api.herokuapp.com/api/download/create/',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      user: userId,
      document: documentId,
    },
  });
};
