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
