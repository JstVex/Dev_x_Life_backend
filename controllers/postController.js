const Post = require('../models/Posts');
const mongoose = require('mongoose');

// get all posts 
const getPosts = async (req, res) => {
    const posts = await Post.find({});
    res.status(200).json(posts)
}

const getPost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'no such post' })
    }

    const post = await Post.findById(id);

    if (!post) {
        return res.status(404).json({ error: 'no such post' })
    }

    res.status(200).json(post)
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

// delete a post 
const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This post does not exist' });
    }

    const post = await Post.findOneAndDelete({ _id: id });
    const returnRemainingPosts = await Post.find({});

    if (!post) {
        return res.status(404).json({ error: 'This post does not exist' });
    }

    res.status(200).json(returnRemainingPosts)
}

// update a post 
const updatePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'This post does not exist' })
    }

    const post = await Post.findOneAndUpdate({ _id: id }, { ...req.body }, {
        new: true
    });

    if (!post) {
        return res.status(404).json({ error: 'this post does not exist' })
    }

    res.status(200).json(post);
}

module.exports = {
    getPosts,
    getPost,
    createPost,
    deletePost,
    updatePost
}