const express = require("express");
const router = express.Router();
const tasksController = require("../controllers/tasksController");

router.post("/tasks", tasksController.addTask);
router.get("/tasks", tasksController.getAllTasks);
router.delete("/tasks/:id", tasksController.deleteTask);
router.put("/tasks/:id", tasksController.updateTask);

module.exports = router;
