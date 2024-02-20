import { nanoid } from "nanoid";
import { useId } from "react";

export default function ContactForm({ onSubmitForm }) {
  const nameId = useId();
  const numberId = useId();

  const handleSubmit = (e) => {
    e.preventDefault();

    const id = nanoid();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    onSubmitForm({
      name,
      number,
      id,
    });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nameId}>Name </label>
        <input name="name" id={nameId}></input>
      </div>
      <div>
        <label htmlFor={numberId}>Number </label>
        <input name="number" id={numberId}></input>
      </div>
      <button type="submit">Add contact</button>
    </form>
  );
}
