'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Addresses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      rut: {
        type: Sequelize.STRING,
      },
      name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING,
      },
      phone: Sequelize.STRING,
      bank: Sequelize.STRING,
      accountType: Sequelize.STRING,
      accountNumber: Sequelize.BIGINT,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Addresses');
  },
};
