const readlineSync = require('readline-sync');
const fs = require('fs');
const loadData = require('./load-data.js');

const EditPhoneContact = () => {
    
    loadData();

    const id = readlineSync.question('Id: ');
    const name = readlineSync.question('Name: ');
    const phoneNumber = readlineSync.question('Phone number: ');

    for (let order of content) {
        if (order.id === id) {
            order.name = name;
            order.phoneNumber = phoneNumber;
        }
    }

    const value = JSON.stringify(content);
    fs.writeFileSync('./data.json', value, {encoding: 'utf8'});
}

module.exports = EditPhoneContact;