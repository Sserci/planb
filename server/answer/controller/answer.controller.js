const answerService = require("../service/answer");

exports.getAll = async (req, res, next) => {
  try {
    const answers = await answerService.getAll();
    res.status(200).send(answers);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data.content) {
    const answer = await answerService.create(data);
    res.status(200).send(answer);
  } else {
    res.status(400).send();
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const body = req.body;
    const answer = await answerService.findOneById(body.id);
    res.status(200).send(answer);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateAnswer = async (req, res, next) => {
  try {
    const query = req.params;
    console.log(query);
    const body = req.body;
    const answer = await answerService.findOneById(query.id);
    console.log(answer);
    await answerService.updateAnswer(answer, body);

    const answerUpdate = await answerService.findOneById(query.id);
    res.status(200).send(answerUpdate);
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error });
  }
};

/* exports.deleteAnswer = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    const answer = await answerService.findOne(data);
    res.status(200).send(answer);
  } catch {
    res.status(500).send({ error: error });
  }
}; */
