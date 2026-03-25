function isGuest(req, res, next) {
  if (req.session && req.session.user) {
    return res.redirect("/dashboard");
  }
  return next();
}

function isAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    return next();
  }
  return res.redirect("/auth");
}

function isAdmin(req, res, next) {
  if (req.session && req.session.user && req.session.user.role === "admin") {
    return next();
  }
  return res.status(403).render("pages/403", { layout: false });
}

function isAdminOrEditor(req, res, next) {
  const role = req.session && req.session.user && req.session.user.role;
  if (role === "admin" || role === "editor") {
    return next();
  }
  return res.redirect("/auth");
}

module.exports = { isGuest, isAuthenticated, isAdmin, isAdminOrEditor };
