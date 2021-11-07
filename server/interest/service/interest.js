const model = require("../../models");

exports.createinterest = async (userId, eventId) => {
  console.log(userId, eventId);
  const data = { userId: userId, eventId: eventId };

  try {
    const interest = await model.interest.create(data);
    return interest;
  } catch (e) {
    throw e;
  }
};

exports.findOneInterestById = async (id) => {
  try {
    const interest = await model.interest.findOne({ where: { userId: id }, include: {all:true, nested:true} });
    return interest;
  } catch (e) {
    throw e;
  }
};

exports.deleteInterest = async (id) => {
  //page user
  try {
    await model.interest.destroy({ where: { id: id } });
    return;
  } catch (e) {
    throw e;
  }
};

exports.deleteInterestEventPage = async (data) => {
  //page event

  try {
    const interest = await model.interest.destroy({ where: data });
    return interest;
  } catch (e) {
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const interest = await model.interest.findAll();
    return interest;
  } catch (e) {
    throw e;
  }
};
