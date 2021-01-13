import types from "./types";
import shortid from "shortid";

export const addContact = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name: name,
    number: number,
  },
});

export const deleteContact = (contactId) => ({
  type: types.DELETE,
  payload: contactId,
});

export const changeFilter = (value) => ({
  type: types.CHANGE_FILTER,
  payload: value,
});
