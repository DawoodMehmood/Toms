import express from "express";
const router = express.Router();
import subcategoryController from "../controllers/subcategoryController.js";

router.post("/", subcategoryController.createSubcategory);
router.get("/", subcategoryController.getAllSubcategories);
router.get("/:id", subcategoryController.getSubcategoryById);
router.put("/:id", subcategoryController.updateSubcategory);
router.delete("/:id", subcategoryController.deleteSubcategory);
// Get products of a subcategory
router.get(
  "/products/:subcategoryId",
  subcategoryController.getProductsBySubcategory
);

export default router;
