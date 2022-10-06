const express = require('express');
const app = express();

app.get("/api", (req, res) => {
    res.status(200).json({users: ["userOne", "userTwo", "userThree", "userFour"]})
})

app.listen(5000, () => { console.log("Server is running on port 5000") })

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows[0].solution);
});

connection.end();