const Marca = require("../models/inventory/Marca");
const Electronica = require("../static/Electronica.json");

class ExecuteSql {
  async Execute(tiponegocio) {
    try {
      if (tiponegocio === "electronica") {
        const marcasData = Electronica.Marca.map((item) => ({
          nombre: item.nombre,
          tenandId: "123e4567-e89b-12d3-a456-426614174000", // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
        }));
        await Marca.bulkCreate(marcasData);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new ExecuteSql();
