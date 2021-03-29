import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.exchangeratesapi.io/latest?symbols=USD,GBP',
});

export default instance;
