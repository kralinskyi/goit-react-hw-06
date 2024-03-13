import { useDispatch, useSelector } from "react-redux";
import { name } from "../../redux/store";
import { number } from "../../redux/store";
import css from "./Form.module.css";

export default function Form() {
  //   const dispatch = useDispatch();
  const { name, number } = useSelector(({ filters }) => filters);

  return (
    <form className={css.form}>
      <label>
        <span className={css.label_span}>Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          //   onChange={() => dispatch(name("Kolja"))}
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
