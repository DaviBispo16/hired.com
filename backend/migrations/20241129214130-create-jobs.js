'use strict';
const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('Jobs', {
      id: {
        type: DataTypes.UUIDV4,
        primaryKey: true
      },
      descricao: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dataDeCadastro: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: new Date()
      },
      telefone: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      empresa: {
        type: DataTypes.STRING,
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Jobs');
  }
};