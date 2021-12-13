'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Reviews', [
      {
        userid: 1,
        grinderid: 1,
        usetime:'Less than a month',
        usecase:'hybrid, mostly drip',
        sale: 'Picked up refurb',
        reccomendation: 'Good for the price',
        review:'I have a hard time saying if this was a good investment for the money, but I also thought this was going to be a good all around grinder, but at least i make decent drip coffee.',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Reviews',
    {

    }, {});
  }
};
