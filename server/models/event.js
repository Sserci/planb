const { date } = require("faker/locale/zh_TW");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /* static associate(models) {} */
    static associate(models) {
      // define association here
      event.belongsTo(models.user, { foreignKey: "owner", as: "Owner" });
      event.hasMany(models.pictures);
      //event.hasMany(models.interest);

      event.hasMany(models.comment);
      event.hasMany(models.participant, { as: "Participants" });
      event.belongsTo(models.categorie, {
        foreignKey: "categoryId",
        as: "Category",
      });
    }
  }
  event.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      owner: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mainPicture: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nbPlace: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      pictureId: {
        type: DataTypes.INTEGER,
        references: { model: "pictures", key: "id" },
        allowNull: true,
      },
      participants: {
        type: DataTypes.INTEGER,
        references: { model: "participants", key: "id" },
        allowNull: true,
      },
      link: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      private: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      closed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
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
      modelName: "event",
    }
  );
  return event;
};
