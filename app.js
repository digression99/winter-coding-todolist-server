
require('./config');

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const {
    PORT,
    NODE_ENV,
    MONGODB_URI
} = process.env;



const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));

    app.get('*', (req, res) => {
        console.log(path.join(__dirname, '../client/build/index.html'));
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
} else {
    app.use(require('morgan')('dev'));
}

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// // error handler
// app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//     // render the error page
//     res.status(err.status || 500);
// });

module.exports = app;
