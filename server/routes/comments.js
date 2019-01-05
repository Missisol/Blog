const express = require('express');
const CommentModel = require('../models/comments');

const router = express.Router();

//Получение комментариев
router.get('/', async (req, res, next) => {
  //Получаем данные
  await CommentModel.find({}, (err, comments) => {
    if (err) {
      return next(err);
    }
    res.json(comments);
  });
});

// Удаление комментария
router.delete('/delete/:commentId', async (req, res, next) => {
  const commentId = req.params.commentId;
  await CommentModel.deleteOne({commentId: commentId});
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
  const commentId = req.body.commentId;
  const text = req.body.text;
  await CommentModel.updateOne({commentId: commentId}, {$set: {body: text}});
  res.json(req.body);
});

module.exports = router;