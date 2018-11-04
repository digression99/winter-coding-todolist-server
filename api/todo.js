const router = require('express').Router();

const {
    addTodo,
    updateTodo,
    deleteTodo,
    getTodos
} = require('./todo.ctrl');

router.post('/',addTodo);
router.patch('/', updateTodo);
router.delete('/', deleteTodo);
router.get('/', getTodos);

module.exports = router;