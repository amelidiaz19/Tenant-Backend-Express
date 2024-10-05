const { Router } = require("express");
const EntidadController = require("../../controllers/users/EntidadController.js");
const Authorization = require("../../middlewares/Authorization.js");

const EntidadRouter = Router();

// Add routes
EntidadRouter.get("/", Authorization, EntidadController.getAll);
EntidadRouter.post("/", Authorization, EntidadController.create);
EntidadRouter.get(
  "/dashboard",
  Authorization,
  EntidadController.getAllDashboard
);
EntidadRouter.put("/asignarrol", Authorization, EntidadController.UpdateRol);
console.log("ENTIDADDDDDDD");
console.log("EntidadRouter", EntidadRouter);
module.exports = EntidadRouter;
