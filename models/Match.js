const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Match extends Model {}

Match.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    //person that the logged-in user has matched with
    matched_user: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        },
    },
    //the date that users matched
    date: {
        type: DataTypes.DATEONLY, //accepts a date without a time
        allowNull: false,
        validate: {
            isDate: true,
        },
    },
    //id for logged in user
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
    modelName: "match",
},
);

module.exports = Match;
