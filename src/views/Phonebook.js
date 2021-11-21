import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';
import contactsOperations from '../redux/contacts/contacts-operations';
import authSelectors from '../redux/authentification/auth-selectors';

function Phonebook() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getIsUserLoggedIn);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(contactsOperations.getContacts());
    }
  }, [isLoggedIn, dispatch])

  return (
    <Fragment>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm />
      </Section>
      <Section>
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
    </Fragment>
  );
}

export default Phonebook;