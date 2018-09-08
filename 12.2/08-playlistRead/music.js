const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "123",
  database: "noiseDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    afterConnection();
  });
  


  function createProduct() {
    console.log("Inserting a new music...\n");
    var query = connection.query(
      "INSERT INTO music SET ?",
      {
        song: "Rocky Road",
        id: 50
      },
      function(err, res) {
        console.log(res.affectedRows + " product inserted!\n");
        // Call updateProduct AFTER the INSERT completes
        updateProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
      "UPDATE music SET ? WHERE ?",
      [
        {
          artist: 100
        },
        {
          song: "Rocky Road"
        }
      ],
      function(err, res) {
        console.log(res.affectedRows + " music updated!\n");
        // Call deleteProduct AFTER the UPDATE completes
        deleteProduct();
      }
    );
  
    // logs the actual query being run
    console.log(query.sql);
  }
  
  function deleteProduct() {
    console.log("Deleting music...\n");
    connection.query(
      "DELETE FROM music WHERE ?",
      {
        song: "strawberry"
      },
      function(err, res) {
        console.log(res.affectedRows + " music deleted!\n");
        // Call readProducts AFTER the DELETE completes
        readProducts();
      }
    );
  }
  
  function readProducts() {
    console.log("Selecting all music...\n");
    connection.query("SELECT * FROM music", function(err, res) {
      if (err) throw err;
      // Log all results of the SELECT statement
      console.log(res);
      connection.end();
    });
  }
  
  function afterConnection() {
    connection.query("SELECT * FROM music", function(err, res) {
      if (err) throw err;
      console.log(res);
      connection.end();
    });
    
  }