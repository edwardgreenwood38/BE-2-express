// rquire needed modules
const express = require('express');

// initialize the app object
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
});


// listen on port 3000 for server
app.listen(3000, () => {
    console.log('Web server started');
});
