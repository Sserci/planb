const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mainRouter = require("./server/routes/index");
const userRouter = require("./server/routes/user.routes");
const bodyParser = require("body-parser"); // middleware
const favorisRouter = require("./server/routes/favoris.routes");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PlanB API with Swagger",
      version: "0.1.0",
      description:
        "This is a simple CRUD API application made with Express and documented with Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
      contact: {
        name: "LogRocket",
        url: "https://logrocket.com",
        email: "info@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:3000/",
      },
    ],
  },
  apis: ["./routes/books.js"],
};

const specs = swaggerJsdoc(options);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
//Public route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/test", mainRouter);
app.use("/users", userRouter);
app.use("/favoris", favorisRouter);
app.use("/events", eventRouter);

//Private

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
