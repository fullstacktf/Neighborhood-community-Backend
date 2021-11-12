# ihood-backend
Neighborhood-community backend

// iHood Endpoints ->

// User endpoint 

app.get('users/:id/); 
app.post('users/:id/'); 
app.delete('users/:id/); 
app.put('users/:id/); 

// Neighboor endpoint

app.get('/users/:id/neighboor/:id'); 
app.post('/users/:id/neighboor/'); 
app.delete('/users/:id/neighboor/:id'); 
app.put('/users/:id/neighboor/:id'); 

// President endpoint

app.get('/users/:id/president/:id'); 
app.post('/users/:id/president/'); 
app.delete('/users/:id/president/:id'); 
app.put('/users/:id/president/:id');

// community endpoint 

app.get('users/:id/community/id:'); 
app.post('users/:id/president/:id/community/id:'); 
app.delete('users/:id/president/:id/community/id:'); 
app.put('users/:id/president/:id/community/id:'); 

// Notifications endpoint

app.get('/users/:id/notifications/:id'); 
app.post('/users/:id/president/:id/notifications/'); 
app.delete('/users/:id/president/:id/notifications/:id'); 
app.put('/users/:id/president/:id/notifications/:id'); 

// Payments endpoint

app.get('/users/:id/payments/:id'); 
app.post('/users/:id/president/:id/payments/'); 
app.delete('/users/:id/president/:id/payments/:id'); 
app.put('/users/:id/president/:id/payments/:id'); 

// Incidents endpoint

app.get('/users/:id/incidents/:id'); 
app.post('/users/:id/incidents/'); 
app.delete('/users/:id/incidents/:id'); 
app.put('/users/:id/incidents/:id'); 

// Events endpoint

app.get('/users/:id/events/:id'); 
app.post('/users/:id/president/:id/events/'); 
app.delete('/users/:id/president/:id/events/:id'); 
app.put('/users/:id/president/:id/events/:id'); 

// Apartment endpoint

app.get('/users/:id/apartment/:id'); 
app.post('/users/:id/president/:id/apartment/'); 
app.delete('/users/:id/president/:id/apartment/:id'); 
app.put('/users/:id/apartment/:id');
