const { DataTypes } = require('sequelize');


//util
const { sequelize } = require('../util/database');

 const Todo = sequelize.define('todo', {
     id: {
         primaryKey: true,
         type: DataTypes.INTEGER,
         autoIncrement: true,
         allowNull: false,
     },
     content: {
         type: DataTypes.STRING(255),
         allowNull: false,
     },
     status: {
        type: DataTypes.STRING(255),
        allowNull: false, 
        defaultValue: 'active',  
     },
 });


 module.exports = { Todo };