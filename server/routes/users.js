const express = require('express');
const PostModel = require('../models/posts');
const UserModel = require('../models/users');

const router = express.Router();

//Получение пользователей
router.get('/', async (req, res, next) => {
  const users = await UserModel.find();
  res.json(users);
});

//Получение одного пользователя по id
router.get('/:id', async (req, res, next) => {
const user = await UserModel.findOne({_id: req.params.id});
res.json(user);
});

module.exports = router;