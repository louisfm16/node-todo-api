// Destructuring example
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

/*
    // deleteMany
    db.collection('Todos')
    .deleteMany({
        text: 'Eat Lunch'
    })
    .then((result) => {
        console.log(result);
    });
*/

/*
    // deleteOne
    db.collection('Todos')
    .deleteOne({text: 'Eat Lunch'})
    .then((result) => {
        console.log(result);
    });
*/

/*
    // findOneAndDelete
    db.collection('Todos')
    .findOneAndDelete({completed: false})
    .then((result) => {
        console.log(result);
    });
*/

    db.collection('Users').deleteMany({name: 'Name 1'});

    db.collection('Users')
    .findOneAndDelete({
        _id: new ObjectID("5ba825ee9c6a5e0bc0919757")
    })
    .then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });

    //client.close();
});
