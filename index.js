const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const TaskRepository = require("./repositories/taskRepository");

const main = async () => {
  let option = "";
  const taskRepository = new TaskRepository();

  do {
    option = await inquirerMenu();

    switch (option) {
      case 1:
        const title = await inquirerInput("Task tile:");
        taskRepository.createTask(title);
        break;

      case 2:
        let tasks = taskRepository.getAllTasks();
        console.log(tasks);
        break;

      case 3:
        const completedTask = await inquirerInput("Task tile:");
        taskRepository.completeTask(completedTask);
        break;
    }
  } while (option !== "X");
};

main();
