'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Grinders', [
      {
        name: 'Capresso Infinity',
        price: 99,
        typeid: 'filter-coffee',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Breville Smart Grinder Pro',
        price: 199,
        typeid: 'hybrid-grinder',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'Baratza Encore Conical Burr Grinder',
        price:129,
        typeid: 'filter-coffee',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'Eureka Mignon Notte',
        price:329,
        typeid: 'espresso',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'Niche Zero Coffee Grinder',
        price:599,
        typeid: 'hybrid-grinder',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'Fellow Ode Brew Grinder',
        price:299,
        typeid: 'filter-coffee',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'La Marzocco Lux D Coffee Grinder',
        price:975,
        typeid: 'espresso',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        name:'Baratza Sette 270',
        price:299,
        typeid: 'espresso',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
