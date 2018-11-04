const mongoose = require('mongoose');
const Todo = mongoose.model('todo');

const addTodo = async (req, res) => {
    const { todo } = req.body;
    try {
        const newTodo = new Todo(todo);
        await newTodo.save();
        res.status(200).json(todo);
    } catch (e) {
        console.log(e);
        res.status(422).send(e);
    }
};

const updateTodo = async (req, res) => {
    const { todo } = req.body;
    try {
        await Todo.updateOne({ _id : todo._id }, todo);
        res.status(200).json({ ...todo });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.body;
    try {
        await Todo.findByIdAndRemove(id);
        res.status(200).json(id);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
};

const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find({});
        res.status(200).json({
            todos
        });
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
};

module.exports = {
    addTodo,
    updateTodo,
    deleteTodo,
    getTodos
};