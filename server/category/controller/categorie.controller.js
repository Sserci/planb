const categorieService = require("../service/categorie");

exports.getAll = async (req, res, next) => {
  try { 
    
    const categorie = await categorieService.getAll();
    res.status(200).send(categorie);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
exports.findOneById = async (req, res, next) => {
  try {
    const categorie = await categorieService.findOne();
    res.status(200).send(answer);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
exports.update = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  const categorie = await categorieService.update(data);
  console.log(categorie);
  res.status(200).send();
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data) {
    const categorie = await categorieService.create(data);
    res.status(200).send(categorie);
  } else {
    res.status(400).send();
  }
};

exports.deletecategorie = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const categorie = await categorieService.deletecategorie(data);
    //console.log(user);
    res.status(200).send(categorie);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
