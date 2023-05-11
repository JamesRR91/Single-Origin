'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName='Grinders';
    return queryInterface.bulkInsert(options, [
      {
        product: 'Capresso Infinity',
        price: 99,
        typeid: 'filter-coffee',
        imgurl:
        'https://i.ebayimg.com/images/g/SlgAAOSwTbBfpcjF/s-l225.jpg',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product: 'Breville Smart Grinder Pro',
        price: 199,
        typeid: 'hybrid-grinder',
        imgurl:
        'https://www.cnet.com/a/img/resize/188165b88d037689011022384a0cd4067c1e99f5/hub/2017/04/11/587df6e5-7698-43fc-8377-3bca01899b39/brevillegrinder-3.jpg?auto=webp&width=768',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'Baratza Encore Conical Burr Grinder',
        price:129,
        typeid: 'filter-coffee',
        imgurl:
        'https://www.peacecoffee.com/content/uploads/baratzaencorewhite_2048x.png',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'Eureka Mignon Notte',
        price:329,
        typeid: 'espresso',
        imgurl:
        'https://m.media-amazon.com/images/S/aplus-media/sc/1d52ae3c-9b58-4baf-a886-775709e712ba.__CR163,0,325,650_PT0_SX150_V1___.png',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'Niche Zero Coffee Grinder',
        price:599,
        typeid: 'hybrid-grinder',
        imgurl:
        'https://pullandpourcoffee.com/wp-content/uploads/2020/12/niche-grinder-hero.jpg',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'Fellow Ode Brew Grinder',
        price:299,
        typeid: 'filter-coffee',
        imgurl:
        'https://cb.scene7.com/is/image/Crate/FellowOdSglDsGrndrMB3QSSF20_VND/$web_pdp_main_carousel_med$/200708173525/fellow-matte-black-ode-brew-grinder.jpg',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'La Marzocco Lux D Coffee Grinder',
        price:975,
        typeid: 'espresso',
        imgurl:
        'https://home.lamarzoccousa.com/wp-content/uploads/2014/12/white-lux-d-grinder.png',
        createdAt:new Date(),
        updatedAt: new Date()
      },
      {
        product:'Baratza Sette 270',
        price:299,
        typeid: 'espresso',
        imgurl:
        'https://baratza.com/wp-content/uploads/2016/01/Sette-270-600x800.png',
        createdAt:new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    options.tableName='Grinders'
    return queryInterface.bulkDelete(options)
  }
};
