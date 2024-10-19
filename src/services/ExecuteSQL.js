const Categoria = require("../models/inventory/Categoria");
const CategoriaMarca = require("../models/inventory/CategoriaMarca");
const Marca = require("../models/inventory/Marca");
const Producto = require("../models/inventory/Producto");
const SubCategoria = require("../models/inventory/SubCategoria");
const Electronica = require("../static/Electronica.json");

class ExecuteSql {
  async Execute(tiponegocio, tenantId) {
    try {
      console.log(tiponegocio);
      console.log("TENANTID EXECUTE: ", tenantId);
      if (tiponegocio === "electronica") {
        //const marcasData = ;
        //return marcasData;
        console.log("execute");
        const marcas = await Marca.bulkCreate(
          Electronica.Marca.map((item) => ({
            nombre: item.nombre,
            tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
          }))
        );
        const categoriamarcas = await CategoriaMarca.bulkCreate(
          Electronica.CategoriaMarca.map((item) => ({
            nombre: item.nombre,
            MarcaId: marcas[item.MarcaId - 1].id,
            tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
          }))
        );

        const categorias = await Categoria.bulkCreate(
          Electronica.Categoria.map((item) => ({
            nombre: item.nombre,
            descripcion: item.descripcion,
            tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
          }))
        );

        const subcategorias = await SubCategoria.bulkCreate(
          Electronica.SubCategoria.map((item) => ({
            nombre: item.nombre,
            descripcion: item.descripcion,
            CategoriaId: categorias[item.CategoriaId - 1].id,
            tenantId: tenantId,
          }))
        );

        const productos = await Producto.bulkCreate(
          Electronica.Producto.map((item) => ({
            nombre: item.nombre,
            pn: item.pn,
            garantia_cliente: item.garantia_cliente,
            garantia_total: item.garantia_total,
            descripcion: item.descripcion,
            stock: item.stock,
            precio: item.precio,
            SubCategoriaId: subcategorias[item.SubCategoriaId - 1].id,
            CategoriaMarcaId: categoriamarcas[item.CategoriaMarcaId - 1].id,
            tenantId: tenantId, // UUID predeterminado, puedes cambiarlo o pasarlo como parámetro
          }))
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
}
module.exports = new ExecuteSql();
