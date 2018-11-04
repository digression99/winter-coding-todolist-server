const mongoose = require('mongoose');
const Todo = mongoose.model('todo');

const addTodo = async (req, res) => {
    const {
        title,
        content
    } = req.body;

    try {
        const todo = new Todo({
            title,
            content
        });

        await todo.save();

        res.status(200).json(todo);
    } catch (e) {
        console.log(e);
        res.status(422).send(e);
    }
};

const updateTodo = async (req, res) => {
    const { todo, id } = req.body;
    console.log('update todo');
    console.log('todo : ', JSON.stringify(todo));

    try {
        Todo.updateOne({ _id : id }, {
            $set : {...todo}
        });

        res.status(200).json({ ...todo });
    } catch (e) {
        console.log(e);
        res.status(400).send(e);
    }
};

const deleteTodo = async (req, res) => {
    const { id } = req.body;
    console.log('id : ', id);

    try {
        await Todo.findByIdAndRemove(id);
        res.status(200).json(id);
    } catch (e) {
        console.log(e);
        res.status(400).json(e);
    }
};

const getTodos = async (req, res) => {
    console.log('get todos.');
    res.send('get todos.');

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