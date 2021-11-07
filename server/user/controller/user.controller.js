const userService = require("../service/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const nodemailer = require("../../nodemailer.js");
const auth = require("../../middleware/auth");
const uploadFile = require("../../middleware/upload");

exports.getAll = async (req, res, next) => {
  try {
    const users = await userService.getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.emailConfirmation = async (req, res, next) => {
  try {
    const token = req.query.token;
    const userId = req.query.userId;

    //console.log(req.query);
    const users = await userService.emailConfirmation(token, userId);
    res.status(200).send(users);
  } catch (error) {
    res.status(401).send({ error: error });
  }
};

exports.findOneByEmail = async (req, res, next) => {
  try {
    const data = req.body;
    const user = await userService.findOneByEmail(data);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneByIdUser = async (req, res, next) => {
  try {
    const id = req.user.dataValues.id;
    const user = await userService.findOneById(id);
    //console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneByIdAdmin = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userService.findOneById(id);
    //console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data.email && data.password) {
    try {
      const user = await userService.create(data);
      res.status(200).send(user);
    } catch (err) {
      res.status(403).send({ error: err });
    }
  } else {
    res.status(400).send();
  }
};

exports.updatebyadmin = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  const user = await userService.update(data, id);
  console.log(user);
  res.status(200).send();
};

exports.updatebyuser = async (req, res, next) => {
  const data = req.body;
  await uploadFile(req, res);
  if (req.file != undefined) {
    data.picture = "/public/images/" + req.file.originalname;
  }
  console.log("----");
  console.log(data);
  const id = req.user.dataValues.id;
  console.log(id);
  //console.log(id);
  const user = await userService.update(data, id);
  //console.log(user);
  res.status(200).send();
};

exports.deleteuserbyadmin = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const user = await userService.deleteuser(data);
    //console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.deleteuserbyuser = async (req, res, next) => {
  const id = req.user.dataValues.id;
  //console.log(data);
  try {
    const user = await userService.deleteuser(id);
    //console.log(user);
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.loginadmin = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const user = await userService.findOneByEmail(data);
    console.log(user);

    console.log(user.password);
    console.log(data.password);

    const result = bcrypt.compareSync(data.password, user.password);
    console.log(result);

    if (result) {
      console.log(user.password);
      if (user.admin) {
        const jwtCreate = jwt.sign(
          { userId: user.id, username: user.username, isAdmin: user.admin },
          "RANDOM_TOKEN_SECRET",
          {
            expiresIn: "24h",
          }
        );

        console.log(jwtCreate);
        res.status(200).json({
          token: jwtCreate,
        });
      } else {
        res.status(403).send({ error: "Unauthorized" });
        console.log(error);
      }
    } else {
      res.status(401).send({ error: "Email et/ou mot de passe incorrect" });
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error });
  }
};

exports.login = async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const user = await userService.findOneByEmail(data);
    console.log(user);

    console.log(user.password);
    console.log(data.password);

    const result = bcrypt.compareSync(data.password, user.password);
    console.log(result);

    if (result) {
      console.log(user.password);

      const jwtCreate = jwt.sign(
        { userId: user.id, username: user.username, isAdmin: user.admin },
        "RANDOM_TOKEN_SECRET",
        {
          expiresIn: "24h",
        }
      );

      console.log(jwtCreate);
      res.status(200).json({
        token: jwtCreate,
      });
    } else {
      res.status(401).send({ error: "Email et/ou mot de passe incorrect" });
      console.log(error);
    }
  } catch (error) {
    console.log(error);
    res.status(400).send({ error: "Email et/ou mot de passe incorrect" });
  }
};
