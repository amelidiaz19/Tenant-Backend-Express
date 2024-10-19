const { Router } = require("express");
const EntidadController = require("../../controllers/users/EntidadController.js");
const Authorization = require("../../middlewares/Authorization.js");
const ValidateHashCreateTenant = require("../../middlewares/ValidateHashCreateTenant.js");

const AuthRouter = Router();

// Add routes
AuthRouter.post("/login", EntidadController.login);
AuthRouter.post("/register", EntidadController.createSubcription);
AuthRouter.post("/private", Authorization, EntidadController.create);
AuthRouter.post("/validate", EntidadController.validate);
AuthRouter.post(
  "/register-new-tenant",
  //ValidateHashCreateTenant,
  EntidadController.createNewTenant
);
AuthRouter.get("/PRUEBA", EntidadController.executePrueba);
module.exports = AuthRouter;
