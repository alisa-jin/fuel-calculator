const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const PORT = 3000;
const foodController = require('./controllers/foodController.js')


mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
  console.log('Connected to Database!!!!!!!!!!!!!!!');
});

app.use(express.json()); // LMAO LOOK AT THIS! SHEEEEESH LOL! LOL! :P
// oh my bruh
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, '../src')))

app.get('/api/foods', foodController.getFoods, (_, res) => res.status(200).json(res.locals.allFoods));

app.post('/api/foods', foodController.addFood, (_, res) => {
  console.log('OYOYOYYOYOYOYOYOYOO');
  return res.status(200).json(res.locals.newFood)}
)

app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });

  module.exports = app;