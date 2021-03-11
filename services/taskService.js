const colors = require("colors");
const TaskRepository = require("../repositories/taskRepository");
const taskRepository = new TaskRepository();

const getAllTasks = () => {
  const tasks = taskRepository.getAllTasks().map((task) => {
    if (task.done === true) {
      return { title: task.title, done: "COMPLETED" };
    }

    return { title: task.title, done: "UNFINISHED" };
  });
  return tasks;
};

const getChoices = () => {
  const choices = taskRepository.getAllTasks().map((task) => {
    return { value: task.id, name: task.title };
  });
  return choices;
};

const createTask = (title) => {
  taskRepository.createTask(title);
};

const deleteTask = (id) => {
  taskRepository.deleteTask(id);
};

const completeTask = (id) => {
  taskRepository.completeTask(id);
};

module.exports = {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  getChoices,
};
