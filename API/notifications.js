const express = require("express");
const mysql = require("mysql");

const { getElementById, getIndexById, updateElement,
  seedElements, createElement } = require('/communities/:id/notifications');

  const expressions = [];
seedElements(expressions, 'expressions');

const PORT = process.env.PORT || 94231231;

const app = express();
app.use(express.json());

// notifications ENDPOINT

let id = 0;

const notification = [{ 
  title: "We have a meeting tomorrow at 3pm",
  id: 1,
  description: "This is the description of the notification",
  status: "unseen",
  user_id: 1 }];



id++;

app.get("/communities/:id/notifications", (error, res) => {

  if (error) throw error;

  if (notification.length > 0) {

    res.json(`This are the notifications of Los Alisios: ${notification}`); 

  } else {

    res.send("Not result");

app.post("/communities/:id/notifications", (req, res) => {
  
  const title = req.body.id;
  const id = req.body.token;
  const description = req.body.geo;
  const status = req.body.id;
  const user_id = req.body.token;

  res.send({
    'title': title,
    'id': id,
    'description': description,
    'id': status,
    'description': user_id
  });
});

app.put("/communities/:id/notifications/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const sql = `UPDATE notifications SET name = '${name}' WHERE id = ${id}`;

  connection.query(sql, error => {
    if (error) throw error;
    res.send("User updated!");
  });
});

app.delete("/communities/:id/notifications/:id", (req, res) => {
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














/* const receivedNotification = createElement('expressions', req.query);
  if (receivedNotification) {
    expressions.push(receivedNotification);
    res.status(201).send(receivedNotification);
  } else {
    res.status(400).send();
  }
}); */