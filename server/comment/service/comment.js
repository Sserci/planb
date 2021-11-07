const model = require("../../models");

exports.create = async (req) => {
  console.log(req);
  try {
    const comment = await model.comment.create(req);
    return comment;
  } catch (e) {
    throw e;
  }
};
exports.deleteComment = async (id) => {
  try {
    console.log(id);
    const comment = await model.comment.findOne({ where: { id: id } });
    comment.destroy();
    return comment;
  } catch (e) {
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const comments = await model.comment.findAll({
      include: { all: true, nested: true },
    });
    return comments;
  } catch (e) {
    console.log(e);
    throw "Fail to get all comments";
  }
};

exports.findOneById = async (id) => {
  try {
    console.log(id)

    const comment = await model.comment.findOne(
      {
        include: { all: true, nested: true },
      },
      { where: { id: id } }
      );
    return comment;
  } catch (e) {
    throw "Comment not found";
  }
};

exports.updateComment = async (commentObject, data) => {
  try {
    const test = await model.comment.findOne({
      where: { id: commentObject.id },
    });
    console.log(test);
    const comment = await model.comment.update(
      { content: data.content },
      { where: { id: commentObject.id } }
    );

    return comment;
  } catch (e) {
    console.log(e);
    throw e;
  }
};