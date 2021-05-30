import axios from 'axios';

let api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
});

api.defaults.timeout = 10500;

const apis = {
  getHotSearchList() {
    return api.get('/headerList');
  },
  getTopicList() {
    return api.get('/topic');
  },
  getArticleList(page = 1) {
    return api.get(`/article?page=${page}`);
  },
  getArticleDetail(id) {
    return api.get(`/details?id=${id}`);
  },
  getWriterList() {
    return api.get('/writer');
  },
  signIn(data) {
    return api.post('/auth/signIn', data);
  },
};

export default apis;
