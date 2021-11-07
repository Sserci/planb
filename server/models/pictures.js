const { date } = require("faker/locale/zh_TW");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class pictures extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {} */
    static associate(models) {
      // define association here
      pictures.belongsTo(models.user);
      pictures.belongsTo(
        models.event,
        { foreignKey: "eventId" },
        { onDelete: "CASCADE" }
      );
    }
  }
  pictures.init(
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
      path: {
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
      modelName: "pictures",
    }
  );
  return pictures;
};
