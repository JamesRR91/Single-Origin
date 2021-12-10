'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Recipes', [
      {
        userid: 1,
        title: 'Large Batch Chemex',
        brewtype: 'Chemex',
        roasttype:'light roast',
        grindlevel:'medium-coarse',
        coffeedose:'55 grams',
        waterdose:'800 grams',
        brewtime: '4.5 minutes',
        description: 'Grind a little finer than sea salt, dose at 1:15 ratio, go for 55 grams coffee to 800 grams water for 4.5 minutes',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Recipes',
    {

    }, {});
  }
};
