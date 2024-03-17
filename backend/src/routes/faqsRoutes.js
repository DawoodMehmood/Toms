import express from "express";
const router = express.Router();
import faqsController from "../controllers/faqsController.js";

// Create a new faqs
router.post("/", faqsController.createFaq);

// Get all faqs
router.get("/", faqsController.getAllFaqs);

// Get a single faq by id
router.get("/:id", faqsController.getFaqById);

// Update a Faq
router.put("/:id", faqsController.updateFaq);

// Delete a Faq
router.delete("/:id", faqsController.deleteFaq);

export default router;
