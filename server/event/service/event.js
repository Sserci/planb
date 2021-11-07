const model = require("../../models");

exports.getAll = async () => {
  try {
    const events = await model.event.findAll({
      include: { all: true, nested: true },
    });
    return events;
  } catch (e) {
    throw "fail get all events";
  }
};
exports.createevent = async (req) => {
  console.log(req);

  try {
    const event = await model.event.create(req);

    return event;
  } catch (e) {
    throw e;
  }
};
exports.updateevent = async (id, data) => {
  if (data.id) {
    id = data.id;
  }
  console.log(data);
  try {
    const event = await model.event.update(data, { where: { id: id } });

    return event;
  } catch (e) {
    throw e;
  }
};

exports.deleteevent = async (data) => {
  try {
    console.log(data);

    const event = await model.event.findOne({ where: { id: data } });
    //console.log(event);
    event.destroy();
    return event;
  } catch (e) {
    throw e;
  }
};

exports.findOneById = async (id) => {
  try {
    //console.log(id);
    
    const event = await model.event.findOne(
      { where: { id: id },
        include: { all: true, nested: true },
      }
    );
    return event;
  } catch (e) {
    throw "Event not find";
  }
};
