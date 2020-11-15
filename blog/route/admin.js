//引用express框架
const express = require('express')
//创建博客管理展示页面路由
const admin = express.Router();
admin.get('/login',(req,res) => {
    res.render('admin/login')
});
//创建用户列表路由
admin.get('/user',(req,res) => {
    res.render('admin/user')
});
admin.get('/article',(req,res) => {
    res.render('admin/article')
});
admin.get('/article-edit',(req,res) => {
    res.render('admin/article-edit')
});
admin.get('/user-edit',(req,res) => {
    res.render('admin/user-edit')
});
//将路由对象作为模块成员进行导出
module.exports = admin;