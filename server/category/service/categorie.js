const model = require("../../models");
const bcrypt = require("bcryptjs");

exports.create = async (req) => {
  console.log(req);
  try {
    const categorie = await model.categorie.create(req);
    return categorie;
  } catch (e) {
    throw e;
  }
};

exports.deletecategorie = async (data) => {
  try {
    console.log(data);
    const categorie = await model.categorie.findOne({ where: { id: data } });
    //console.log(data);
    categorie.destroy();
    return categorie;
  } catch (e) {
    throw e;
  }
};

exports.getAll = async () => {
  try {

    const categorie = await model.categorie.findAll();
    return categorie;
  } catch (e) {
    throw "fail get all categories";
  }
};

exports.finOneById = async (id) => {
  try {
    const categorie = await model.categorie.findOne({ where: { id: id } });
    return categorie;
  } catch (e) {
    throw "Categorie not find";
  }
};
