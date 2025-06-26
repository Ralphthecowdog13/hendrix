const mongoose = require('mongoose');

const IntakeSchema = new mongoose.Schema({
  ownerName: { type: String, required: true },
  tagNumber: { type: String, required: true },
  breed: { type: String, required: true },
  sex: { type: String, required: true },
  weanLength: { type: String },
  vaccinations: { type: String },
  pregnancyStatus: { type: String },
  complianceFormA: { type: Boolean, default: false },
  notes: { type: String },
  penNumber: { type: String, required: true, unique: true },
  headCount: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Intake', IntakeSchema);