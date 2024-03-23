import express from "express";
const router = express.Router();
import productController from "../controllers/productController.js";

router.post("/", productController.createProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getProductById);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
router.post("/byIds", productController.getProductsByIds);
router.get("/category/:id", productController.getProductsByCategoryId);

// router.get("/variants/:id", productController.getProductDetailsWithVariants);

export default router;
