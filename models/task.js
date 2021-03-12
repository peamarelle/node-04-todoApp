const { v4: uuidv4 } = require("uuid");
const getTodayDate = require("../helpers/dateFormat");

class Task {
  id = "";
  title = "";
  done = null;
  created = null;
  finished = null;

  constructor(title) {
    this.id = uuidv4(); //asigna el id al TODO
    this.title = title;
    this.done = false;
    this.created = getTodayDate();
  }
}

module.exports = Task;
