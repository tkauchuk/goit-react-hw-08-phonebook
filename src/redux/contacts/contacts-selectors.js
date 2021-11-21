const getAllContacts = state => state.contacts.items;
const isLoaded = state => state.contacts.loaded;

const contactsSelectors = {getAllContacts, isLoaded};

export default contactsSelectors;