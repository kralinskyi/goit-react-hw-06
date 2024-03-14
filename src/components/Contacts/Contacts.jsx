import { useSelector, useDispatch } from "react-redux";
import css from "./Contacts.module.css";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contacts() {
  const contacts = useSelector(({ contacts: { items } }) => items);
  const { name } = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(name.toLowerCase()) ||
      contact.number.toLowerCase().includes(name.toLowerCase())
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={css.contacts_list}>
      {filteredContacts.map(({ id, name, number }) => (
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
