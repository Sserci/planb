const jwt = require("jsonwebtoken");
const userService = require("../user/service/user");

const config = process.env;

const verifyToken = async (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
  console.log(next);
  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, "RANDOM_TOKEN_SECRET");
    console.log(decoded);
    const user = await userService.findOneById(decoded.userId);

    req.user = user;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyToken;
