// models/Admission.js

const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    public_id: {
      type: String,
      default: "",
    },
    secure_url: {
      type: String,
      default: "",
    },
  },
  { _id: false }
);

const admissionSchema = new mongoose.Schema(
  {
    // Required Fields
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"],
    },

    branch: {
      type: String,
      trim: true,
    },

    course: {
      type: String,
      required: [true, "Course is required"],
      trim: true,
    },

    // Optional Fields
    dob: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
      trim: true,
    },

    country: {
      type: String,
      default: "",
      trim: true,
    },

    message: {
      type: String,
      default: "",
      trim: true,
    },

    // Uploaded Files (Cloudinary)
    idProof: {
      type: fileSchema,
      default: null,
    },

    photo: {
      type: fileSchema,
      default: null,
    },
  },
  {
    timestamps: true, // createdAt and updatedAt automatically added
  }
);

module.exports = mongoose.model("Admission", admissionSchema);