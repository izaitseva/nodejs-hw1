const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.resolve(__dirname, './db/contacts.json')

async function readContacts() {
    const contacts = await fs.readFile(contactsPath, 'utf-8')
    console.log(contacts);
}

module.exports = {
    readContacts,
}


// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}