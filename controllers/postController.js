const Post = require('../models/Posts');

// get all posts 
const getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json(posts)
}

module.exports = {
    getPosts
}