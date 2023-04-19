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
    const contacts = await listContacts();
    const index = contacts.findIndex((item) => item.id === contactId)
    if (index === -1) return null
    const [result] = contacts.splice(index, 1)

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

    return result
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
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
    return newBook
}

module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact
}