const mongoose = require('mongoose');

const Level = new mongoose.Schema({
    levelId: { type: Number, required: true, unique: true },
    score:Number,
    distance: Number,
    success: String
  });
  
  
  const level = mongoose.model('level', Level);

  async function getLevelById(levelId) {
    try {
      return await Level.findOne({ levelId });
     
    } catch (error) {
      console.error( error.message);
    }
  }

  async function deleteLevel(id) {
    try{
    await Level.deleteOne({"_id": id});
}
catch(error){
    console.log(error.message)
}
  };

  module.exports = { Level, getLevelById, deleteLevel};