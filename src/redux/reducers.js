import types from "./types";
import { combineReducers } from "redux";

const contacts = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD:
      if (!state.find((contact) => contact.name === payload.name)) {
        return [...state, payload];
      } else {
        alert(`${payload.name} is already in the list`);
        return state;
      }

    case "contact/Delete":
      return state.filter((contact) => contact.id !== payload);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case types.CHANGE_FILTER:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  contacts,
  filter,
});
