import { createStore } from "redux";
import initialContacts from "../../initialContacts.json";

const initialState = {
  contacts: {
    items: initialContacts,
  },
  filters: {
    name: "",
  },
};

const rootReducer = (state, action) => {
  return state;
};

export const store = createStore(rootReducer);
