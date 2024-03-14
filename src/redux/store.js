import initialContacts from "../../initialContacts.json";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
    number: "",
  },
};

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(),
      name: name,
      number: number,
    },
  };
};

export const deleteContact = (contactId) => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        contacts: {
          items: [...state.contacts.items, action.payload],
        },
      };

    case "contacts/deleteContact":
      return {
        ...state,
        contacts: {
          items: state.contacts.items.filter(
            (contact) => contact.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools());
