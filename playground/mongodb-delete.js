const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat A LOT'}).then((result)=> {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unabled to delete');
    // });

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'pepe loco'}).then((result)=> {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unabled to delete');
    // });
    
    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false})
    //     .then((result)=> {
    //     console.log(result);
    // }, (err) => {
    //     console.log('Unabled to delete');
    // });

    db.collection('Users')
        .deleteMany({name:'jose'})
        .then((result) => {
            console.log('Andrews deleted');
    });

    db.collection('Users')
        .findOneAndDelete({_id: new ObjectID('5981380beea2c52ec8257292')})
        .then((result)=>{
            console.log('Mike was deleted');
    });
    
    db.collection('Users').find().toArray().then((docs)=>{
        console.log('Todos:')
        console.log(JSON.stringify(docs, undefined, 2));
    });

});