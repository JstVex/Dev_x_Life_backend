const express = require('express');
const {
    getPosts,
    createPost
} = require('../controllers/postController');

const router = express();

router.get('/', getPosts);
router.post('/', createPost);

module.exports = router;