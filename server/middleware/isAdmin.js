const jwt = require("jsonwebtoken");
const userService = require("../user/service/user");

const config = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "RANDOM_TOKEN_SECRET");

    const user = await userService.finOneById(decoded.id);
    if (user.admin) {
      req.user = user;
    } else {
      throw "Unauthorize";
    }
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
