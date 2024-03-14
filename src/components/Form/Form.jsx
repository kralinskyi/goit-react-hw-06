import { useDispatch, useSelector } from "react-redux";
import { addContact, contactName, contactNumber } from "../../redux/store";
import css from "./Form.module.css";

export default function Form() {
  const dispatch = useDispatch();
  const { name, number } = useSelector(({ filters }) => filters);

  const handleNameChange = (event) => {
    dispatch(contactName(event.target.value));
  };

  const handleNumberChange = (event) => {
    dispatch(contactNumber(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addContact(name, number));
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label>
        <span className={css.label_span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>
      <label>
        <span className={css.label_span}>Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleNumberChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
