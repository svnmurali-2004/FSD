const express = require('express');
const router = express.Router();
const students = require('../models/studentSchema');

// GET all aliens
router.get('/', async (req, res) => {
  try {
    const totalstudents = await students.find();
    res.json(totalstudents);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// GET a specific alien by ID
router.get('/:id', async (req, res) => {
  try {
    const student = await students.findById(req.params.id);
    res.json(student);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// POST a new alien
router.post('/', async (req, res) => {
    console.log("post method called")
  const student = new students({
    name: req.body.name,
    rollnumber: req.body.rollnumber,
    section: req.body.section,
  });

  try {
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

// PATCH (update) an alien's subscription status by ID
router.patch('/:id', async (req, res) => {
  try {
    const student = await students.findById(req.params.id);
    student.section = req.body.section;
    const a1 = await student.save();
    res.json(a1);
  } catch (err) {
    res.send('Error: ' + err);
  }
});

module.exports = router;
