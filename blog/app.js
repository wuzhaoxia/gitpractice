//引用express框架
const express = require('express');
//处理路径
const path = require('path');
//引入body-parser模块，用来处理post请求
const bodyPaser = require('body-parser')
//创建网站服务器
const app = express();
//数据库连接
require('./model/connect');
// require('./model/user');
//处理post请求参数
app.use(bodyPaser.urlencoded({extended:false}))
//告诉express框架模板所在的位置
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');
//当渲染后缀为art的模板时，所使用的模板引擎是什么
app.engine('art', require('express-art-template'))

//开放静态资源文件
app.use(express.static(path.join(__dirname, 'public')))

//引入路由模块
const home = require('./route/home')
const admin = require('./route/admin')
const myhome = require('./route/myhome')
const myadmin = require('./route/myadmin')

//为路由匹配模块
app.use('/home', home);
app.use('/admin', admin);
app.use('/myhome', myhome);
app.use('/myadmin', myadmin);

//监听端口
app.listen(8080);
console.log('网站服务器启动成功')

// C:\Users\wuzhaoxia\.windows-build-tools\python27;
// C:\Users\wuzhaoxia\AppData\Local\Programs\Python\Python37\Scripts;
// C:\Users\wuzhaoxia\AppData\Local\Programs\Python\Python37;
// C:\Users\wuzhaoxia\AppData\Roaming\npm;D:\Microsoft VS Code\bin
// D:\xshell\;
// %SystemRoot%\system32;
// %SystemRoot%;
// %SystemRoot%\System32\Wbem;
// %SYSTEMROOT%\System32\WindowsPowerShell\v1.0\;
// C:\Program Files (x86)\ATI Technologies\ATI.ACE\Core-Static;
// C:\Program Files\Common Files\Autodesk Shared\;
// D:\qt\Tools\mingw730_64\bin;
// C:\Users\wuzhaoxia\AppData\Local\Programs\Python\Python37;
// %MYSQL_HOME%\bin;
// D:\Node.js\;%C:\Users\wuzhaoxia\AppData\Local\Programs\Python\Python37\Scripts;
// C:\Program Files (x86)\Google\Chrome\Application\;
// C:\Program Files\Git\cmd;
// C:\Program Files\MongoDB\Server\3.2\bin;
// C:\Program Files\TortoiseSVN\bin;
// C:\Program Files\VisualSVN Server\bin