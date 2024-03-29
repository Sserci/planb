const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class interest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    /* static associate(models) {
      // define association here
      //interest.belongsTo(models.user, { foreignKey: "userId" });
      //interest.belongsTo(models.event);
    }*/

  }
  interest.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        //references: { model: "users", key: "id" },
        allowNull: false,
      },
      eventId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "interest",
    }
  );
  return interest;
};
