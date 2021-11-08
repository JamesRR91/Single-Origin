'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Recipes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Users'}
      },
      grinderid: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{model:'Grinders'}
      },
      brewtype: {
        allowNull: false,
        type: Sequelize.STRING
      },
      roasttype: {
        allowNull: false,
        type: Sequelize.STRING
      },
      grindlevel: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.TEXT(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};
