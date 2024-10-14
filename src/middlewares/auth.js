const adminAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthaurised = token === "xyz";

  if (!isAdminAuthaurised) {
    res.status(401).send("UNAUTHAURISZED REQUEST");
  } else {
    next();
  }
};

const userAuth = (req, res, next) => {
  const token = "xyz";
  const isAdminAuthaurised = token === "xyz1";

  if (!isAdminAuthaurised) {
    res.status(401).send("UNAUTHAURISZED REQUEST");
  } else {
    next();
  }
};

module.exports = { adminAuth, userAuth };
