require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const postRoutes = require('./routes/posts');

const app = express();

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PATCH", "DELETE", "PUT"],
        credentials: true,
        allowedHeaders: [
            'Content-Type',
        ]
    })
)

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.use('/', require('./routes/root'))

app.use('/posts', postRoutes);

app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})

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



