const express = require("express");
const Event = require("../models/event");
const router = express.Router();

router.post("/", async (req, res) => {
  const { title, descreption, date, createdBy, location } = req.body;
  try {
    const newEvent = new Event({
      title,
      description,
      date,
      createdBy,
      location,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const events = await Event.find().populate("createdBy", "name department");
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

module.exports = router;
