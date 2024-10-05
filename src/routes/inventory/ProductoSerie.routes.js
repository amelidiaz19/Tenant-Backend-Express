const { Router } = require("express");
const Authorization = require("../../middlewares/Authorization");
const ProductoSerieController = require("../../controllers/inventory/ProductoSerieController");

const ProductoSerieRoutes = new Router();

ProductoSerieRoutes.get(
  "/stock/:id",
  Authorization,
  ProductoSerieController.getSeriesByProductoId
);
ProductoSerieRoutes.get(
  "/belong/:sn",
  Authorization,
  ProductoSerieController.getBelong
);

module.exports = ProductoSerieRoutes;
