const { Router } = require("express");
const ProductoController = require("../../controllers/inventory/ProductoController");
const Authorization = require("../../middlewares/Authorization");
const upload = require("../../middlewares/UploadImage");

const ProductoRouter = new Router();

ProductoRouter.get("/", Authorization, ProductoController.getAll);
ProductoRouter.get("/fact", Authorization, ProductoController.GetProductsFact);
ProductoRouter.get(
  "/CategoriaProducto",
  ProductoController.GetCategoriaProducto
);
ProductoRouter.get("/paged", ProductoController.GetPaged);
ProductoRouter.post(
  "/",
  [
    Authorization,
    upload.fields([
      { name: "fileprincipal", maxCount: 1 }, // Imagen principal
      { name: "files", maxCount: 5 }, // Imágenes secundarias
    ]),
  ],
  ProductoController.Create
);
ProductoRouter.put(
  "/",
  [
    Authorization,
    upload.fields([
      { name: "fileprincipal", maxCount: 1 }, // Imagen principal
      { name: "files", maxCount: 5 }, // Imágenes secundarias
    ]),
  ],
  ProductoController.Update
);
ProductoRouter.get("/:id", ProductoController.getById);

module.exports = ProductoRouter;
