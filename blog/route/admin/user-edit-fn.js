const Joi = require('joi');
const {User} = require('../../model/user')
const bcrypt = require('bcrypt')
module.exports = async (req, res) => {
    const schema = {
        username: Joi.string().alphanum().min(2).max(30).required().error(new Error('用户名不符合规范')),
        email: Joi.string().required().email({
            minDomainSegments: 2,
            tlds: {allow: ['com', 'net']}
        }).error(new Error('邮箱不符合规范')),
        password: Joi.string().required().error(new Error('密码错误')),
        role: Joi.string().error(new Error('角色错误'))
    };
    try {
        await Joi.validate(req.body, schema);
    } catch (e) {
        // res.redirect(`/admin/user-edit?message=${e.message}`)
        return res.redirect('/admin/user-edit?message=' + e.message)
    }
    let user = await User.find({email: req.body.email});
    if (user) {
        return res.redirect('/admin/user-edit?message=邮箱被占用')
    }
    const salt = await bcrypt.genSalt(10);
    const password = await bcryt.hash(req.body.password, salt);
    req.body.password = password;
    await User.create(req.body);
    res.redirect('/admin/user');
}