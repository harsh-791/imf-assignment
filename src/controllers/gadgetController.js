const Gadget = require("../models/Gadget");
const {
  generateCodename,
  generateMissionProbability,
} = require("../utils/generateCodename");

exports.getAllGadgets = async (req, res) => {
  try {
    const status = req.query.status;
    const query = status ? { status } : {};

    const gadgets = await Gadget.find(query).select("-__v");

    const gadgetsWithProbability = gadgets.map((gadget) => ({
      ...gadget.toObject(),
      missionSuccessProbability: generateMissionProbability(),
    }));

    res.json(gadgetsWithProbability);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving gadgets", error: error.message });
  }
};

exports.createGadget = async (req, res) => {
  try {
    const { name } = req.body;
    const newGadget = new Gadget({
      name,
      codename: generateCodename(),
      missionSuccessProbability: generateMissionProbability(),
    });

    await newGadget.save();
    res.status(201).json(newGadget);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating gadget", error: error.message });
  }
};

exports.updateGadget = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedGadget = await Gadget.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedGadget) {
      return res.status(404).json({ message: "Gadget not found" });
    }

    res.json(updatedGadget);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating gadget", error: error.message });
  }
};

exports.decommissionGadget = async (req, res) => {
  try {
    const { id } = req.params;

    const gadget = await Gadget.findByIdAndUpdate(
      id,
      {
        status: "Decommissioned",
        decommissionedAt: new Date(),
      },
      { new: true }
    );

    if (!gadget) {
      return res.status(404).json({ message: "Gadget not found" });
    }

    res.json(gadget);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error decommissioning gadget", error: error.message });
  }
};

exports.selfDestruct = async (req, res) => {
  try {
    const { id } = req.params;
    const { confirmationCode } = req.body;

    // Simulate confirmation code generation
    const validCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    if (confirmationCode !== validCode) {
      return res
        .status(403)
        .json({ message: "Invalid self-destruct confirmation code" });
    }

    const gadget = await Gadget.findByIdAndUpdate(
      id,
      {
        status: "Destroyed",
        decommissionedAt: new Date(),
      },
      { new: true }
    );

    if (!gadget) {
      return res.status(404).json({ message: "Gadget not found" });
    }

    res.json({ message: "Gadget self-destructed", gadget });
  } catch (error) {
    res
      .status(400)
      .json({ message: "Self-destruct sequence failed", error: error.message });
  }
};
