const colors = require("colors");
const TaskRepository = require("../repositories/taskRepository");
const taskRepository = new TaskRepository();

const getAllTasks = () => {
  const tasks = taskRepository.getAllTasks().map((task) => {
    if (task.done === true) {
      return {
        title: task.title,
        done: "COMPLETED",
        created: task.created,
        finished: task.finished,
      };
    }

    return { title: task.title, done: "UNFINISHED", created: task.created };
  });
  return tasks;
};

const getChoices = () => {
  const choices = taskRepository.getAllTasks().map((task) => {
    return { value: task.id, name: task.title, done: task.done };
  });
  return choices;
};

const getChoicesToComplete = () => {
  const choices = taskRepository.getAllTasks().map((task) => {
    if (task.done === false) {
      return { value: task.id, name: task.title, done: task.done };
    }
    return;
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
  getChoicesToComplete,
};
