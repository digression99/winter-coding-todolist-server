const api = require('express').Router();
const todoRouter = require('./todo');

api.use('/api', todoRouter);

module.exports = api;

