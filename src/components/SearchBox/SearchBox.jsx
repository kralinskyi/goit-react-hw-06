import { useId } from "react";

export default function SearchBox({ onSearch, value }) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Finds contacts by name</label>
      <br />
      <input
        type="text"
        name="search"
        id={id}
        value={value}
        onChange={onSearch}
      />
    </div>
  );
}
