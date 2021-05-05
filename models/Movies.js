const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false,
      },
    
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      genre: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'gallery',
      }
    );

module.exports = Movies;