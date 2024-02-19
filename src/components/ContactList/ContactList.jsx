import Contact from "../Contact/Contact";
import contacts from "../initialContacts.json";

export default function ContactList() {
  return (
    <ul>
      {contacts.map((contact) => (
        <Contact key={contact.id} name={contact.name} number={contact.number} />
      ))}
    </ul>
  );
}
