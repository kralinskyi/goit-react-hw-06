import css from "./Filter.module.css";

export default function Filter() {
  return (
    <div className={css.container}>
      <label>
        <input
          name="filter"
          type="text"
          placeholder="find contact"
          //   onChange={onFilter}
          // value={filter}
        ></input>
      </label>
    </div>
  );
}
