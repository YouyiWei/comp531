
var Profiles = require('./model.js').Profiles
var uploadImage = require('./uploadCloudinary.js')

const profile = {
    username: 'realUser',
    headline: 'I am realUser',
    email: 'a@b',
    zipcode: "12345",
    dob: '11/04/2000',
    avatar: 'https://cpb-us-e1.wpmucdn.com/news-network.rice.edu/dist/c/2/files/2018/09/0904_HYDRAGAIN-b-1gilb80.jpg',
}

module.exports = (app) => {
    
    app.get('/headlines/:users?', getHeadline)
    app.put('/headline', setHeadline)

    app.get('/email/:user?', getEmail)
    app.put('/email', setEmail)
    app.get('/zipcode/:user?', getZipcode)
    app.put('/zipcode', setZipcode)
    app.get('/avatars/:user?', getAvatar)
    app.put('/uploadAvatar', uploadImage('avatar'), getFileUrl)
    app.put('/avatar', setAvatar)
    app.get('/dob/:user?', getDob)
}

function getHeadline(req, res) {
    var paramsArray
    if (!req.params.users)
        paramsArray = [req.username]
    else
        paramsArray = req.params.users.split(',')

    Profiles.find({username: { $in: paramsArray }}).exec(function(err, items) {
        var data = []
        items.forEach(item => {
            data.push({
                username: item.username,
                headline: item.status
            })
        })
        res.status(200).send({headlines: data})
    })

}

function setHeadline(req, res) {
    var headline = req.body.headline
    var username = req.username

    Profiles.update({ username: username}, {$set:{status: headline}}, function(err, items){
        res.status(200).send({
            username: username,
            headline: headline
        })
    })
}

function getEmail(req, res) {
    const username = req.params.user? req.params.user : req.username

    Profiles.find({ username: username }).exec(function(err, items) {
        if (!items || items.length == 0)
            res.status(400).send('No user profile was found for getting email')
        
        res.status(200).send({
            username: username, 
            email: items[0].email
        })
    })
}

function setEmail(req, res) {
    var newEmail = req.body.email
    var username = req.username

    if(!newEmail) {
        res.status(400).send('No new email was found')
        return
    }

    Profiles.update({ username: username }, { $set: {email: newEmail } }, function(err, items) {
        if (err) {
            console.log(err)
            return
        }

        res.status(200).send({
            username: username,
            email: newEmail
        })
    })
}

function getZipcode(req, res) {
    var username = req.params.user? req.params.user : req.username

    Profiles.find({ username: username }).exec(function(err, items) {
        if (!items || items.length == 0)
            res.status(400).send('No user profile was found for getting zipcode')

        res.status(200).send({
            username: username,
            zipcode: items[0].zipcode
        })
    })
}

function setZipcode(req, res) {
    var newZipcode = req.body.zipcode
    var username = req.username

    if(!newZipcode) {
        req.status(400).send('No new zipcode was found')
        return
    }

    Profiles.update({ username: username }, { $set: { zipcode: newZipcode } }, function(err, items) {
        if (err) {
            console.log(err)
            return
        }

        res.status(200).send({
            username: username,
            zipcode: newZipcode
        })
    })
}

function getFileUrl(req, res) {
    if (req.fileurl)
        res.status(200).send({ img: req.fileurl })
    else
        res.status(200).send({ img: '' })
}

function getAvatar(req, res) {
    var users = req.params.user? req.params.user.split(',') : req.username

    Profiles.find({ username: {$in: users } }).exec(function(err, items) {
        if (!items || items.length == 0) {
            res.status(400).send('No user profile was found for getting avatar')
            return
        }

        var data = []
        items.forEach(item =>
            data.push({
                username: item.username,
                avatar: item.avatar
            })
        )
        res.status(200).send({ avatars: data })
    })
}

function setAvatar(req, res) {
    var newAvatar = req.body.avatar
    var username = req.username

    if (!newAvatar) {
        res.status(400).send('No new avatar was found')
        return
    }

    Profiles.findOneAndUpdate({ username: username }, { $set: { avatar: newAvatar } }, {new: true}, function(err, items) {
        if (err) {
            console.log(err)
            return
        }

        res.status(200).send({
            username: username,
            avatar: newAvatar
        })
    })
}

function getDob(req, res) {
    var username = req.params.user? req.params.user : req.username

    Profiles.find({ username: username }).exec(function(err, items) {
        if (!items || items.length == 0) {
            res.ststus(400).send('No user profile was found for getting dob')
            return
        }

        res.status(200).send({
            username: username,
            dob: items[0].dob
        })
    })
}
