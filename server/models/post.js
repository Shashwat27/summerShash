const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    postId: {
        type: Number,
        unique: true,
        required: true,
      },
    description: [String],
    username:[String]
});


const Post = mongoose.model('Post', postSchema);

const sequenceSchema = new mongoose.Schema({
    name: String,
    value: { type: Number, default: 0 },
  });
  
  const Sequence = mongoose.model('Sequence', sequenceSchema);
  async function getNextSequence(sequenceName) {
    const sequence = await Sequence.findOneAndUpdate(
      { name: sequenceName },
      { $inc: { value: 1 } },
      { new: true, upsert: true }
    );
    return sequence.value;
  }

  
async function createPost(description, username) {
    const postId = await getNextSequence('postId'); // Retrieve the auto-increment ID
    const newPost = new Post({
        postId,
        description,
        username
    });

    await newPost.save();
    return newPost;
}

async function getPost(postId) {
    return await Post.findOne({ postId }).populate('username');
}

async function updatePost(_id, description) {
    const updateResult = await Post.findOneAndUpdate(
        { _id },
        { description}
    );
    return updateResult;
}

async function deletePost(_id) {
    const deleteResult = await Post.findOneAndDelete({ _id });
    if (!deleteResult) {
        throw new Error('No post found with the given postId');
    }
    return deleteResult;
}

async function getAllPosts(username) {
    return await Post.find({ username });
    return posts;
}

module.exports = { Post, createPost, getPost, updatePost, deletePost, getAllPosts };
