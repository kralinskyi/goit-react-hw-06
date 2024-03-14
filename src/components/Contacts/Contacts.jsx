import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/store";
import css from "./Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector(({ contacts: { items } }) => items);
  const dispatch = useDispatch();

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id)); // Викликайте deleteContact із відповідним id
  };

  return (
    <ul className={css.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contacts_list__item}>
          {name}:
          <span>
            <i>{number}</i>
          </span>
          <button
            type="button"
            className={css.contacts_button}
            onClick={() => handleDeleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
