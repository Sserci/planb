const express = require("express");
const app = express();
const port = 8080;
const swaggerJsdoc = require("swagger-jsdoc");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const userController = require("./user/controller/user.controller");
const questionController = require("./question/controller/question.controller");
const answerController = require("./answer/controller/answer.controller");
const participantController = require("./participant/controller/participant.controller");
const picturesController = require("./pictures/controller/pictures.controller");
const uploadController = require("./upload/controller/upload.controller");
const nodemailer = require("./nodemailer.js");
const eventController = require("./event/controller/event.controller");
const categorieController = require("./category/controller/categorie.controller");
const commentController = require("./comment/controller/comment.controller");
const auth = require("./middleware/auth");
const admin = require("./middleware/isAdmin");
const uploadFile = require("./middleware/upload");
const interestController = require("./interest/controller/interest.controller");
var path = require("path");

global.__basedir = __dirname;

app.use(express.json());
//app.use(express.urlencoded());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.set("Access-Control-Expose-Headers", "X-Total-Count");
  res.set("X-Total-Count", 100);
  next();
});

app.use(cors());
console.log(__dirname + "/public");
app.use("/public", express.static(__dirname + "/public"));
//Public route
//app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/users", userController.getAll);
app.get("/user/account", auth, userController.findOneByIdUser);
app.get("/user", userController.findOneByEmail);
app.get("/users/:id", userController.findOneByIdAdmin);
app.post("/register", userController.create);
app.post("/users", userController.create);
app.delete("/users/:id", userController.deleteuserbyadmin);
app.delete("/user/delete", auth, userController.deleteuserbyuser);
//app.delete("/users/:id", userController.deleteuserbyuser);
app.put("/users/:id", userController.updatebyadmin);
app.put("/user/update", auth, uploadFile, userController.updatebyuser);

app.get("/participants", participantController.getAll);
app.get("/participants/:id", participantController.findOneById);
app.post("/participants", participantController.create);
app.put("/participants/:id", auth, participantController.update);
app.delete("/participants/:id", participantController.delete);

app.get("/emailverification", userController.emailConfirmation);
app.get("/pictures", picturesController.getAll);
app.get("/pictures/:id", picturesController.findOneById);
app.post("/pictures", auth, picturesController.create);
app.delete("/pictures/:id", picturesController.delete);

app.post("/events", auth, uploadFile, eventController.createevent);
app.get("/events", eventController.getAll);
app.get("/event/:id", eventController.findOneById);
app.delete("/events/:id", eventController.deleteevent);
app.put("/events/", auth, eventController.updateevent);
app.put("/events/:id", eventController.updateeventbyadmin);

app.get("/questions", questionController.getAll);
app.post("/questions", questionController.create);
app.get("/question", questionController.findOneById);
app.put("/question/:id", questionController.updateQuestion);

app.get("/answers", answerController.getAll);
app.post("/answers", answerController.create);
app.get("/answer", answerController.findOneById);
app.put("/answer/:id", answerController.updateAnswer);

app.get("/files", uploadController.getListFiles);
app.post("/upload", auth, uploadController.upload);

app.get("/categories", categorieController.getAll);
app.post("/categories", categorieController.create);
app.delete("/categories/:id", categorieController.deletecategorie);

app.get("/comments", commentController.getAll);
app.post("/comments", commentController.create);
app.get("/comment/:id", commentController.findOneById);
app.put("/comment/:id", commentController.updateComment);
app.delete("/comment/:id", commentController.deleteComment);

app.get("/interests", interestController.getAll);
app.post("/interests", auth, interestController.createinterest);
app.delete("/interest/:id", interestController.deleteInterest);
app.post("/delete/interest", interestController.deleteInterestEventPage);

//Private

app.post("/login", userController.login);
app.post("/authenticate", userController.loginadmin);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
