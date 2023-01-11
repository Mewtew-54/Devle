const express = require('express');
const app = express();
const Router = express.Router();

// require middleware here
const gameController = require('../controllers/gameController.js');

app.get('/', (req, res) => {
    res.status(200).send('Hello from the back-end')
  });

//login
Router.post('/login', (req, res) => {
    return res.status(200).json(res.locals);
});
//signup
Router.post('/signup', (req, res) => {
    return res.status(200);
});
//get the definition for the game
Router.get('/', gameController.getQuestion, (req, res) => {
    return res.status(200).json(res.locals.question);
});
//user guesses answer
Router.post('/guess', gameController.checkAnswer, (req, res) => {
    return res.status(200).json(res.locals.win);
});
//number of attempts that day
Router.post('/attempts', gameController.saveAttempts, (req, res) => {
    return res.status(200);
})
// get all the attempts for stats
Router.get('/attempts', gameController.getAttempts, (req, res) => {
    return res.status(200).json(res.locals.attempts);
})


module.exports = Router;