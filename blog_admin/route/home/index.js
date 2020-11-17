const {Article} = require('../../model/article')
const pagination = require('mongoose-sex-page')
module.exports = async (req,res)=>{
    let result = await pagination(Article).page(1).size(4).display(5).find().exec()
    res.render('home/default.art',{
        result:result
    })
}