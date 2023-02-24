'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Banks', [
      {
        code: '0001',
        name: 'Banco de Chile',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0009',
        name: 'Banco Internacional',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0012',
        name: 'Banco Estado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0014',
        name: 'Scotiabank',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0016',
        name: 'BCI',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0027',
        name: 'CorpBanca',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0028',
        name: 'BICE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0031',
        name: 'HSBC Bank (Chile)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0037',
        name: 'Santander',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0039',
        name: 'Banco Itaú',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0049',
        name: 'Security',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0051',
        name: 'Banco Falabella',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0053',
        name: 'Banco Ripley',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0054',
        name: 'Rabobank',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0055',
        name: 'Banco Consorcio',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0057',
        name: 'Banco Paris',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0504',
        name: 'BBVA',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        code: '0507',
        name: 'Banco del Desarrollo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Banks', null, {});
  },
};
