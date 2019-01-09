const express = require('express');
const UserModel = require('../models/users');

const router = express.Router();

//Получение пользователей
router.get('/', async (req, res) => {
  const users = await UserModel.find()
    .catch((error) => {
      console.log(error);
    });
  res.json(users);
});

//Получение одного пользователя по id
router.get('/:id', async (req, res) => {
  const user = await UserModel.findOne({_id: req.params.id})
    .catch((error) => {
      console.log(error);
    });
  res.json(user);
});

module.exports = router;