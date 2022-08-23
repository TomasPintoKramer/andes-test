import { createAction, createReducer } from "@reduxjs/toolkit";

export const setGralData = createAction("STORE");

const gralDataReducer = createReducer([], {
  [setGralData]: (state, action) => (state = action.payload),
});

export default gralDataReducer;
