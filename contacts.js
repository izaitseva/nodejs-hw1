// import { nanoid } from 'nanoid';
const { nanoid } = require('nanoid');
const fs = require('fs/promises');
const path = require('path');
const contactsPath = path.join(__dirname, '/db/contacts.json')

async function listContacts() {
    const contacts = await fs.readFile(contactsPath, 'utf-8')
    return JSON.parse(contacts)
}

async function getContactById(contactId) {
    const contacts = await listContacts();
    const result = contacts.find((item) => item.id === contactId)
    return result || null
}

async function removeContact(contactId) {
    // ...твій код
}

async function addContact(name, email, phone) {
    const contacts = await listContacts();
    const newBook = {
        id: nanoid(),
        name,
        email,
        phone
    }
    contacts.push(newBook);
    await fs.writeFile(contactsPath, JSON.stringify(contacts))
    return newBook
}

module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact
}