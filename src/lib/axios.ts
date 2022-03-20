import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const config: AxiosRequestConfig = {
  baseURL: 'https://notebase-api.herokuapp.com/api',
};
let instance: AxiosInstance = axios.create(config);

export default instance;
