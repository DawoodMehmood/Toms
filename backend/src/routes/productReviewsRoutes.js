import express from "express";
import productReviewController from "../controllers/productReviewsController.js";

const router = express.Router();

router.post("/", productReviewController.addReview);
router.get("/", productReviewController.getAllReviews);
router.get("/:id", productReviewController.getReviewById);
router.put("/:id", productReviewController.updateReview);
router.delete("/:id", productReviewController.deleteReview);
router.get(
  "/product/:productId/reviews",
  productReviewController.getProductReviews
);

export default router;
