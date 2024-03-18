const express = require("express");
const router = express.Router();
const carController = require("../controller/car");

/* Add routes */
router.get("/", carController.notifCars)
router.get("/cars", carController.getCars)
router.get("/cars/:id", carController.getCarsById)
router.post("/cars", carController.addCars)
router.put("/cars/:id", carController.updateCarsById)
router.delete("/cars/:id", carController.deleteCars)

module.exports = router;