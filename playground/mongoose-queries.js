const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var id = '5ba99eab1aae52065088dbbd';

// if(!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

console.log('\n\n----------------------------------------------------------------\n\n');

User.findById(id).then((user) => {
    // No user found
    if(!user) {
        return console.log('User was not found!');
    }

    console.log('User by id', user);
}).catch((e) => console.log(e));

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found!');
//     }
//
//     console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));
