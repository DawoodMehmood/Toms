const Product = require("../models/productModel");

const productController = {
  // Create a new product
  createProduct: async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).send(product);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get all products
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).send(products);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get a single product by id
  getProductById: async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id);
      if (product) {
        res.status(200).send(product);
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Update a product
  updateProduct: async (req, res) => {
    try {
      const updateResult = await Product.update(req.body, {
        where: { product_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).send({ message: "Product updated successfully" });
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete a product
  deleteProduct: async (req, res) => {
    try {
      const deleteResult = await Product.destroy({
        where: { product_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).send({ message: "Product deleted successfully" });
      } else {
        res.status(404).send({ message: "Product not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = productController;
