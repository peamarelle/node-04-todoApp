const TaskRepository = require("../repositories/taskRepository");
const taskRepository = new TaskRepository();

const getAllTasks = () => {
    const tasks = taskRepository.getAllTasks().map((task) => {
        return { title: task.title, done: task.done };
    })
    return tasks;
};

const getChoices = () => {
    const choices = taskRepository.getAllTasks().map((task) => {
        return { value: task.id, name: task.title };
    })
    return choices;
};

const createTask = (title) => {
    taskRepository.createTask(title);
}

const deleteTask = (id) => {
    taskRepository.deleteTask(id);
}

const completeTask = (title) => {
    taskRepository.completeTask(title);
}

module.exports = { getAllTasks, createTask, deleteTask, completeTask, getChoices };