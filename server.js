const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const { initRoutes } = require('./blog-api/routes');
const morgan = require('morgan');
const port = process.env.local.NEXT_PUBLIC_API || 5000;

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('/public'));
app.use(
  fileUpload({
    createParentPath: true,
  }),
);
app.use(express.json());
app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

initRoutes(app);

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Сервер запущен ${port}`);
    });
  })
  .catch(console.log);

module.exports.app = app;
