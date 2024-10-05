const Categoria = require("../../models/inventory/Categoria.js");
const SubCategoria = require("../../models/inventory/SubCategoria.js");
class CategoriaController {
  async GetAll(req, res) {
    try {
      const resp = await Categoria.findAll({
        include: {
          model: SubCategoria,
        },
      });
      // Modificar el nombre del atributo SubCategoria a subcategorias

      const categoriasModificadas = resp.map((categoria) => ({
        id: categoria.id, // Convierte cada instancia en un objeto simple
        nombre: categoria.nombre,
        descripcion: categoria.descripcion,
        subcategorias: categoria.SubCategoria, // Cambiar el nombre SubCategoria a subcategorias
      }));
      return res.status(200).json(categoriasModificadas);
    } catch (error) {
      return res
        .status(500)
        .json({ message: "Error al obtener las categorías", error });
    }
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
module.exports = new CategoriaController();
