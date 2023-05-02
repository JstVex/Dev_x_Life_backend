const Post = require('../models/Posts');

// get all posts 
const getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json(posts)
}

// post new post
const createPost = async (req, res) => {
    const { title, image, creationDate, text } = req.body;

    let emptyFields = [];

    if (!title) {
        emptyFields.push('title');
    }
    if (!image) {
        emptyFields.push('title');
    }
    if (!creationDate) {
        emptyFields.push('title');
    }
    if (!text) {
        emptyFields.push('title');
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'these fields are missing', emptyFields });
    }

    try {
        const post = await Post.create({ title, image, creationDate, text });
        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

module.exports = {
    getPosts,
    createPost
}