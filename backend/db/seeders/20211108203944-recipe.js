'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName='Recipes';
    return queryInterface.bulkInsert(options, [
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
    options.tableName='Recipes';
    return queryInterface.bulkDelete(options);
  }
};
