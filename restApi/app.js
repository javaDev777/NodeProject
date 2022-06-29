
const express = require('express');

const app = express();

const mongoose = require('mongoose');


//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts',postsRoute);

//Routes
app.get('/', (req, res) =>{
    res.send('We are on home');
});

//Connect to DB
/* mongoose.connect(process.env.DB_CONNECTION, {userNewUrlParser: true}, () =>
    console.log('connected to DB!')
); */

//How to we start listening to to the server
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log(`server is listening on: ${PORT} `)); 
