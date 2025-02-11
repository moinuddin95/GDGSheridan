import express from "express";
import fs from "fs";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import { Strategy } from "passport-azure-ad-oauth2";

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
      callbackURL: process.env.REDIRECT_URI,
      tenant: process.env.TENANT_ID,
      authorizationURL: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/authorize`,
      tokenURL: `https://login.microsoftonline.com/${process.env.TENANT_ID}/oauth2/v2.0/token`,
    },
    async (accessToken, refreshToken, params, profile, done) => {
      try {
        const response = await fetch("https://graph.microsoft.com/v1.0/me", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        const data = await response.json();
        console.log(data);
        return done(null, data);
      } catch (err) {
        console.log(err);
        return done(err);
      }
    }
  )
);
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));
//body parsing json

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}))

app.get(
  "/auth/login",
  passport.authenticate("azure_ad_oauth2", {
    scope: [
      "openid",
      "profile",
      "email",
      "offline_access",
      "User.Read",
      "User.ReadBasic.All",
    ],
  })
);

const authenticateUser = (req, res, next) => {
  console.log(req.user.mail);
  if (process.env.ALLOWED_EMAILS.split(",").includes(req.user.mail)) {
    next();
  } else {
    res.status(403).send("access-denied" + req.user.mail);
  }
};

app.get("/auth/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/auth/login");
  });
});

app.get(
  "/auth/callback",
  passport.authenticate("azure_ad_oauth2", {
    failureRedirect: "/error",
  }),
  authenticateUser,
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  }
);

app.get("/auth/user", (req, res) => {
  res.json(req.user || null);
});

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
