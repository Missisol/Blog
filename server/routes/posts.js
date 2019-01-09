const express = require('express');
const PostModel = require('../models/posts');
const UserModel = require('../models/users');

const router = express.Router();

//Получение постов
router.get('/', async (req, res) => {
  //Получаем данные, отсортированные по времени записи в базу
  const posts = await PostModel.find().sort({timestamp: -1})
    .catch((error) => {
      console.log(error);
    });
  res.json(posts);
});

//Получение последних постов
router.get('/top', async (req, res) => {
  //Получаем данные, отсортированные по времени записи в базу
  const posts = await PostModel.find().sort({timestamp: -1}).limit(8)
    .catch((error) => {
      console.log(error);
    });
  res.json(posts);
});

//Получение одного поста по id
router.get('/post/:id', async (req, res) => {
  const post = await PostModel.findOne({_id: req.params.id})
    .catch((error) => {
      console.log(error);
    });
  res.json(post);
});

// //Получение постов по userId
router.get('/:userId', async (req, res) => {
  const posts = await PostModel.find({userId: req.params.userId})
    .catch((error) => {
      console.log(error);
    });
  res.json(posts);
});

// Добавление поста
router.post('/add', async (req, res) => {
  try {
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
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;