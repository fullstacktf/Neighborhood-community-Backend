const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());


// notifications ENDPOINT


let id = 0 

let notification = [{name: "El Piedra de Añaza", id: 1}]

id++

app.get("/users/:id/notifications", (req, res) => {
  const sql = "SELECT * FROM notifications";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(`This are the notifications of iHood: ${notification}`);
    } else {
      res.send("Not result");
    }
  });
});


app.post("/users/:id/notifications", (req, res) => {
  
  const notificationName = {name: req.body.name };

  const sql = `INSERT INTO notifications SET name = '${notificationName}', id = '${id}'`;

  connection.query(sql, userName, error => {
    if (error) throw error;
    res.send("User created!");
  });
});


app.put("/users/:id/notifications/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE notifications SET name = '${name}' WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("User updated!");
  });
});


app.delete("/users/:id/notifications/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM notifications WHERE id = ${id}`;

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
