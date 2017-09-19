const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    // db.collection('Todos').find({
    //     _id : new ObjectID('59c07096e20049b3eef5dcf8') 
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos cocunt: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);        
    // });

    db.collection('Users').find({
        name:'Agustin'
    }).toArray().then((docs) => {
            console.log('Users');
            console.log(JSON.stringify(docs, undefined, 2));
        }, (err) => {
            console.log('Unable to fetch users', err);
        });

    // db.close();
});