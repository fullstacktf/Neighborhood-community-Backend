const express = require("express");
const mysql = require("mysql");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.json());

/* // MySql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "rootpass",
  database: "node20_mysql"
}); */

// Route
app.get("/", (req, res) => {
  res.send("This are the users of iHood!");
});

// all users
  app.get("/users", (req, res) => {
  const sql = "SELECT * FROM users";

  connection.query(sql, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.json(results);
    } else {
      res.send("Not result");
    }
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = `SELECT * FROM users WHERE id = ${id}`;
  connection.query(sql, (error, result) => {
    if (error) throw error;

    if (result.length > 0) {
      res.json(result);
    } else {
      res.send("Not result");
    }
  });
});

app.post("/add", (req, res) => {
  const sql = "INSERT INTO users SET ?";

  const customerObj = {
    name: req.body.name,
    city: req.body.city
  };

  connection.query(sql, customerObj, error => {
    if (error) throw error;
    res.send("Customer created!");
  });
});

app.put("/update/:id", (req, res) => {
  const { id } = req.params;
  const { name, city } = req.body;
  const sql = `UPDATE users SET name = '${name}', city='${city}' WHERE id =${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("Customer updated!");
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  const sql = `DELETE FROM users WHERE id= ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("Delete user");
  });
});

// Check connect
connection.connect(error => {
  if (error) throw error;
  console.log("Database server running!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
