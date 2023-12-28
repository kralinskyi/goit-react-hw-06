import React from 'react';

const Contacts = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default Contacts;
