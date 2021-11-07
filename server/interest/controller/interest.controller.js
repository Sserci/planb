const interestService = require("../service/interest");

exports.createinterest = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;

    const evId = req.body.eventId;
    //console.log(evId);

    const interest = await interestService.createinterest(userId, evId);
    res.status(200).send(interest);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneInterestById = async (req, res, next) => {
  try {
    const userId = req.user.dataValues.id;
    const interest = await interestService.findOneInterestById(userId);
    res.status(200).send(interest);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.deleteInterest = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const interest = await interestService.deleteInterest(data);
    console.log(interest);
    res.status(200).send(interest);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.deleteInterestEventPage = async (req, res, next) => {
  const data = req.body;
  console.log("data", data);
  try {
    await interestService.deleteInterestEventPage(data);

    res.status(200).send();
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const interest = await interestService.getAll();
    res.status(200).send(interest);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
