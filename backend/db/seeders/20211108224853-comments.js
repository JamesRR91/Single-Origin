'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName='Comments';
    return queryInterface.bulkInsert(options, [
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
    options.tableName='Comments';
    return queryInterface.bulkDelete(options);
  }
};
