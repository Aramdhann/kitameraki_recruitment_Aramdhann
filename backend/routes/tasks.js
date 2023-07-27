const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.route("/").get(tasksController.getAllTask);
router.route("/createTask").post(tasksController.createTask);
router.route("/:id").delete(tasksController.deleteTask);
router.route("/editTask/:id").get(tasksController.getTask);
router.route("/editTask/:id").put(tasksController.updateTask);

module.exports = router;
