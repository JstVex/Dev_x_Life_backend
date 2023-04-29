require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

const app = express();

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log('running on port', port);
        })
    })
    .catch((err) => {
        console.log(err);
    })



