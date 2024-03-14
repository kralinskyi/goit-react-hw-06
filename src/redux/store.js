import { combineReducers, createStore } from "redux";
import initialContacts from "../../initialContacts.json";
import { composeWithDevTools } from "@redux-devtools/extension";
import { nanoid } from "nanoid";

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

const contactsReducer = (
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

const filtersReducer = (
  state = {
    name: "",
  },
  action
) => {
  switch (action.type) {
    case "filters/setFilter":
      return {
        ...state,
        name: action.payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());
