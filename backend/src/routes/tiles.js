// // routes/courseTiles.js

// const express = require("express");
// const router = express.Router();
// const CourseTile = require("../models/Tiles");

// // ==========================
// // CREATE Course Tile
// // POST /api/course-tiles
// // ==========================
// router.post("/", async (req, res) => {
//   try {
//     const courseTile = new CourseTile(req.body);
//     const savedCourseTile = await courseTile.save();

//     res.status(201).json({
//       success: true,
//       message: "Course tile created successfully",
//       data: savedCourseTile,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // GET All Course Tiles
// // GET /api/course-tiles
// // ==========================
// router.get("/", async (req, res) => {
//   try {
//     const courseTiles = await CourseTile.find().sort({ createdAt: -1 });

//     res.status(200).json({
//       success: true,
//       count: courseTiles.length,
//       data: courseTiles,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // GET Single Course Tile
// // GET /api/course-tiles/:id
// // ==========================
// router.get("/:id", async (req, res) => {
//   try {
//     const courseTile = await CourseTile.findById(req.params.id);

//     if (!courseTile) {
//       return res.status(404).json({
//         success: false,
//         message: "Course tile not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: courseTile,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Invalid course tile ID",
//     });
//   }
// });

// // ==========================
// // UPDATE Course Tile
// // PUT /api/course-tiles/:id
// // ==========================
// router.put("/:id", async (req, res) => {
//   try {
//     const courseTile = await CourseTile.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!courseTile) {
//       return res.status(404).json({
//         success: false,
//         message: "Course tile not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course tile updated successfully",
//       data: courseTile,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // DELETE Course Tile
// // DELETE /api/course-tiles/:id
// // ==========================
// router.delete("/:id", async (req, res) => {
//   try {
//     const courseTile = await CourseTile.findByIdAndDelete(req.params.id);

//     if (!courseTile) {
//       return res.status(404).json({
//         success: false,
//         message: "Course tile not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Course tile deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "Invalid course tile ID",
//     });
//   }
// });

// module.exports = router;


// routes/courseTiles.js

const express = require("express");
const router = express.Router();
const CourseTile = require("../models/Tiles");
const { upload } = require("../config/cloudinary");

// ==========================
// CREATE Course Tile
// POST /api/course-tiles
// ==========================
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const courseTile = new CourseTile({
      courseName: req.body.courseName,
      description: req.body.description,
      price: req.body.price,
      image: req.file?.path || "", // Cloudinary URL
    });

    const savedCourseTile = await courseTile.save();

    res.status(201).json({
      success: true,
      message: "Course tile created successfully",
      data: savedCourseTile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================
// GET All Course Tiles
// GET /api/course-tiles
// ==========================
router.get("/", async (req, res) => {
  try {
    const courseTiles = await CourseTile.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: courseTiles.length,
      data: courseTiles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================
// GET Single Course Tile
// GET /api/course-tiles/:id
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const courseTile = await CourseTile.findById(req.params.id);

    if (!courseTile) {
      return res.status(404).json({
        success: false,
        message: "Course tile not found",
      });
    }

    res.status(200).json({
      success: true,
      data: courseTile,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid course tile ID",
    });
  }
});

// ==========================
// UPDATE Course Tile
// PUT /api/course-tiles/:id
// ==========================
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const existingTile = await CourseTile.findById(req.params.id);

    if (!existingTile) {
      return res.status(404).json({
        success: false,
        message: "Course tile not found",
      });
    }

    const updatedData = {
      courseName: req.body.courseName,
      description: req.body.description,
      price: req.body.price,
    };

    // Update image only if new image uploaded
    if (req.file?.path) {
      updatedData.image = req.file.path;
    }

    const updatedTile = await CourseTile.findByIdAndUpdate(
      req.params.id,
      updatedData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      success: true,
      message: "Course tile updated successfully",
      data: updatedTile,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================
// DELETE Course Tile
// DELETE /api/course-tiles/:id
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const courseTile = await CourseTile.findByIdAndDelete(req.params.id);

    if (!courseTile) {
      return res.status(404).json({
        success: false,
        message: "Course tile not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Course tile deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid course tile ID",
    });
  }
});

module.exports = router;