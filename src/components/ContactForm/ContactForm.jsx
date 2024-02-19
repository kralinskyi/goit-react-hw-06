export default function ContactForm() {
  return (
    <form>
      <label>
        Name <input name="name"></input>
      </label>
      <br />
      <label>
        Number <input name="number"></input>
      </label>
      <br />
      <button type="submit">Add contact</button>
    </form>
  );
}
