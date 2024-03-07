const Category = require("../models/categoryModel");

const categoryController = {
  // Create a new category
  createCategory: async (req, res) => {
    try {
      const category = await Category.create(req.body);
      res.status(201).send(category);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get all categories
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.findAll();
      res.status(200).send(categories);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get a single category by id
  getCategoryById: async (req, res) => {
    try {
      const category = await Category.findByPk(req.params.id);
      if (category) {
        res.status(200).send(category);
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Update a category
  updateCategory: async (req, res) => {
    try {
      const updateResult = await Category.update(req.body, {
        where: { category_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).send({ message: "Category updated successfully" });
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete a category
  deleteCategory: async (req, res) => {
    try {
      const deleteResult = await Category.destroy({
        where: { category_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).send({ message: "Category deleted successfully" });
      } else {
        res.status(404).send({ message: "Category not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = categoryController;
