
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
require('dotenv').config()
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
// app.use('/users', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project', { useNewUrlParser: true, useUnifiedTopology: true });

// Handle connection errors
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));n