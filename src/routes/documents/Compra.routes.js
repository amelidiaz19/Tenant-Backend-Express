const { Router } = require("express");
const Authorization = require("../../middlewares/Authorization.js");
const CompraController = require("../../controllers/documents/CompraController.js");

const CompraRoutes = new Router();

CompraRoutes.post("/", Authorization, CompraController.Register);

module.exports = CompraRoutes;
