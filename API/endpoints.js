const express = require("express");

const app = express();
app.use(express.json());

// iHood Endpoints ->

// Users endpoint

app.get("/users/:id/");
app.post("/users/");
app.delete("/users/:id/");
app.put("/users/:id/");

// Communities endpoint

app.get("/communities/:id");
app.post("/communities/");
app.delete("/communities/:id");
app.put("/communities/:id");

// Notifications endpoint

app.get("/communities/:id/notifications/:id");
app.post("/communities/:id/notifications/");
app.delete("/communities/:id/notifications/:id");
app.put("/communities/:id/notifications/:id");

// Payments endpoint

app.get("/communities/:id/payments/:id");
app.post("/communities/:id/payments/");
app.delete("/communities/:id/payments/:id");
app.put("/communities/:id/payments/:id");

// Incidents endpoint

app.get("/communities/:id/incidents/:id");
app.post("/communities/:id/incidents/");
app.delete("/communities/:id/incidents/:id");
app.put("/communities/:id/incidents/:id");

// Events endpoint

app.get("/communities/:id/events/:id");
app.post("/communities/:id/events/");
app.delete("/communities/:id/events/:id");
app.put("/communities/:id/events/:id");

// Apartment endpoint

app.get("/communities/:id/apartment/:id");
app.post("/communities/:id/apartment/");
app.delete("/communities/:id/apartment/:id");
app.put("/communities/:id/apartment/:id");
