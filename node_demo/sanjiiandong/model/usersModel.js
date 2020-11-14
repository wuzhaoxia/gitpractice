let mongoose = require("mongoose")
let Schema = mongoose.Schema
let userRule = new Schema({
	email:{
		type:String,
		required:true,
		unique:true
	},
	nick_name:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	data:{
		tyoe:Date,
		required:true
	},
	enable_flag:{
		type:String,
		default:'Y'
	}
})
module.exports = mongoose.model('users',userRule)