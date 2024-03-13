import { useSelector } from "react-redux";
import css from "./Form.module.css";

export default function Form() {
  const name = useSelector(({ filters: { name } }) => name);
  const number = useSelector(({ filters: { number } }) => number);

  return (
    <form className={css.form}>
      <label>
        <span className={css.label_span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          //   onChange={}
        />
      </label>
      <label>
        <span className={css.label_span}>Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          required
          //   onChange={}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
}
