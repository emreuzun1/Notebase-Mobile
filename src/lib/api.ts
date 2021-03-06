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
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username,
      email,
      password,
      first_name,
      last_name,
      university,
      department,
      faculty,
    }),
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

export const logoutApi = (token: string) => {
  return axios({
    method: 'POST',
    url: 'https://notebase-api.herokuapp.com/api/student/logout/',
    headers: {
      Authorization: `Token ${token}`,
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

export const getStudentDownloadsApi = (token: string) => {
  return axios.get(`https://notebase-api.herokuapp.com/api/download/get/`, {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const createDocumentApi = (document: Document, token: string) => {
  const {user, title, description, university, course, file} = document;
  const formdata = new FormData();
  formdata.append('user', user);
  formdata.append('title', title);
  formdata.append('file', file);
  formdata.append('course', course);
  formdata.append('description', description);
  formdata.append('university', university);
  return fetch('https://notebase-api.herokuapp.com/api/document/create/', {
    method: 'POST',
    body: formdata,
    headers: {
      Authorization: `Token ${token}`,
      'Content-Type': 'multipart/form-data',
    },
  });
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

export const updateStudent = (student: any) => {
  const {id, username, faculty, university, first_name, last_name, password} =
    student;

  const formData = new FormData();
  formData.append('username', username);
  formData.append('faculty', faculty);
  formData.append('password', password);
  formData.append('university', university);
  formData.append('first_name', first_name);
  formData.append('last_name', last_name);

  return fetch(`https://notebase-api.herokuapp.com/api/student/edit/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${student.token}`,
    },
    body: formData,
  });
};

export const updateStudentPoint = (student: Student, point: number) => {
  const {id} = student.user;

  const formData = new FormData();
  formData.append('point', point);
  console.log('Point', point);
  return fetch(`https://notebase-api.herokuapp.com/api/student/edit/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: `Token ${student.token}`,
    },
    body: formData,
  });
};

export const updateDownloadStatus = (
  id: string,
  token: string,
  status: boolean,
) => {
  let has_liked = false,
    has_disliked = false;
  if (status) {
    has_liked = true;
    has_disliked = false;
  } else {
    has_liked = false;
    has_disliked = true;
  }
  return axios({
    url: `https://notebase-api.herokuapp.com/api/download/edit/${id}`,
    method: 'PUT',
    headers: {
      Authorization: `Token ${token}`,
    },
    data: {
      has_liked,
      has_disliked,
    },
  });
};

export const editDocumentApi = (document: Document, token: string) => {
  const {title, description, faculty, university} = document;
  const formData = new FormData();
  formData.append('title', title);
  formData.append('description', description);
  formData.append('faculty', faculty);
  formData.append('university', university);
  return fetch(
    `https://notebase-api.herokuapp.com/api/document/edit/${document.id}`,
    {
      method: 'PUT',
      headers: {
        Authorization: `Token ${token}`,
      },
      body: formData,
    },
  );
};

export const deleteDocumentApi = (document: Document, token: string) => {
  return axios({
    method: 'DELETE',
    url: `https://notebase-api.herokuapp.com/api/document/delete/${document.id}`,
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const getDocumentByIdApi = (id: string, token: string) => {
  return fetch(`https://notebase-api.herokuapp.com/api/document/get/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};
