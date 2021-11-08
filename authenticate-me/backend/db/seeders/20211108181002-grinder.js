'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Grinders', [
      {
        name: 'Capresso Infinity',
        price: 99,
        typeid: 'filter-coffee',
      },
      {
        name: 'Breville Smart Grinder Pro',
        price: 199,
        typeid: 'hybrid-grinder',
      },
      {
        name:'Baratza Encore Conical Burr Grinder',
        price:129,
        typeid: 'filter-coffee',
      },
      {
        name:'Eureka Mignon Notte',
        price:329,
        typeid: 'espresso',
      },
      {
        name:'Niche Zero Coffee Grinder',
        price:599,
        typeid: 'hybrid-grinder',
      },
      {
        name:'Fellow Ode Brew Grinder',
        price:299,
        typeid: 'filter-coffee',
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
