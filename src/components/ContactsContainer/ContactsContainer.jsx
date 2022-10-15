import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactsList/ContactsList';

export const ContactsContainer = () => {
  return (
    <section>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </section>
  );
};
