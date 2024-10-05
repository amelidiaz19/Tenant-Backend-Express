const { Router } = require("express");
const PedidosController = require("../../controllers/inventory/PedidosController");
const Authorization = require("../../middlewares/Authorization");

const PedidoRoutes = new Router();

PedidoRoutes.post("/", PedidosController.register);
PedidoRoutes.get("/", Authorization, PedidosController.getPedidos);

module.exports = PedidoRoutes;
