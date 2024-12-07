//const express =  require ('express');
import express from 'express';
import path from 'path';
//const path =require('path')
import { fileURLToPath } from 'url';
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js';
//const posts = require('./routes/posts')

const PORT = process.env.PORT

//GET the directory name;
const __fileName = fileURLToPath(import.meta.url);
const  __dirname = path.dirname(__fileName);
const app = express();


//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//logger middleware
app.use(logger)

// set up static folder 
 app.use(express.static(path.join(__dirname,'public')))
 
// using Routes

app.use('/api/posts',posts);


//Error
app.use(notFound);

app.use(errorHandler);



app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))

//creating static folder
//app.use(express.static(path.join(__dirname,'public')));



/*//Get all posts
app.get('/api/posts',(req,res)=>{
    res.json(posts);
})*/

//get all posts when queried

/*
app.get('/api/posts/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter((post) => post.id ===id));
})

app.get ('/',(req,res) => {
 res.sendFile(path.join(__dirname,'public','index.html'));
})

app.get ('/about',(req,res) => {
    res.sendFile(path.join(__dirname,'public','about.html'));
   })
   */