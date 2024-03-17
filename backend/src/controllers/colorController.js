import Color from "../models/colorModel.js";

const colorController = {
  // Create a new color
  createColor: async (req, res) => {
    try {
      const color = await Color.create(req.body);
      res.status(201).json(color);
    } catch (error) {
      res.status(400).json({ message: "Error creating color", error });
    }
  },

  // Get all colors
  getAllColors: async (req, res) => {
    try {
      const colors = await Color.findAll();
      res.status(200).json(colors);
    } catch (error) {
      res.status(400).json({ message: "Error retrieving colors", error });
    }
  },

  // Get a single color by id
  getColorById: async (req, res) => {
    try {
      const color = await Color.findByPk(req.params.id);
      if (color) {
        res.status(200).json(color);
      } else {
        res.status(404).json({ message: "Color not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error finding color", error });
    }
  },

  // Update a color
  updateColor: async (req, res) => {
    try {
      const updateResult = await Color.update(req.body, {
        where: { color_id: req.params.id },
      });
      if (updateResult[0] > 0) {
        res.status(200).json({ message: "Color updated successfully" });
      } else {
        res.status(404).json({ message: "Color not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating color", error });
    }
  },

  // Delete a color
  deleteColor: async (req, res) => {
    try {
      const deleteResult = await Color.destroy({
        where: { color_id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).json({ message: "Color deleted successfully" });
      } else {
        res.status(404).json({ message: "Color not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error deleting color", error });
    }
  },
};

export default colorController;
