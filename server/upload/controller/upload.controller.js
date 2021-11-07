const uploadFile = require("../../middleware/upload");
const fs = require("fs");
const model = require("../../models");

const upload = async (req, res) => {
  try {
    console.log("test upload");
    await uploadFile(req, res);

    if (req.file == undefined) {
      console.log("erreur");
      return res.status(400).send({ message: "Please upload a file!" });
    }

    //console.log("toto");
    const id = req.user.dataValues.id;
    const picture = await model.pictures.create({
      userId: id,
      eventId: req.body.eventId,
      path: "/public/images/" + req.file.originalname,
    });
    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
};

const getListFiles = (req, res) => {
  const directoryPath = __basedir + "/public/images/";

  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        url: "http://localhost:8080/public/images/" + file,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  const directoryPath = __basedir + "/public/images/";

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};
