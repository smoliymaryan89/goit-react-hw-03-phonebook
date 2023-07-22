import React from 'react';
import PropTypes from 'prop-types';
import { ContactItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactItem key={id}>
          {name}: {number}
          <button onClick={() => onDeleteContact(id)} type="button">
            Delete
          </button>
        </ContactItem>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default ContactList;
