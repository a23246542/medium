const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const Mock = require('mockjs');
const app = express();
const headersList = require('./src/api/data/headerList');
const home = require('./src/api/data/home');
const topic = require('./src/api/data/topic');
const article = require('./src/api/data/article');
const detail = require('./src/api/data/detail');
const writer = require('./src/api/data/writer');
const signIn = require('./src/api/data/signIn');
const port = process.env.PORT || 5000;
const root = __dirname + '/build';

app.use(express.static(root, { maxAge: 86400000 }));
app.get(['/home', '/detail', '/home/detail'], (req, res) => {
  res.sendFile(path.resolve(root, 'index.html'));
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  // 此处根据前端请求携带的请求头进行配置
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
  // 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
  // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
  next();
});

app.get('/headerList', (req, res) => {
  setTimeout(function () {
    res.json(Mock.mock(headersList));
  }, 1000);
});

app.get('/home', (req, res) => {
  res.json(Mock.mock(home));
});

app.get('/topic', (req, res) => {
  setTimeout(function () {
    res.json(Mock.mock(topic));
  }, 800);
});
// app.get('/home/topic',(req,res)=>{
//   res.json(Mock.mock(home));
// })
// Mock.setUp();

app.get('/article', (req, res) => {
  const page = req.query.page;
  let list = JSON.parse(JSON.stringify(article));
  const nextList = list.data.articleList.slice(5 * (page - 1), 5 * page);
  list.data.articleList = nextList;
  setTimeout(function () {
    // res.json(Mock.mock(article))
    res.json(Mock.mock(list));
  }, 500);
});

app.get('/details', (req, res) => {
  setTimeout(function () {
    res.json(detail);
  }, 500);
});

app.get('/writer', (req, res) => {
  setTimeout(function () {
    res.json(writer);
  }, 900);
});

app.post('/auth/signIn', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'admin') {
    res.json(signIn);
  } else {
    res.json({
      success: false,
      data: {
        success: false,
        message: '帳號跟密碼為admin',
      },
    });
  }
});

// const host = '0.0.0.0';

setTimeout(() => {
  app.listen(process.env.PORT, () => {
    console.log('監聽端口', process.env.PORT);
  });
}, 0);
