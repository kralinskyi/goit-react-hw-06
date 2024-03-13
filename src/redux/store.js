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

const rootReducer = (state = initialState, action) => {
  return state;
};

export const store = createStore(rootReducer);
