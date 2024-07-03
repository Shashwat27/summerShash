const mongoose = require('mongoose');
const postAttribute = new mongoose.Schema({
    postAttributeId: {
        type: Number,
        unique: true,
        required: true,
      },
    likes: Number,
    comments:[String],
    username:String
});


const PostAttribute = mongoose.model('PostAttribute', postAttribute);


async function createPostAttribute(postData) {
    try {
      const newPost = await PostAttribute.create(postData);
      console.log('New post attribute created:', newPost);
    } catch (error) {
      console.error('Error creating post attribute:', error.message);
    }
  }
  

  async function getPostAttributeById(postId) {
    try {
      const post = await PostAttribute.findOne({ postAttributeId: postId });
      return post;
      console.log(post)
      
    } catch (error) {
      console.error('Error fetching post attribute:', error.message);
    }
  }


  async function updatePostAttribute(postId, newData) {
    try {
      const updatedPost = await PostAttribute.findOneAndUpdate(
        { postAttributeId: postId },
        newData,
        { new: true } 
      );
      console.log('Updated post attribute:', updatedPost);
    } catch (error) {
      console.error('Error updating post attribute:', error.message);
    }
  }


  async function deletePostAttribute(postId) {
    try {
      await PostAttribute.deleteOne({ postAttributeId: postId });
      console.log(`Post attribute with ID ${postId} deleted.`);
    } catch (error) {
      console.error('Error deleting post attribute:', error.message);
    }
  }

  module.exports = { PostAttribute, createPostAttribute, getPostAttributeById, updatePostAttribute, deletePostAttribute };
