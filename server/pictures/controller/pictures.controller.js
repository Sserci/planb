const picturesService = require("../service/pictures");
const auth = require("../../middleware/auth");

exports.create = async (req, res, next) => {
  const data = req.body;
  const id = req.user.dataValues.id;
  console.log(id);
  data.userId = id;
  console.log(data);
  if (data.eventId && data.path) {
    try {
      const picture = await picturesService.create(data);
      res.status(200).send(picture);
    } catch (err) {
      res.status(403).send();
    }
  } else {
    res.status(400).send();
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const pictures = await picturesService.getAll();
    res.status(200).send(pictures);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const picture = await picturesService.findOneById(id);
    res.status(200).send(picture);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.delete = async (req, res, next) => {
  const data = req.params.id;
  try {
    const picture = await picturesService.delete(data);

    res.status(200).send(picture);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

/* exports.update = async (req, res, next) => {
  const data = req.body;
  const id = req.user.id;
  //console.log(id);
  const picture = await picturesService.update(data, id);
  //console.log(participant);
  res.status(200).send();
}; */
