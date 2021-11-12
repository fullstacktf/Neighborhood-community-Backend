const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

// user CRUD

let id = 0

let user = [{name: "El Piedra de Añaza", id: 1}]

id++ // We will change into AUTOINCREMENT at Database


//GET

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(`This are the users of iHood: ${user}`);
    } else {
      res.send("Not result");
    }
  });
});


//POST

app.post("/users", (req, res) => {
  
  const userName = {name: req.body.name };

  const sql = `INSERT INTO user SET name = '${userName}', id = '${id}'`;

  connection.query(sql, userName, error => {
    if (error) throw error;
    res.send("user created!");
  });
});


//PUT


app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE users SET name = '${name}' WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("Customer updated!");
  });
});


//DELETE


app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM users WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("user deleted!");
  });
});


// Database server check
connection.connect(error => {
  if (error) throw error;
  console.log("Database server running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));