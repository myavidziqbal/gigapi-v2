const express = require("express");
const router = express.Router();
const controller = require("./controller");
const helpers = require("../helpers");

router.get("/", helpers.isAuthenticated, controller.getAll);
router.post("/", controller.post);
router.delete("/:id", controller.delete);
router.delete("/", controller.deleteAll);
router.put("/:id", controller.update);
router.get("/search", controller.search);

module.exports = router;