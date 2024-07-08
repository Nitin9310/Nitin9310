const mongoose = require('mongoose');
require('dotenv').config();

//define the mongodb connection URL
//const mongooseURL = 'mongodb://localhost:27017/merahotel';//merahotel is database name
const mongoURL = process.env.MONGODB_URL;
//const mongoURL=process.env.MONGODB_URL_LOCAL;
//Set up connection
// mongoose.connect(mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(mongoURL);


//Get the default connection
//Mongoose maintain a default connection object representing the Mongoose connection 
//to the MongoDB server.
const db = mongoose.connection;

//Define event listner for database connection

db.on('connected',()=>{
console.log('connected to mongodb server');
});


db.on('error',(err)=>{
    console.log('MongooDB connection error:',err);
    });


    db.on('disconnected',()=>{
console.log('MongoDB Disconnected');
});

  