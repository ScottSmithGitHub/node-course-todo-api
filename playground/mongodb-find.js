//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }

  console.log('Connected to MongoDB server');

  // ALL
  db.collection('Todos').find().toArray().then((docs) => {
    console.log('Todos All');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // QUERY
  db.collection('Todos').find({completed: false}).toArray().then((docs) => {
    console.log('Todos filtered');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // QUERY with ObjectID
  db.collection('Todos').find({
      _id: new ObjectID('59a96f728481223a3c107882')
    }).toArray().then((docs) => {
    console.log('Todos filtered');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // QUERY with Count
  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // QUERY
  db.collection('Users').find({name: 'Scott Smith'}).toArray().then((docs) => {
    console.log('Users filtered');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
