const util = require("util");
const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const { uuid } = require("uuidv4");

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/public/images/");
  },
  filename: (req, file, cb) => {
    file.originalname = uuid() + ".png";
    console.log(file.originalname + "toto");
    cb(null, file.originalname, req);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
