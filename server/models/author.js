'use strict';
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: {type: DataTypes.STRING},
    bio: {type: DataTypes.TEXT},
    email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate:{isEmail: true}

            }
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Author.hasMany(models.Book, {
              onDelete: 'cascade'
          });
      }
    }
  });
  return Author;
};