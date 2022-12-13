'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    return queryInterface.bulkInsert(options, [
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51087660/original/afb45f19-7e8d-4efe-8fc0-1d6632cd9c82.png?im_w=720',
        preview: 'true'
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51087660/original/8adde4ac-cfce-4ca6-acf6-3bf734b5d316.png?im_w=720',
        preview: 'false'
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-51087660/original/d260f15d-bc31-4053-9689-7cbfe378e032.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/d7f78d8a-9d22-4bd8-a10c-1c1880aa29c2.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/32ee869b-5a55-486a-88e7-3a4f4b5f1441.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/4398439a-7c1b-4847-ab60-1a4a80b1028c.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/2af353f1-9d42-4f5f-bd28-f6ee980337a5.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/993c13aa-80fc-4e7b-b01f-8dada10b39c2.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-751043988783012336/original/b043fb11-5dd1-4b10-beec-e45e9a0d6821.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-751043988783012336/original/8d48518b-6814-460b-b9ce-28864e63fa4f.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-729144374708586034/original/42416bcd-ade3-4dcf-8b26-63967e8826c2.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-751043988783012336/original/447955b0-146b-4abc-b11d-c897f127a17e.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/63709200-ecbe-4d64-9b22-92d69c5f6899.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/96a54f90-b4dc-41df-b3dd-43eec2288feb.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-653408741749201569/original/9fd2965a-b8c8-4ede-97be-9aa0b4d52c95.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-653408741749201569/original/11cc45dd-576d-4722-9bfd-e35840c0fe25.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-741458095110405903/original/500d8ca8-0a45-4731-940a-e25fa39ae3af.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-37256078/original/45a817ae-58eb-4ef8-a501-3e1a039424c5.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54331627/original/97228634-82f3-461c-8344-f7f4109f2dec.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-54331627/original/09f89a0d-33e7-4f3e-87a7-9486606df0b4.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-747067128257059223/original/a068c5d5-250c-4e9f-9387-aefa5a8674cc.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-747067128257059223/original/f965cedf-d7ab-4479-ac68-ab23b5fa0f7c.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/65429ac6-b8ce-472d-a00d-bdbd1238bdd7.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/9e0ad624-7ab4-4e1d-9c2e-a0a95ba3c9b6.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-773126963471473801/original/25ace226-e3da-451d-8ea3-bc5afd532cbd.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-773126963471473801/original/91558031-b4bf-4fc9-8209-f51da318dc61.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-50365235/original/90b2d12a-c3ca-4832-b848-c833ad936310.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-50365235/original/d4c8d23f-8f40-4e53-8e06-b5fcb1b6d4cb.jpeg?im_w=720',
        preview: 'false'
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ] }
    }, {});
  }
};
