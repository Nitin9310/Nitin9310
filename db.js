const mongoose = require('mongoose');

//define the mongodb connection URL
const mongooseURL = 'mongodb://localhost:27017/merahotel';//merahotel is database name

//Set up connection
// mongoose.connect(mongooseURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect(mongooseURL);


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

  