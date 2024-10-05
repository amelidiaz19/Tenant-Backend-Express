const { Router } = require("express");
const TipadoController = require("../../controllers/global/TipadoController.js");

const TipadoRoutes = new Router();

TipadoRoutes.get("/", TipadoController.GetTipadoDocumentos);
module.exports = TipadoRoutes;
