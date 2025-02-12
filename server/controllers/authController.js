import passport from "passport";
import authenticateUser from "../middlewares/authMiddleware.js";
const login = passport.authenticate("azure_ad_oauth2", {
  scope: [
    "openid",
    "profile",
    "email",
    "offline_access",
    "User.Read",
    "User.ReadBasic.All",
  ],
});

const logout = (req, res) => {
  req.logOut(() => {
    res.redirect("/login");
  });
};

const callback = [
  passport.authenticate("azure_ad_oauth2", {
    failureRedirect: "/error",
  }),
  authenticateUser,
  (req, res) => {
    res.redirect("http://localhost:3000/dashboard");
  },
];

const getUser = (req, res) => {
  req.user ? console.log(req.user) : console.log("No user found");
  res.json(req.user || null);
};

export { login, logout, callback, getUser };
