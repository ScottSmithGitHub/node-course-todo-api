//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // findOneAndUpdate

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('59a971b0f208c019584d890f')
  }, {
    $set: {
      name: 'Brandon'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  //db.close();
});
