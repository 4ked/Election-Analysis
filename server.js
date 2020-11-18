const http = require('http');
const express = require('express');
const path = require('path');
const { Client } = require('pg');

// SERVER

const app = express();

const server = http.createServer(app);

app.use(express.json());
app.use(express.static("express"));
app.use(express.static(path.join(__dirname+'/')))

app.set('port', (process.env.PORT || 5000));

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

server.listen(process.env.PORT || 5000);
console.debug('Server listening on port ' + process.env.PORT);

/*
// Database connection
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL ? true : false
});

client.connect();

// Function that takes in a state id, sends back data for state
function getStateInfo(id) {
  client.query('SELECT * FROM states WHERE abbr = \'' + id + '\';', (err, res) => {
    if(err) throw err;
    for(let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
  });
}
*/
  