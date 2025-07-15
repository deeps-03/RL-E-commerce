// Product.js
// Defines the Mongoose schema and model for products in the e-commerce app.

const mongoose = require('mongoose');

// Product schema: describes the structure of a product document in MongoDB
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },      // Product name
  price: { type: Number, required: true },      // Product price
  image: { type: String },                      // Image URL
  description: { type: String },                // Product description
  category: { type: String },                   // Product category
});

// Create the Product model from the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model for use in routes and seed scripts
module.exports = Product;
