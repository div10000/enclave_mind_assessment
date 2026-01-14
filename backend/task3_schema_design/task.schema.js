const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,

  status: {
    type: String,
    enum: ["Pending", "In-Progress", "Completed"],
    default: "Pending"
  },

  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

const Task = mongoose.model("Task", taskSchema);

/*
 Sample Query:
 Find all completed tasks for a specific user
*/
Task.find({ status: "Completed", creator: userId });

module.exports = Task;
