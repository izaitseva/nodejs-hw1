const contacts = require('./contacts.js')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'list':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        case 'get':
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;

        case 'add':
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;

        case 'remove':
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;

        default:
            break;
    }
}

// invokeAction({action: 'list'})
// invokeAction({ action: 'get', id: '05olLMgyVQdWRwgKfg5J6' })
// invokeAction({ action: 'add', name: 'ira', email: 'dkj@kjhb.com', phone: '846534567886' })
invokeAction({ action: 'remove', id: '4bO0NqOsJ9edO2L7JjWAj' })