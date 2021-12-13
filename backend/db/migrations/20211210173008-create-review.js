'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Reviews', {
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
      usetime: {
        allowNull: false,
        type: Sequelize.STRING
      },
      usecase: {
        allowNull: false,
        type: Sequelize.STRING
      },
      sale: {
        allowNull: false,
        type: Sequelize.STRING
      },
      reccomendation: {
        allowNull: false,
        type: Sequelize.STRING
      },
      review: {
        allowNull:false,
        type: Sequelize.TEXT(1000)
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
    await queryInterface.dropTable('Reviews');
  }
};
