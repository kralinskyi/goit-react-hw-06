import { useSelector } from "react-redux";
import css from "./Contacts.module.css";

export default function Contacts() {
  const contacts = useSelector(({ contacts: { items } }) => items);

  return (
    <ul className={css.contacts_list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={css.contacts_list__item}>
          {name}:
          <span>
            <i>{number}</i>
          </span>
          <button type="button" className={css.contacts_button}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
}
