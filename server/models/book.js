'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    name: DataTypes.STRING,
    isbn: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    author_id: DataTypes.INTEGER,
    rating: DataTypes.INTEGER
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Book;
};