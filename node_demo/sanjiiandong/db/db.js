let mongoose = require("mongoose")
mongoose.set('useCreateIndex',true)
const DB_NAME = ''
const PORT = 27017
const IP = 'localhost'

function connectMongo(success,failed){
    mongoose.connect('mongodb://${IP}:${PORT}/${DB_NAME}',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.connection.on('open',function(err){
        if(err){
            console.log("err",err)
            failed('connect failed')
        }
        else{
            console.log("success")
            success()
        }
    })
}
module.exports = connectMongo