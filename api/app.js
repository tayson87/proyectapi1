// Create server Express

// Define endpoint for ToDos
// GET fetch all ToDos
// POST Create new ToDo
// PATCH Update ToDo given an ID
// DELETE Delete ToDo given an ID (destroy or soft delete)

// Establish a connection with a Database (Postgress)

// Create ToDo model (id, content, status)
// Use the model to interact with the controller functions

// Must structure project with routes, controllers and models folders (utils)

// IMPORTANT: Prettier format

// Install cors library (npm i cors)
// app.use(cors())


const express =  require('express');
const cors = require('cors')


//util
const { sequelize } = require('./util/database');
const {  todosRouter } = require('./routes/todo.routes');

const app = express();
app.use(express.json());
app.use(cors());






app.use('/api/v1/todos', todosRouter);

sequelize.authenticate()
.then(() => console.log('database authenticate'))
.catch(error => console.log(error));

sequelize.sync()
.then(() => console.log('Database Synced'))
.catch(error => console.log(error))

app.listen(4000, () => {
    console.log('Express app running');
});

