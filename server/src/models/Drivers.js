const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Driver', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      validate:{
        isUUID: 4
      } 
  },

    forename: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    surname: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.JSON,
      allowNull: false,
    },
    
    nationality: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    dob: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },  {timestamps: false});
};