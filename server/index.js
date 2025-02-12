import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import authRouter from "./routes/authRoutes.js";
import session from "express-session";
import passport from "passport";
import "./configs/passportConfig.js";

const app = express();

//body parsing json

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

app.get("/events", (req, res) => {
  let data = fs.readFileSync("./model/Events.json", { encoding: "utf-8" });
  res.json(JSON.parse(data));
});

app.post("/submitEvent", (req, res) => {
  const Event = {
    executiveName: req.body.executiveName,
    eventName: req.body.eventName,
    eventDate: req.body.eventDate,
    eventTimeFrom: req.body.eventTimeFrom,
    eventTimeTo: req.body.eventTimeTo,
    eventLocation: req.body.eventLocation,
    eventDescription: req.body.eventDescription,
    eventThumbnail: req.body.eventThumbnail,
  };
  let events = JSON.parse(
    fs.readFileSync("./model/Events.json", { encoding: "utf-8" })
  );
  events.push(Event);
  fs.writeFileSync("./model/Events.json", JSON.stringify(events, null, 2));
  res.status(201).send("Event added successfully");
});

app.listen(5000, () => {
  console.log("\nListening on port 5000.\n");
});
