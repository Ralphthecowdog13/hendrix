const express = require('express');
const router = express.Router();
const Intake = require('../models/Intake');
const authenticateToken = require('../middleware/authenticate');

router.post('/intake', authenticateToken, async (req, res) => {
  try {
    const {
      ownerName, tagNumber, breed, sex, weanLength, vaccinations,
      pregnancyStatus, complianceFormA, notes, penNumber, headCount
    } = req.body;

    const existing = await Intake.findOne({ penNumber });
    if (existing) {
      return res.json({ success: false, message: 'Pen number already in use' });
    }

    const intake = new Intake({
      ownerName, tagNumber, breed, sex, weanLength,
      vaccinations, pregnancyStatus, complianceFormA,
      notes, penNumber, headCount
    });

    await intake.save();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

router.get('/intakes', authenticateToken, async (req, res) => {
  try {
    const intakes = await Intake.find().sort({ createdAt: -1 });
    res.json({ success: true, intakes });
  } catch (err) {
    res.status(500).json({ success: false });
  }
});

module.exports = router;
