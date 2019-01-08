const express = require('express');
const PostModel = require('../models/posts');
const UserModel = require('../models/users');

const router = express.Router();

//Получение пользователей
router.get('/', async (req, res, next) => {
  //Получаем данные, отсортированные по времени записи в базу
  const users = await UserModel.find();
  res.json(users);
});

//Получение одного поста по id
// router.get('/:id', async (req, res, next) => {
//   const post = await PostModel.find({_id: req.params.id});
//   res.json(post);
// });

module.exports = router;