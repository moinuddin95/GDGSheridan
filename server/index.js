import express from "express";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoutes.js";
import session from "express-session";
import passport from "passport";
import "./configs/passportConfig.js";
import eventsRouter from "./routes/eventRoutes.js";

const app = express();

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

app.use("/auth", authRouter);

app.get("/error", (req, res) => {
  res.status(500).send("Error occured");
});

app.use("/events", eventsRouter);

app.listen(5000, () => {
  console.log("\nListening on port 5000.\n");
});
