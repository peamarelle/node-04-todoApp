const {
  inquirerMenu,
  inquirerInput,
  inquirerSubMenu,
} = require("./helpers/inquirer");
const {
  getAllTasks,
  createTask,
  deleteTask,
  completeTask,
  getChoices,
  getChoicesToComplete,
} = require("./services/taskService");

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

        if (tasks.length > 0) {
          console.table(tasks);
        } else {
          console.log("There are not tasks!".red);
        }
        break;

      case 3:
        const options = getChoicesToComplete();
        if (options.length > 0) {
          const newChoices = options.filter((option) => {
            if (typeof option === "object") {
              let choices = option;
              return choices;
            }
          });
          if (newChoices.length > 0) {
            const completedTask = await inquirerSubMenu(newChoices, "complete");
            completeTask(completedTask);
          } else {
            console.log("There are no tasks to complete!".red);
          }
        }

        break;

      case 4:
        const choices = getChoices();
        if (choices.length > 0) {
          const task = await inquirerSubMenu(choices, "delete");
          deleteTask(task);
        } else {
          console.log("There are no tasks to delete!".red);
        }
        break;
    }
  } while (option !== "X");
};

main();
