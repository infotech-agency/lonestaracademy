// models/CourseTile.js

const mongoose = require("mongoose");

const courseTileSchema = new mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    price: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String, // Cloudinary image URL
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CourseTile", courseTileSchema);