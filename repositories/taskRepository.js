const Task = require("../models/task");
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

  deleteTask() {}

  getTaskTitle() {
    return this._tasks.map((task) => {
      return { title: task.title };
    });
  }

  completeTask(title) {
    let editTask = this._tasks.map((task) => {
      if (task.title === title) {
        task.done = true;
        task.finished = new Date();
      }
    });
    saveData(editTask);
  }
}

module.exports = TaskRepository;
