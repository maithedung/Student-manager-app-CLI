const readlineSync = require('readline-sync');
const fs = require('fs');
const loadData = require('./load-data.js');


const AddPhoneContact = () => {
    
    loadData();

    const name = readlineSync.question('Name: ');
    const phoneNumber = readlineSync.question('Phone number: ');

    const id = String(content.length + 1);
    const contact = {
        id,
        name,
        phoneNumber,
    }
    content.push(contact);
    const value = JSON.stringify(content);
    fs.writeFileSync('./data.json', value, {encoding: 'utf8'});
}

module.exports = AddPhoneContact;