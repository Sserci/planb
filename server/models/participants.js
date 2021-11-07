const { date } = require("faker/locale/zh_TW");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class participant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      participant.belongsTo(
        models.event,
        { onDelete: "CASCADE" },
        {
          foreignKey: "eventId",
          as: "Event",
        }
      );
      participant.belongsTo(models.user, { foreignKey: "userId" });
    }
  }
  participant.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },

      userId: {
        type: DataTypes.INTEGER,
        references: { model: "users", key: "id" },
        allowNull: false,
      },

      eventId: {
        type: DataTypes.INTEGER,
        references: { model: "events", key: "id" },
        allowNull: false,
      },

      createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "participant",
    }
  );
  return participant;
};
