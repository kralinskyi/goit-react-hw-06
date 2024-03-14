import initialContacts from "../../initialContacts.json";
import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
    number: "",
  },
};

// ACTIONS, повертає об'єкт
export const contactName = (filter) => {
  return {
    type: "filters/contactName",
    payload: filter,
  };
};

export const contactNumber = (filter) => {
  return {
    type: "filters/contactNumber",
    payload: filter,
  };
};

export const addContact = (name, number) => {
  return {
    type: "contacts/addContact",
    payload: {
      name: name,
      number: number,
    },
  };
};

const rootReducer = (state = initialState, action) => {
  console.log(state);
  return state;
};

export const store = createStore(rootReducer, composeWithDevTools());
