var mongoose = require('mongoose');

var uri = 'mongodb://54.83.92.56:27017/ToDoApp';

mongoose.Promise = global.Promise;
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect(uri);

module.exports = {mongoose};
