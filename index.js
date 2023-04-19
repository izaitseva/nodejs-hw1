// const { readContacts } = require("./contacts")

// readContacts();

const contacts = require('./contacts.js')

const invokeAction = async ({ action, id }) => {
    switch (action) {
        case 'getAll':
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        // case 'listContacts':
        //     break;

        default:
            break;
    }
}

invokeAction({action: 'getAll'})