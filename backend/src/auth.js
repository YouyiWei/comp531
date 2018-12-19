
var Users = require('./model.js').Users
var Profiles = require('./model.js').Profiles
var Posts = require('./model.js').Posts
const md5 = require('md5')

const sessionUser = {}
var cookieKey = 'sid'

const session = require('express-session')
const passport = require('passport')
const FacebookStrategy = require('passport-facebook').Strategy
//const frontendUrl = 'http://127.0.0.1:4200/'
const frontendUrl = 'http://hw7-frontend-youyiwei.surge.sh/'
//const backendUrl = 'http://localhost:3000/'
const backendUrl = 'https://youyiwei-web-ic18.herokuapp.com/'
const users = {}
const config = {
    clientID: '188127808808112',
    clientSecret: '0a9140822802c7eda658204542acb9c3',
    callbackURL: backendUrl + 'facebook/callback',
    profileFields: ['emails']
}
const defaultAvatar = 'http://res.cloudinary.com/hztgaaztd/image/upload/v1543549565/ka54ytmvx4tyynwjazsj.jpg'

module.exports = (app) => {
	app.post('/register', register)
	app.post('/login', login)

	//login with facebook
	app.use(session({resave: true, secret: 'thisIsMySecretMessage'}));
    app.use(passport.initialize())
    app.use(passport.session())
    app.get("/facebook/login", passport.authenticate('facebook', { scope: ['email'] }))
	app.use("/facebook/callback", passport.authenticate('facebook', {successRedirect: '/loginwithfb', failureRedirect: '/fail'}))
	app.get("/loginwithfb", loginWithFb)
	app.get("/fail", fail)
	
	app.use(isLoggedIn)
	app.put('/logout', isLoggedIn, logout)
	app.put('/password', setPassword)

	//link and unlink
	app.put('/link', link)
	app.get('/unlink', unlink)
}

function register(req, res) {
	var username = req.body.username
	var password = req.body.password

	var salt = generateSalt(username)

	var hash = getHash(password + salt)

	Users.find({ username: username }).exec(function(err, items) {

		if (items.length != 0) {
			res.status(200).send({ 
				result: 'fail', 
				username: username
			})
			return
		}

		new Users({
			username: username, 
			salt: salt,
			hash: hash
		}).save()
	
		new Profiles({
			username: username, 
			status: "I am " + username, 
			following: [], 
			email: req.body.emailAddress, 
			dob: req.body.dateOfBirth,
			zipcode: req.body.zipcode,
			avatar: ""
		}).save()
	
		res.status(200).send({ 
			result: 'success', 
			username: username
		})
	})
}

function findByUsername(username, callback) {
	Users.find({ username: username }).exec(function(err, items) {
		callback(items)
	})
}

function login(req, res) {
	var username = req.body.username;
	var password = req.body.password;//may be fake

	findByUsername(username, function(items) {
		var salt = items[0].salt
		var hash = items[0].hash

		//derive hash and compare
		var deriveHash = getHash(password + salt)//may be fake
		if (hash == deriveHash) {
			var sessionKey = generateCookie(items[0].username, res)
			res.status(200).send({
				username: username,
				result: 'success',
				sid: sessionKey//for testing
			})
		}
	})
}
 
function isLoggedIn(req, res, next) {
	var sid = req.cookies[cookieKey]
	if (!sid) {
		if (req.cookies) {
			req.username = sessionUser['connect.sid']
			next()
			return 
		}

		return res.status(401).send({result: "No sid"})
	}

	var username = sessionUser[sid]
	if (!username) {
		res.status(401).send({result: "No username"})
	}
	else {
		req.username = username
		return next()
	}
}

function logout(req, res) {
	var sid = req.cookies[cookieKey]
	delete sessionUser[sid]

	res.clearCookie(cookieKey)

	res.status(200).send({result: "OK"})
}

function getHash(text) {
    'use strict';

    var hash = 5381;
    var index = text.length;

    while (index) {
        hash = (hash * 33) ^ text.charCodeAt(--index);
    }

    return hash >>> 0;
}

function setPassword(req, res) {
	var newPassword = req.body.password
	var username = req.username
	var salt = generateSalt(username)
	var hash = getHash(newPassword + salt)

	Users.update( {username: username }, { $set: { salt: salt, hash: hash } }, function(err, items) {
		if (err) {
			console.log(err)
			return
		}
		res.status(200).send({
			username: username,
			result: 'success'
		})
	})
}

passport.serializeUser(function(user, done){
    users[user.id] = user;
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    var user = users[id]
    done(null, user)
})

passport.use(new FacebookStrategy(config,
    function(token, refreshToken, profile, done){
        process.nextTick(function(){
            return done(null, profile)
        })
    })
)

function generateSalt(username) {
	var today = new Date()
	var timestamp = today.getTime()
	var salt = md5(username + timestamp)
	return salt
}

function generateCookie(username, res) {
	const sessionKey = md5(new Date().getTime() + username)
	sessionUser[sessionKey] = username
	res.cookie(cookieKey, sessionKey, { maxAge: 3600*1000, httpOnly: true })
	return sessionKey
}

function loginWithFb(req, res) {
	var fbProfile = req.user
	var fbId = fbProfile.id
	var fbUsername = fbId + '@' + fbProfile.provider
	var fbUserEmail = fbProfile.emails? fbProfile.emails[0].value : ''

	Users.find({ username: fbUsername }).exec(function(err, user) {
		if (!user || user.length == 0) {
			var salt = generateSalt(fbUsername)
			var hash = getHash(fbUsername + salt)

			var newUser = new Users({
				username: fbUsername,
				salt: salt,
				hash: hash,
				auth: []
			})
			newUser.save(function(err, newUser) {
				if (err) {
					console.log(err)
					return
				}
			})

			var newProfile = new Profiles({
				username: fbUsername,
				status: 'I\'m ' + fbUsername,
				following: [],
				email: fbUserEmail,
				dob: '',
				zipcode: '',
				avatar: defaultAvatar
			})
			newProfile.save(function(err, newProfile) {
				if (err) {
					console.log(err)
					return
				}
			})
			
		} 

		sessionUser['connect.sid'] = fbUsername
		res.redirect(frontendUrl + '#/main')

	})
}

function fail(req, res) {
	res.redirect(frontendUrl)
}

function link(req, res) {
    const fbUsername = req.username
    const username = req.body.username
    const password = req.body.password

    Users.findOne({username: username}).exec(function (err, normalUser) {
        if(!normalUser||normalUser.length==0) {
            res.status(400).send('no such user')
        } else {
            if(getHash(password + normalUser.salt) == normalUser.hash) {
                console.log(normalUser)
                if (!normalUser.auth||normalUser.auth.length == 0) {
                    Users.findOne({username: fbUsername}).exec(function (err, user) {
                        if (user) {
                            updateDatabase(username, fbUsername, res)
                        } else {
                            res.status(400).send('no facebook login')
                        }
                    })
                } else {
                    res.status(200).send({result: 'already linked'})
                }
            } else {
                res.status(400).send({result: 'wrong password'})
            }
        }
    })

}

function updateDatabase(username, fbUsername, res) {
    Posts.update({ author: fbUsername}, { $set: { 'author': username } }, { new: true, multi: true }).then(() => {});
    Posts.update({ 'comments.name': fbUsername }, { $set: { 'comments.$.name': username } }, { new: true, multi: true }).then(() => {});
    Profiles.findOne({username: fbUsername}).then((profile) => {
        if(profile){
            const fbFollowings = profile['following'];
            Profiles.findOne({username: username}).then((normalProfile) => {
                console.log('normalProfile: '+normalProfile)
                if(normalProfile){
                    console.log('sadgdfherhgdfhdfdfgdf')
                    const normalFollowings = normalProfile.following;
                    let mergeFollowings = merge(normalFollowings, fbFollowings, username);
                    Profiles.findOneAndUpdate({username: username}, {$set: {following: mergeFollowings}}, {new: true}, function(err, updatedProfile){
                        Users.findOneAndUpdate({username: username}, {$addToSet: {auth: fbUsername}}, {new: true}, function (err, updatedUser) {
                                Users.deleteOne({username: fbUsername}).then(() => {
                                    Profiles.deleteOne({username: fbUsername}).then(() => {
                                        res.status(200).send({result: 'success'});
                                    });
                                });
                            });
                    })
                }else{
                    res.status(400).send('normal user profile does not exist');
                }
            })
        }else{
            res.status(400).send('Facebook user profile does not exist!');
        }
    });
}

function merge(normalFollowings, fbFollowings, username) {
    console.log('merge followings')
    let res = []
    for(let i=0;i<normalFollowings.length;i++) {
        res.push(normalFollowings[i])
    }
    for(let i=0;i<fbFollowings.length;i++){
        let exist = false;
        for(let j=0;j<normalFollowings.length;j++){
            if(fbFollowings[i] == normalFollowings[j] || fbFollowings[i] == username) {
                exist = true;
                break;
            }
        }
        if(!exist){
            res.push(fbFollowings[i])
        }
    }
    return res;
}

function unlink(req, res) {
    const username = req.username;
    Users.findOne({username: username}).exec(function(err, user){
        if(user){
            if(user.auth && user.auth.length > 0){
                Users.findOneAndUpdate({username: username}, {$set : {auth : []}}, {new : true}, function(err, updatedUser){
                    res.status(200).send({result: 'success'})
                })
            }else{
                res.status(400).send('unlink failed');
            }
        }else{
            res.status(400).send('no user found');
        }
    })
}