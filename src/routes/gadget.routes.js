const express = require('express');
const router = express.Router();
const GadgetController = require('../controllers/gadget.controller');

router.get('/', GadgetController.getAllGadgets);
router.post('/', GadgetController.createGadget);
router.patch('/:id', GadgetController.updateGadget);
router.delete('/:id', GadgetController.deleteGadget);
router.post('/:id/self-destruct', GadgetController.selfDestruct);

module.exports = router; 