const express = require('express');
const CommentModel = require('../models/comments');

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
  let comment = new CommentModel(req.body);
  res.json(comment);
  await comment.save();
  await CommentModel.findOne({id: req.body.id});
});

// Редактирование комментария
router.patch('/update/:commentId', async (req, res, next) => {
  const commentId = req.body._id;
  const text = req.body.text;
  await CommentModel.updateOne({_id: commentId}, {$set: {text: text}});
  res.json(req.body);
});

module.exports = router;