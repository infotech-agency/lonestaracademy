// // const mongoose = require("mongoose");
// // const bcrypt = require("bcrypt");
// // const Admin = require("../models/Admin");


// // async function seed() {
// //   await mongoose.connect(process.env.MONGO_URI);

// //   const email = "admin@lonestar.in";
// //   const plainPassword = "hashedform123"; // change here whenever you want

// //   const passwordHash = await bcrypt.hash(plainPassword, 10);

// //   await Admin.findOneAndUpdate(
// //     { email },
// //     { email, passwordHash, $inc: { tokenVersion: 0 } },
// //     { upsert: true, new: true }
// //   );

// //   console.log("Admin seeded/updated:", email);
// //   process.exit(0);
// // }

// // seed();

// // require("dotenv").config(); // ← ye line missing thi, sabse upar add karo
// require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
// const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");
// const Admin = require("../models/Admin");

// async function seed() {
//   try {
//     console.log("Connecting to:", process.env.MONGO_URI ? "URI found" : "URI MISSING!");

//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("Connected to MongoDB");

//     const email = "managing@infotechagency.com";
//     const plainPassword = "ConorMcgregor329";

//     const passwordHash = await bcrypt.hash(plainPassword, 10);

//     const result = await Admin.findOneAndUpdate(
//       { email },
//       { email, passwordHash },
//       { upsert: true, new: true }
//     );

//     console.log("Admin seeded/updated:", result.email, result._id);
//   } catch (err) {
//     console.error("Seed failed with error:", err); // ← ab actual error dikhega
//   } finally {
//     process.exit(0);
//   }
// }

// seed();


require("dotenv").config({ path: require("path").resolve(__dirname, "../../.env") });
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Admin = require("../models/Admin");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");

    const email = "managing@infotechagency.com"; // 👈 yahan naya email daalo
    const plainPassword = "ConorMcgregor329";         // 👈 yahan naya password daalo

    const passwordHash = await bcrypt.hash(plainPassword, 10);

    // Pehle purane SAARE admin documents delete karo
    const deleted = await Admin.deleteMany({});
    console.log(`Deleted ${deleted.deletedCount} old admin document(s)`);

    // Fir ek fresh naya admin banao
    const result = await Admin.create({ email: email.toLowerCase(), passwordHash });
    console.log("New admin created:", result.email, result._id);

  } catch (err) {
    console.error("Seed failed with error:", err);
  } finally {
    process.exit(0);
  }
}

seed();