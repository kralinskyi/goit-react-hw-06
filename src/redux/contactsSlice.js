import initialContacts from "../../initialContacts.json";
import { nanoid } from "nanoid";

export const contactsReducer = (
  state = {
    items: initialContacts,
  },
  action
) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    default:
      return state;
  }
};

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};
