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
      title: {
        allowNull: false,
        type: Sequelize.STRING,
        unique: true
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
      coffeedose: {
        allowNull: false,
        type: Sequelize.STRING
      },
      waterdose: {
        allowNull: false,
        type: Sequelize.STRING
      },
      brewtime: {
        allowNull: false,
        type: Sequelize.STRING
      },

      description: {
        allowNull: false,
        type: Sequelize.TEXT(500)
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('now'),
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Recipes');
  }
};
