import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoutes.js";
import session from "express-session";
import passport from "passport";
import "./configs/passportConfig.js";
import eventsRouter from "./routes/eventRoutes.js";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: ["https://www.gdgsheridan.com", "https://gdgsheridan.com", "http://localhost:3000"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize passport after session
app.use(passport.initialize());
app.use(passport.session());

app.use("/api/auth", authRouter);

app.get("/error", (req, res) => {
  res.status(500).send("Error occured");
});

app.use("/api/events", eventsRouter);

app.listen(process.env.PORT || 5000, () => {
  console.log("\nListening on port 5000.\n");
});
