const LoteRouter = require("./Lote.routes");
const MarcaRouter = require("./Marca.routes");
const ProductoRouter = require("./Producto.routes");
// const SubCategoriaRouter = require("./SubCategoria.routes");
const CategoriaRouter = require("./Categoria.routes");
const CategoriaMarcaRouter = require("./CategoriaMarca.routes");
const PedidoRoutes = require("./Pedido.routes");
const ProductoSerieRoutes = require("./ProductoSerie.routes");

exports.InventoryRouter = {
  LoteRouter,
  MarcaRouter,
  ProductoRouter,
  CategoriaRouter,
  CategoriaMarcaRouter,
  PedidoRoutes,
  ProductoSerieRoutes,
};
