const questionService = require("../service/question");

exports.getAll = async (req, res, next) => {
  try {
    const questions = await questionService.getAll();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data.content) {
    const question = await questionService.create(data);
    res.status(200).send(question);
  } else {
    res.status(400).send();
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const query = req.query;
    const question = await questionService.findOneById(query.id);
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateQuestion = async (req, res, next) => {
  try {
    const query = req.params;
    console.log(query);
    const body = req.body;
    const question = await questionService.findOneById(query.id);
    console.log(question);
    await questionService.updateQuestion(question, body);

    const questionUpdate = await questionService.findOneById(query.id);
    res.status(200).send(questionUpdate);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
/*
exports.deleteQuestion = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  try {
    const question = await questionService.findOne(data);
    res.status(200).send(question);
  } catch {
    res.status(500).send({ error: error });
  }
}; */
