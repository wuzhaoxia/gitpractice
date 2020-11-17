//引用express框架
const express = require('express')
//创建博客展示页面路由
const myhome = express.Router();
myhome.get('/',(req,res) => {
    res.send('欢迎来到my博客首页')
});
//将路由对象作为模块成员进行导出
module.exports = myhome;