/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */

 const addPhoneContact = require('./add-phone-contact.js');
 const editPhoneContact = require('./edit-phone-contact.js');
 const deletePhoneContact = require('./delete-phone-contact.js');
 const searchPhoneContact = require('./search-phone-contact.js');
 const showPhoneContact = require('./show-phone-contact.js');
 const loadData = require('./load-data.js');

 const readlineSync = require('readline-sync');
 const fs = require('fs');
 
 const log = console.log;

 const showContact = () => {
     log('1. Add a new phone');
     log('2. Edit a phone');
     log('3. Delete a phone');
     log('4. Search a phone');
     log('5. Show contact');
     log('6. Exit contact');

     const option = readlineSync.question('Enter the number: ');
    switch (option) {
        case '1':
            addPhoneContact();
            showContact();
            break;
        case '2':
            editPhoneContact();
            showContact();
            break;
        case '3':
            deletePhoneContact();
            showContact();
            break;
        case '4':
            searchPhoneContact();
            showContact();
            break;
        case '5':
            showPhoneContact();
            showContact();
            break;
        case '6':
            break;
        default:
            log('Wrong option');
            showContact();
            break;
    }
 }

 const main = () => {
    showContact();
 }

 main();