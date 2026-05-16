// // routes/admission.js

// const express = require("express");
// const { upload } = require("../config/cloudinary"); // existing Cloudinary multer setup
// const Admission = require("../models/Admission");

// const router = express.Router();

// /**
//  * POST /api/admission
//  * multipart/form-data
//  * Fields:
//  * - name
//  * - email
//  * - phone
//  * - branch
//  * - course
//  * - dob
//  * - address
//  * - country
//  * - message
//  * - idProof (file)
//  * - photo (file)
//  */
// router.post(
//   "/",
//   upload.fields([
//     { name: "idProof", maxCount: 1 },
//     { name: "photo", maxCount: 1 },
//   ]),
//   async (req, res) => {
//     try {
//       const {
//         name,
//         email,
//         phone,
//         branch,
//         course,
//         dob,
//         address,
//         country,
//         message,
//       } = req.body;

//       // Validation
//       if (!name || !email || !phone || !course) {
//         return res.status(400).json({
//           success: false,
//           message:
//             "Name, email, phone, branch and course are required fields.",
//         });
//       }

//       const files = req.files || {};

//       // Cloudinary URLs from existing upload middleware
//       const idProofFile = files.idProof?.[0];
//       const photoFile = files.photo?.[0];

//       const admissionData = {
//         name,
//         email,
//         phone,
//         branch,
//         course,
//         dob: dob || "",
//         address: address || "",
//         country: country || "",
//         message: message || "",

//         idProof: idProofFile
//           ? {
//               public_id: idProofFile.filename || idProofFile.public_id,
//               secure_url: idProofFile.path,
//             }
//           : null,

//         photo: photoFile
//           ? {
//               public_id: photoFile.filename || photoFile.public_id,
//               secure_url: photoFile.path,
//             }
//           : null,
//       };

//       const admission = await Admission.create(admissionData);

//       res.status(201).json({
//         success: true,
//         message: "Admission form submitted successfully.",
//         data: admission,
//       });
//     } catch (error) {
//       console.error("Admission Form Error:", error);
//       res.status(500).json({
//         success: false,
//         message: error.message || "Server error",
//       });
//     }
//   }
// );

// /**
//  * GET all admissions
//  */
// router.get("/", async (req, res) => {
//   try {
//     const admissions = await Admission.find().sort({ createdAt: -1 });

//     res.json({
//       success: true,
//       count: admissions.length,
//       data: admissions,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// /**
//  * GET single admission
//  */
// router.get("/:id", async (req, res) => {
//   try {
//     const admission = await Admission.findById(req.params.id);

//     if (!admission) {
//       return res.status(404).json({
//         success: false,
//         message: "Admission not found",
//       });
//     }

//     res.json({
//       success: true,
//       data: admission,
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// /**
//  * DELETE admission
//  */
// router.delete("/:id", async (req, res) => {
//   try {
//     const admission = await Admission.findByIdAndDelete(req.params.id);

//     if (!admission) {
//       return res.status(404).json({
//         success: false,
//         message: "Admission not found",
//       });
//     }

//     res.json({
//       success: true,
//       message: "Admission deleted successfully",
//     });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: error.message,
//     });
//   }
// });

// module.exports = router;
// routes/admission.js

const express = require("express");
const { upload } = require("../config/cloudinary"); // existing Cloudinary multer setup
const Admission = require("../models/Admission");

const router = express.Router();

/**
 * POST /api/admission
 * multipart/form-data
 * Fields:
 * - name
 * - email
 * - phone
 * - course
 * - dob
 * - address
 * - message
 * - idProof (file)
 * - photo (file)
 */
router.post(
  "/",
  upload.fields([
    { name: "idProof", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        course,
        dob,
        address,
        message,
      } = req.body;

      // Validation - branch and country removed
      if (!name || !email || !phone || !course) {
        return res.status(400).json({
          success: false,
          message: "Name, email, phone and course are required fields.",
        });
      }

      const files = req.files || {};

      // Cloudinary URLs from existing upload middleware
      const idProofFile = files.idProof?.[0];
      const photoFile = files.photo?.[0];

      const admissionData = {
        name,
        email,
        phone,
        course,
        dob: dob || "",
        address: address || "",
        message: message || "",

        idProof: idProofFile
          ? {
              public_id: idProofFile.filename || idProofFile.public_id,
              secure_url: idProofFile.path,
            }
          : null,

        photo: photoFile
          ? {
              public_id: photoFile.filename || photoFile.public_id,
              secure_url: photoFile.path,
            }
          : null,
      };

      const admission = await Admission.create(admissionData);

      res.status(201).json({
        success: true,
        message: "Admission form submitted successfully.",
        data: admission,
      });
    } catch (error) {
      console.error("Admission Form Error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Server error",
      });
    }
  }
);

/**
 * GET all admissions
 */
router.get("/", async (req, res) => {
  try {
    const admissions = await Admission.find().sort({ createdAt: -1 });

    res.json({
      success: true,
      count: admissions.length,
      data: admissions,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * GET single admission
 */
router.get("/:id", async (req, res) => {
  try {
    const admission = await Admission.findById(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.json({
      success: true,
      data: admission,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

/**
 * DELETE admission
 */
router.delete("/:id", async (req, res) => {
  try {
    const admission = await Admission.findByIdAndDelete(req.params.id);

    if (!admission) {
      return res.status(404).json({
        success: false,
        message: "Admission not found",
      });
    }

    res.json({
      success: true,
      message: "Admission deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

module.exports = router;