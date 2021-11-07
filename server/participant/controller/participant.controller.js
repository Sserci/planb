const participantService = require("../service/participant");


exports.getAll = async (req, res, next) => {
  try {
    const participants = await participantService.getAll();
    res.status(200).send(participants);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const data = req.body;
    const participant = await participantService.findOneById(data);
    res.status(200).send(participant);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data) {
    const participant = await participantService.create(data);
    res.status(200).send(participant);
  } else {
    res.status(400).send();
  } 
};

exports.update = async (req, res, next) => {
  const data = req.body;
  const id = req.user.id;
  //console.log(id);
  const participant = await participantService.update(data, id);
  //console.log(participant);
  res.status(200).send();
};

exports.delete = async (req, res, next) => {
  const data = req.body.id;
  //console.log(data);
  try {
    const participant = await participantService.deleteParticipant(data);
    //console.log(participant);
    res.status(200).send(participant);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

/* exports.findOneByEventId = async (req, res, next) => {

} */
