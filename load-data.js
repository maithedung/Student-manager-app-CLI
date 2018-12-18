const fs = require('fs');

const LoadData = () => {
    const fileContent = fs.readFileSync('./data.json');
    content = JSON.parse(fileContent);
}

module.exports = LoadData;