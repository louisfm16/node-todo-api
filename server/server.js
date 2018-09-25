// External Imports
const express = require('express');
const bodyParser = require('body-parser');

// Loacl Imports
var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(doc);
    });
});

app.listen(3000, () => {
    console.log('Started @ http://localhost:3000/');
});