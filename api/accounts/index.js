const express = require("express");
const router = express.Router();
const controller = require("./controller");

router.get("/:id", controller.search);
router.get("/", controller.getAll);
router.post("/login", controller.login);
router.post("/", controller.post);
router.delete("/:id", controller.deleteOne)
router.put("/:id", controller.search)

module.exports = router;
