//const express = require ('express');
import express from 'express'
import { createPost, deletePost, updatePost, getPost,getPosts } from '../controllers/postController.js'
const router = express.Router();




//creating static folder


/*//Get all posts
app.get('/api/posts',(req,res)=>{
    res.json(posts);
})*/

//get all posts when queried
router.get('/', getPosts)


// Get a single post
router.get('/:id', getPost)

//Create new post 
router.post('/', createPost);

//Update Post
router.put('/:id',updatePost)
//Delete post
router.delete('/:id',deletePost)
//module.exports = router;
export default router;