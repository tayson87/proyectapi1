const express = require('express');
const router = express.Router();

//controllers
const  { getAlltodos,
     getTodosById, 
     createTodos,
     updateTodoPach,
     deleteTodos} = require('../controllers/todo.controller')

// GET  http://localhost:4000/todos
router.get('/', getAlltodos);

// GET  http://localhost:4000/todos/:id
router.get('/:id', getTodosById);

// POST  http://localhost:4000/todos
router.post('/', createTodos);

// PATCH  http://localhost:4000/todos/:id
router.patch('/:id' , updateTodoPach);

// DELETE  http://localhost:4000/todos/:id
router.delete('/:id' , deleteTodos);

module.exports = { todosRouter: router}; 