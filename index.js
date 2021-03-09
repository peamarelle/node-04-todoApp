const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const { getAllTasks, createTask, deleteTask, completeTask } = require("./services/taskService");

const main = async () => {
  let option = "";

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const title = await inquirerInput("Task tile:");
        createTask(title);
        break;

      case 2:
        let tasks = getAllTasks();
        console.table(tasks);
        break;

      case 3:
        const completedTask = await inquirerInput("Task tile:");
        completeTask(completedTask);
        break;

      case 4:
        const titleDelete = await inquirerInput("Task tile:");
        deleteTask(titleDelete);
        break;
    }
  } while (option !== "X");
};

main();
