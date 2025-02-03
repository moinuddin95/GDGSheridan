import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-google-oauth20";

dotenv.config();

const app = express();

//adding authorization middleware
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:5000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
//body parsing json

app.use(bodyParser.json());

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

app.get("/auth/google/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/auth/google");
  });
});

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/error" }), 
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

app.get('/auth/google/user', (req, res) => {
  res.json(req.user || null);
})

app.get('/error', (req, res) => {
  res.status(500).send("Error occured");
})

app.get("/events", (req, res) => {
  let data = fs.readFileSync("./model/Events.json", { encoding: "utf-8" });
  res.json(JSON.parse(data));
});

app.post("/submitEvent", (req, res) => {
  //   const Event = {
  //     eventName: req.body.eventName,
  //     eventDate: req.body.eventDate,
  //     eventTimeFrom: req.body.eventTimeFrom,
  //     eventTimeTo: req.body.eventTimeTo,
  //     eventLocation: req.body.eventLocation,
  //     eventDescription: req.body.eventDescription,
  //     eventThumbnail: req.body.eventThumbnail,
  //   };
});

app.listen(5000, () => {
  console.log("\nListening on port 5000.\n");
});