const authenticateUser = (req, res, next) => {
  if (process.env.ALLOWED_EMAILS.split(",").includes(req.user.mail)) {
    next();
  } else {
    res.status(403).send("access-denied" + req.user.mail);
  }
};

export default authenticateUser;
