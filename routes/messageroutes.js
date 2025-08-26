const express = require("express");
const Message = require("../models/message");
const router = express.Router();

router.post("/", async (req, res) => {
  const { from, to, content } = req.nody;

  try {
    const newMessage = new Message({
      from,
      to,
      content,
    });
    await newMessage.save();
    res.status(201).json(newMessage);
  } catch (err) {
    res.status(500).json({ message: "server error" });
  }
});

router.get("/:from/:to", async (req, res) => {
  try {
    const messages = await Message.find({
      $or: [
        { from: req.params.from, to: req.params.to },
        { from: req.params.to, to: req.params.from },
      ],
    }).sort({ Timestamp: 1 });

    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
