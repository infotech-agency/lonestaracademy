// // routes/placementRoutes.js

// const express = require("express");
// const router = express.Router();
// const Placement = require("../models/Placement");

// // ==========================
// // CREATE Placement
// // POST /api/placements
// // ==========================
// router.post("/", async (req, res) => {
//   try {
//     const placement = new Placement(req.body);
//     const savedPlacement = await placement.save();

//     res.status(201).json({
//       success: true,
//       message: "Placement created successfully",
//       data: savedPlacement,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // GET All Placements
// // GET /api/placements
// // ==========================
// router.get("/", async (req, res) => {
//   try {
//     const placements = await Placement.find().sort({
//       order: 1,
//       createdAt: -1,
//     });

//     res.status(200).json({
//       success: true,
//       count: placements.length,
//       data: placements,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // GET Single Placement
// // GET /api/placements/:id
// // ==========================
// router.get("/:id", async (req, res) => {
//   try {
//     const placement = await Placement.findById(req.params.id);

//     if (!placement) {
//       return res.status(404).json({
//         success: false,
//         message: "Placement not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: placement,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// // ==========================
// // UPDATE Placement
// // PUT /api/placements/:id
// // ==========================
// router.put("/:id", async (req, res) => {
//   try {
//     const placement = await Placement.findByIdAndUpdate(
//       req.params.id,
//       req.body,
//       {
//         new: true,
//         runValidators: true,
//       }
//     );

//     if (!placement) {
//       return res.status(404).json({
//         success: false,
//         message: "Placement not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Placement updated successfully",
//       data: placement,
//     });
//   } catch (error) {
//     res.status(400).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// router.delete("/:id", async (req, res) => {
//   try {
//     const placement = await Placement.findByIdAndDelete(req.params.id);

//     if (!placement) {
//       return res.status(404).json({
//         success: false,
//         message: "Placement not found",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       message: "Placement deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;
// routes/placement.js

const express = require("express");
const router = express.Router();
const Placement = require("../models/Placement");
const { upload } = require("../config/cloudinary");

// ==========================
// CREATE Placement
// POST /api/placements
// ==========================
router.post(
  "/",
  upload.fields([
    { name: "studentImage", maxCount: 1 },
    { name: "companyLogo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const placement = new Placement({
        studentName: req.body.studentName,
        studentImage: req.files?.studentImage?.[0]?.path || "",
        companyName: req.body.companyName,
        companyLogo: req.files?.companyLogo?.[0]?.path || "",
        role: req.body.role,
        isFeatured: req.body.isFeatured || false,
        order: req.body.order || 0,
      });

      const savedPlacement = await placement.save();

      res.status(201).json({
        success: true,
        message: "Placement created successfully",
        data: savedPlacement,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
);

// ==========================
// GET All Placements
// GET /api/placements
// ==========================
router.get("/", async (req, res) => {
  try {
    const placements = await Placement.find().sort({
      isFeatured: -1,
      order: 1,
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      count: placements.length,
      data: placements,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

// ==========================
// GET Single Placement
// GET /api/placements/:id
// ==========================
router.get("/:id", async (req, res) => {
  try {
    const placement = await Placement.findById(req.params.id);

    if (!placement) {
      return res.status(404).json({
        success: false,
        message: "Placement not found",
      });
    }

    res.status(200).json({
      success: true,
      data: placement,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid placement ID",
    });
  }
});

// ==========================
// UPDATE Placement
// PUT /api/placements/:id
// ==========================
router.put(
  "/:id",
  upload.fields([
    { name: "studentImage", maxCount: 1 },
    { name: "companyLogo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const existingPlacement = await Placement.findById(req.params.id);

      if (!existingPlacement) {
        return res.status(404).json({
          success: false,
          message: "Placement not found",
        });
      }

      const updatedData = {
        studentName: req.body.studentName,
        companyName: req.body.companyName,
        role: req.body.role,
        isFeatured: req.body.isFeatured || false,
        order: req.body.order || 0,
      };

      // Only update images if new files are uploaded
      if (req.files?.studentImage?.[0]?.path) {
        updatedData.studentImage = req.files.studentImage[0].path;
      }

      if (req.files?.companyLogo?.[0]?.path) {
        updatedData.companyLogo = req.files.companyLogo[0].path;
      }

      const updatedPlacement = await Placement.findByIdAndUpdate(
        req.params.id,
        updatedData,
        {
          new: true,
          runValidators: true,
        }
      );

      res.status(200).json({
        success: true,
        message: "Placement updated successfully",
        data: updatedPlacement,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  }
);

// ==========================
// DELETE Placement
// DELETE /api/placements/:id
// ==========================
router.delete("/:id", async (req, res) => {
  try {
    const placement = await Placement.findByIdAndDelete(req.params.id);

    if (!placement) {
      return res.status(404).json({
        success: false,
        message: "Placement not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Placement deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Invalid placement ID",
    });
  }
});

module.exports = router;