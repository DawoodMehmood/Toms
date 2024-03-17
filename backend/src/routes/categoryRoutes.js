import express from "express";
const router = express.Router();
import categoryController from "../controllers/categoryController.js";

// Create a new category
router.post("/", categoryController.createCategory);

// Get all categories
router.get("/", categoryController.getAllCategories);

// Get products of a category
router.get("/products/:categoryId", categoryController.getProductsByCategoryId);

// Get subcategories of a category
router.get(
  "/subcategories/:categoryId",
  categoryController.getSubcategoriesByCategoryId
);

// Get a single category by id
router.get("/:id", categoryController.getCategoryById);

// Update a category
router.put("/:id", categoryController.updateCategory);

// Delete a category
router.delete("/:id", categoryController.deleteCategory);

export default router;
