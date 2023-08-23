"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /* INSERTAR UNA LISTA DE OBJETOS (REGISTROS) EN LA TABLA */
    await queryInterface.bulkInsert(
      "libro",
      [
        /* LA ESTRUCTURA DE LOS OBJETOS JSON (CLAVE-VALOR), DE ACUERDO CON EL MODELO RELACIONADO */
        {
          idLibro: 1,
          nombreLibro: "Breaking Bad 1",
          anio: "2010",
          Escritor_idEscritor: 1,
        },
        {
          idLibro: 2,
          nombreLibro: "Breaking Bad 2",
          anio: "2012",
          Escritor_idEscritor: 2,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /* ELIMINAR TODOS LOS REGISTROS DE LA TABLA */
    await queryInterface.bulkDelete("libro", null, {});
  },
};
