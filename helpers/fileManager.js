const fs = require("fs");

const name = "./database/data.json";

const getData = () => {
  if (!fs.existsSync(name)) {
    return null;
  }

  const data = fs.readFileSync(name, { encoding: "utf8" });

  if (data) {
    return JSON.parse(data);
  }

  return null;
};

const saveData = (data) => {
  fs.writeFileSync(name, JSON.stringify(data));
};

<<<<<<< HEAD
module.exports = { getData, saveData };
=======
    fs.writeFileSync(name, JSON.stringify(data));
}

module.exports = { getData, saveData }
>>>>>>> cd84c79fa4ee2141aa8b0eac9082ab8427277b29
