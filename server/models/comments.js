const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  name: String,
  commentId: Number,
  userId: Number,
  body: String
});

module.exports = mongoose.model('Comment', commentSchema);