const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

// Community CRUD

let id = 0

let community = [{name: "Los Alisios", id: 1}]

id++ // We will change into AUTOINCREMENT at Database

app.get("/communities", (req, res) => {
  const sql = "SELECT * FROM communities";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(`This are the Communities of iHood: ${community}`);
    } else {
      res.send("Not result");
    }
  });
});


app.post("/communities", (req, res) => {
  
  const communityName = {name: req.body.name };

  const sql = `INSERT INTO community SET name = '${communityName}', id = '${id}'`;

  connection.query(sql, communityName, error => {
    if (error) throw error;
    res.send("Community created!");
  });
});


app.put("/communities/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE communities SET name = '${name}' WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("Customer updated!");
  });
});


app.delete("/communities/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM communities WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("Community deleted!");
  });
});


