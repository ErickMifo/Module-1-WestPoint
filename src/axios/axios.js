import axios from 'axios';

const instanceHistory = axios.create({
  baseURL: 'http://localhost:3001',
});

export default instanceHistory;
