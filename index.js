// rquire needed modules
const express = require('express');


// initialize the app object
const app = express();

app.get('/', function (req, res) {
    res.send('<h1>Hello world</h1><p>Added Nodemon!</p>');
});

// second route
app.get('/second', function (req, res) {
    res.send('Second route!');
});

// third route
app.get('/third', function (req, res) {
    res.send('Third route');
});


// listen on port 3000 for server
app.listen(3000, () => {
    console.log('Web server started');
});
