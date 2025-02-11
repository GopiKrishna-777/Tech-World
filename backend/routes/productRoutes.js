const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// Fetch all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find(); // Fetch all products from the database
    console.log(products);
    res.json(products); // Send the list of products as the response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

// Fetch product details by ID
router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id); // Fetch product by ID
    if (!product) {
      return res.status(404).json({ message: 'Product not found' }); // Handle case when product is not found
    }
    res.json(product); // Send product details as the response
  } catch (error) {
    res.status(500).json({ message: error.message }); // Handle server errors
  }
});

module.exports = router;
