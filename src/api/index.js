import axios from 'axios';

let api = axios.create({
  baseURL: 'http://localhost:5000',
  headers: { 'Content-Type': 'application/json' },
})

api.defaults.timeout = 10500;


export default {
  getHotSearchList() {
    // return api.get('/api/headerList.json');
    return api.get('/headerList');//@@直接連代理都不用 後端開啟跨域
  },
  getTopicList() {
    return api.get('/topic');
  },
  getArticleList() {
    return api.get('/article');
  }
}
