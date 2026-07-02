const experss = require("express");
const router = experss.Router();
const validateTodo = require("../middleware/validateTodo");
const {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} = require("../controllers/todoController");

router.get("/", getTodos);
router.post("/", validateTodo, createTodo);
router.put("/:id", validateTodo, updateTodo);
router.delete("/:id", validateTodo, deleteTodo);

module.exports = router;
