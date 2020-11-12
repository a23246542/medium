const express = require("express");
const bodyParser = require('body-parser');
const Mock = require('mockjs');
// const proxy = require('http-proxy-middleware')
const app = express();
const headersList = require('./data/headerList');
const home = require('./data/home');
const topic = require('./data/topic');
const article = require('./data/article');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  // 此处根据前端请求携带的请求头进行配置
  res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");
  // 例如： 我们公司的请求头需要携带Authorization和Client-Type，此处就应该按照以下进行配置
  // res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Authorization, Client-Type");
  next();
})


app.get('/headerList',(req,res) => {
  // res.json({
    //   success: true,
    //   data: ["高考","区块链","三生三世","崔永元","vue","小程序","茶点微小说","萨沙讲史堂","夜幕下的地安门","擦亮你的眼","理财","毕业","手帐","简书交友","spring","古风","故事","暖寄归人","旅行","连载","教育","简书","生活","投稿","历史","PHP","考研","docker","EOS","微信小程序","PPT","职场","大数据","创业","书评","东凤","饱醉豚","雨落荒原","程序员","爬虫","时间管理","kotlin","数据分析","阴阳合同","设计","红楼梦","父亲节","女人和衣服","swift","高考作文"]
    // })
    setTimeout(
      function(){

        res.json(Mock.mock(headersList))
      },5000
    )
})

app.get('/home',(req,res)=>{
  res.json(Mock.mock(home));
});

app.get('/topic',(req,res)=>{
  setTimeout(function(){
    res.json(Mock.mock(topic));
  },3000)
});
// app.get('/home/topic',(req,res)=>{
//   res.json(Mock.mock(home));
// })
  // Mock.setUp();

app.get('/article',(req,res) => {
  setTimeout(function(){
    res.json(Mock.mock(article))
  },1000)
})

app.listen(5000,()=>{
  console.log('监听端口');

});
