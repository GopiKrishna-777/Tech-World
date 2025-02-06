const express = require("express");
const app = express();
const PORT = process.env.PORT || 5001;
const ProductModel = require('./models/Product');

app.get("/products", (req, res) => {
  ProductModel.find()
  .then(products => res.json(products))
  .catch(err => res.json(err))
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
