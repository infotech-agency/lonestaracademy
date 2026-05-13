// const cloudinary = require('cloudinary').v2;
// const { CloudinaryStorage } = require('multer-storage-cloudinary');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');

// let storage;
// console.log(process.env.CLOUDINARY_CLOUD_NAME)
// if (process.env.CLOUDINARY_CLOUD_NAME && process.env.CLOUDINARY_CLOUD_NAME !== 'df5l1kxpf') {
//   cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET,
//   });

//   storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//       folder: 'lonestar_academy',
//       allowed_formats: ['jpg', 'jpeg', 'png', 'webp'],
//     },
//   });
// } else {
//   // Fallback to local storage if Cloudinary is not configured
//   const uploadDir = path.join(__dirname, '../../uploads');
//   if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir, { recursive: true });
//   }
//   storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, uploadDir);
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });
// }

// const upload = multer({ storage: storage });

// module.exports = { cloudinary, upload };
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

let storage;

// Use Cloudinary if all credentials are available
if (
  process.env.CLOUDINARY_CLOUD_NAME &&
  process.env.CLOUDINARY_API_KEY &&
  process.env.CLOUDINARY_API_SECRET
) {
  console.log("Using Cloudinary for file uploads...");

  storage = new CloudinaryStorage({
    cloudinary,
    params: {
      folder: "lonestar_academy",
      allowed_formats: ["jpg", "jpeg", "png", "webp"],
    },
  });
} else {
  console.log("Cloudinary credentials not found. Using local uploads...");

  // Fallback to local storage
  const uploadDir = path.join(__dirname, "../../uploads");

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
}

const upload = multer({ storage });

module.exports = { cloudinary, upload };