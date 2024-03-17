import Measurement from "../models/measurementModel.js";

const measurementController = {
  createMeasurement: async (req, res) => {
    try {
      const measurement = await Measurement.create(req.body);
      res.status(201).json(measurement);
    } catch (error) {
      res.status(400).json({ message: "Error creating measurement", error });
    }
  },

  getAllMeasurements: async (req, res) => {
    try {
      const measurements = await Measurement.findAll();
      res.status(200).json(measurements);
    } catch (error) {
      res.status(400).json({ message: "Error retrieving measurements", error });
    }
  },

  getMeasurementById: async (req, res) => {
    try {
      const measurement = await Measurement.findByPk(req.params.id);
      if (measurement) {
        res.status(200).json(measurement);
      } else {
        res.status(404).json({ message: "Measurement not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error finding measurement", error });
    }
  },

  updateMeasurement: async (req, res) => {
    try {
      const updateResult = await Measurement.update(req.body, {
        where: { id: req.params.id }, // Assuming your primary key is `id`
      });
      if (updateResult[0] > 0) {
        res.status(200).json({ message: "Measurement updated successfully" });
      } else {
        res.status(404).json({ message: "Measurement not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error updating measurement", error });
    }
  },

  deleteMeasurement: async (req, res) => {
    try {
      const deleteResult = await Measurement.destroy({
        where: { id: req.params.id },
      });
      if (deleteResult) {
        res.status(200).json({ message: "Measurement deleted successfully" });
      } else {
        res.status(404).json({ message: "Measurement not found" });
      }
    } catch (error) {
      res.status(400).json({ message: "Error deleting measurement", error });
    }
  },
};

export default measurementController;
