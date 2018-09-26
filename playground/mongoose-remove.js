const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

// Todo.deleteOne({}).then((res) => {
//     console.log(res);
// });

// console.log('-------------------------------');
//
// Todo.findOneAndDelete('5baafd24d3b109bf9c5859c8').then((todo) => {
//     console.log(todo);
// });
