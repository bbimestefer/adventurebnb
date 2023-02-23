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
        spotId: 1,
        url: 'https://a0.muscache.com/im/pictures/a78f3484-f3b2-4a2f-b389-6c2619e62814.jpg?im_w=1200',
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
        spotId: 2,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-785466216391543686/original/31eea213-9ab8-4889-8366-a483035a4ddf.jpeg?im_w=720',
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
        spotId: 3,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-776177554476979590/original/e5ceeadf-682d-4dcb-9cb2-0f8f216719af.jpeg?im_w=720',
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
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-796327429000086279/original/4d47775e-c972-4e57-8f4c-0f0639611ecd.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-796327429000086279/original/f117bd20-de21-41c4-b8c8-80961852162b.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 4,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-796327429000086279/original/cfe2af90-4375-4038-b1b1-37852d6e2409.jpeg?im_w=720',
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
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/ac2bd8bf-e3fc-416a-a644-140552a19ac1.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/b8c4959a-d726-474b-b70d-369bb4a4cd2c.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 5,
        url: 'https://a0.muscache.com/im/pictures/48e5d0d5-ca37-4215-ac10-d807df737ff4.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-741458095110405903/original/500d8ca8-0a45-4731-940a-e25fa39ae3af.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-37256078/original/45a817ae-58eb-4ef8-a501-3e1a039424c5.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/8d7866a0-633d-4ff4-90d7-ae94e993b9b4.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/6d96f846-0fb0-4b5d-9ef8-c250981adafb.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 6,
        url: 'https://a0.muscache.com/im/pictures/daca6157-cf90-49bd-a603-b22352d7d565.jpg?im_w=720',
        preview: 'false'
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
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-829913047895421868/original/c5d451c5-b2bd-44d0-bb40-952c37c62ae2.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-829913047895421868/original/bfffe79b-f362-4420-b5e1-a6a6f19300e5.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 7,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-829913047895421868/original/553446f1-f4de-4bd8-a34a-03f145522dbc.jpeg?im_w=720',
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
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-640482075480090586/original/e2cdec58-eb91-46c8-b77b-270cfd5a7833.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-640482075480090586/original/1965b949-1ffe-469f-92e5-f9f8aea267f6.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 8,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-640482075480090586/original/1ac67179-e0a2-43ee-9d41-0ffbe4ee032c.jpeg?im_w=720',
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
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-762372849553595323/original/810191fc-22fc-4dd6-9581-5760cd4fc01f.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35229560/original/f73cbf2a-dd22-400d-8cf8-cb5006ffe29d.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 9,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-35229560/original/9a1a2031-1957-4bb2-9e79-279ab82c7c20.jpeg?im_w=720',
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
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/3c38544a-a2a6-4f01-a5c8-33c128607434.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/d7665477-1d4b-477b-8d4e-87245189208f.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 10,
        url: 'https://a0.muscache.com/im/pictures/034dd16f-a57f-4e0f-8121-02543c1fda65.jpg?im_w=720',
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
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48853548/original/018b16d6-9911-492a-a146-ecc88655dc1e.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48853548/original/83bd702b-91d1-4fc1-8c06-3a7eddf309d3.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 11,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-48853548/original/68d41ff7-c1ed-41f3-bfc1-b67b23130974.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-33193709/original/dab13298-7ba7-4808-9abd-7da54ec47a97.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-44151942/original/c9d78fbd-39cb-4af1-9e1d-9328f8e413b6.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-44151942/original/815e0a10-3a77-4a06-9438-bd6dbbd4b9d9.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-44151942/original/282a8b67-dc2b-47e2-81d0-57960542dc0d.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 12,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-44151942/original/5230e4d4-c304-488c-8a69-72093b14df97.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43555320/original/3c7cd9d6-f1c8-4a45-bff0-b52305495cf6.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43555320/original/41da219b-2c58-486a-a8fa-c6996b77ea5a.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43555320/original/6b93b145-898d-4032-9df6-4baf78304cda.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43555320/original/af2be0e4-62d7-4da1-b637-e7a4643e2b45.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 13,
        url: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-43555320/original/3ce96135-cbca-492f-84b6-0869f568c07f.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/9bd67185-dc83-4473-a191-9486c62aec66.jpeg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/a0965aa5-3907-466e-b727-0900e2a7e8c7.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/d01dc3d2-9597-4d88-92f7-3e15a1c0d604.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/f58c28d5-52d5-4c58-928e-ef00bf7164a3.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 14,
        url: 'https://a0.muscache.com/im/pictures/miso/Hosting-46695796/original/088a6251-1a8c-459c-9f14-6d131fdb1a68.jpeg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/930b2498-a62b-420b-8e5d-a2b5e4447516.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/dbe42b06-3405-49ca-99cc-adc6eb08aa2c.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/c0be4bea-362f-4ff7-8b77-b339be9a0df3.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/6e0bfa2b-a3a2-4089-83a5-2f6f954bf954.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 15,
        url: 'https://a0.muscache.com/im/pictures/403e0690-6f7d-4c82-962d-585e4b442e80.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/ff35ada8-ecd4-4277-a127-78dee14c70ee.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/ea3bce54-c882-4e31-9c8b-af26f89d9173.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/5865312e-6384-42d7-8dee-808ff88a5f18.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/33c87736-c763-417f-b4f5-68706fe5879f.jpg?im_w=1200',
        preview: 'false'
      },
      {
        spotId: 16,
        url: 'https://a0.muscache.com/im/pictures/eb396502-bb2f-4c03-8e5e-f429246eddf2.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/6ea47a5a-e28c-47b4-a499-f19a3cfe7303.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/8636e885-7cf4-4b39-9283-89a1fae3049c.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/3510432b-b0ad-457c-b117-9ed977dd48ac.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/9d195266-44af-498b-8003-bfa3c5bdf2b3.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 17,
        url: 'https://a0.muscache.com/im/pictures/b4b59537-d1c2-428d-a4b3-20bf288eafef.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/e69b3403-3d09-4f3f-b997-1a21164d1ee7.jpg?im_w=720',
        preview: 'true'
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/0abf4095-ef69-4afb-bef6-820e59d23990.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/52705e0f-e940-408f-a646-6bcb9adc8110.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/07b54251-f9b5-490e-8d0e-85afa65b161c.jpg?im_w=720',
        preview: 'false'
      },
      {
        spotId: 18,
        url: 'https://a0.muscache.com/im/pictures/879612fc-cb3b-4db0-8660-f7f50a7bdb4b.jpg?im_w=720',
        preview: 'false'
      },

    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18 ] }
    }, {});
  }
};
