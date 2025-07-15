// Sample product seed script for MongoDB Atlas
const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;

const sampleProducts = [
  {
    title: 'Wireless Headphones',
    price: 99.99,
    image: 'https://via.placeholder.com/150',
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics',
  },
  {
    title: 'Smart Watch',
    price: 149.99,
    image: 'https://via.placeholder.com/150',
    description: 'Track your fitness and notifications on the go.',
    category: 'Wearables',
  },
  {
    title: 'Running Shoes',
    price: 79.99,
    image: 'https://via.placeholder.com/150',
    description: 'Comfortable and durable running shoes for all terrains.',
    category: 'Footwear',
  },
  {
    title: 'Bluetooth Speaker',
    price: 59.99,
    image: 'https://via.placeholder.com/150',
    description: 'Portable speaker with deep bass and long battery life.',
    category: 'Electronics',
  },
  {
    title: 'Fitness Tracker',
    price: 39.99,
    image: 'https://via.placeholder.com/150',
    description: 'Track your steps, calories, and sleep patterns.',
    category: 'Wearables',
  },
  {
    title: 'Backpack',
    price: 49.99,
    image: 'https://via.placeholder.com/150',
    description: 'Durable backpack for travel and daily use.',
    category: 'Accessories',
  },
  {
    title: 'Sunglasses',
    price: 29.99,
    image: 'https://via.placeholder.com/150',
    description: 'UV-protected stylish sunglasses.',
    category: 'Accessories',
  },
  {
    title: 'Laptop Stand',
    price: 34.99,
    image: 'https://via.placeholder.com/150',
    description: 'Ergonomic stand for laptops up to 17 inches.',
    category: 'Office',
  },
  {
    title: 'Desk Lamp',
    price: 24.99,
    image: 'https://via.placeholder.com/150',
    description: 'LED desk lamp with adjustable brightness.',
    category: 'Office',
  },
  {
    title: 'Wireless Mouse',
    price: 19.99,
    image: 'https://via.placeholder.com/150',
    description: 'Smooth and responsive wireless mouse.',
    category: 'Electronics',
  },
];

mongoose.connect(MONGODB_URI)
  .then(async () => {
    await Product.deleteMany({});
    await Product.insertMany(sampleProducts);
    console.log('Sample products seeded!');
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error('Seeding error:', err);
  });
