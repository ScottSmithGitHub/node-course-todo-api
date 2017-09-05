const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Remove everything
// No doc returned

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Doc returned that was removed

Todo.findOneAndRemove({_id: '59aeb25a44b4f31a4ea761b5'}).then((todo) => {
    console.log(todo);
});

Todo.findByIdAndRemove('59aeb25a44b4f31a4ea761b5').then((todo) => {
    console.log(todo);
});