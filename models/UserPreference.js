const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class UserPreference extends Model {}

UserPreference.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    Preference_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'preference',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user_preference',
  }
);

module.exports = UserPreference;