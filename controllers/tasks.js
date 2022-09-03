const getAllTasks = (req, res) => {
  res.send("Get all task!");
};

const createTasks = (req, res) => {
  res.json(req.body);
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.send("Task Updated!");
};

const deleteTask = (req, res) => {
  res.send("Task Deleted!");
};

module.exports = {
  getAllTasks,
  createTasks,
  getTask,
  updateTask,
  deleteTask,
};
