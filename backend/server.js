import express from "express";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
// console.log("Token loaded:", process.env.GITHUB_API_KEY ? "✅ Yes" : "❌ No");
// console.log("Token:", process.env.GITHUB_API_KEY); // Just for debugging (remove before pushing)

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
});
