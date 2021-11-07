const model = require("../../models");
const bcrypt = require("bcryptjs");
const nodemailer = require("../../nodemailer.js");
const jwt = require("jsonwebtoken");
const { uuid } = require("uuidv4");

//const checkuser = require("../../middleware/auth");

exports.create = async (req) => {
  console.log(req);

  req.password = bcrypt.hashSync(req.password, 10);
  const existuser = await this.findOneByEmail(req);
  console.log(existuser);
  if (existuser) {
    throw "L'utilisateur existe déja, veuillez vous connecter !";
  } else {
    try {
      const user = await model.user.create(req);
      const emailuuid = uuid();
      await model.user.update(
        { emailverifytoken: emailuuid },
        { where: { id: user.id } }
      );
      console.log(emailuuid);
      const link = `<a href="http://localhost:3000/emailverification?token=${emailuuid}&userId=${user.id}">Cliquez ici pour confirmer votre compte </a>`;

      nodemailer.sendEmail({
        from: '"Plan B 👻" <planbmarseillecontact@gmail.com>', // sender address
        to: req.email, // list of receivers
        subject: "Veuillez confirmer votre adresse email", // Subject line
        text: "Hello " + req.username, // plain text body
        html: link, // html body
      });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
};

exports.emailConfirmation = async (token, userId) => {
  //console.log(userId);
  const user = await model.user.findOne({ where: { id: userId } });
  //console.log(user);
  if (token === user.emailverifytoken && !user.emailverified) {
    await model.user.update(
      { emailverified: true, emailverifytoken: null },
      { where: { id: userId } }
    );
  } else {
    throw "Unauthorize";
  }

  return user;
};

exports.update = async (data, id) => {
  if (data.password) {
    data.password = bcrypt.hashSync(data.password, 10);
  }

  try {
    const user = await model.user.update(data, { where: { id: id } });

    return user;
  } catch (e) {
    throw e;
  }
};

exports.deleteuser = async (data) => {
  try {
    console.log(data);

    const user = await model.user.findOne({ where: { id: data } });
    //console.log(user);
    user.destroy();
    return user;
  } catch (e) {
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const users = await model.user.findAll({
      include: { all: true, nested: true },
    });
    return users;
  } catch (e) {
    throw "fail get all users";
  }
};

exports.findOneByEmail = async (data) => {
  try {
    const email = data.email;
    const user = await model.user.findOne({ where: { email: email } });
    return user;
  } catch (e) {
    throw "User not found";
  }
};
exports.findOneById = async (id) => {
  try {
    console.log(id);

    const user = await model.user.findOne({
      where: { id: id },
      include: { all: true, nested: true },
    });
    return user;
  } catch (e) {
    console.log(e);
    throw "User not find";
  }
};
