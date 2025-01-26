const express = require("express");
const router = express.Router();
const gadgetController = require("../controllers/gadgetController");
const authMiddleware = require("../middleware/authMiddleware");

router.use(authMiddleware);

router.get("/", gadgetController.getAllGadgets);
router.post("/", gadgetController.createGadget);
router.patch("/:id", gadgetController.updateGadget);
router.delete("/:id", gadgetController.decommissionGadget);
router.post("/:id/self-destruct", gadgetController.selfDestruct);

module.exports = router;
