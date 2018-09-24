// Destructuring example
//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err)
    {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDb server');
    const db = client.db('TodoApp');

/*
    db.collection('Todos').insertOne({
        text: 'Something to do',
        complete: false
    }, (err, result) => {
        if(err)
        {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });
*/

/*
    db.collection('Users').insertOne({
        name: 'Name 1',
        age: 21,
        location: 'California'
    }, (err, result) => {
        if(err)
        {
            return console.log('Unable to insert user', err);
        }

        console.log(result.ops[0]._id.getTimestamp());
    });
*/

    client.close();
});
