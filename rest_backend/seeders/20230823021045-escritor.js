"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert(
      "escritor",
      [
        /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
        {
          idEscritor: 1,
          nombreEscritor: "Walter White",
        },
        {
          idEscritor: 2,
          nombreEscritor: "Jesee Pinkman",
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete("escritor", null, {});
  },
};
