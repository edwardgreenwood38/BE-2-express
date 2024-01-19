// rquire needed modules
const express = require('express');

// initialize the app object
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});