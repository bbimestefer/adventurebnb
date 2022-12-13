'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages';
    return queryInterface.bulkInsert(options, [
      {
        reviewId: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-51866988/original/601f8dd1-73f3-4084-92ae-09064a8bd975.jpeg?im_w=720"
      },
      {
        reviewId: 2,
        url: "https://a0.muscache.com/im/pictures/1c1b5bb0-5c51-4d3c-bbfb-77503b571ea7.jpg?im_w=720"
      },
      {
        reviewId: 3,
        url: "https://a0.muscache.com/im/pictures/d59c1d23-2471-447d-bdc5-4baf1eb50548.jpg?im_w=720"
      },
      {
        reviewId: 4,
        url: "https://a0.muscache.com/im/pictures/23106be2-6f5d-4bbb-80b0-70c8bc480cc4.jpg?im_w=720"
      },
      {
        reviewId: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-730482599871535179/original/e246abd7-17db-4dd0-9a06-180aa38e8f44.jpeg?im_w=720"
      },
      {
        reviewId: 6,
        url: "https://a0.muscache.com/im/pictures/d5b14dfd-2f39-48ca-9a11-7023fd75d376.jpg?im_w=720"
      },
      {
        reviewId: 7,
        url: "https://a0.muscache.com/im/pictures/76026251-ca98-435e-86c6-31b8b16e3d19.jpg?im_w=720"
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'ReviewImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      reviewId: { [Op.in]: [1, 2, 3, 4, 5, 6, 7] }
    }, {});
  }
};
