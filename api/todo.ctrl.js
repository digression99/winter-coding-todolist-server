const mongoose = require('mongoose');

export const addTodo = async (req, res) => {
    const todo = req.body;
    console.log('add todo');

    res.send('add todo');
};

export const updateTodo = async (req, res) => {
    const todo = req.body;

    console.log('update todo');
    console.log('todo : ', JSON.stringify(todo));
    res.send('update todo');
};

export const deleteTodo = async (req, res) => {
    const { id } = req.body;

    console.log('id : ', id);
    console.log('delete todo');

    res.send('delete todo.');
};

export const getTodos = async (req, res) => {

    console.log('get todos.');
    res.send('get todos.');
};

