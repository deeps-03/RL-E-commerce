// Basic Express server setup for RL E-commerce Project backend
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


// Product routes
const productRoutes = require('./routes/products');
app.use('/products', productRoutes);

// Root endpoint
app.get('/', (req, res) => {
  res.send('E-commerce API running');
});

// MongoDB connection (update with your MongoDB Atlas URI)
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
