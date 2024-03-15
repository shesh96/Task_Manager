const Todo = require("../models/Todo");

/* GET ALL TODOS */
const getTodo = async (req, res) => {
  const todo = await Todo.find();
  res.send(todo);
};

/* SAVE A TODO */
const saveTodo = async (req, res) => {
  const { text } = req.body;

  Todo.create({ text })
    .then((data) => {
      console.log("Task added successfully !");
      res.send(data);
    })
    .catch((err) => console.log(err));
};

/* UPDATE TODO */
const updateTodo = async (req, res) => {
  const { _id, text } = req.body;
  Todo.findByIdAndUpdate(_id, { text })
    .then(() => res.send("Task updated successfully"))
    .catch((err) => console.log(err));
};

/* DELETE TODO */
const deleteTodo = async (req, res) => {
  const { _id } = req.body;
  Todo.findByIdAndDelete(_id)
    .then(() => res.send("Task deleted successfully"))
    .catch((err) => console.log(err));
};

module.exports = { getTodo, saveTodo, updateTodo, deleteTodo };
