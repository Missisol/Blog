const express = require('express');
const CommentModel = require('../models/comments');
const UserModel = require('../models/users');

const router = express.Router();

//Получение комментариев
router.get('/', async (req, res, next) => {
  await CommentModel.find({}, (err, comments) => {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

//Получение комментариев по id поста
router.get('/:postId', async (req, res, next) => {
  const postId = req.params.postId;
  await CommentModel.find({postId: postId}, (err, comments) => {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Удаление комментария
router.delete('/delete/:_id', async (req, res, next) => {
  const commentId = req.params._id;
  await CommentModel.deleteOne({_id: commentId});
  res.json(req.params);
});

// Добавление комментария
router.post('/add', async (req, res, next) => {
  const username = req.body.author;
  const email = req.body.email;
  const title = req.body.title;
  const text = req.body.text;
  const postId = req.body.postId;

  const user = await UserModel.findOne({username: username, email: email});
  if (user === null) {
    let newUser = new UserModel({username: req.body.author, email: req.body.email});
    await newUser.save();
    newUser = await UserModel.findOne({username: username, email: email});
    const comment = new CommentModel({
      author: username,
      email: email,
      title: title,
      text: text,
      postId: postId,
      userId: newUser._id,
    });
    await comment.save();
  } else {
    const comment = new CommentModel({
      author: username,
      email: email,
      title: title,
      text: text,
      postId: postId,
      userId: user._id,
    });
    await comment.save();
  }
  const newComment = await CommentModel.findOne({author: username, email: email, title: title, text: text});
  res.json(newComment);
});

// Редактирование комментария
router.patch('/update/:commentId', async (req, res, next) => {
  const commentId = req.body._id;
  const text = req.body.text;
  await CommentModel.updateOne({_id: commentId}, {$set: {text: text}});
  res.json(req.body);
});

module.exports = router;