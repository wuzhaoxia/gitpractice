let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)//使用一个新的索引创建器

mongoose.connect('mongodb://localhost:27017/mymongodb',{
    useNewUrlParser: true,//使用一个新的url解析器，用于解决一些安全性问题
    useUnifiedTopology: true//使用一个统一的新的拓扑结构*
})
mongoose.connection.on('open',(err)=>{
    if(err) console.log(err)
    else console.log('success')
})
