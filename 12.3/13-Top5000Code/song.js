const mysql = require('mysql');
const inquirer = require('inquirer')

let connection = mysql.createConnection({
    host:'localhost',
    port:3306,
    user:'root',
    password: "",
    database: "top_song5000"
});
connection.connect(function(err){
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
}