const GadgetService = require('../services/gadget.service');

class GadgetController {
  constructor() {
    // Bind all methods to this instance
    this.getAllGadgets = this.getAllGadgets.bind(this);
    this.createGadget = this.createGadget.bind(this);
    this.updateGadget = this.updateGadget.bind(this);
    this.deleteGadget = this.deleteGadget.bind(this);
    this.selfDestruct = this.selfDestruct.bind(this);
  }

  async getAllGadgets(req, res) {
    try {
      const { status } = req.query;
      const gadgets = await GadgetService.getAllGadgets(status);
      res.json(gadgets);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async createGadget(req, res) {
    try {
      const gadget = await GadgetService.createGadget(req.body);
      res.status(201).json(gadget);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  async updateGadget(req, res) {
    try {
      const gadget = await GadgetService.updateGadget(req.params.id, req.body);
      res.json(gadget);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async deleteGadget(req, res) {
    try {
      const gadget = await GadgetService.deleteGadget(req.params.id);
      res.json(gadget);
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }

  async selfDestruct(req, res) {
    try {
      const gadget = await GadgetService.selfDestruct(req.params.id);
      res.json({
        message: 'Self-destruct sequence initiated',
        gadget
      });
    } catch (error) {
      res.status(404).json({ error: error.message });
    }
  }
}

module.exports = new GadgetController(); 