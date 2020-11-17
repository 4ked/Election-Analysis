const http = require('http');
const express = require('express');
const path = require('path');
const { Client } = require('pg');

// SERVER

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

// DATABASE
/*
const client = new Client({
    connectionString: "postgres://fodonymaeoqrrm:1a0bff5d770f420332e8f3abaf50b95c68b4bac0ab7383944519b65b4f221831@ec2-54-158-122-162.compute-1.amazonaws.com:5432/d9sle3g0k73e01"
});
  
client.connect();
  client.query('SELECT *,states FROM information_schema.tables;', (err, res) => {
        if (err) throw err;
      for (let row of res.rows) {
          console.log(JSON.stringify(row));
  }
    client.end();
});
*/