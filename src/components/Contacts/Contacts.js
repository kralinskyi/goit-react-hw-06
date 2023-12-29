import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
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
