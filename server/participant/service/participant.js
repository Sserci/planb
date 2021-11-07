const model = require("../../models");

exports.create = async (req) => {
  console.log(req);
  try {
    const participant = await model.participant.create(req);
    return participant;
  } catch (e) {
    throw e;
  }
};
exports.deleteParticipant = async (id) => {
  try {
    console.log(id);
    const participant = await model.participant.destroy({ where: { id: id } });
    return participant;
  } catch (e) {
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const participants = await model.participant.findAll({include: {all: true, nested: true}});
    return participants;
  } catch (e) {
    throw "Fail to get all participants";
  }
};

exports.findOneById = async (id) => {
  try {
    const participant = await model.participant.findOne(
      { where: { id: id },
        include: {all: true, nested: true}
      });
    return participant;
  } catch (e) {
    throw "participant not found";
  }
};
