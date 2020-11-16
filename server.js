const http = require('http');
const express = require('express');
const path = require('path');

const app = express();

const server = http.createServer(app);
const port = 3000;

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname+'/')))

// default URL for website
app.use('/', function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

// error handling middleware
const errorHandler = function(err, req, res, next) {
    if(err.status) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.render('error', { error : err });
    next(err);
};

app.use(errorHandler);

server.listen(port);
console.debug('Server listening on port ' + port);