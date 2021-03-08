const Task = require("../models/Task");
const { getData, saveData } = require("../helpers/fileManager");

class TaskRepository {
  _tasks = null;

  constructor() {
    const data = getData();

    if (data) {
      this._tasks = data;
    } else {
      this._tasks = [];
    }
  }

  getAllTasks() {
    return this._tasks.map((task) => {
      return { title: task.title, done: task.done, finished: task.finished };
    });
  }

  /**
   *
   * @param {String} title
   */

  createTask(title) {
    const task = new Task(title);
    this._tasks.push(task);
    saveData(this._tasks);
  }

  deleteTask(title) {
    this._tasks = this._tasks.filter((task) => task.title !== title);
    saveData(this._tasks);
  }

  completeTask(title) {
    this._tasks.map((task) => {
      if (task.title === title) {
        task.done = true;
        task.finished = new Date();
      }
    });
    saveData(this._tasks);
  }
}

module.exports = TaskRepository;
