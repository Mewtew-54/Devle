const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.resolve(__dirname, '../client')));
app.use(express.static('/Users/Gahl/Desktop/Codesmith/Week 11/Devle/build'));

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'))
// });

app.get('/*', (req, res) => {
  console.log('route found');
  console.log(__dirname);
    res.status(200).sendFile('/Users/Gahl/Desktop/Codesmith/Week 11/Devle/build')
  })

function errorHandler(error, req, res, next) {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign(defaultErr, error);
  console.log(`Here is the error object's response: ${errorObj.log}`);
  res.status(errorObj.status).json(errorObj.message);
}

app.listen(3000, () => {
  console.log('express server is running on port 3000')
})


module.exports = app;