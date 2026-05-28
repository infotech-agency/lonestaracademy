require('dotenv').config();
const express = require("express");
const cors = require("cors");
const connectDB = require('./config/db');

// Initialize Express
const app = express();

// Connect to Database
connectDB();

// Routes
const coursesRouter = require("./routes/courses");
const blogsRouter = require("./routes/blogs");
const authRouter = require("./routes/auth");
const placementRouter = require("./routes/placement"); // <-- Placement Route Import
const tilesRoutes = require("./routes/tiles")
const admissionRouter = require("./routes/admission");
const testimonialRouter = require("./routes/testimonialRoutes");
;
// Middleware
app.use(cors({
  origin: [
    "http://localhost:5173",
    "http://localhost:3000",
    "http://127.0.0.1:5173",
    "https://www.lonestaracademy.in",
    "https://lonestaracademy.in",
    "https://blue-goat-762498.hostingersite.com",
    "https://ivory-dunlin-460340.hostingersite.com",
    "https://sandybrown-wallaby-261267.hostingersite.com",
    "https://lightseagreen-deer-262241.hostingersite.com",
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));

app.options("*", cors());
app.use(express.json());

const path = require('path');

// Register API Routes
app.use("/api/courses", coursesRouter);
app.use("/api/blogs", blogsRouter);
app.use("/api/auth", authRouter);
app.use("/api/placements", placementRouter); // <-- Placement API Route
app.use("/api/tiles",tilesRoutes)
app.use("/api/admission", admissionRouter);
app.use("/api/testimonials", testimonialRouter);
// Serve local uploads
app.use('/uploads', express.static(path.join(__dirname, '../../uploads')));

// Base route
app.get("/", (req, res) => {
  res.send("Lone Star Academy API is running");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});