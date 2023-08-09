import axios from 'axios';
import {BASE_URL, API_VERSION} from '../constants';

export const RestClient = axios.create({
  baseURL: `${BASE_URL}/${API_VERSION}/`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: '',
  },
  timeout: 30000,
});
