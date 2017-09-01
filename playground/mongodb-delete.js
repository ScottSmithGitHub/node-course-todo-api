//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // deleteMany

  db.collection('Users').deleteMany({name: 'Scott Smith'}).then((result) => {
    console.log(result);
  });

  // deleteOne

  db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    console.log(result);
  });


  // findOneAndDelete

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('59a972c70fa6501e8c753210')
  }).then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
  });

  //db.close();
});
