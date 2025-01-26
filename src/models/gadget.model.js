const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const gadgetSchema = new mongoose.Schema({
  _id: {
    type: String,
    default: uuidv4,
  },
  name: {
    type: String,
    required: true,
  },
  codename: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ['Available', 'Deployed', 'Destroyed', 'Decommissioned'],
    default: 'Available',
  },
  decommissionedAt: {
    type: Date,
    default: null,
  },
  missionSuccessProbability: {
    type: Number,
  }
}, {
  timestamps: true
});

const Gadget = mongoose.model('Gadget', gadgetSchema);

module.exports = Gadget; 