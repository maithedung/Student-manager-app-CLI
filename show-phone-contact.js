const loadData = require('./load-data.js');

loadData();

const ShowPhoneContact = () => {
    for (let order of content) {
        console.log(`Id: ${order.id} *** Name: ${(order.name)} *** Phone number: ${order.phoneNumber}`);
    }
}
module.exports = ShowPhoneContact;