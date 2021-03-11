<<<<<<< HEAD
const Task = require("../models/task");
=======
const Task = require("../models/Task");
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29
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
<<<<<<< HEAD
    return this._tasks.map((task) => {
      return { title: task.title, done: task.done, finished: task.finished };
    });
=======
    return this._tasks;
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29
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

<<<<<<< HEAD
  deleteTask() {}
=======
  deleteTask(id) {
    this._tasks = this._tasks.filter((task) => task.id !== id);
    saveData(this._tasks);
  }
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29

  completeTask(title) {
    this._tasks.map((task) => {
      if (task.title === title) {
        task.done = true;
        task.finished = new Date();
      }
    });
<<<<<<< HEAD
    saveData([this._tasks]);
=======
    saveData(this._tasks);
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29
  }
}

module.exports = TaskRepository;
