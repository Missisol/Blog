const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  author: { type: String, required: true },
  email: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  postId: { type: String, required: true },
  userId: { type: String, required: true },
  timestamp: {type: Date, default: new Date()},
});

module.exports = mongoose.model('Comment', commentSchema);