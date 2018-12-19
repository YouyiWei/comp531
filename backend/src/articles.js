
var Posts = require('./model.js').Posts
var Profiles = require('./model.js').Profiles

module.exports = (app) => {
    app.get('/articles/:id?', getArticles)
    app.put('/articles/:id', setArticles)//stub
    app.post('/article', addArticle)
}

function getArticles(req, res) {
    if (req.params.id) {
        Posts.find({ id: req.params.id }).exec(function (err, items) {
            if (items.length != 0)
                res.status(200).send({ articles: items })
            else {
                //find by author
                Posts.find({ author: req.params.id }).sort({ date: -1 }).limit(10).exec(function (err, items){
                    res.status(200).send({ articles: items })
                })
            }
        })
    }
    else {
        //find by default username
        Profiles.find({ username: req.username }).exec(function(err, items){
            var followings = items[0].following
            followings.push(req.username)
            Posts.find({author: {$in: followings}}).sort({ date: -1 }).limit(10).exec(function(err, items) {
                res.status(200).send({ articles: items})
            })
        })
    }
}

function setArticles(req, res) {
    var postId = req.params.id
    var text = req.body.text
    var commentId = req.body.commentId

    Profiles.find({ username: req.username }).exec(function(err, userProfile) {
        var text = req.body.text

        if (!commentId) {
            Posts.update({ _id: postId }, { $set: { body: text } }, { new: true }, function(err, items) {
                if (err) {
                    console.log(err)
                    return
                }
                res.status(200).send({ articles: [items] })
            })
        } else {
            if (commentId == -1) {
                Posts.update({ _id: postId }, {
                    $push: {
                        comments: {
                            author: req.username,
                            body: text,
                            date: new Date()
                        }
                    }
                }, { new: true }, function(err, items) {
                    if (err) {
                        console.log(err)
                        return
                    }
                    res.status(200).send({ articles: [items] })
                })
            } else {
                Posts.update({ _id: postId, "comments._id": commentId }, 
                { $set: { "comments.$.body": text } }, { new: true }, function(err, items) {
                    if (err) {
                        console.log(err)
                        return
                    }
                    res.status(200).send({ articles: [items] })
                })
            }
        }
    })
}

function addArticle(req, res) {
    var img = req.body.image? req.body.image : ''
    new Posts({
        author: req.username,
        body: req.body.text,
        date: new Date(),
        picture: img,
        comments: []
    }).save(function(err, items) {
        //res.status(200).send({articles: [items]})
        Profiles.find({ username: req.username }).exec(function(err, items){
            var followings = items[0].following
            followings.push(req.username)
            Posts.find({author: {$in: followings}}).sort({ date: -1 }).exec(function(err, items) {
                res.status(200).send({ articles: items})
            })
        })
    })
}
