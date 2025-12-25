module.exports = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Login required" });
  }

  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }

  next();
};
