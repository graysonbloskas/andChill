const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Movies extends Model {}

Movies.init(
    {
      movie_id: {
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
        // get() {
        //     return this.getDataValue('genre').split(',')
        // },
        // set(val) {
        //    this.setDataValue('genre',val.join(','));
        // },
    
      },
      },
      {
        sequelize,
        freezeTableName: true,
        underscored: true,
        timestamps: false,
        modelName: 'movies',
      }
    );

module.exports = Movies;