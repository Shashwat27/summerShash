const express = require('express');
const Post = require('../models/post');
const router = express.Router();

// Create a post   **********http://localhost:3000/post/createPost/trudo
router.post('/createPost/:username', async (req, res) => {
    try {
        
        const description = req.body.description;
        const username = req.params.username;
        const newPost = await Post.createPost( description, username);
        
        res.status(201).send(newPost);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Get a single post
router.get('/getPost/:id', async (req, res) => {
    try {
        const post = await Post.getPost(req.params.id);
        if (!post) {
            return res.status(404).send({ message: 'Post not found' });
        }
        res.send(post);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Update a post
router.put('/update/:id', async (req, res) => {
    try {
        const {  description } = req.body;
        const updatedPost = await Post.updatePost(req.params.id, description);
        if (!updatedPost) {
            return res.status(404).send({ message: 'Post not found or no changes made' });
        }
        res.send(updatedPost);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Delete a post
router.delete('/delete/:id', async (req, res) => {
    try {
        const deletedPost = await Post.deletePost(req.params.id);
        res.send({ success: true, message: 'Post deleted successfully' });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

// Get all posts
router.get('/posts', async (req, res) => {
    try {
        const posts = await Post.getAllPosts();
        res.send(posts);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

module.exports = router;
