import React from 'react';
import './Contacts.css';

const Contacts = ({ contacts }) => {
  return (
    <ul className="contacts-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          {name} :{' '}
          <span>
            <i>{number}</i>
          </span>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
