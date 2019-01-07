const express = require('express');
const PostModel = require('../models/posts');

const router = express.Router();

//Получение постов
router.get('/', async (req, res, next) => {
  //Получаем данные, отсортированные по времени записи в базу
  const posts = await PostModel.find().sort({timestamp: -1});
  res.json(posts);
});

//Получение определенного количества постов
router.get('/quant', async (req, res, next) => {
  console.log('q', req.params);
  const posts = await PostModel.find().sort({timestamp: -1}).limit(4);
  res.json(posts);
});

//Получение последних постов
router.get('/top', async (req, res, next) => {
  //Получаем данные, отсортированные по времени записи в базу
  const posts = await PostModel.find().sort({timestamp: -1}).limit(8);
  res.json(posts);
});


//Получение одного поста по id
router.get('/:id', async (req, res, next) => {
  const post = await PostModel.find({_id: req.params.id});
  res.json(post);
});

// Добавление поста
router.post('/add', async (req, res, next) => {
  const post = new PostModel(req.body);
  res.json(post);
  await post.save();
  await PostModel.findOne({id: req.body.id});
});

module.exports = router;