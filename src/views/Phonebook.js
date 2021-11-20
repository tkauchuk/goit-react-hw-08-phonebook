import { Fragment } from 'react';

import Section from '../components/Section';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

function Phonebook() {
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