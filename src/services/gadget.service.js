const Gadget = require('../models/gadget.model');
const { generateCodename, generateMissionSuccessProbability } = require('../utils/codename-generator');

class GadgetService {
  async getAllGadgets(status = null) {
    const query = status ? { status } : {};
    const gadgets = await Gadget.find(query);
    
    return gadgets.map(gadget => ({
      ...gadget.toObject(),
      missionSuccessProbability: generateMissionSuccessProbability()
    }));
  }

  async createGadget(gadgetData) {
    const codename = generateCodename();
    return await Gadget.create({
      ...gadgetData,
      codename,
    });
  }

  async updateGadget(id, updateData) {
    const gadget = await Gadget.findById(id);
    if (!gadget) {
      throw new Error('Gadget not found');
    }
    return await Gadget.findByIdAndUpdate(id, updateData, { new: true });
  }

  async deleteGadget(id) {
    const gadget = await Gadget.findById(id);
    if (!gadget) {
      throw new Error('Gadget not found');
    }
    return await Gadget.findByIdAndUpdate(id, {
      status: 'Decommissioned',
      decommissionedAt: new Date()
    }, { new: true });
  }

  async selfDestruct(id) {
    const gadget = await Gadget.findById(id);
    if (!gadget) {
      throw new Error('Gadget not found');
    }
    return await Gadget.findByIdAndUpdate(id, {
      status: 'Destroyed'
    }, { new: true });
  }
}

module.exports = new GadgetService(); 