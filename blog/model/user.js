//创建用户集合
//引入第三方模块moogonse
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
//创建用户集合规则
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        maxlength: 20,
        minlength: 2
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    //admin 超级管理员，mormal 普通用户
    role: {
        type: String,
        required: true
    },
    //0 启用状态，1 禁用状态
    state: {
        type: Number,
        default: 0
    }
})

//创建集合
const User = mongoose.model('User', userSchema)
async function createUser(){
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456',salt)
    //测试代码
    const user = await User.create({
        username: 'wuzhaoxia',
        email: '13275380285@163.com',
        password: '123456',
        role: 'admin',
        state: 0
    });
}
createUser();
//将用户集合作为模块成员进行导出
module.export = {
    User
}