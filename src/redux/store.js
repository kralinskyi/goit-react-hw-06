import { createStore } from "redux";
import initialContacts from "../../initialContacts.json";
import { composeWithDevTools } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
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

export const setFilter = (filterValue) => {
  return {
    type: "filters/setFilter",
    payload: filterValue,
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

    case "filters/setFilter":
      return {
        ...state,
        filters: {
          ...state.filters,
          name: action.payload,
        },
      };

    default:
      return state;
  }
};

export const store = createStore(rootReducer, composeWithDevTools());
