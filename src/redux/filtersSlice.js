export const filtersReducer = (
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

export const setFilter = (filterValue) => {
  return {
    type: "filters/setFilter",
    payload: filterValue,
  };
};
