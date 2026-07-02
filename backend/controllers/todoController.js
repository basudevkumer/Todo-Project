const Todo = require("../models/Todo");

// get all

exports.getTodos = async (req, res) => {
  const todos = await Todo.find().sort({ createAt: -1 });

  res.json(todos);
};

//post create

exports.createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(req.params.id);

    if (!todo) {
      return res.status(404).json({ message: "Not found" });
    }
    res.json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
