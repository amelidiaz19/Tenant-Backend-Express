const { Router } = require("express");
const CategoriaMarcaService = require("../../controllers/inventory/CategoriaMarcaService");

const CategoriaMarcaRouter = Router();

CategoriaMarcaRouter.get("", CategoriaMarcaService.GetAll);
CategoriaMarcaRouter.get("/paged", CategoriaMarcaService.GetAllPaged);
CategoriaMarcaRouter.get("/:id", CategoriaMarcaService.GetById);
CategoriaMarcaRouter.post("", CategoriaMarcaService.Save);
CategoriaMarcaRouter.post("/saves", CategoriaMarcaService.SavesAll);
CategoriaMarcaRouter.put("/:id", CategoriaMarcaService.Update);
CategoriaMarcaRouter.delete("/:id", CategoriaMarcaService.Delete);

module.exports = CategoriaMarcaRouter;
