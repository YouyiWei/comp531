// this is model.js 
var mongoose = require('mongoose')
require('./db.js')

var usersSchema = new mongoose.Schema({
	username: String, 
	salt: String, 
	hash: String,
	auth: Object
})

var profilesSchema = new mongoose.Schema({
	username: String, 
	status: String, 
	following: [ String ], 
	email: String, 
	dob: String,
	zipcode: String,
	avatar: String
})

var commentSchema = new mongoose.Schema({
	commentId: Number,
	author: String,
	body: String,
	date: Date
})

var postsSchema = new mongoose.Schema({
	id: Number,
    author: String,
    body: String,
    date: Date,
    picture: String, 
    comments: [ commentSchema ]
})

exports.Users = mongoose.model('users', usersSchema)
exports.Profiles = mongoose.model('profiles', profilesSchema)
exports.Posts = mongoose.model('posts', postsSchema)
exports.Comments = mongoose.model('comments', commentSchema)
