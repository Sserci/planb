const commentService = require("../service/comment");

exports.getAll = async (req, res, next) => {
  try {
    const comments = await commentService.getAll();
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const comment = await commentService.findOneById(id);
    console.log(comment);
    res.status(200).send(comment);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.create = async (req, res, next) => {
  const data = req.body;
  console.log(data);
  if (data.content) {
    const comment = await commentService.create(data);
    res.status(200).send(comment);
  } else {
    res.status(400).send();
  }
};

exports.deleteComment = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const comment = await commentService.deleteComment(data);
    res.status(200).send(comment);
  } catch {
    res.status(500).send({ error: error });
  }
};

exports.updateComment = async (req, res, next) => {
  try {
    const query = req.params;
    console.log(query);
    const body = req.body;
    const comment = await commentService.findOneById(query.id);
    console.log(comment);
    await commentService.updateComment(comment, body);

    const commentUpdate = await commentService.findOneById(query.id);
    res.status(200).send(commentUpdate);
  } catch (error) {
    console.log(error)
    res.status(500).send({ error: error });
  }
};
