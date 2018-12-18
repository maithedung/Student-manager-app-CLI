const loadData = require('./load-data.js');
const readlineSync = require('readline-sync');
const fs = require('fs');


const DeletePhoneContact = () => {
    loadData();

    const id = readlineSync.question('Id: ');

    for (let index in content) {
        if (content[index].id === id) {
            content.splice(index, 1);
        }
    }

    const value = JSON.stringify(content);
    fs.writeFileSync('./data.json', value, {encoding: 'utf8'});
}

module.exports = DeletePhoneContact;