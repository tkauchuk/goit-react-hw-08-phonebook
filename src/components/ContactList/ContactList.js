import { useSelector, useDispatch } from 'react-redux';

import styles from './ContactList.module.css';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import authSelectors from '../../redux/authentification/auth-selectors';
import contactsOperations from '../../redux/contacts/contacts-operations';


function ContactList() {
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);
    const isLoaded = useSelector(contactsSelectors.isLoaded);
    const contacts = useSelector(contactsSelectors.getAllContacts);
    const filter = useSelector(state => state.filter);
    const filteredContacts = isLoaded && getFilteredContacts(contacts, filter);


    return (
        <ul className={styles.list}>
            { isLoggedIn && isLoaded && filteredContacts.map(({id, name, number}) => {
                return (
                    <li className={styles.item} key={id}>
                        <div className={styles.wrapper}>
                            <p className={styles.name}>{name}</p>
                            <span className={styles.number}>{number}</span>
                            <button
                              className={styles.button}
                              type="button"
                              onClick={() => dispatch(contactsOperations.deleteContact(id))}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

function getFilteredContacts(items, filter) {
    return items.filter(item => {
        return item.name.toLowerCase().includes(filter.toLowerCase())
    })
}

export default ContactList;