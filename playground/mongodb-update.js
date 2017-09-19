const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err){
        return console.log('Unable to connect to MongoDB server');
    }

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('59c07bd2e20049b3eef5e7e6')
    // },{
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });    

    db.collection('Users').findOneAndUpdate({
        name:'Jen'
    }, {
        $set: {
            name: 'Agustin'
        },
        $inc: { age:10 }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    })


});