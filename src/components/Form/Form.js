import React from 'react';
import { nanoid } from 'nanoid';
import './Form.css';

const Form = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    onSubmit({ id, name, number });
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>
        <span className="label-span">Name</span>
        <input type="text" name="name" required />
      </label>
      <label>
        <span className="label-span">Phone</span>
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

export default Form;
