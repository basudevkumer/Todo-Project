const validateTodo = (req, res, next) => {
  const { title, description } = req.body;

  if (!title || title.trim() === "") {
    return res.status(400).json({ message: "Title is required" });
  }
  if (title.trim().length < 3) {
    return res
      .status(400)
      .json({ message: "Title must be at least 3 characters" });
  }
  if (!description || description.trim() === "") {
    return res.status(400).json({ message: "Description is required" });
  }

  next();
};

module.exports = validateTodo;
