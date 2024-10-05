class CategoriaMarcaService {
  async GetAll(req, res) {
    res.send("funciona");
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
  async SubCategoriaBelongs(req, res) {
    res.send("funciona");
  }
  async Update(req, res) {
    res.send("funciona" + req.params.id);
  }
  async Delete(req, res) {
    res.send("funciona" + req.params.id);
  }
}
module.exports = new CategoriaMarcaService();
