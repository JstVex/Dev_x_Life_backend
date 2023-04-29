const express = require('express');
const {
    getPosts
} = require('../controllers/postController');

const router = express();

router.get('/', getPosts);

module.exports = router;