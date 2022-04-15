import axios from 'axios';

export const fetchLogin = async (username, password) => {
  return axios.post('https://notebase-api.herokuapp.com/api/student/login/', {
    username,
    password,
  });
};

export const getData = async token => {
  return axios.get('https://notebase-api.herokuapp.com/api/document/get/', {
    headers: {
      Authorization: `Token ${token}`,
    },
  });
};

export const createDocumentApi = async (document, token) => {
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
