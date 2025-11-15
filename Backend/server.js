const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');

// MongoDB connection (use environment variable when available)
const mongoUri = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/classLang';
mongoose.connect(mongoUri)
  .then(() => console.log('Mongoose connected to', mongoUri))
  .catch(err => console.error('Mongoose connection error:', err));

mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB with readyState:', mongoose.connection.readyState);
});

mongoose.connection.on('error', (err) => {
  console.error('Connection error:', err);
});

// Express app setup
const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to root URL of Server');
});

// Routes
const userRoutes = require('./routes/auth');
app.use('/users', userRoutes);

// Start server
app.listen(PORT, (error) => {
  if (!error)
    console.log('Server is Successfully Running, and App is listening on port ' + PORT);
  else
    console.log('Error occurred, server can\'t start', error);
});
