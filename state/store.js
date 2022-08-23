import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import gralDataReducer from "./generalData";

const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  reducer: {
    gralData: gralDataReducer,
  },
});

export default store;
