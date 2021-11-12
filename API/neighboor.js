const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());


// NEIGHBOOR ENDPOINT


let id = 0 

let neighboor = [{name: "El Piedra de Añaza", id: 1}]

id++

//GET

app.get("/users/:id/neighboor/:id", (req, res) => {
  const sql = "SELECT * FROM neighboor";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(`This are the neighboor of iHood: ${neighboor}`);
    } else {
      res.send("Not result");
    }
  });
});

//POST

app.post("/users/:id/neighboor", (req, res) => {
  
  const neighboorName = {name: req.body.name };

  const sql = `INSERT INTO neighboor SET name = '${neighboorName}', id = '${id}'`;

  connection.query(sql, userName, error => {
    if (error) throw error;
    res.send("User created!");
  });
});

//PUT

app.put("/users/:id/neighboor/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE neighboor SET name = '${name}' WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("User updated!");
  });
});

//DELETE

app.delete("/users/:id/neighboor/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM neighboor WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("User deleted!");
  });
});


// Database server check
connection.connect(error => {
  if (error) throw error;
  console.log("Database server running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
