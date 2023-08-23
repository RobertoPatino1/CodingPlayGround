"use strict";
const escritor = require("../models").escritor;

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await escritor.sync();
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("escritor");
  },
};
