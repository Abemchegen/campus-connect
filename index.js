const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(express.json());

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/userroutes");
const eventRoutes = require("./routes/eventroutes");
const messageRoutes = require("./routes/messageroutes");

app.use("/api/auth", authRoutes);
app.use("api/users", userRoutes);
app.use("/api/events", eventRoutes);
app.use("api/messages", messageRoutes);

app.get("/", (req, res) => {
  res.send("campus connect api is running");
});

mongoose
  .connect(process.env.Mongo_uri)
  .then(() => console.log("connected to mongodb!"))
  .catch((err) => console.log(err));

const Port = process.env.Port;
app.listen(Port, () => console.log(`server is running on port ${Port}`));
