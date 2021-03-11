<<<<<<< HEAD
const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const TaskRepository = require("./repositories/taskRepository");

const main = async () => {
  let option = "";
  const taskRepository = new TaskRepository();
=======
const { inquirerMenu, inquirerInput, inquirerSubMenu } = require("./helpers/inquirer");
const { getAllTasks, createTask, deleteTask, completeTask, getChoices } = require("./services/taskService");

const main = async () => {
  let option = "";
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29

  do {
    option = await inquirerMenu();

    switch (option) {
<<<<<<< HEAD
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

=======

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

>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29
main();
