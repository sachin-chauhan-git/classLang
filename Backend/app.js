const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/classLang', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB with readyState:', mongoose.connection.readyState); // Should print 1
});

mongoose.connection.on('error', (err) => {
  console.error('Connection error:', err);
});

// app.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to root URL of Server');
});

app.listen(PORT, (error) => {
  if (!error)
    console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  else
    console.log('Error occurred, server can\'t start', error);
});

const userRoutes = require('./routes/users');
app.use('/users', userRoutes);

