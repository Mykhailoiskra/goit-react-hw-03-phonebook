import * as actions from "./actions";
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

const contacts = createReducer([], {
  [actions.addContact]: (state, { payload }) => {
    if (!state.find((contact) => contact.name === payload.name)) {
      return [...state, payload];
    } else {
      alert(`${payload.name} is already in the list`);
      return state;
    }
  },
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
});
