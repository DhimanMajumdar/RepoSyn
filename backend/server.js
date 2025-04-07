import express from "express";
import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import authRoutes from "./routes/auth.route.js";
import dotenv from "dotenv";
import cors from "cors";
import connectMongoDB from "./db/connectMongoDB.js";
import "./passport/github.auth.js";
import passport from "passport";
import session from "express-session";
dotenv.config();
// console.log("Token loaded:", process.env.GITHUB_API_KEY ? "✅ Yes" : "❌ No");
// console.log("Token:", process.env.GITHUB_API_KEY); // Just for debugging (remove before pushing)

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// Session and Passport.js setup
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, // Set to true in production with HTTPS
      httpOnly: true,
      sameSite: "lax", // Adjust as needed
    },
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, () => {
  console.log("Server started on http://localhost:5000");
  connectMongoDB();
});
