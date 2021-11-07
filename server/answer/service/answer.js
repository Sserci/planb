const model = require("../../models");
const bcrypt = require("bcryptjs");

exports.create = async (req) => {
  console.log(req);
  try {
    const answer = await model.answer.create(req);
    return answer;
  } catch (e) {
    throw e;
  }
};

/* exports.deleteAnswer = async (id) => {
  try {
    console.log(id);
    const answer = await model.answer.destroy({ where: { id: id } });
    return answer;
  } catch (e) {
    throw e;
  }
}; */

exports.getAll = async () => {
  try {
    const answers = await model.answer.findAll();
    return answers;
  } catch (e) {
    throw "Fail to get all answers";
  }
};
// mettre find by userId ?
/* exports.findOneByEmail = async (email) => {
  try {
    const answer = await model.answer.findOne({ where: { email: email } });
    return answer;
  } catch (e) {
    throw "answer not found";
  }
}; */
exports.findOneById = async (id) => {
  try {
    const answer = await model.answer.findOne({ where: { id: id } });
    return answer;
  } catch (e) {
    throw "Answer not found";
  }
};

exports.updateAnswer = async (answerObject, data) => {
  try {
    const test = await model.answer.findOne({
      where: { id: answerObject.id },
    });
    console.log(test);
    const answer = await model.answer.update(
      { content: data.content },
      { where: { id: answerObject.id } }
    );

    return answer;
  } catch (e) {
    console.log(e);
    throw e;
  }
};