const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const apiRouter = require('./routes/api');

// parsing json and static files
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '/client')));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

//define route handler
app.use('/', apiRouter)

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'));
});


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