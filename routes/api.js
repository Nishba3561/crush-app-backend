const express = require('express');
const router = express.Router();
const generateParagraph = require('../generator');

// POST /api/generate
router.post('/generate', async (req, res) => {
  try {
    const { name, dob, crushName, userID } = req.body;

    if (!name || !dob || !crushName || !userID) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    const result = generateParagraph(name, dob, crushName);
    res.json({ success: true, result });

  } catch (error) {
    console.error('Error in /generate:', error.message);
    res.status(500).json({ error: 'Something went wrong.' });
  }
});

module.exports = router;
