const CategoriaMarca = require("../../models/inventory/CategoriaMarca.js");
const Marca = require("../../models/inventory/Marca.js");
class MarcaController {
  async GetAll(req, res) {
    const resp = await Marca.findAll({ include: CategoriaMarca });
    return res.status(200).json(resp);
  }
  async GetAllPaged(req, res) {
    res.send("funciona");
  }
  async GetById(req, res) {
    res.send("funciona" + req.params.id);
  }
  async Save(req, res) {
    res.send("funciona");
  }
  async SavesAll(req, res) {
    res.send("funciona");
  }
  async Belongs(req, res) {
    res.send("funciona");
  }
  async Update(req, res) {
    res.send("funciona" + req.params.id);
  }
  async Delete(req, res) {
    res.send("funciona" + req.params.id);
  }
}

module.exports = new MarcaController();
