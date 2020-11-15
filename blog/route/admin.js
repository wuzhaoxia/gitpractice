//引用express框架
const express = require('express')
//导入用户集合构造函数
const {User} = require('../model/user')
const bcrypt = require('bcrypt')
//创建博客管理展示页面路由
const admin = express.Router();
admin.get('/login', (req, res) => {
    res.render('admin/login')
});
admin.post('/login', async (req, res) => {
    //接受请求参数
    const {email, password} = req.body;
    if (email.trim().length == 0 || password.trim().length == 0) {
        //根据邮箱地址查询用户信息
        let user = await User.findOne({email: email})
        if (user) {
            let isValid = await bcrypt.compare(password,user.password);
            if (isValid) {
                res.send('登录成功')
            } else {
                res.status(400).render('/admin/error', {msg: '邮件地址或密码错误'});
            }
        } else {
            res.status(400).render('/admin/error', {msg: '邮件地址或密码错误'});
        }
    }
});
//创建用户列表路由
admin.get('/user', (req, res) => {
    res.render('admin/user')
});
admin.get('/article', (req, res) => {
    res.render('admin/article')
});
admin.get('/article-edit', (req, res) => {
    res.render('admin/article-edit')
});
admin.get('/user-edit', (req, res) => {
    res.render('admin/user-edit')
});
//将路由对象作为模块成员进行导出
module.exports = admin;

// npm i --global --production windows-build-tools