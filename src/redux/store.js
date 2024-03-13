import initialContacts from "../../initialContacts.json";
import { createStore } from "redux";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
    number: "",
  },
};

export const name = (filter) => {
  return {
    type: "filters/name",
    payload: filter,
  };
};

export const number = (filter) => {
  return {
    type: "filters/number",
    payload: filter,
  };
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
