// rquire needed modules
const express = require('express');

// initialize the app object
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});

// second route
app.get('/second', function (req, res) {
    res.send('Second route');
})


// listen on port 3000 for server
app.listen(3000, () => {
    console.log('Web server started');
});
