const db = require ('../connectPG.js');
const gameController = {};

gameController.getQuestion = (req, res, next) => {
  const queryStr = 'SELECT question FROM questions WHERE day::date = now()::date';
  db.query(queryStr)
    .then((data) => {
      console.log('retrieve question: ', data.rows);
      res.locals.question = data.rows;
      return next();
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught inside gameController.getQuestion',
        status: 400,
        message: {err: 'An error occurred inside gameController.getQuestion middleware'}})
    });
}

gameController.checkAnswer = (req, res, next) => {
  
}

module.exports = gameController;