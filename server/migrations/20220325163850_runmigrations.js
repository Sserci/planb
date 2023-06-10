const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * createTable() => "answers", deps: []
 * createTable() => "categories", deps: []
 * createTable() => "comments", deps: []
 * createTable() => "events", deps: []
 * createTable() => "interests", deps: []
 * createTable() => "participants", deps: []
 * createTable() => "pictures", deps: []
 * createTable() => "questions", deps: []
 * createTable() => "users", deps: []
 *
 */

const info = {
  revision: 1,
  name: "runmigrations",
  created: "2022-03-25T16:38:50.877Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "createTable",
    params: [
      "answers",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        questionId: {
          type: Sequelize.INTEGER,
          field: "questionId",
          allowNull: false,
        },
        content: { type: Sequelize.STRING, field: "content", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "categories",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "comments",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        eventId: {
          type: Sequelize.INTEGER,
          field: "eventId",
          allowNull: false,
        },
        content: { type: Sequelize.STRING, field: "content", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "events",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        owner: { type: Sequelize.INTEGER, field: "owner", allowNull: false },
        categoryId: {
          type: Sequelize.INTEGER,
          field: "categoryId",
          allowNull: false,
        },
        date: { type: Sequelize.DATE, field: "date", allowNull: false },
        name: { type: Sequelize.STRING, field: "name", allowNull: false },
        description: {
          type: Sequelize.STRING,
          field: "description",
          allowNull: false,
        },
        mainPicture: {
          type: Sequelize.STRING,
          field: "mainPicture",
          allowNull: true,
        },
        city: { type: Sequelize.STRING, field: "city", allowNull: false },
        nbPlace: { type: Sequelize.STRING, field: "nbPlace", allowNull: false },
        longitude: {
          type: Sequelize.FLOAT,
          field: "longitude",
          allowNull: true,
        },
        latitude: { type: Sequelize.FLOAT, field: "latitude", allowNull: true },
        pictureId: {
          type: Sequelize.INTEGER,
          field: "pictureId",
          allowNull: true,
        },
        participants: {
          type: Sequelize.INTEGER,
          field: "participants",
          allowNull: true,
        },
        link: { type: Sequelize.STRING, field: "link", allowNull: true },
        private: {
          type: Sequelize.BOOLEAN,
          field: "private",
          defaultValue: false,
          allowNull: false,
        },
        closed: {
          type: Sequelize.BOOLEAN,
          field: "closed",
          defaultValue: false,
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "interests",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
          allowNull: false,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        eventId: { type: Sequelize.STRING, field: "eventId", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "participants",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        eventId: {
          type: Sequelize.INTEGER,
          field: "eventId",
          allowNull: false,
        },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: true,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: true,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "pictures",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        eventId: {
          type: Sequelize.INTEGER,
          field: "eventId",
          allowNull: false,
        },
        path: { type: Sequelize.STRING, field: "path", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "questions",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        userId: { type: Sequelize.INTEGER, field: "userId", allowNull: false },
        eventId: {
          type: Sequelize.INTEGER,
          field: "eventId",
          allowNull: false,
        },
        content: { type: Sequelize.STRING, field: "content", allowNull: false },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
  {
    fn: "createTable",
    params: [
      "users",
      {
        id: {
          type: Sequelize.INTEGER,
          field: "id",
          autoIncrement: true,
          primaryKey: true,
        },
        email: {
          type: Sequelize.STRING,
          field: "email",
          unique: true,
          allowNull: false,
        },
        emailverified: {
          type: Sequelize.BOOLEAN,
          field: "emailverified",
          defaultValue: false,
          allowNull: false,
        },
        emailverifytoken: {
          type: Sequelize.STRING,
          field: "emailverifytoken",
          defaultValue: null,
          allowNull: true,
        },
        admin: {
          type: Sequelize.BOOLEAN,
          field: "admin",
          defaultValue: false,
          allowNull: false,
        },
        username: {
          type: Sequelize.STRING,
          field: "username",
          allowNull: false,
        },
        birthdate: {
          type: Sequelize.STRING,
          field: "birthdate",
          allowNull: false,
        },
        password: {
          type: Sequelize.STRING,
          field: "password",
          allowNull: false,
        },
        city: { type: Sequelize.STRING, field: "city", allowNull: false },
        picture: { type: Sequelize.STRING, field: "picture", allowNull: true },
        createdAt: {
          type: Sequelize.DATE,
          field: "createdAt",
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE,
          field: "updatedAt",
          allowNull: false,
        },
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "dropTable",
    params: ["answers", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["categories", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["comments", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["events", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["interests", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["participants", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["pictures", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["questions", { transaction }],
  },
  {
    fn: "dropTable",
    params: ["users", { transaction }],
  },
];

const pos = 0;
const useTransaction = true;

const execute = (queryInterface, sequelize, _commands) => {
  let index = pos;
  const run = (transaction) => {
    const commands = _commands(transaction);
    return new Promise((resolve, reject) => {
      const next = () => {
        if (index < commands.length) {
          const command = commands[index];
          console.log(`[#${index}] execute: ${command.fn}`);
          index++;
          queryInterface[command.fn](...command.params).then(next, reject);
        } else resolve();
      };
      next();
    });
  };
  if (useTransaction) return queryInterface.sequelize.transaction(run);
  return run(null);
};

module.exports = {
  pos,
  useTransaction,
  up: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, migrationCommands),
  down: (queryInterface, sequelize) =>
    execute(queryInterface, sequelize, rollbackCommands),
  info,
};
