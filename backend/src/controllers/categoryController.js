import Category from "../models/categoryModel.js";
import Product from "../models/productModel.js";
import Subcategory from "../models/subcategoryModel.js";

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
  getProductsByCategoryId: async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const products = await Product.findAll({
        where: {
          "$Subcategory.Category.category_id$": categoryId, // Use the '$' syntax to filter on nested model properties
          is_active: true, // Ensure only active products are fetched
        },
        include: [
          {
            model: Subcategory,
            required: true, // This makes it an INNER JOIN
            include: [
              {
                model: Category,
                where: { category_id: categoryId }, // Ensure this matches your column name in the Category model
                required: true, // This makes it an INNER JOIN
              },
            ],
          },
        ],
      });
      res.json(products);
    } catch (error) {
      res
        .status(500)
        .send({ message: "Error fetching products by category", error });
    }
  },

  getSubcategoriesByCategoryId: async (req, res) => {
    try {
      const categoryId = req.params.categoryId;
      const subcategories = await Subcategory.findAll({
        where: { category_id: categoryId },
      });

      if (subcategories) {
        res.json(subcategories);
      } else {
        res.status(404).send({
          message: "Subcategories not found for the provided category ID",
        });
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
      res.status(500).send({ message: "Error fetching subcategories", error });
    }
  },
};

export default categoryController;
