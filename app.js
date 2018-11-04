
require('./config');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const proxy = require('http-proxy-middleware');
const cors = require('cors');

const {
    PORT,
    NODE_ENV
} = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(proxy('/api/*', {target : 'http://localhost:5000'}));

require('./models/todo');

app.use(require('./api'));

if (NODE_ENV === 'production') {
    mongoose.connect(process.env.MONGODB_URI_PRODUCTION)
        .then(() => console.log('successfully connected to mongodb production uri.'),
            e => console.log('error occured during connecting to mongodb production', e));

    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        console.log(path.join(__dirname, '../client/build/index.html'));
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
} else {
    mongoose.connect(process.env.MONGODB_URI_LOCAL)
        .then(() => console.log('successfully connected to mongodb production uri.'),
            e => console.log('error occured during connecting to mongodb production', e));

    app.use(require('morgan')('dev'));
    app.get('*', (req, res) => {
        res.send('invalid request.');
    })
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});



module.exports = app;
