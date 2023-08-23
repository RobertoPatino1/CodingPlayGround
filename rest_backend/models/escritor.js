const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('escritor', {
    idEscritor: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreEscritor: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'escritor',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEscritor" },
        ]
      },
    ]
  });
};
