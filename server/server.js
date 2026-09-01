import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

app.get("/api/hello", (req, res) => {
 res.json({
   message: "Hello from Expressjs!"
 });
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
