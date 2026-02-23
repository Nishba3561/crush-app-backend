// backend/server.js

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Allows reading JSON from frontend

// Routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('Crush App Backend is Running! 🚀');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
