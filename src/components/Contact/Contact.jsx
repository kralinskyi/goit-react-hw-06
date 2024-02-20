import css from "./Contact.module.css";

export default function Contact({ name, number, onDelete, id }) {
  return (
    <>
      <li className={css.contact}>
        <div>
          <p>{name}</p>
          <p>{number}</p>
        </div>
        <button type="button" onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    </>
  );
}
