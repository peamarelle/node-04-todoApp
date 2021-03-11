const { inquirerMenu, inquirerInput, inquirerSubMenu } = require("./helpers/inquirer");
const { getAllTasks, createTask, deleteTask, completeTask, getChoices } = require("./services/taskService");

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
        const tasks = getAllTasks();

        if (tasks.length !== 0) {
          console.table(tasks);
        } else {
          console.log('There are not tasks!'.red);
        }
        break;

      case 3:
        const completedTask = await inquirerInput("Task tile:");
        completeTask(completedTask);
        break;

      case 4:
        const choices = getChoices();
        const task = await inquirerSubMenu(choices, 'delete');
        deleteTask(task);
        break;
    }
  } while (option !== "X");
};

main();
