module.exports=(req,res)=>{
    const id = req.query.id
    res.render('home/article.art')
}