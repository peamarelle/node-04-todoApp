const TaskRepository = require("../repositories/taskRepository");
const taskRepository = new TaskRepository();

const getAllTasks = () => {
    const tasks = taskRepository.getAllTasks().map((task) => {
        return { title: task.title, done: task.done };
    })
    return tasks;
};

const createTask = (title) => {
    taskRepository.createTask(title);
}

const deleteTask = (title) => {
    taskRepository.deleteTask(title);
}

const completeTask = (title) => {
    taskRepository.completeTask(title);
}

module.exports = { getAllTasks, createTask, deleteTask, completeTask };