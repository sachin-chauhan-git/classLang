const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, username, email, password, role } = req.body;
    
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ success: false, message: 'Email already registered' });
    }
    
    const newUser = new User({ 
      firstName: firstName || username, 
      lastName: lastName || '', 
      username: username || email, 
      email, 
      password, 
      role: role || 'student' 
    });
    
    await newUser.save();
    res.json({ success: true, user: newUser });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;
    
    // Check if user exists
    const user = await User.findOne({ email, role });
    if (!user) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    // Check password (plain text comparison for simplicity)
    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid credentials' });
    }
    
    res.json({ success: true, user: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

router.get('/test', (req, res) => {
  res.send('User route is working');
});

module.exports = router;
