const readlineSync = require('readline-sync');
const loadData = require('./load-data.js');

const SearchPhoneContact = () => {
   
    loadData();

    const id = readlineSync.question('Id: ');

    for (let order of content) {
        if (order.id === id) {
            console.log(`Id: ${order.id} *** Name: ${(order.name)} *** Phone number: ${order.phoneNumber}`);
        }
    }
}

module.exports = SearchPhoneContact;