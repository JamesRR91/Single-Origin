'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Comments', [
      {
        userid: 1,
        recipeid: 1,
        description:'I would grind it a little coarser than that, in my experience, I run into channeling problems otherwise.',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Comments',
    {

    }, {});
  }
};
