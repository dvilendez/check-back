'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Addresses', [
      {
        rut: '11.111.111-1',
        name: 'Cosme Fulanito',
        email: 'cosmefulanito@example.com',
        phone: '+56912345678',
        bank: 'BCI',
        accountType: 'Corriente',
        accountNumber: '123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Addresses', null, {});
  },
};
