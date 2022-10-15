import propTypes from 'prop-types';
import { Label, ContactsButton, ContactContainer } from './ContactsItem.styled';
import { RiContactsFill } from 'react-icons/ri';
import { AiFillDelete } from 'react-icons/ai';
import { useDeleteContactMutation } from 'redux/contactsApi';

export const ContactsItem = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactMutation();

  return (
    <li>
      <Label>
        <ContactContainer>
          <RiContactsFill style={{ marginRight: '8px' }} />
          {name}: {number}
        </ContactContainer>
        <ContactsButton id={id} onClick={() => deleteContact(id)}>
          <AiFillDelete />
        </ContactsButton>
      </Label>
    </li>
  );
};

ContactsItem.propTypes = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  number: propTypes.string.isRequired,
};
