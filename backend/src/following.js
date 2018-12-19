
var Profiles = require('./model.js').Profiles

module.exports = (app) => {
    app.get('/following/:user?', getFollowing)
    app.put('/following/:user', follow)
    app.delete('/following/:user', unfollow)
}

function getFollowing(req, res) {
    var username = req.params.user? req.params.user : req.username

    Profiles.find({ username: username }).exec(function(err, items) {
        if (!items || items.length == 0) {
            res.status(400).send('No user profile was found for getting Following')
            return
        }
        
        res.status(200).send({
            username: username,
            following: items[0].following
        })
    })
}

function follow(req, res) {
    var newFollowing = req.params.user

    Profiles.find({ username: req.username }).exec(function(err, userProfile) {
        if (!userProfile || userProfile.length == 0) {
            res.status(400).send('No user profile was found for following')
            return
        }

        Profiles.find({ username: newFollowing }).exec(function(err, followingProfile) {
            if (!followingProfile || followingProfile.length == 0) {
                res.status(400).send('No following profile was found for following')
                return
            }

            userProfile[0].following.push(newFollowing)
            var newFollowingArray = userProfile[0].following
            Profiles.update({ username: req.username }, { $set: { following: newFollowingArray } }, function(err, updateFollowing) {
                if (err) {
                    console.log(err)
                    return
                }

                res.status(200).send({
                    username: req.username,
                    following: newFollowingArray
                })
            })

        })
    })
}

function unfollow(req, res) {
    var unfollowing = req.params.user

    Profiles.find({ username: req.username }).exec(function(err, userProfile) {
        if(!userProfile || userProfile.length == 0) {
            res.status(400).send('No user profile was found for unfollowing')
            return
        }

        var newFollowingArray = userProfile[0].following.filter(res => res != unfollowing)
        Profiles.update({ username: req.username }, { $set: { following: newFollowingArray } }, function(err, updateFollowing) {
            if (err) {
                console.log(err)
                return
            }

            res.status(200).send({
                username: req.username,
                following: newFollowingArray
            })
        })
    })
}