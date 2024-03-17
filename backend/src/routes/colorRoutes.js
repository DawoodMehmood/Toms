import express from "express";
const router = express.Router();
import colorController from "../controllers/colorController.js";

router.post("/", colorController.createColor);
router.get("/", colorController.getAllColors);
router.get("/:id", colorController.getColorById);
router.put("/:id", colorController.updateColor);
router.delete("/:id", colorController.deleteColor);

export default router;
