const Subcategory = require("../models/subcategoryModel");
const Product = require("../models/productModel");

const subcategoryController = {
  // Create a new subcategory
  createSubcategory: async (req, res) => {
    try {
      const subcategory = await Subcategory.create(req.body);
      res.status(201).json(subcategory);
    } catch (error) {
      res.status(400).json({ message: "Error creating subcategory", error });
    }
  },

  // Get all subcategories
  getAllSubcategories: async (req, res) => {
    try {
      const subcategories = await Subcategory.findAll();
      res.status(200).json(subcategories);
    } catch (error) {
      res
        .status(400)
        .json({ message: "Error retrieving subcategories", error });
    }
  },

  // Get a single subcategory by id
  getSubcategoryById: async (req, res) => {
    try {
      const subcategory = await Subcategory.findByPk(req.params.id);
      if (subcategory) {
        res.status(200).json(subcategory);
      } else {
        res.status(404).json({ message: "Subcategory not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error finding subcategory", error });
    }
  },

  // Update a subcategory
  updateSubcategory: async (req, res) => {
    try {
      const updateResult = await Subcategory.update(req.body, {
        where: { subcategory_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).json({ message: "Subcategory updated successfully" });
      } else {
        res.status(404).json({ message: "Subcategory not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating subcategory", error });
    }
  },

  // Delete a subcategory
  deleteSubcategory: async (req, res) => {
    try {
      const deleteResult = await Subcategory.destroy({
        where: { subcategory_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).json({ message: "Subcategory deleted successfully" });
      } else {
        res.status(404).json({ message: "Subcategory not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error deleting subcategory", error });
    }
  },
  getProductsBySubcategory: async (req, res) => {
    try {
      const subcategoryId = req.params.subcategoryId;
      const products = await Product.findAll({
        where: {
          subcategory_id: subcategoryId, // Match products by subcategory_id
        },
        include: [
          {
            model: Subcategory, // Include subcategory details
            where: { subcategory_id: subcategoryId }, // Match subcategory by ID
            required: true,
          },
          {
            model: Category, // Optionally include category details if needed
            required: true,
          },
        ],
      });
      res.json(products);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error fetching products by subcategory", error });
    }
  },
};

module.exports = subcategoryController;
