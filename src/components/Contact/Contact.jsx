export default function Contact({ name, number }) {
  return (
    <>
      <li>
        <p>{name}</p>
        <p>{number}</p>
        <button type="button">Delete</button>
      </li>
    </>
  );
}
