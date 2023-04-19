const contacts = require('./contacts.js')

const invokeAction = async ({ action, id, name, email, phone }) => {
    switch (action) {
        case 'getAll':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        case 'getOneById':
            const contact = await contacts.getContactById(id);
            console.log(contact);
            break;

        case 'addContact':
            const newContact = await contacts.addContact(name, email, phone);
            console.log(newContact);
            break;

        case 'removeContact':
            const removeContact = await contacts.removeContact(id);
            console.log(removeContact);
            break;

        default:
            break;
    }
}

// invokeAction({action: 'getAll'})
// invokeAction({ action: 'getOneById', id: '05olLMgyVQdWRwgKfg5J6' })
// invokeAction({ action: 'addContact', name: 'ira', email: 'dkj@kjhb.com', phone: '846534567886' })
invokeAction({ action: 'removeContact', id: 'Hi8TnByfs2Hx0qWREW_JQ' })