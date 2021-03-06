const Task = require('../models/task');
const data = require('../database/database');

class TaskRepository {

    _tasks = null;

    constructor() {
        if(data.tasks.length !== 0) {
            console.log(data.tasks);
            this._tasks = data.tasks;
        } else {
            this._tasks = [];
        }
    }

    getAllTasks() {
        return this._tasks;
    }

    /**
     * 
     * @param {String} title 
     * TODO: falta persistir los datos en un archivo
     */

    createTask(title) {
        const task = new Task(title);
        this._tasks.push(task);
    }

    deleteTask() {

    }

    completeTask() {
        
    }
}

module.exports = TaskRepository;