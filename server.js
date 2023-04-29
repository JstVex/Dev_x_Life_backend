const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors')

const app = express();

app.listen('4040', () => {
    console.log('running on port 4040')
})