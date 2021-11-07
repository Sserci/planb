const { date } = require("faker/locale/zh_TW");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
     static associate(models) {
      question.hasOne(models.answer, { foreignKey: "questionId" });
      question.belongsTo(models.event);
      question.belongsTo(models.user);
    }
  }
  question.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "users", key: "id" }
      },
      eventId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "events", key: "id" }
      }, 
      content: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "question",
    }
  );
  return question;
};
