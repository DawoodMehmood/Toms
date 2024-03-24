import ProductReview from "../models/productReviewsModel.js";
import Customer from "../models/customerModel.js";

const productReviewController = {
  addReview: async (req, res) => {
    try {
      const review = await ProductReview.create(req.body);
      res.status(201).json(review);
    } catch (error) {
      res.status(400).json({ message: "Error adding review", error });
    }
  },

  getAllReviews: async (req, res) => {
    try {
      const reviews = await ProductReview.findAll();
      res.status(200).json(reviews);
    } catch (error) {
      res.status(400).json({ message: "Error fetching reviews", error });
    }
  },

  getReviewById: async (req, res) => {
    try {
      const review = await ProductReview.findByPk(req.params.id);
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error finding review", error });
    }
  },

  updateReview: async (req, res) => {
    try {
      const updateResult = await ProductReview.update(req.body, {
        where: { review_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).json({ message: "Review updated successfully" });
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating review", error });
    }
  },

  deleteReview: async (req, res) => {
    try {
      const deleteResult = await ProductReview.destroy({
        where: { review_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).json({ message: "Review deleted successfully" });
      } else {
        res.status(404).json({ message: "Review not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error deleting review", error });
    }
  },
  getProductReviews: async (req, res) => {
    try {
      const { productId } = req.params;
      const reviews = await ProductReview.findAll({
        where: {
          product_id: productId,
          is_active: true,
        },
        include: [
          {
            model: Customer,
            attributes: ["customer_name"],
          },
        ],
      });
      res.status(200).json(reviews);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error fetching product reviews", error });
    }
  },
};

export default productReviewController;
