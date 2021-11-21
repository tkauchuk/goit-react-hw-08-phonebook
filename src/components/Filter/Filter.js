import { useSelector, useDispatch } from 'react-redux';
import styles from './Filter.module.css';
import actions from '../../redux/action-creators';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

function Filter() {
    const contacts = useSelector(contactsSelectors.getAllContacts);
    const isLoaded = useSelector(contactsSelectors.isLoaded);
    const filterValue = useSelector(state => state.filter);
    const dispatch = useDispatch();

    return (
        <label className={styles.label}>
            Find contacts by name
            <input
                className={styles.input}
                type="text"
                name="filter"
                value={filterValue}
                autoComplete="off"
                disabled={isLoaded && !contacts.length > 0}
                onChange={e => dispatch(actions.changeContactsFilter(e.target.value))}
            />
        </label>
    );
}

export default Filter;