const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, '/client')));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.get('/*', (req, res) => {
    console.log('/*')
    res.sendFile(path.join(__dirname, '../build/'))
  })

app.listen(3000, () => {
    console.log('express server is running on port 3000')
})

module.exports = app;