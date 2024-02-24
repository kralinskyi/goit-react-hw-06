import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ onSearch, value }) {
  const id = useId();

  return (
    <div className={css.search}>
      <label htmlFor={id}>Finds contacts by name</label>
      <br />
      <input
        type="text"
        name="search"
        id={id}
        value={value}
        onChange={onSearch}
        className={css.inputs}
      />
    </div>
  );
}
