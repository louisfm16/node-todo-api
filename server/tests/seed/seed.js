const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');
const {Todo} = require('./../../models/todo.js');
const {User} = require('./../../models/user.js');

var someSecretVal = '123abc'; // Will be salted & moved to config file

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [{
    _id: userOneId,
    email: 'example@example.com',
    password: 'winning1',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, someSecretVal).toString()
    }]
}, {
    _id: userTwoId,
    email: 'example2@example.com',
    password: 'winning2'
}];

const todos = [{
    _id: new ObjectID(),
    text: 'First test todo'
},
{
    _id: new ObjectID(),
    text: 'Second test todo',
    completed: true,
    completedAt: 666
}];

const populateTodos = (done) => {
    Todo.deleteMany({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();

        return Promise.all([userOne, userTwo]);
    }).then(() => done());
};

module.exports = {
    todos,
    populateTodos,
    users,
    populateUsers
}
