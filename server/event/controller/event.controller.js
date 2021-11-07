const eventService = require("../service/event");
const uploadFile = require("../../middleware/upload");
const auth = require("../../middleware/auth");

exports.getAll = async (req, res, next) => {
  try {
    const events = await eventService.getAll();
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.findOneById = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(id);
    const event = await eventService.findOneById(id);
    //console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.createevent = async (req, res, next) => {
  console.log(req.file);
  const data = req.body;
  console.log(req)
  //console.log(req.dataValues);
  if (req.user) {
    const id = req.user.dataValues.id;
    data.owner = id;
    await uploadFile(req, res);
    if (req.file != undefined) {
      data.mainPicture = "/public/images/" + req.file.originalname;
    }

    console.log(data);
    if (data.name && data.city) {
      const event = await eventService.createevent(data, id);
      res.status(200).send(event);
    } else {
      res.status(400).send();
    }
  } else {
    const id = req.body.owner;
    console.log(req.body);
    data.owner = id;
    await uploadFile(req, res);
    if (req.file != undefined) {
      data.mainPicture = "/public/images/" + req.file.originalname;
    }

    console.log(data);
    if (data.name && data.city) {
      const event = await eventService.createevent(data, id);
      res.status(200).send(event);
    } else {
      res.status(400).send();
    }
  }
};

exports.updateevent = async (req, res, next) => {
  const data = req.body;
  //console.log(data);
  const id = req.user.dataValues.id;
  //console.log(id);
  try {
    const event = await eventService.updateevent(id, data);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateeventbyadmin = async (req, res, next) => {
  const data = req.body;
  //console.log(data);
  const id = req.params.id;
  //console.log(id);
  try {
    const event = await eventService.updateevent(id, data);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.deleteevent = async (req, res, next) => {
  const id = req.params.id;
  console.log(id);
  try {
    const event = await eventService.deleteevent(id);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

//ADMIN

/* exports.findOneEventByIdAdmin = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await eventService.findOneEventById(id);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};

exports.updateEventByAdmin = async (req, res, next) => {
  const data = req.body;
  const id = req.params.id;
  console.log(data);
  const event = await eventService.updateevent(data, id);
  console.log(event);
  res.status(200).send();
};

exports.deleteEventByAdmin = async (req, res, next) => {
  const data = req.params.id;
  console.log(data);
  try {
    const event = await eventService.deleteevent(data);
    console.log(event);
    res.status(200).send(event);
  } catch (error) {
    res.status(500).send({ error: error });
  }
};
 */
