'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */

      return queryInterface.addColumn(
          'Authors',
          'email',
          {
              type: Sequelize.STRING,
              allowNull: false,
              isEmail: true
          }
      );

  },

  down: function (queryInterface, Sequelize) {

      return queryInterface.removeColumn('Authors', 'email');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
