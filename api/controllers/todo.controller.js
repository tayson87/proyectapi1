//models
const { Todo } = require('../models/todo.model');


//util
const { filterObj } = require ('../util/filterObject');


exports.getAlltodos = async  (req, res) => {
    try {
        const todoDb = await Todo.findAll()
    res.status(200).json({
        status: 'success',
        data: {
          todoDb
        },
    }); 
    } catch (error) {
        console.log(error);
        
    }
        
};

exports.getTodosById = async  (req, res) => {
    try {
        const { id } = req.params;

       const todo = await  Todo.findOne({ 
             where: {
                id
            }
        });

        if(!todo) {
            res.status(404).json({
                status: 'error',
                message : 'not found with the  given ID '
            });
            return;
        }
        res.status (200).json({
            status: 'success',
            data: {
                todo,
            },
        });
    } catch (error) {
        console.log(error);
    }   
};

exports.createTodos =  async ( req, res) => {
    try {
        const { content } = req.body;

        const newTodo = await Todo.create({
            content: content,            
           });   
       res.status(201).json({
           status:'success',
           data: { newTodo},
       });           
    } catch (error) {
        console.log(error);
    }
};
  

exports.updateTodoPach = async  (req, res) => {
    try {
        const { id } = req.params;
        const data = filterObj(req.body, 'content' );

       const todo = await Todo.findOne({
            where: { id }
        });   
           
        if(!todo) {
            res.status(404).json({
                status: 'error',
                message: 'cant update todo, invalide ID ',
            });
            return;
        }        
        await todo.update(
            { 
                ...data
            });      

        res.status(204).json({
            status: 'success'
        });    
    } catch (error) {
        console.log(error);
    }
   
};

exports.deleteTodos = async  (req, res) => {
    try {
        const { id } = req.params;

        const todo = await Todo.findOne(
            {
                 where: {id}
                });

        if(!todo ) {
            res.status(404).json({
                status: 'error',
                message: 'cant  delete todo invalid ID',
            });
            return;
        }

        await todo.destroy();      
    
        res.status(204).json({
            status: 'success'
        });
    } catch (error) {
        console.log(error);
    }
   
};