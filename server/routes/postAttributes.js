const express = require('express');
const router = express.Router();
const PA = require('../models/postAttributes'); // Import your model functions

// Create a new post attribute  *****http://localhost:3000/postAttribute/savePostAttributes 
/* {

   "postAttributeId": 1, "likes": 10, "comments": ["Great post!", "Interesting content"] 

 }*/
router.post('/savePostAttributes', async (req, res) => {
  try {
    await PA.createPostAttribute(req.body);
    res.status(201).send('New post attribute created successfully');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Retrieve a post attribute by ID
router.get('/getPostAttributes/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await PA.getPostAttributeById(postId);
    if (post) {
      res.send(post);
    } else {
      res.status(404).send({ message: `Post attribute with ID ${postId} not found` });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Update a post attribute
router.put('/UpdatepostAttributes/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    await PA.updatePostAttribute(postId, req.body);
    res.send('Post attribute updated successfully');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// Delete a post attribute
router.delete('/DeletePostAttributes/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;
    await PA.deletePostAttribute(postId);
    res.send('Post attribute deleted successfully');
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

module.exports = router;
