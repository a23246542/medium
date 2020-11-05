import axios from 'axios';

let api = axios.create({
  // baseURL: 'http://localhost:3000',
  headers: { 'Content-Type': 'application/json' },
})

api.defaults.timeout = 2500;


export default {
  getHotSearchList(){
    return api.get('/api/headerList.json');
  }
}
