const Sequelize = require("sequelize");

/**
 * Actions summary:
 *
 * changeColumn(userId) => "answers"
 * changeColumn(userId) => "answers"
 * changeColumn(questionId) => "answers"
 * changeColumn(questionId) => "answers"
 * changeColumn(userId) => "comments"
 * changeColumn(userId) => "comments"
 * changeColumn(eventId) => "comments"
 * changeColumn(eventId) => "comments"
 * changeColumn(owner) => "events"
 * changeColumn(owner) => "events"
 * changeColumn(categoryId) => "events"
 * changeColumn(categoryId) => "events"
 * changeColumn(pictureId) => "events"
 * changeColumn(participants) => "events"
 * changeColumn(userId) => "interests"
 * changeColumn(userId) => "interests"
 * changeColumn(userId) => "participants"
 * changeColumn(userId) => "participants"
 * changeColumn(eventId) => "participants"
 * changeColumn(eventId) => "participants"
 * changeColumn(userId) => "pictures"
 * changeColumn(userId) => "pictures"
 * changeColumn(eventId) => "pictures"
 * changeColumn(eventId) => "pictures"
 * changeColumn(userId) => "questions"
 * changeColumn(userId) => "questions"
 * changeColumn(eventId) => "questions"
 * changeColumn(eventId) => "questions"
 *
 */

const info = {
  revision: 2,
  name: "addrelations",
  created: "2022-03-25T16:40:57.464Z",
  comment: "",
};

const migrationCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "answers",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        references: { model: "users", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        references: { model: "users", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "questionId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "questionId",
        references: { model: "questions", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "questionId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "questionId",
        references: { model: "questions", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "owner",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "users", key: "id" },
        field: "owner",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "owner",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "users", key: "id" },
        field: "owner",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "categoryId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "categories", key: "id" },
        field: "categoryId",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "categoryId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        references: { model: "categories", key: "id" },
        field: "categoryId",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "pictureId",
      {
        type: Sequelize.INTEGER,
        field: "pictureId",
        allowNull: true,
        references: { model: "pictures", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "participants",
      {
        type: Sequelize.INTEGER,
        field: "participants",
        allowNull: true,
        references: { model: "participants", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "interests",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
        field: "userId",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "interests",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: { model: "users", key: "id" },
        field: "userId",
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        allowNull: false,
        references: { model: "users", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        field: "eventId",
        allowNull: false,
        references: { model: "events", key: "id" },
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        references: { model: "users", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "userId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "userId",
        references: { model: "users", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "eventId",
        references: { model: "events", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "eventId",
      {
        type: Sequelize.INTEGER,
        onUpdate: "CASCADE",
        onDelete: "NO ACTION",
        field: "eventId",
        references: { model: "events", key: "id" },
        allowNull: false,
      },
      { transaction },
    ],
  },
];

const rollbackCommands = (transaction) => [
  {
    fn: "changeColumn",
    params: [
      "answers",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "questionId",
      { type: Sequelize.INTEGER, field: "questionId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "answers",
      "questionId",
      { type: Sequelize.INTEGER, field: "questionId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "comments",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "owner",
      { type: Sequelize.INTEGER, field: "owner", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "owner",
      { type: Sequelize.INTEGER, field: "owner", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "categoryId",
      { type: Sequelize.INTEGER, field: "categoryId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "categoryId",
      { type: Sequelize.INTEGER, field: "categoryId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "pictureId",
      { type: Sequelize.INTEGER, field: "pictureId", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "events",
      "participants",
      { type: Sequelize.INTEGER, field: "participants", allowNull: true },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "interests",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "interests",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "participants",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "pictures",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "userId",
      { type: Sequelize.INTEGER, field: "userId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
  },
  {
    fn: "changeColumn",
    params: [
      "questions",
      "eventId",
      { type: Sequelize.INTEGER, field: "eventId", allowNull: false },
      { transaction },
    ],
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
