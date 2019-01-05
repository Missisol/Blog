const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const routeComments = require('./routes/comments');

mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true });

const app = express();
const server = http.Server(app);

app.use(cors());
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use('/api/comments', routeComments);

//
// app.use(function (req, res, next) {
//   let error = new Error('Page not found');
//   error.status = 404;
//   next(error);
// });
//
// app.use(function (error, req, res) {
//   res.status(error.status || 500);
//   res.json({
//     message: error.message,
//     error,
//   })
// });

server.listen(3000, () => {
  console.log('Server has been started');
});