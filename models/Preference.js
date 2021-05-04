const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Preference extends Model {}

Preference.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //men, women, both
    sex: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age_min: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 18,
        max: 100,
      },
    },
    age_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 18,
        max: 100,
      },
    },
    //maximum distance from current location
    location_max: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
        },
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "preference",
  }
);