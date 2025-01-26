const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const gadgetSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      default: uuidv4,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    codename: {
      type: String,
      unique: true,
      required: true,
    },
    status: {
      type: String,
      enum: ["Available", "Deployed", "Destroyed", "Decommissioned"],
      default: "Available",
    },
    missionSuccessProbability: {
      type: Number,
      min: 0,
      max: 100,
    },
    decommissionedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Gadget", gadgetSchema);
