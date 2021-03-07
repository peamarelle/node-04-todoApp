const fs = require('fs');

const name = './database/data.json';

const getData = () => {

    if(!fs.existsSync(name)) {
        return null;
    }

    const data = fs.readFileSync(name, { encoding: 'utf8' });

    if (data) {
        return JSON.parse(data);
    }

    return null;
}

const saveData = (data) => {

    if(!fs.existsSync(name)) {
        fs.mkdirSync('./database/');
    }

    fs.writeFileSync(name, JSON.stringify(data));
}

module.exports = { getData, saveData }