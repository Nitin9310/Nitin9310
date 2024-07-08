const express = require('express')
const app = express()//app ma express sa server ka blueprint dal diya
const db = require('./db');
require('dotenv').config();


const bodyParser = require('body-parser');
app.use(bodyParser.json());//convert json to javascript object
//store in req.body

const PORT = process.env.PORT ||3000;

//stablishing person data blueprint
// const person = require('./models/person');
// const menu = require('./models/menu');

app.get('/', function (req, res) {
  res.send('Welcome to are hotel.....')
})

    //importing the router file
    const personRouter = require('./routes/personRoutes');
    const menuRouter = require('./routes/menuroutes');
    //use routes
    app.use('/person',personRouter);
    app.use('/menu',menuRouter);

//comment added for testing purpose


app.listen(PORT,()=>{
    console.log('Server is running on port 3000')
})//3000 is portgit 