const db = require ('../connectPG.js');
const gameController = {};

// grab question of the day

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
        message: {err: 'An error occurred inside gameController.getQuestion middleware', err}})
    });
}

// check passed in input to answer in db

gameController.checkAnswer = (req, res, next) => {
  console.log('inside checkAnswer middleware');
  const {answer} = req.body;
  console.log(req.body); //{guess: 'filter()}
  const verifyQ = 'SELECT answer FROM questions WHERE day::date = now()::date';
  const param = [answer]
  db.query(verifyQ)
    .then((data) => {
      console.log('retrieved answer: ', data.rows[0].answer);
      console.log(param[0])
      if (data.rows[0].answer == param[0]){
        res.locals.win = true;
        return next();
      } else {
        res.locals.win = false;
        return next();
      }
    })
    .catch((err) => {
      return next({
        log: 'Express error handler caught inside gameController.checkAnswer',
        status: 400,
        message: {err: 'An error occurred inside gameController.checkAnswer middleware', err}
      })
    });
}

module.exports = gameController;