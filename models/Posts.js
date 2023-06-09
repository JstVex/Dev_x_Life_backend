const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    creationDate: {
        type: String,
        required: true
    },
    creationYear: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    category: {
        type: String
    }
})

module.exports = mongoose.model('Post', postSchema);