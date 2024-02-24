import css from "./Contact.module.css";
import { FaPhoneSquare } from "react-icons/fa";
import { IoIosContact } from "react-icons/io";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <>
      <li className={css.contact}>
        <div>
          <div className={css.contact_field}>
            <IoIosContact /> <p>{name}</p>
          </div>
          <div className={css.contact_field}>
            <FaPhoneSquare /> <p>{number}</p>
          </div>
        </div>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
