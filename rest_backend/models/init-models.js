var DataTypes = require("sequelize").DataTypes;
var _escritor = require("./escritor");
var _libro = require("./libro");

function initModels(sequelize) {
  var escritor = _escritor(sequelize, DataTypes);
  var libro = _libro(sequelize, DataTypes);

  libro.belongsTo(escritor, { as: "Escritor_idEscritor_escritor", foreignKey: "Escritor_idEscritor"});
  escritor.hasMany(libro, { as: "libros", foreignKey: "Escritor_idEscritor"});

  return {
    escritor,
    libro,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
