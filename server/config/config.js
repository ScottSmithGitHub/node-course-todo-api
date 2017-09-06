var env = process.env.NODE_ENV || 'development';

if (env ==='development') {
  process.env.port = 3000
  //process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoApp'
  process.env.MONGODB_URI = 'mongodb://54.83.92.56:27017/ToDoApp'
} else if (env === 'test') {
  process.env.port = 3000
  //process.env.MONGODB_URI = 'mongodb://localhost:27017/ToDoAppTest'
  process.env.MONGODB_URI = 'mongodb://54.83.92.56:27017/ToDoAppTest'
}