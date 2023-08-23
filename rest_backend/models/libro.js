const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('libro', {
    idLibro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreLibro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    anio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Escritor_idEscritor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'escritor',
        key: 'idEscritor'
      }
    }
  }, {
    sequelize,
    tableName: 'libro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idLibro" },
        ]
      },
      {
        name: "fk_Libro_Escritor_idx",
        using: "BTREE",
        fields: [
          { name: "Escritor_idEscritor" },
        ]
      },
    ]
  });
};
