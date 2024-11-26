import express from "express";
// import * as whController from "../controllers/warehouse-controller.js";
import * as getRecipes from "../controllers/recipe.js";

const router = express.Router();




router.get('/',getRecipes);








// router
//     .route("/")
//     .get(whController.getWarehouseList)
//     .post(whController.createWarehouse); 

// router
//     .route("/:id")
//     .get(whController.getOneWarehouseById)
//     .put(whController.updateWarehouse)
//     .delete(whController.deleteWarehouse);

// router
//     .route("/:id/inventories")
//     .get(inventoryController.getWarehouseInventory);

export default router;