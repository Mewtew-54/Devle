const express = require('express');
const app = express();
const Router = express.Router();

// require middleware here
const gameController = require('./controllers/gameController.js');


//login
Router.post('/login', (req, res) => {
    return res.status(200).json(res.locals);
});
//signup
Router.post('/signup', (req, res) => {
    return res.status(200);
});
//get the definition for the game
Router.get('/', (req, res) => {
    return res.status(200).json(res.locals.question);
});
//user guesses answer
Router.post('/guess', (req, res) => {
    return res.status(200).json(res.locals.answer);
});


module.exports = Router;