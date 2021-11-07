const model = require("../../models");

exports.create = async (req) => {
  try {
    const picture = await model.pictures.create(req);

    return picture;
  } catch (e) {
    console.log(e);
    throw e;
  }
};

exports.getAll = async () => {
  try {
    const pictures = await model.pictures.findAll({
      include: { all: true, nested: true },
    });
    return pictures;
  } catch (e) {
    throw "fail get all pictures";
  }
};

exports.findOneById = async (id) => {
  try {
    console.log(id);

    const picture = await model.pictures.findOne(
      {
        include: { all: true, nested: true },
        where: { id: id } }
    );
    return picture;
  } catch (e) {
    console.log(e);
    throw "Picture not find";
  }
};

exports.delete = async (data) => {
  try {
    const picture = await model.pictures.findOne({ where: { id: data } });

    picture.destroy();
    return picture;
  } catch (e) {
    throw e;
  }
};

/* exports.update = async (data, id) => {
  try {
    const picture = await model.pictures.update(data, { where: { id: id } });
    return picture;
  } catch (e) {
    throw e;
  }
}; */
