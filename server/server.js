const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(express.static(path.resolve(__dirname, '../client')));

app.use('/build', express.static(path.join(__dirname, '../build')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

//define route handler
app.use('/api', apiRouter)

// app.get('/', (req, res) => {
//   return res.status(200).sendFile(path.join(__dirname, '../index.html'))
// });

// app.get('/*', (req, res) => {
//   console.log('route found');
//   console.log(__dirname);
//     res.status(200).sendFile('/Users/Gahl/Desktop/Codesmith/Week 11/Devle/build')
//   })

// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../index.html'));
// });


// ---- error handlers ---- //

// local error 
app.use('*', (req, res) => {
    res.status(404).send('404: Not Found');
});

// globabl error
app.use((err, req, res, next) => {
    const errObj = {
      log: 'Express error handler caught unknown middleware error',
      status: 400,
      message: {err: 'An error occurred'}
    };
    return res.status(errObj.status).json(errObj);
  })


app.listen(PORT, () => {
    console.log(`express server is running on port ${PORT}`);
});


module.exports = app;