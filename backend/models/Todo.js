const mongoose = require("mongoose");

const { Schema } = mongoose;

const todoSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      minlength: [3, "Title must be al list 3 characters"],
    },
    description: {
      type: String,
      trim: true,
      required: [true, "Description is required"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
 

module.exports = mongoose.model("Todo", todoSchema)