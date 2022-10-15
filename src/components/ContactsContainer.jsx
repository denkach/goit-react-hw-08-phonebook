import { Filter } from 'components/Filter/Filter';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import { ContactsList } from 'components/ContactList/ContactList';

export const FormContainer = () => {
  return (
    <section>
      <ContactsForm />
      <Filter />
      <ContactsList />
    </section>
  );
};
