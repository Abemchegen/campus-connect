const mongoose = require("mongoose");
const eventSchema = new mongoose.Schema({
  title: { type: String, requried: true },
  description: { type: String, required: true },
  date: { type: Date, requried: true },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  location: { type: String, required: true },
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
