import { useState } from "react";
import { useDispatch } from "react-redux";
import css from "./Filter.module.css";
import { setFilter } from "../../redux/store";

export default function Filter() {
  const [filter, setFilterValue] = useState("");
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    const { value } = event.target;
    setFilterValue(value);
    dispatch(setFilter(value));
  };

  return (
    <div className={css.container}>
      <label>
        <input
          name="filter"
          type="text"
          placeholder="find contact"
          value={filter}
          onChange={handleFilterChange}></input>
      </label>
    </div>
  );
}
