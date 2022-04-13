import axios from 'axios';

const fetchLogin = async (username, password) => {
  return axios.post('https://notebase-api.herokuapp.com/api/student/login/', {
    username,
    password,
  });
};

export default fetchLogin;
