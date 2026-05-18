// routes/testimonialRoutes.js
const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");

/**
 * @route   POST /api/testimonials
 * @desc    Create testimonial
 */
router.post("/", async (req, res) => {
  try {
    const { title, description, youtubeUrl, isActive, sortOrder } = req.body;

    const testimonial = await Testimonial.create({
      title,
      description,
      youtubeUrl,
      isActive,
      sortOrder,
    });

    res.status(201).json({
      success: true,
      message: "Testimonial created successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/testimonials
 * @desc    Get all testimonials
 */
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .sort({ sortOrder: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/testimonials/active
 * @desc    Get active testimonials only
 */
router.get("/active", async (req, res) => {
  try {
    const testimonials = await Testimonial.find({ isActive: true })
      .sort({ sortOrder: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: testimonials.length,
      data: testimonials,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   GET /api/testimonials/:id
 * @desc    Get single testimonial
 */
router.get("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findById(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      data: testimonial,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   PUT /api/testimonials/:id
 * @desc    Update testimonial
 */
router.put("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial updated successfully",
      data: testimonial,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * @route   DELETE /api/testimonials/:id
 * @desc    Delete testimonial
 */
router.delete("/:id", async (req, res) => {
  try {
    const testimonial = await Testimonial.findByIdAndDelete(req.params.id);

    if (!testimonial) {
      return res.status(404).json({
        success: false,
        message: "Testimonial not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Testimonial deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;