const Faqs = require("../models/faqsModel");


const faqsController = {
  // Create a new faq
  createFaq: async (req, res) => {
    try {
      const faq = await Faqs.create(req.body);
      res.status(201).send(faq);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get all faq
  getAllFaqs: async (req, res) => {
    try {
      const faqs = await Faqs.findAll();
      res.status(200).send(faqs);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Get a single faq by id
  getFaqById: async (req, res) => {
    try {
      const faq = await Faqs.findByPk(req.params.id);
      if (faq) {
        res.status(200).send(faq);
      } else {
        res.status(404).send({ message: "Faq not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Update a faq
  updateFaq: async (req, res) => {
    try {
      const updateResult = await Faqs.update(req.body, {
        where: { faq_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).send({ message: "Faq updated successfully" });
      } else {
        res.status(404).send({ message: "Faq not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },

  // Delete a faq
  deleteFaq: async (req, res) => {
    try {
      const deleteResult = await Faqs.destroy({
        where: { faq_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).send({ message: "Faq deleted successfully" });
      } else {
        res.status(404).send({ message: "Faq not found" });
      }
    } catch (error) {
      res.status(400).send(error);
    }
  },
};

module.exports = faqsController;
