const model = require("../../models");
const bcrypt = require("bcryptjs");

exports.create = async (req) => {
  console.log(req);
  try {
    const question = await model.question.create(req);
    return question;
  } catch (e) {
    throw e;
  }
};

exports.deleteQuestion = async (id) => {
  try {
    console.log(id);
    const question = await model.question.destroy({ where: { id: id } });
    return question;
  } catch (e) {
    throw e;
  }
};

exports.updateQuestion = async (questionObject, data) => {
  try {
    const test = await model.question.findOne({
      where: { id: questionObject.id },
    });
    console.log(test);
    const question = await model.question.update(
      { content: data.content },
      { where: { id: questionObject.id } }
    );

    return question;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const questions = await model.question.findAll();
    return questions;
  } catch (e) {
    throw "Fail to get all questions";
  }
};
// mettre find by userId ?
/* exports.findOneByEmail = async (email) => {
  try {
    const question = await model.question.findOne({ where: { email: email } });
    return question;
  } catch (e) {
    throw "Question not found";
  }
}; */
exports.findOneById = async (id) => {
  try {
    const question = await model.question.findOne({ where: { id: id } });
    return question;
  } catch (e) {
    throw "Question not found";
  }
};
