const express = require('express');
const PostModel = require('../models/posts');
const UserModel = require('../models/users');

const router = express.Router();

//Получение постов
router.get('/', async (req, res, next) => {
  //Получаем данные, отсортированные по времени записи в базу
  const posts = await PostModel.find().sort({timestamp: -1});
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
  const username = req.body.author;
  const email = req.body.email;
  const title = req.body.title;
  const text = req.body.text;

  const user = await UserModel.findOne({username: username, email: email});
  if (user === null) {
    let newUser = new UserModel({username: req.body.author, email: req.body.email});
    await newUser.save();
    newUser = await UserModel.findOne({username: username, email: email});
    const post = new PostModel({
      author: username,
      email: email,
      title: title,
      text: text,
      userId: newUser._id,
    });
    await post.save();
  } else {
    const post = new PostModel({
      author: username,
      email: email,
      title: title,
      text: text,
      userId: user._id,
    });
    await post.save();
  }
  const newPost = await PostModel.findOne({author: username, email: email, title: title, text: text});
    res.json(newPost);
});

//Получение пользователей
// router.get('/', async (req, res, next) => {
//   //Получаем данные, отсортированные по времени записи в базу
//   const users = await UserModel.find();
//   res.json(users);
// });


module.exports = router;