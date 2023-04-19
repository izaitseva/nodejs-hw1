const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, '/db/contacts.json')

// async function readContacts() {
//     const contacts = await fs.readFile(contactsPath, 'utf-8')
//     console.log(contacts);
// }

// module.exports = {
//     readContacts,
// }

async function listContacts() {
  const contacts = await fs.readFile(contactsPath, 'utf-8')
  return JSON.parse(contacts)
}

async function getContactById(contactId) {
  // ...твій код
}

async function removeContact(contactId) {
  // ...твій код
}

async function addContact(name, email, phone) {
  // ...твій код
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}