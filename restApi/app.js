
const express = require('express');

const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());


//Import Routes
const postsRoute = require('./routes/posts');
const router = require('./routes/posts');
app.use('/posts',postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});

 //Connect to DB
 mongoose.connect("mongodb+srv://lyoung777:Test1234!@cluster0.hxtgm.mongodb.net/Perficient?retryWrites=true&w=majority", {userNewUrlParser: true}, () =>
    console.log('connected to DB!')
); 
//How to we start listening to to the server
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server is listening on: ${PORT} `)); 
