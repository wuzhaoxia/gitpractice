//引入express
const express = require('express')

//创建app应用对象
const app = express()

//禁止服务器返回X-powered-By,为了安全
app.disable('x-powered-by')

//使用内置中间件暴露静态资源，不访问路由直接写文件名+后缀也能直接看页面
app.use(express.static(__dirname+'/public'))

//引入db模块，用于连接数据库


app.get('/test',function (req,res){
    let {callback} = req.query
    let personArr = [{name:'peiqi',age:12},{name:'suxi',age:16}]
    res.send(`${callback}(${JSON.stringify(personArr)})`)
})
/*//用于展示登录页面，无任何其他逻辑 ---UI路由
app.get('/login',(request,response)=>{
    response.sendfile(__dirname+'/public/login.html')
})
//用于展示注册页面，无任何其他逻辑 ---UI路由
app.get('/register',(request,response)=>{
    response.sendfile(__dirname+'/public/register.html')
})
//用于处理用户的注册请求，有很多业务逻辑（校验数据的有效性等）---业务路由
app.post('/register',(request,response)=>{
    //1.获取用户的输入
    const {name,email,password,repassword} = response.body
    /!*
      2.校验数据的合法性
        1）校验成功
            去数据库中查找改邮箱是否注册过
                -注册过，提示用户邮箱已被占用
                -没注册，写入数据库
        2）校验失败
            提示用户具体哪里输入的不正确
    *!/
    //校验邮件的正则表达式
    const emailReg = /^[a-zA-Z0-9_]{4,20}@[a-zA-Z0-9]{2,10}\.com$/
    if (!emailReg.test(email)){
        response.send('email err')
    }else {

    }

})*/
//绑定端口监听
app.listen(3000,(err)=>{
    if (!err) console.log("ok")
    else console.log(err)
})