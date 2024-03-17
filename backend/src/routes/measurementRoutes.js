// routes/measurementRoutes.js

import express from "express";
const router = express.Router();
import measurementController from "../controllers/measurementController.js";

router.post("/", measurementController.createMeasurement);
router.get("/", measurementController.getAllMeasurements);
router.get("/:id", measurementController.getMeasurementById);
router.put("/:id", measurementController.updateMeasurement);
router.delete("/:id", measurementController.deleteMeasurement);

export default router;
