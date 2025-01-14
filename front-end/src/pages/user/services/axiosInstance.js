import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api';
const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).token : null}`,
  },
});

export default instance;
